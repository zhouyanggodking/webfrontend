import Vue from 'vue'
import Vuex from 'vuex'

import App from './App'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    points: 0
  },
  mutations: {
    increment(state, delta) {
      state.points += delta;
    },
    decrement(state, delta) {
      state.points -= delta;
    }
  },
  actions: {
    incrementAsync({commit}, delta) {
      setTimeout(() => {
        commit('increment', delta)
      }, 1000)
    },
    decrementAsync({commit}, delta) {
      setTimeout(() => {
        commit('decrement', delta)
      }, 1000)
    }
  }
});

new Vue({
  render: h => h(App), // to fix runtime-only build error in Vue
  store
}).$mount('#app');