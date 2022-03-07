import axios from "axios";
import { host } from "./url";

// 基本请求服务器
// const baseInstance = axios.create({
//   baseURL: host.base,
//   timeout: 2000
// });
const baseInstance = config => {
  let instance = axios.create({
    baseURL: host.base,
    timeout: 2000
  });

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res);
    },
    err => {
      console.log(err);
    }
  );

  return instance(config);
};

const httpInstance = {
  baseInstance
};

export { httpInstance };
