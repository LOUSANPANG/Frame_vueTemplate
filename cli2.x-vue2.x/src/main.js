import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

import $API from '@/services/service-list'
import '@/utils/compatible'
import '@/instances/antdesign'
import '@/style/base.css'

Vue.prototype.$API = $API
window.$CONFIG = $CONFIG
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
