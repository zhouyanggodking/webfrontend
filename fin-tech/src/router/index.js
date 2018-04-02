import Vue from 'vue';
import Router from 'vue-router';
// import MainPage from '@/components/MainPage';
// import ResultPage from '@/components/ResultPage';
// import DemoPage from '@/components/DemoPage';

//component lazy loading, refer to https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
const MainPage = () => import(/* webpackChunkName: "group-MainPage" */ '@/components/MainPage.vue');
const ResultPage = () => import(/* webpackChunkName: "group-ResultPage" */ '@/components/ResultPage.vue');
const DemoPage = () => import(/* webpackChunkName: "group-DemoPage" */ '@/components/DemoPage.vue');

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/result',
      name: 'result-page',
      component: ResultPage
    },
    {
      path: '/demo',
      name: 'demo-page',
      component: DemoPage
    }
  ]
});
