<template>
  <div class="rel-chart" ref="relChart">

  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  props: {
    nodes: {
      type: Array,
      default: () => []
    },
    edges: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chart: null,
      colorArray: ['#1C73FF', '#56C8F7', '#3BC77C', '#FFA46B', '#D6607E', '#A9BCE0'],
      links: []
    };
  },
  methods: {
    getChartOption() {
      const option = {
        scaleLimit: {
          min: 0.5,
          max: 2
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: this.nodes,
            links: this.links,
            roam: true,
            draggable: true,
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            animation: true,
            force: {
              repulsion: 800,
              gravity: 0.1,
              edgeLength: [50, 100]
            },
            symbolSize: 20,
            itemStyle: {
              color: (params) => {
                return this.colorArray[params.dataIndex % this.colorArray.length];
              },
              shadowBlur: 4,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            },
            label: {
              show: true,
              position: 'bottom',
              color: '#000000'
            },
            edgeSymbol: ['none', 'arrow'],
            edgeLabel: {
              show: true,
              padding: [4, 8],
              fontSize: 12,
              formatter(params) {
                return params.data.type;
              }
            },
            nodeScaleRatio: 1,
            focusNodeAdjacency: true,
            lineStyle: {
              width: 1,
              color: 'source'
            },
            emphasis: {
              lineStyle: {
                width: 2
              }
            }
          }
        ]
      };
      return option;
    },
    generateChart() {
      const relChart = echarts.init(this.$refs.relChart);
      const chartOption = this.getChartOption();
      relChart.setOption(chartOption);
      return relChart;
    },
    resize() {
      if (this.chart) {
        this.chart.resize();
      }
    }
  },
  mounted() {
    // window.addEventListener('resize', () => this.resize());
    this.links = this.edges.map(item => {
      const dups = this.edges.filter(edge => {
        return item.source === edge.target && item.target === edge.source;
      });
      if (dups.length) {
        return {
          source: item.source,
          target: item.target,
          type: item.type,
          lineStyle: {
            normal: {
              curveness: 0.3
            }            
          }
        };
      }
      return item;
    });
    this.chart = this.generateChart();
    // setTimeout(() => {
    //   console.log('highlight')
    //   this.chart.dispatchAction('highlight', {
    //     name:'中国人寿'
    //   });
    // }, 5000)
    // this.chart.on('click', evt => {
    //   console.log(evt)
    // })
    this.chart.dispatchAction({
      type: 'focusNodeAdjacency',
      dataIndex: 0
    });
    this.chart.dispatchAction({
      type: 'focusNodeAdjacency',
      dataIndex: 2
    });
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>

<style lang="scss" scoped>
.rel-chart {
  width: 100%;
  height: 100%;
}
</style>
