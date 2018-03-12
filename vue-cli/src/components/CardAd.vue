<template>
    <h2>
        {{cardName}} - AD</h2>
</template>
<script>
    import cardList from '@/store/card-list'
    export default {
        computed: {
            cardName: function() {
                let cards = cardList.filter((item) => item.id === this.id)
                return cards[0] ? cards[0].name : ''
            }
        },
        data() {
            return {
            }
        },
        props: {
            id: {
                type: String
            }
        }
    }
</script>
