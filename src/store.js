import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    drawerRight: false
  },
  getters: {
    getDrawer(state){
      return state.drawer
    },
    getDrawerRight(state){
      return state.drawerRight
    }
  },
  mutations: {
    setDrawer(state){
      state.drawer = !state.drawer
    },
    setDrawerRight(state){
      state.drawer = false
      state.drawerRight = !state.drawerRight
    }
  },
  actions: {
    setDrawer({commit}){
      commit('setDrawer')
    },
    setDrawerRight({commit}){
      commit('setDrawerRight')
    }
  }
})
