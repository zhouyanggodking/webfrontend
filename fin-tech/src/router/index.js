import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage';
import ResultPage from '@/components/ResultPage';
import DemoPage from '@/components/DemoPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
