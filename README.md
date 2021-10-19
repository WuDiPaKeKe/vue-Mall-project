bug: api.js export const getMockUsers = () => mockAxios.get("/users")
# 项目需求：请求进度条
[请求进度条包的地址](https://www.npmjs.com/package/nprogress)

- `npm i nprogress` 下载进度条包（生产的包，上线用户也是要看到的）

- main.js --->直接引入 `nprogress`包
   ```js
   import "nprogress/nprogress.css"
   ```

- apiAxios.js/mockAxios.js ---> 引入 `nprogress`包
   ```js
   import NProgress from "nprogress"
   ```

- apiAxios.js/mockAxios.js---> 调用一下`nprogress`包
    在拦截器里调用一下

```js
   // 拦截器
    apiAxios.interceptors.request.use(function (config) {
    // 开启进度条
    NProgress.start();

    // 在发送请求之前做些什么
    return config;
  });

    // 添加响应拦截器
    apiAxios.interceptors.response.use(function (response) {
    // 关闭进度条
    NProgress.done();

    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 关闭进度条
    NProgress.done();

    // 对响应错误做点什么
    return Promise.reject(error);
  });
 ```

 ## 测试请求进度条是否成功
 - App.vue ---> 用mock测试发送请求是否成功
 ```js
    // 引入mock
   import {getMockUsers} from "api/api"

  export default {
    name: 'App',
    // 在mounted 生命周期里发送 mock的请求
    async mounted() {
      await getMockUsers()
    }

  }
 ```