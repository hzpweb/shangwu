import footerTab from './footerTab.vue'
import myheader from './myHeader.vue'
import calssifyList from './calssifyList.vue'
import productList from './productList.vue'

const Loading = {
    install:function(Vue){
        Vue.component('footer-tab',footerTab)
        Vue.component('my-header',myheader)
        Vue.component('calssify-list',calssifyList)
        Vue.component('product-list',productList)
    }
}


export default Loading