<template>
  <div class="grid-container">
    <el-table :data="tableData" stripe border style="width: 100%;" height="200">
      <el-table-column
        v-for="col in tableHeader"
        :prop="col.key"
        :label="col.title"
        :key="col.index"
        sortable>
        <template slot-scope="scope">
          <span v-html="formatCell(scope.row, col)"></span>
        </template>
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
  },
  methods: {
    formatCell(row, col) {
      if (col.type === 'number') {
        return new Intl.NumberFormat().format(row[col.key]);
      }
      return row[col.key];
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-container{
  padding: 10px;
}
</style>
