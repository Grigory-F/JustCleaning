import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './store-module/authModule'
import { themeModule } from './store-module/themeModule'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPreloader: false,
  },
  mutations: {
    changePreloader(state) {
      state.showPreloader = !state.showPreloader
    }
  },
  getters: {
    getStatusPreload: (state) => {
      return state.showPreloader;
  }
  },
  actions: {
    togglePreloader({ commit }) {
      commit('changePreloader')
    }
  },
  modules: {
    auth: authModule,
    theme: themeModule
  }
})
