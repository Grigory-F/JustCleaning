import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import baseComponents from '@/baseComponents.js'
import http from '@/http-common.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import style from '@/styles/app.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token
}
library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
