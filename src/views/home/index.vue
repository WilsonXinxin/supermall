<template>
	<div class="views-home">
		<nav-bar class="home-nav-bar">
			<template slot="center">购物街</template>
		</nav-bar>
		<div class="nav-bar-block"></div>

		<home-swiper :banner="banner" />
		<recommend-view :recommend="recommend" />
		<feature />

		<tab-control class="tab-control" :titles="tabControl.titles" />
		<goods-list :goods="goods.pop.list" />
	</div>
</template>

<script>
import * as api from 'network/home';
import HomeSwiper from './childComponents/HomeSwiper';
import RecommendView from './childComponents/RecommendView';
import Feature from './childComponents/Feature';

import TabControl from 'components/content/tabControl';
import GoodsList from 'components/content/goods/GoodsList';

export default {
	components: { HomeSwiper, RecommendView, Feature, TabControl, GoodsList },
	data() {
		return {
			banner: [],
			recommend: [],
			tabControl: {
				titles: ['流行', '新款', '精选'],
			},
			goods: {
				pop: {
					page: 1,
					list: [],
				},
				// new: {
				// 	page: 1,
				// 	list: [],
				// },
				// sell: {
				// 	page: 1,
				// 	list: [],
				// },
			},
		};
	},
	comments: true,

	methods: {},

	created() {
		this.init();
	},

	methods: {
		async init() {
			this.getHomeMultidata();
			for (let item in this.goods) {
				this.getHomeGoods(item);
			}
		},

		async getHomeMultidata() {
			await api.getHomeMultidata().then(res => {
				this.banner = res.data.banner.list;
				this.recommend = res.data.recommend.list;
			});
		},

		async getHomeGoods(type) {
			const _data = {
				type,
				page: this.goods[type].page,
			};
			await api.getHomeGoods(_data).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
			});
		},
	},
};
</script>

<style lang="less">
.views-home {
	.home-nav-bar {
		background-color: #f7aeba;
		color: #ffffff;
		font-size: 1.3rem;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.nav-bar-block {
		height: 44px;
	}
	.tab-control {
		position: sticky;
		top: 44px;
		z-index: 9;
	}
}
</style>
