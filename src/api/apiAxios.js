import axios from "axios"
import NProgress from "nprogress"

// 创建一个axios实例
const apiAxios = axios.create({
    baseURL:"http://localhost:9000/api",
    timeout:3000

})

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

export default apiAxios