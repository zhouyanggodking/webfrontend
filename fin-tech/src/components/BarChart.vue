<template>
  <div id="id"></div>
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'barChart',
  props: {
    id: String,
    chartData: {
      type: Array,
      default() {
        return [{ genre: 'Sports', sold: 275 },
          { genre: 'Strategy', sold: 115 },
          { genre: 'Action', sold: 120 },
          { genre: 'Shooter', sold: 350 },
          { genre: 'Other', sold: 150 }];
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  methods: {
    draw() {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new G2.Chart({
        container: 'id',
        width: 1000,
        height: 300
      });
      this.chart.source(this.chartData);
      // this.chart.line().position('strftime*value').size(2);
      // this.chart.point().position('strftime*value').color('#757373')
      //   .shape('circle')
      //   .label('value', {offset: 20, label: {fill: '#000'}});
      // this.chart.animate(false);
      this.chart.interval().position('genre*sold').color('genre');
      this.chart.render();
    }
  },
  watch: {
    chartData() {
      this.draw();
    }
  },
  mounted() {
    this.draw();
  }
};
</script>

