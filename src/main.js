import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './common/icon/iconfont'
import IconSvg from '@/components/icon-svg'

Vue.use(VueLazyload)
Vue.component('icon-svg', IconSvg)

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
