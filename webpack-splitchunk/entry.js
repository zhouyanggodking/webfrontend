import Vue from 'vue'

import display from './utils'
import add from './vendor'

new Vue({
  el: '#app',
  mounted() {
    display();
    add(1, 2)
  }
})