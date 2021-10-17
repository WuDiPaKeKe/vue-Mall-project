import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

import routes from "routes/routes"
export default new VueRouter({
    routes,
    // 路由模式为history
    mode:"history"
})

// 处理重复点击编程式路由出错问题
const VueRouterPush = VueRouter.prototype.push;
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (to){
  return VueRouterPush.call(this,to).catch(err => err)
}
VueRouter.prototype.replace = function (to){
  return VueRouterReplace.call(this,to).catch(err => err)
}