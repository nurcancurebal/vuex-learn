import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "message"
  },
  getters: {
    getTitle: (state) => {
      return state.title
    }
  },
  mutations: {
    setTitle: (state, v) => {
      state.title = v;
    }
  },
  actions: {
    setTitleActions: (context, v) => {
      setTimeout(() => {
        context.commit("setTitle", v)
      }, 2500)
    }
  },
  modules: {
  }
})
