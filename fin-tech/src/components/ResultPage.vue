<template>
  <div>
    <grid :data="tableData"></grid>
    <bar-chart :data="barChartData"></bar-chart>
    <line-chart v-if="lineChartData" :data="lineChartData"></line-chart>
    <pie-chart v-if="pieChartData" :data="pieChartData"></pie-chart>
  </div>
</template>

<script>
import axios from 'axios';
import Grid from '@/components/Grid';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';

export default {
  name: 'result',
  components: {
    Grid,
    BarChart,
    LineChart,
    PieChart
  },
  data() {
    return {
      tableData: {},
      barChartData: {},
      lineChartData: null,
      pieChartData: null
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

    axios.get('/static/mock/bar-chart.json').then((response) => {
      this.pieChartData = response.data;
    });
  }
};
</script>
