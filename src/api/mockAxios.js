import axios from "axios"

// 创建一个axios实例
const mockAxios = axios.create({
    baseURL:"/mock",
    timeout:3000

})

// 拦截器
mockAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  });

// 添加响应拦截器
mockAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default mockAxios