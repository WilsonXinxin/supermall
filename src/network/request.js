import axios from 'axios';
import { host } from './url';

// 基本请求服务器
export function request(config) {
	let instance = axios.create({
		baseURL: host.base,
		timeout: 5000,
	});

	// 请求拦截器
	instance.interceptors.request.use(
		config => {
			// console.log(config);
			return config;
		},
		err => {
			console.error(err);
		}
	);

	// 响应拦截
	instance.interceptors.response.use(
		res => {
			// console.log(res);
			return res.data;
		},
		err => {
			console.error(err);
		}
	);

	// 发送真正网络请求
	return instance(config);
}
