import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "message"
  },
  getters,
  mutations: {
    setTitle: (state, value) => {
      return state.title = value
    }
  },
  actions: {
    setTitleActions: (context, value) => {
      return context.commit("setTitle", value)
    }
  },
  modules: {
  }
})
