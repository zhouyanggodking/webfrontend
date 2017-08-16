import './main.scss'

import Vue from 'vue/dist/vue.js'

var main = new Vue({
    el: 'main',
    data: {
        title: 'godking is learning Vue.js',
        message: 'Hello from godking',
        site: '<a href="https://vuejs.org">Official Site</a>',
        greenColor: 'green',
        bindClass: 'bind-class',
        todoList: [{
            text: 'javascript',
            show: true,
        }, {
            text: 'python',
            show: true
        }, {
            text: 'c++',
            show: false
        }]
    }
});