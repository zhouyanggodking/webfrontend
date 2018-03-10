import Vue from 'vue'
import Router from 'vue-router'
import CardList from '@/components/CardList.vue'
import Card from '../components/Card.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'card-list',
      component: CardList
    }, {
      path: '/card',
      name: 'card',
      component: Card
    }
  ]
})
