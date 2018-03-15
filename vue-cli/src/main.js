// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import CardList from './components/card-list/CardList.vue'
// import Card from './components/Card.vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#main',
    router,
    store,
    components: { App },
    template: '<app/>'
})