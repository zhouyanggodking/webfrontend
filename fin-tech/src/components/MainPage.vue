<template>
  <transition name="slide-fade">
    <div class="main-page">
      <div class="search-container" id="search">
        <div class="logo">Logo</div>
        <el-input placeholder="Please input your inquery"
          clearable
          v-model="searchText"
          @keypress.enter.native="search()">
          <el-button @click="search()" slot="append" icon="el-icon-search" title="Search"></el-button>
        </el-input>
      </div>
    </div>
  </transition>
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

    .el-input{
      height: 50px;
      & /deep/ .el-input__inner{
        height: 50px;
        line-height: 50px;
        border-radius: 0;
        border: none;
      }

      & /deep/ .el-input-group__append{
        border-radius: 0;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all 0.8s linear;
}
// .slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100vh);
}
</style>
