import Vue from 'vue'
import Router from 'vue-router'
import CardAd from '@/components/CardAd'
import CardDetail from '@/components/CardDetail'
import CardList from '@/components/CardList.vue'
import Main from '@/components/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }, {
      path: '/card/:id',
      name: 'card-detail',
      component: CardDetail
    }, {
      path: '/cardlist',
      name: 'card-list',
      component: CardList,
      children: [
        {
          path: ':id',
          name: 'card-list-detail',
          components: {
            default: CardDetail,
            ad: CardAd
          }
        }
      ]
    }
  ]
})
