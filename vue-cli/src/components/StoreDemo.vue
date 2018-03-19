<template>
  <div class="container">
      <div>{{count}}</div>
      <button @click="increment()">Increment</button>
      <button @click="decrement()">Decrement</button>
  </div>
</template>
<script>
import {INCREMENT, DECREMENT} from '@/store/mutations'
export default {
    data () {
        return {

        }
    },
    computed: {
        count () {
            return this.$store.state.count;
        }
    },
    methods: {
        increment () {
            // this.$store.commit('increment')
            this.$store.dispatch(INCREMENT)
        },
        decrement () {
            // this.$store.commit('decrement')
            this.$store.dispatch(DECREMENT)
        }
    }
}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: center;
    margin: 40px;
}
</style>

