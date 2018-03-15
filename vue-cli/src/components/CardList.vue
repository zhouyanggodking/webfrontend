<template>
    <div class="card-list-container">
        <div v-for="card in cardList" v-bind:key="card.name">
            <card v-bind="card" v-on:click.native="onCardClick(card)"></card>
        </div>
        <hr>
        <h2 v-if="this.$route.params.id">Card Details:</h2>
        <div class="card-detail-container">
            <router-view></router-view>
            <router-view name="ad"></router-view>
        </div>
    </div>
</template>
<script>
    import Card from './Card'
    import cardList from '@/data/card-list'
    export default {
        name: 'card-list',
        data() {
            return {
                cardList,
                currentCard: {}
            }
        },
        components: {
            Card
        },
        methods: {
            onCardClick(card) {
                // this.$router.push({path: '/cardlist/' + card.id})
                // this.$router.push({path: '', params: { id: card.id }}) // this is wrong when using path with params
                this.$router.push({
                    name: 'card-list-detail',
                    params: {
                        id: card.id
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .card-list-container {
        .card-detail-container {
            display: flex;
            justify-content: space-between;
        }
    }
</style>
