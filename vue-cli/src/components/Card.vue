<template>
  <div class="card-container">
    <div>{{name}}</div>
    <div>{{title}}</div>
    <div>{{skills}}</div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    name: {
      type: String,
      default: 'GODKING'
    },
    title: {
      type: String,
      default: 'SE'
    },
    skills: {
      type: String,
      default: 'Javascript'
    }
  }, // use to pass data in
  data () {
    return {
    }
  },
  computed:{
  }
}
</script>
<style lang="scss" scoped>
.card-container{
  margin: 10px;
  border: solid 2px purple;
}
</style>
