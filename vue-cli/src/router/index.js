import Vue from 'vue'
import Router from 'vue-router'
import CardAd from '@/components/CardAd'
import CardAsync from '@/components/CardAsync'
import CardList from '@/components/CardList.vue'
import Login from '@/components/Login'
import Main from '@/components/Main.vue'

import AuthSvr from '@/services/authService'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'main',
        component: Main
    }, {
        path: '/card/:id',
        name: 'card-detail',
        component: CardAsync,
        props: true,
        meta: { requiresAuth: true }
    }, {
        path: '/cardlist',
        name: 'card-list',
        component: CardList,
        children: [{
            path: ':id',
            name: 'card-list-detail',
            components: {
                default: CardAsync,
                ad: CardAd
            },
            props: {
                default: true,
                ad: true
            }
        }],
        meta: { requiresAuth: true }
    }, {
        path: '/cardad/:id',
        name: 'card-ad',
        component: CardAd,
        props: true,
        meta: { requiresAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
})

router.beforeEach((to, from, next) =>{
    console.log(`Leaving ${from.fullPath}, entering ${to.fullPath}`)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.

        if (!AuthSvr.isLoggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

router.afterEach((to, from) => {
    console.log(`route changing from ${from.fullPath} to ${to.fullPath} completed`)
})

export default router;