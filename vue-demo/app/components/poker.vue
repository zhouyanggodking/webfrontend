<template>
  <div>
    <h1>Texas Holdem</h1>
    <card v-bind:face="1" suit="spade" v-bind:width="100" v-bind:height="145"></card>
    <card v-bind:face="13" suit="spade" v-bind:width="100" v-bind:height="145"></card>
    <card v-bind:face="12" suit="spade" v-bind:width="100" v-bind:height="145"></card>
    <card v-bind:face="11" suit="spade" v-bind:width="100" v-bind:height="145"></card>
    <card v-bind:face="10" suit="spade" v-bind:width="100" v-bind:height="145"></card>
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
