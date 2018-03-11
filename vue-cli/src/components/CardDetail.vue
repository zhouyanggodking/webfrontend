<template>
  <div>
    <card v-bind="card" v-if="card"></card>
    <h2 v-if="!card">Not Found</h2>
  </div>
</template>
<script>
import cardList from '@/store/card-list'
import Card from '@/components/Card'
export default {
  name: 'card-detail',
  data () {
    return {
    }
  },
  components: {
    Card
  },
  computed: {
    card () {
      let cards = cardList.filter((item) => item.id === this.$route.params.id)
      return cards[0]
    }
  }
}
</script>
