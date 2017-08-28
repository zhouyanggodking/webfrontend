<template>
    <img v-bind:src="cardSrc" v-bind:alt="'card not found'" v-bind:width="width + 'px'" v-bind:height="height + 'px'">    
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
        },
        width:{
            type: Number,
            default: 500
        },
        height:{
            type: Number,
            default: 726
        }
    },
    computed:{
        cardSrc: function(){//enable image to get working
            return require(`./img/png/${this.face}_of_${this.suit}s.png`)
        }
    }
}
</script>

<style>

</style>
