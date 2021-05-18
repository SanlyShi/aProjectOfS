import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/project/home/index')
    },
    {
        path: '/vuexPage',
        name: 'vuexPage',
        component: () => import('@/project/vuex/index')
    }
]
const router = new VueRouter({
    routes
})

export default router