<template>
  <div>
    <span>current counter:</span>
    <span>{{counter}}</span>
    <button @click="onCountClick">count</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      onCountClick() {
        this.counter++;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>