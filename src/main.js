import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)


import SystemIcons from "./components/SystemIcons.vue"


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component("SystemIcons", SystemIcons)


import style from '@/styles/app.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')