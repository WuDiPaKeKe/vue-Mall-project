import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入进度条相关样式
import "nprogress/nprogress.css"

// 引入router、vuex、mock 环境
import router from "router/router"
import store from 'store/store'
import "mock/mock"
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
