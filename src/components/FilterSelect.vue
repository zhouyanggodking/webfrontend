<template>
  <el-select v-model="value" class="filter-select" @change="onChange">
    <el-option v-for="(item, index) in ['全部', ...items]" :key="index" :label="item" :value="item">          
    </el-option>
  </el-select>
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
      value: '全部'
    };
  },
  methods: {
    onChange(val) {
      this.$emit('change', val);
    }
  }
};
</script>

<style lang="scss" scoped>
$defaultBorderColor: #333333;
$activeBorderColor: #999999;

$defaultBgColor: #333333;
$activeBgColor: rgba(26, 26, 26, 0.8);

.filter-select {
  overflow: hidden;
  border-radius: 18px;
  border: none;
  /deep/ {
    .el-input {
      border-radius: 18px;
      border: none;
      
      .el-input__inner {
        background-color: $defaultBgColor;
        border-radius: 18px;
        border-color: $defaultBorderColor;
        &:hover {
          color: #ffffff;
        }
      }
      &.is-focus .el-input__inner {
        color: #ffffff;
        background-color: $activeBgColor;
        border-color: $activeBorderColor;
      }
    }
  }
}
</style>
