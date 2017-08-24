import Vue from 'vue/dist/vue.js'
import MainComponent from './components/main-component.vue'

new Vue({
    el: 'main',
    template: '<main-component></main-component>',
    components: { MainComponent }
});