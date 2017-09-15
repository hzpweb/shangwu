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

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Loading)




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
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