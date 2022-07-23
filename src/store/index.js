import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './store-module/authModule'
import { themeModule } from './store-module/themeModule'
import http from '@/http-common.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {},
  actions: {

  },
  modules: {
    auth: authModule,
    theme: themeModule
  }
})
