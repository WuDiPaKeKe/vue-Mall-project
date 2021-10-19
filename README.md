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