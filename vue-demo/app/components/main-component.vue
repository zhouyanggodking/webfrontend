<template>
  <div>
    <header-component></header-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './header-component.vue'
import FooterComponent from './footer-component.vue'

export default {
  name: 'main-component',
  components:{
    HeaderComponent, 
    FooterComponent
  }
}
</script>

