<template>
	<div id="app">
		<router-view />

		<TabBar>
			<TabBarItem v-for="(item, key) in tabBar" :key="key" :title="item.title" :icon="item.icon" :path="item.path" />
		</TabBar>
	</div>
</template>

<script>
import TabBar from 'components/content/tabbar/TabBar.vue';
import TabBarItem from 'components/content/tabbar/TabBarItem.vue';

export default {
	name: 'app',
	components: { TabBar, TabBarItem },
	data() {
		return {
			tabBar: [
				{
					title: '首页',
					icon: 'icon-home',
					path: '/home',
				},
				{
					title: '分类',
					icon: 'icon-category',
					path: '/category',
				},
				{
					title: '购物车',
					icon: 'icon-shoppingCart',
					path: '/cart',
				},
				{
					title: '我的',
					icon: 'icon-profile',
					path: '/profile',
				},
			],
		};
	},
};
</script>

<style>
@import url('assets/style/base/base.css');
</style>
