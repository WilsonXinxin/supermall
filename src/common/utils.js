// 防抖函数，涉及到了闭包，事件循环等知识
export function debounce(func, delay) {
	let timer = null;
	return function (...args) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}
