<template>
    <div>
        <h1>Card</h1>
        <h2>{{face}} - {{suit}}</h2>
        <img v-bind:src="cardSrc" v-bind:alt="`${cardSrc} not found`">
    </div>
  
</template>

<script>
export default {
    name: 'card',
    data(){
        return {
            
        };
    },
    props:{
        face:{
            type: Number,
            required: true
        },
        suit:{
            type: String,
            required: true
        }
    },
    computed:{
        cardSrc: function(){
            return `./img/png/${this.face}_of_${this.suit}s.png`
        }
    }
}
</script>

<style>

</style>
