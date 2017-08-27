<template>
  <div>
    <h1>Texas Holdem</h1>
    <card v-bind:face="1" suit="spade"></card>
  </div>  
</template>

<script>
import Card from './card/card.vue'
export default {
    name: 'poker',
    components: {
        Card
    }
}
</script>

<style>

</style>
