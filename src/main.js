import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由组件
import router from "router/router"
import store from 'store/store'
import "mock/mock"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
