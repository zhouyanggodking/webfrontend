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
        }],
        userName: '',
        password: '',
        skills: [],
        gender: 'Male',
        productName: 'Casinolink',
        productNameList: [],
        conditional: '',
        pageCount: 5,
        godking: {
            userName: 'godking',
            email: 'god.king@godking.com',
            corporation: {
                name: 'IGT',
                country: 'US'
            }
        },
        forWatcher: ''
    },
    computed: {
        reversedProductname: function() {
            return this.productName.split('').reverse().join('');
        },
        now: function() {
            return Date.now();
        }
    },
    watch: {
        forWatcher: function(newVal, oldVal) {
            console.log('New Value: ' + newVal + ',Old Value: ' + oldVal);
            var up = this.$options.filters.upper(newVal);
            console.log(up);
        }
    },
    methods: {
        logIn: function(userName, password, event) {
            console.log(userName + ':' + password);
            console.log(event);
        },
        buttonGrandParentClick: function() {
            console.log('grand parent div');
        },
        buttonParentClick: function() {
            console.log('parent div');
        },
        buttonClick: function() {
            console.log('button click');
        }
    },
    filters: {
        postfix: function(value) {
            return value + 'GODKING';
        },
        upper: function(value) {
            return value.toUpperCase();
        }
    },
    created: function() {
        console.log(this.message);
        console.log('created');
    },
    mounted: function() {
        console.log(this.now);
        console.log('mounted');
    },
    updated: function() {
        console.log('updated');
    },
    beforeDestroy: function() {
        prompt('Are you sure to destroy?');
    }
});