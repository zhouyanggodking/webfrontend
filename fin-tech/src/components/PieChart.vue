<template>
  <div class="pie-chart-container">
    <v-chart :forceFit="true" :height="height" :data="chartData" :scale="scale" :animate="false">
      <v-tooltip :showTitle="false" dataKey="key*percent" />
      <v-axis />
      <v-legend dataKey="key" />
      <v-pie position="percent" color="key" :v-style="pieStyle" :label="labelConfig" />
      <v-coord type="theta" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}];

export default {
  name: 'pieChart',
  props: ['data'],
  data() {
    return {
      scale,
      height: 400,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      },
      labelConfig: ['percent', {
        offset: -60,
        textStyle: {
          rotate: 0,
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }
      }]
    };
  },
  computed: {
    chartData() {
      if (this.data && this.data.series) {
        const dv = new DataSet.View().source(this.data.series);
        dv.transform({
          type: 'fold',
          fields: this.data.fields,
          key: 'key',
          value: 'value'
        }).transform({
          type: 'percent',
          field: 'value',
          dimension: 'key',
          as: 'percent'
        });
        const data = dv.rows;
        return data;
      }
      return [];
    }
  }
};
</script>

<style lang="scss" scoped>
.pie-chart-container{
  padding: 50px;
}
</style>

