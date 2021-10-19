# 将静态页面拆分为静态组件
- components/header/header.vue & components/footer/footer.vue ---> 按此创建相对应的文件夹和文件
- App.vue ---> 引入header.vue & footer.vue 两个文件
```js
import header from "components/header/header"
import footer from "components/footer/footer"

```
- App.vue ---> 在script里 定义 header & footer 组件
```js
export default {
    name: 'App',
    // 定义header和footer组件
    components:{
      "mall-header":header,
      "mall-footer":footer
    }
  }

```
-  App.vue ---> 在template模板里写入header & footer组件
```js
<div id="app">
    <mall-header></mall-header>
    <mall-footer></mall-footer>
  </div>
```
页面显示header和footer表示成功

# 拆分普通组件

- 将静态页面中的reset.css 和logo.png 文件引入到vue组件中
```hash
public/css/reset.css ---> 将reset.css放入到该路径的文件夹中

在public/index.html 中引入 reset.css
`<link rel="stylesheet" href="<%= BASE_URL %>css/reset.css">`

components/header/images/logo.png ---> 将logo.png 放入到该路径的文件夹中

```
- components/header/header.vue ---> 将拆分好的html代码引入template标签中，less代码引入style标签中
设置style 标签为 `lang="less"`

- components/footer/footer.vue ---> 将拆分好的html代码引入template标签中，less代码引入style标签中
设置style 标签为 `lang="less"`

# 拆分路由组件

- pages/login/login.vue & pages/register/register.vue ---> 定义路由组件（登录&注册）创建login.vue & register.vue 文件到该路径的文件夹中

- pages/login/login.vue ---> 将拆分好的html代码引入template标签中，less代码引入style标签中
设置style 标签为 `lang="less"`

- routes/routes.js ---> 配置路由  路由懒加载 & 配置路由路径
```js
const login = () => import(/* webpackChunkName: "mall-login" */'pages/login/login')  ---> 路由懒加载

export default [
    {path:"/login",component:login},     ---> 配置 login 路由路径
    {path:"*",component:NotFoundComponent}

] 
```
- routes/routes.js ---> 路由元信息 隐藏footer.vue 组件（普通组件）的页面底部
```js
export default [ 
    {path:"/login",component:login,meta:{hideFooter:true}}, 
    {path:"*",component:NotFoundComponent}

]

meta:{hideFooter:true} 配置路由元信息

```
- App.vue/template标签里---> 隐藏footer页面逻辑
```html
<mall-footer v-if = "!$route.meta.hideFooter"></mall-footer>

```

- pages/register/register.vue ---> 将拆分好的html代码引入template标签中，less代码引入style标签中
设置style 标签为 `lang="less"`

- routes/routes.js ---> 配置路由  路由懒加载 & 配置路由路径
```js
const login = () => import(/* webpackChunkName: "mall-register" */'pages/register/register')  ---> 路由懒加载

export default [
    {path:"/login",component:login},     
    {path:"/register",component:register},     ---> 配置 register 路由路径
    {path:"*",component:NotFoundComponent}

] 
```
- routes/routes.js ---> 路由元信息 隐藏footer.vue 组件（普通组件）的页面底部
```js
export default [ 
    {path:"/login",component:login,meta:{hideFooter:true}}, 
    {path:"/register",component:register,meta:{hideFooter:true}},  ---> 隐藏（普通组件）的页面底部
    {path:"*",component:NotFoundComponent}

]

meta:{hideFooter:true} 配置路由元信息

```
- App.vue/template标签里---> 隐藏footer页面逻辑 （login配置过了不需要再配置）
```html
<mall-footer v-if = "!$route.meta.hideFooter"></mall-footer>

```

# 拆分主页组件
- pages/home/home.vue ---> 将home.vue文件到该路径的文件夹中

- home.vue 文件中template标签里
```html
<template>
  <div>home</div>
</template>
```

- routes/routes.js ---> 配置路由  路由懒加载 & 配置路由路径
```js
const home = () => import(/* webpackChunkName: "mall-home" */'pages/home/home')  ---> 路由懒加载

export default [
    {path:"/login",component:login,meta:{hideFooter:true}},
    {path:"/register",component:register,meta:{hideFooter:true}},
    {path:"/home",component:home},    ---> 配置home路由路径
    {path:"/",redirect:"/home"},      ---> 配置重定向
    {path:"*",component:NotFoundComponent}
]
```
8080页面中间出现home说明配置路由成功

- pages/home/home.vue ---> 将拆分好的html代码引入template标签中，less代码引入style标签中
设置style 标签为 `lang="less"`