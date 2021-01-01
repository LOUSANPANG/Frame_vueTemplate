import Vue from 'vue'
import { Button, message } from 'ant-design-vue'

Vue.prototype.$message = message

Vue.use(Button)
Vue.use(message)
