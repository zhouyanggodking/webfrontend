<template>
  <div class="main-page">
    <div class="search-container">
      <div class="logo">Logo</div>
      <el-input placeholder="Please input your inquery"
        clearable
        size="large"
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

    };
  },
  methods: {
    search() {
      this.$router.push({
        name: 'result-page'
      });
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

  .logo{
    display: flex;
    align-items: center;
    border:1px solid blue;
  }

  .search-container{
    display: flex;
    width: 50%;
    min-width: 300px;
  }
}
</style>
