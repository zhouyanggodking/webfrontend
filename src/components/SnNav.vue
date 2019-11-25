<template>
  <div class="row navigation">
    <div class="row logo-container">
      <img src="../assets/img/logo.png" alt="shannon logo" width="108" height="56">
    </div>
    <search-input :items="searchItems" @change="onSearchInputChange"></search-input>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput';

export default {
  props: {
    searchItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onSearchInputChange(val) {
      this.$emit('change', val);
    }
  },
  components: {
    SearchInput
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 32px 0 10px;
  background-color: rgba(26, 26, 26, 0.8);
  border-bottom: solid 1px #262626;
  .logo-container {
    align-items: center;
  }
}
</style>
