<template>
  <div class="main-page">
    <div class="search-container">
      <div class="logo">Logo</div>
      <el-input placeholder="Please input your inquery"
        clearable
        size="large"
        v-model="searchText"
        @change="search()">
        <el-button slot="append" icon="el-icon-search" title="Search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    };
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
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-page{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('../assets/finance_bg.jpg');
  background-size: 100% 100%;

  .search-container{
    display: flex;
    width: 50%;
    min-width: 300px;

    .logo{
      display: flex;
      align-items: center;
      border:1px solid blue;
    }

    .el-input__inner{
      height: 50px;
    }
  }
}
</style>
