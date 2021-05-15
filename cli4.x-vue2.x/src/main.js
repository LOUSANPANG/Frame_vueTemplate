import Vue from 'vue'
import App from './App.vue'

import './instances/element'

import router from './router'
import store from './store'
import $API from './services/service-list'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'


Vue.prototype.$API = $API
window.$CONFIG = $CONFIG
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
