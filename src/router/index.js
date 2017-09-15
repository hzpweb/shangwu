import Vue from 'vue'
import Router from 'vue-router'
import home from '../tab/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: home
    },
    {
    	path: '/home',
    	name: 'home',
    	component: home
    }
  ]
})
