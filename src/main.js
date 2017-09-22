// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import './style.less'
import './assets/zhaopeng.scss'
import Loading from './components/All.js'
import Vuex from 'vuex'
// import store from './store.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Loading)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

var vm = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App,Loading},
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }



})



// 注册组件要在实例化Vue之前
// Vue.component('footerTab', {
//             template: '<div id="footerTab">123</div>',
//             data:function(){
//                 return {msg:'我的组件11'}
//             },
//             methods:{
//                 change:function(){
//                     //todo
//                     console.log(this);
//                 }
//             }
//         });