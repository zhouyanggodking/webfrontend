// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import Vue from 'vue';
import ViserVue from 'viser-vue';
import App from './App';
import router from './router';

Vue.use(ElementUI);
Vue.use(ViserVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
