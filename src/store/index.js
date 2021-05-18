import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    numer: 0
}

const store = new Vuex.Store({
    state,
    mutations:{
        increaseNum(state,value){
            state.numer += value
        }
    }
})

export default store