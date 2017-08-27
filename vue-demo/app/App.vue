<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
    import Navigation from './components/navigation.vue'
    import FooterComponent from './components/footer-component.vue'
    import PokerComponent from './components/poker.vue'
    export default {
        name: 'app',
        components:{
            Navigation,
            PokerComponent,
            FooterComponent
        }
    }
</script>

<style lang="scss">
@import './scss/normalize.scss'
</style>

