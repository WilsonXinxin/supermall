import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = true;

// 全局组件库
import component from './components';
Vue.use(component);

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
