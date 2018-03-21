<template>
  <div>
    <grid :data="tableData"></grid>
    <bar-chart :data="barChartData"></bar-chart>
  </div>
</template>

<script>
import axios from 'axios';
import Grid from '@/components/Grid';
import BarChart from '@/components/BarChart';

export default {
  name: 'result',
  components: {
    Grid,
    BarChart
  },
  data() {
    return {
      tableData: {},
      barChartData: {}
    };
  },
  mounted() {
    axios.get('/static/mock/table.json').then((response) => {
      this.tableData = response.data;
    });

    axios.get('/static/mock/bar-chart-multiple.json').then((response) => {
      this.barChartData = response.data;
    });
  }
};
</script>
