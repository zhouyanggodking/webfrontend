import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {INCREMENT, DECREMENT} from '@/store/mutations'

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: { //must be sync
        [INCREMENT] (state) {
            state.count++
        },
        [DECREMENT] (state) {
            state.count--
        }
    },
    getters: {

    },
    actions: { // could be async
        [INCREMENT] (context) {
            setTimeout(() => {
                context.commit(INCREMENT)
            }, 1000);
        },
        [DECREMENT] (context) {
            setTimeout(() => {
                context.commit(DECREMENT)
            }, 1000);
        }
    }
})

export default store