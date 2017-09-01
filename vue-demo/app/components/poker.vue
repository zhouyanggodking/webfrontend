<template>
  <div>
    <h1>Texas Holdem</h1>
    <card v-bind:face="face1" :suit="suit1" v-bind:width="100" v-bind:height="145" v-on:click.native = "click(face1, suit1, 1)"></card>
    <card v-bind:face="face2" :suit="suit2" v-bind:width="100" v-bind:height="145" v-on:click.native = "click(face2, suit2, 2)"></card>
    <card v-bind:face="face3" :suit="suit3" v-bind:width="100" v-bind:height="145" v-on:click.native = "click(face3, suit3, 3)"></card>
    <card v-bind:face="face4" :suit="suit4" v-bind:width="100" v-bind:height="145" v-on:click.native = "click(face4, suit4, 4)"></card>
    <card v-bind:face="face5" :suit="suit5" v-bind:width="100" v-bind:height="145" v-on:click.native = "click(face5, suit5, 5)"></card>
  </div>  
</template>

<script>
import Card from './card/card.vue'

function getRandomFace(){
  return Math.floor(Math.random() * 13) + 1;//generate integers between 1 and 13
}

function getRandomSuit(){
  var interger = Math.floor(Math.random() * 4) + 1;
  switch(interger){
    case 1:
      return 'spade';
    case 2:
      return 'heart';
    case 3:
      return 'diamond';
    case 4:
      return 'club';
  }
}

export default {
    name: 'poker',
    data(){
      return {
        face1: '',
        face2: '',
        face3: '',
        face4: '',
        face5: '',
        suit1: '',
        suit2: '',
        suit3: '',
        suit4: '',
        suit5: ''
      }
    },
    components: {
        Card
    },
    methods:{
      click: function(face, suit, index){
        this.generateUniqueCard(index);
      },
      generateUniqueCard: function(index){
        this['face' + index] = getRandomFace();
        this['suit' + index] = getRandomSuit();
        for(let i = 1; i <= 5; ++i){
          if(index != i){
            if(this['face' + i] === this['face' + index] && this['suit' + i] === this['suit' + index]){
              this['face' + index] = getRandomFace();
              this['suit' + index] = getRandomSuit();
            }
          }
        }
      }
    },
    created: function(){
      for(let i = 1; i <= 5; ++i){
          this.generateUniqueCard(i);
      }
    }
}
</script>

<style>

</style>
