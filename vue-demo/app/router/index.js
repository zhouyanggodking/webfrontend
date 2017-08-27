import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainComponent from '../components/main-component.vue'
import AboutComponent from '../components/about.vue'
import PokerComponent from '../components/poker.vue'

Vue.use(Router); //enable router middle wire

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: MainComponent
    }, {
        path: '/about',
        name: 'about',
        component: AboutComponent
    }, {
        path: '/texasholdem',
        name: 'texasholdem',
        component: PokerComponent
    }]
});