<template>
  <div>
    <h1>{{points}}</h1>
    <button @click="onIncClick">increment</button>
    <button @click="onDecClick">increment</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      points: 'points'
    })
  },
  methods: {
    onDecClick() {
      this.decrementAsync(10);
    },
    onIncClick() {
      // this.$store.state.points = 100; // ok, you can directly modify state of store
      this.incrementAsync(5);
    },
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement'
    }),
    ...mapActions(['incrementAsync', 'decrementAsync'])
  }
}
</script>

<style lang="scss" scoped>

</style>