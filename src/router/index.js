import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/demo/homeRoute/index')
    },
    {
        path: '/work',
        name: 'work',
        component: () => import('@/demo/workRoute/index')
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('@/demo/vuexStorePage/index')
    }
]
const router = new VueRouter({
    routes
})

export default router