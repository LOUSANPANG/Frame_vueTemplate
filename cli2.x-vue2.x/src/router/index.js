import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/pages/HelloWorld')
const NotFound = () => import('@/pages/404')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
