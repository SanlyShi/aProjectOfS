import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    numer: 'sanlyshi vuex store'
}

const store = new Vuex.Store({
    state
})

export default store