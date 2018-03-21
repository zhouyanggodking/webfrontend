<template>
  <div class="bar-chart-container">
    <v-chart :forceFit="true" :height="height" :data="chartData">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-bar position="key*value" color="name" :adjust="adjust"/>
    </v-chart>
  </div>
</template>

<script>
import DataSet from '@antv/data-set';

export default {
  name: 'barChart',
  props: ['data'],
  data() {
    return {
      height: 400,
      adjust: [{
        type: 'dodge'
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
        });
        const data = dv.rows;
        return data;
      }
      return [];
    }
  }
};
</script>
