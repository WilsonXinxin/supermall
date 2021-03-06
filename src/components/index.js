// 字体图标
import 'assets/font/iconfont.css';

// 组件库
import NavBar from './common/navbar/NavBar.vue';

// 全局组件
const component = {
	NavBar,
};

const install = Vue => {
	if (install.installed) return;

	Object.keys(component).forEach(key => {
		Vue.component(key, component[key]);
	});

	// 绑定全局内容 Vue.prototype.$xxx
	Vue.prototype.$bus = new Vue();
};

export default install;
