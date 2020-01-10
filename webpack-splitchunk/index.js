import Vue from 'vue'

import display from './utils'
// import add from './vendor'

const page1 = () => import(/* webpackChunkName: "page1" */'./page1');

new Vue({
  el: '#app',
  mounted() {
    display();
    // add(1, 2)
  },
  components: {
    page1
  }
})