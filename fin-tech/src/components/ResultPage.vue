<template>
  <div>
    <grid :data="tableData"></grid>
    <bar-chart :data="barChartData"></bar-chart>
    <line-chart v-if="lineChartData" :data="lineChartData"></line-chart>
  </div>
</template>

<script>
import axios from 'axios';
import Grid from '@/components/Grid';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';

export default {
  name: 'result',
  components: {
    Grid,
    BarChart,
    LineChart
  },
  data() {
    return {
      tableData: {},
      barChartData: {},
      lineChartData: null
    };
  },
  mounted() {
    axios.get('/static/mock/table.json').then((response) => {
      this.tableData = response.data;
    });

    axios.get('/static/mock/bar-chart-multiple.json').then((response) => {
      this.barChartData = response.data;
    });

    axios.get('/static/mock/line-chart-multiple.json').then((response) => {
      this.lineChartData = response.data;
    });
  }
};
</script>
