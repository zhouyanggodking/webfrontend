import Vue from 'vue/dist/vue.js'

import App from './App.vue'
import router from './router'

new Vue({
    el: 'main',
    router: router,
    template: '<app></app>',
    components: { App }
});