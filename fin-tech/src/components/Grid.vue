<template>
  <div class="grid-container">
    <el-table :data="tableData" stripe border>
      <el-table-column
        v-for="col in tableHeader"
        :prop="col.key"
        :label="col.title"
        :key="col.index"
        sortable>
      </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data() {
    return {
    };
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    tableData() {
      return this.data.body;
    },
    tableHeader() {
      return this.data.header;
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-container{
  padding: 10px;
}
</style>
