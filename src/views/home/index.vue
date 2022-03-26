<template>
	<div class="views-home">
		<nav-bar class="home-nav-bar">
			<template slot="center">购物街</template>
		</nav-bar>
		<div class="nav-bar-block"></div>

		<scroll class="content" ref="scroll" :pullUpLoad="true" :probeType="3" @pullingUp="handlePullingUp">
			<home-swiper :banner="banner" />
			<recommend-view :recommend="recommend" />
			<feature />
			<tab-control class="tab-control" :titles="tabControl.titles" @handleClick="handleClick" />
			<goods-list :goods="goodsList" />
		</scroll>
	</div>
</template>

<script>
import * as api from 'network/home';
import HomeSwiper from './childComponents/HomeSwiper';
import RecommendView from './childComponents/RecommendView';
import Feature from './childComponents/Feature';

import TabControl from 'components/content/tabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll';

export default {
	components: { HomeSwiper, RecommendView, Feature, TabControl, GoodsList, Scroll },
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
				new: {
					page: 1,
					list: [],
				},
				sell: {
					page: 1,
					list: [],
				},
			},
			currentType: 'pop',
			bScroll: '',
		};
	},

	created() {
		this.init();
	},

	mounted() {
		const refresh = this.debounce(this.$refs.scroll.refresh, 200);
		this.$bus.$on('imgLoad', () => {
			// this.$refs.scroll.refresh();
			refresh();
		});
	},

	computed: {
		goodsList() {
			return this.goods[this.currentType].list;
		},
	},

	methods: {
		async init() {
			this.getHomeMultidata();
			for (let item in this.goods) {
				this.getHomeGoods(item);
			}
		},

		// 防抖函数，涉及到了闭包，事件循环等知识
		debounce(func, delay) {
			let timer = null;
			return function (...args) {
				timer && clearTimeout(timer);
				timer = setTimeout(() => {
					func.apply(...args);
				}, delay);
			};
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
			this.$refs.scroll.scroll.refresh();
		},

		handleClick(index) {
			const _model = ['pop', 'new', 'sell'];
			this.currentType = _model[index];
		},

		async handlePullingUp() {
			console.log('上拉加载更多');
			await this.getHomeGoods(this.currentType);
			this.$refs.scroll.finishPullUp();
		},
	},
};
</script>

<style lang="less">
.views-home {
	// height: 100vh;
	position: relative;

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
	.content {
		// height: 5000px;
		// position: absolute;
		// top: 44px;
		// left: 0;
		// right: 0;
		// bottom: 49px;
		// overflow: hidden;
	}
}
</style>
