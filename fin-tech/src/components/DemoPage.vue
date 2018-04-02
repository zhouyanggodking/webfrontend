<template>
  <div class="search-result-container">
    <h1>Demo Page</h1>
    <div class="search-box">
      <el-input placeholder="Please input your inquery"
        clearable
        v-model="searchText"
        @keypress.enter.native="search()">
        <el-button @click="search()" slot="append" icon="el-icon-search" title="Search"></el-button>
      </el-input>
    </div>
    <div v-for="config in contentConfig" :key="config.index">
      <hr>
      <bar-chart v-if="config.data && config.type === 'bar-chart'" :data="config.data"></bar-chart>
      <line-chart v-if="config.data && config.type === 'line-chart'" :data="config.data"></line-chart>
      <pie-chart v-if="config.data && config.type === 'pie-chart'" :data="config.data"></pie-chart>
      <grid v-if="config.data && config.type === 'table'" :data="config.data"></grid>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Grid from '@/components/Grid';
import BarChart from '@/components/BarChart';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';
import StockChart from '@/components/StockChart';

export default {
  name: 'demo',
  data() {
    return {
      contentConfig: {},
      searchText: this.$route.query.q || ''
    };
  },
  components: {
    Grid,
    BarChart,
    LineChart,
    PieChart,
    StockChart
  },
  computed: {
  },
  mounted() {
    this.getData();
  },
  methods: {
    search() {
      if (this.searchText) {
        this.$router.push({
          name: 'demo-page',
          query: {
            q: this.searchText
          }
        });
      } else {
        this.$router.push({
          name: 'main-page'
        });
      }
    },
    getData() {
      axios.get('/static/mock/response.json').then((response) => {
        this.contentConfig = response.data['search-result'] || [];
      });

      const questtion = {
        question: this.searchText
      };

      // axios.post('http://39.106.179.25:8080', questtion, {
      //   headers:{
      //     'Content-Type': 'application/json'
      //   }
      // }).then((response) => {
      //   console.log(response.data);
      // });

      // axios.post('/api', questtion, {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then((response) => {
      //   const data = JSON.parse(response.data);
      //   this.contentConfig = data['search-result'] || [];
      // });
    }
  },
  watch: {
    '$route'(to) { // (to, from)
      this.searchText = to.query.q || '';
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
.search-result-container{
  padding: 10px;
  .search-box{
    width: 50%;
    min-width: 300px;
    max-width: 600px;
  }
}
</style>
