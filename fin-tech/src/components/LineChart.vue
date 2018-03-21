<template>
  <div class="line-chart-container">
    <v-chart :force-fit="true" :height="height" :data="chartData">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="key*value" color="name" />
      <!-- <v-point position="key*value" color="name"
        :size="4" :v-style="style" :shape="'circle'" /> -->
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

export default {
  name: 'lineChart',
  props: ['data'],
  data() {
    return {
      height: 400,
      style: { stroke: '#fff', lineWidth: 1 }
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
        });
        const data = dv.rows;
        return data;
      }
      return [];
    }
  }
};
</script>
