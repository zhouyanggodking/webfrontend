<template>
  <div class="search-input">
    <el-select class="search-box" filterable remote default-first-option placeholder="请输入搜索关键字" v-model.trim="value" :remoteMethod="filter" @change="onSelectChange" popper-class="dropdown">
      <el-option v-for="(item, index) in options" :key="index" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: [],
      value: ''
    };
  },
  methods: {
    filter(query) {
      if (query) {
        this.options = this.items.filter(item => new RegExp(query, 'ig').test(item));
      } else {
        this.options = [];
      }
    },
    onSelectChange(val) {
      this.$emit('change', val);
      this.value = '';
      this.options = [];
    }
  },
  mounted() {
    this.options = this.items.slice();
  }
};
</script>

<style lang="scss" scoped>
.search-input {
  .search-box {
    /deep/ {
      .el-input__inner {
        height: 36px;
        color: rgba(255, 255, 255, 0.4);
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 2px;
        border: solid 1px #262626;
        &:hover {
          color: #ffffff !important;
          border: solid 1px #4d4d4d;
        }
        &:focus {
          color: #ffffff !important;
          border: solid 1px #999999;
        }
      }
    }
  }
}
</style>


