<template>
  <div class="main-page">
    <sn-nav class="navs" :search-items="searchItems" @change="onSearchChange"></sn-nav>
    <div class="content">
      <!-- <rel-chart v-if="graphData" :nodes="graphData.nodes" :edges="graphData.edges"></rel-chart> -->
      <graph-chart ref="chart" v-if="graphData" :nodes="graphData.nodes" :edges="graphData.edges"></graph-chart>
    </div>
  </div>
</template>

<script>
import GraphChart from '@/components/GraphChart';
import SnNav from '@/components/SnNav';
import rest from '@/rest/rest';

export default {
  data() {
    return {
      graphData: null,
      searchItems: []
    };
  },
  methods: {
    onSearchChange(val) {
      if (val) {
        this.$refs.chart.focus(val);
      }      
    }
  },
  mounted() {
    rest.getKnowledgeData().then(data => {
      this.graphData = data;
      console.log(data.nodes.length);
      console.log(data.edges.length);
      const types = data.nodes.map(node => node.type).filter((type, index, arr) => arr.indexOf(type) === index);
      console.log(types);
      this.searchItems = data.nodes.map(node => node.name);
    });
  },
  components: {
    GraphChart,
    SnNav
  }
};
</script>

<style lang="scss" scoped>
.main-page {
  width:100%;
  height:100%;
  background-color: black;
  .content {
    width: 100%;
    height: calc(100% - 56px);
    background-image: url('../assets/img/bg-grid.svg');
    background-repeat: repeat;
  }
}
</style>
