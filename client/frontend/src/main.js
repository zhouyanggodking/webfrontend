import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import './main.scss';

Vue.use(ElementUI);

Vue.config.productionTip = false;

axios.interceptors.request.use(config => {
  if (config.url.indexOf('/api/login') === -1) {
    const authToken = localStorage.getItem('token');
    if (authToken) {
      config.headers.Authorization = authToken;
    }
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      const currentUrl = router.currentRoute.fullPath;
      if (currentUrl.indexOf('/login') === -1) {
        router.push({
          path: '/login',
          query: {
            redirect: currentUrl
          }
        });
      }
    }
    return Promise.reject(error);
  }
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
