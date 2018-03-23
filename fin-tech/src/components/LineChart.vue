<template>
  <div class="line-chart-container">
    <v-chart :force-fit="true" :height="height" :data="chartData" :scale="scale" :animate="false">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="time*value" color="name" />
      <v-point position="time*value" color="name"
        :size="4" :v-style="style" :shape="'circle'" />
    </v-chart>
    <v-plugin>
      <v-slider width="auto" :height="26"
        :data="sourceData" xAxis="time" yAxis="value" :start="start" :end="end" :scales="{
          time: {
            type: 'timeCat',
            nice: false,
          }
        }" :on-change="slideChange" />
    </v-plugin>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'time',
  type: 'timeCat',
  nice: false,
  range: [0, 1]
}];
export default {
  name: 'lineChart',
  props: ['data'],
  data() {
    return {
      scale,
      height: 400,
      chartData: [],
      start: '1951-01-01',
      end: '1961-01-01',
      style: { stroke: '#fff', lineWidth: 1 }
    };
  },
  computed: {
    sourceData() {
      if (this.data && this.data.series) {
        const dv = new DataSet.View().source(this.data.series);
        dv.transform({
          type: 'fold',
          fields: this.data.fields,
          key: 'time',
          value: 'value'
        });
        const data = dv.rows;
        return data;
      }
      return [];
    }
  },
  methods: {
    slideChange(opts) {
      this.start = opts.startText;
      this.end = opts.endText;
      this.chartData = this.getChartData();
    },
    getChartData() {
      if (this.sourceData && this.sourceData.length) {
        const ds = new DataSet({
          state: {
            start: this.start,
            end: this.end
          }
        });
        const dv = ds.createView();
        dv.source(this.sourceData)
          .transform({
            type: 'filter',
            callback: obj => obj.time <= this.end && obj.time >= this.start
          });
        const data = dv.rows;
        return data;
      }
      return [];
    }
  },
  mounted() {
    this.chartData = this.getChartData();
  }
};
</script>
