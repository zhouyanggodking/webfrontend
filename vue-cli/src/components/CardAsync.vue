<template>
    <div class="card-async-container">
        <card v-bind="cardInfo"></card>
    </div>
</template>
<script>
    import cardList from '@/store/card-list'
    import Card from '@/components/Card'
    export default {
        name: 'card-async',
        props: {
            id: {
                type: String
            }
        }, // use to pass data in
        data() {
            return {}
        },
        computed: {
            cardInfo: function() {
                let cards = cardList.filter((item) => item.id === this.$route.params.id)
                return cards[0] ? cards[0] : null;
            }
        },
        components: {Card}
    }
</script>
<style lang="scss" scoped>
</style>
