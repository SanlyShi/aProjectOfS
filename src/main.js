import Vue from 'vue'
import App from '@/App'
// import {m} from "./demo/ex6moduleJS/p"
// console.log(m)
import router from "@/router/index"
import store from "@/store/index"

Vue.config.productionTip = false
Vue.devtools = true

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
