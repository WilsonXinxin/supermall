import { request } from 'network/request';

/**
 * 首页轮播数据
 * @returns
 */
export function getHomeMultidata() {
	return request({
		url: '/home/multidata',
	});
}

/**
 * 首页商品数据
 * @param {Object} params
 * @returns
 */
export function getHomeGoods(params) {
	return request({
		url: '/home/data',
		params,
	});
}
