import Vue from 'vue'
import axios from 'axios'

const httpInstance = axios.create({
  mode: 'no-cors',
  baseURL: '/'
})

Vue.prototype.$http = httpInstance

export default httpInstance
