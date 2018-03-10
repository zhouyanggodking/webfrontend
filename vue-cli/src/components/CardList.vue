<template>
  <div class="card-list-container">
    <div v-for="card in cardList" v-bind:key="card.name">
      <card v-bind="card"></card>
    </div>
  </div>
</template>
<script>
import Card from './Card'

export default {
  name: 'card-list',
  data () {
    return {
      cardList: [{
        name: 'GOD KING',
        title: 'SE',
        skills: 'Javascript'
      }, {
        name: 'Ocean Sky',
        title: 'QA',
        skills: 'C#'
      }]
    }
  },
  components: {Card}
}
</script>
<style>

</style>
