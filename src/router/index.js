import Vue from 'vue'
import Router from 'vue-router'
import home from '../tab/home'
import classify from '../tab/classify'
import exhibition from '../tab/exhibition'
import shopping from '../tab/shopping'
import personal from '../tab/personal'
import user from '../tab/user.vue'

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
    },{
      path:'/home/:userId',
      name:'user',
      component:user
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/exhibition',
      name: 'exhibition',
      component: exhibition
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
