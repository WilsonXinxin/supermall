<template>
	<div class="views-home">
		<nav-bar class="home-nav-bar">
			<template slot="center">购物街</template>
		</nav-bar>
		<div class="nav-bar-block"></div>

		<scroll class="content" ref="scroll" :pullUpLoad="true" :probeType="3" @pullingUp="handlePullingUp" @scroll="contentScroll">
			<home-swiper :banner="banner" />
			<recommend-view :recommend="recommend" />
			<feature />
			<tab-control class="tab-control" :titles="tabControl.titles" @handleClick="handleClick" ref="tabControl" />
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

import { debounce } from 'common/utils';

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
			tabOffsetTop: 0,
		};
	},

	created() {
		this.init();
	},

	mounted() {
		// 上拉加载初始化
		const refresh = debounce(this.$refs.scroll.refresh, 200);
		this.$bus.$on('goodsListImgLoad', () => {
			// this.$refs.scroll.refresh();
			refresh();
		});

		// tab-control初始化
		this.$bus.$on('swiperImgLoad', () => {
			console.log(this.$refs.tabControl.$el.offsetTop);
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

		async getHomeMultidata() {
			await api.getHomeMultidata().then(res => {
				this.banner = res.data.banner.list;
				this.recommend = res.data.recommend.list;
			});
		},

		getHomeGoods(type) {
			const _data = {
				type,
				page: this.goods[type].page,
			};
			api.getHomeGoods(_data).then(res => {
				this.goods[type].list.push(...res.data.list);
				this.goods[type].page += 1;
			});
		},

		handleClick(index) {
			const _model = ['pop', 'new', 'sell'];
			this.currentType = _model[index];
		},

		async handlePullingUp() {
			await this.getHomeGoods(this.currentType);
			this.$refs.scroll.finishPullUp();
		},

		contentScroll(position) {},
	},
};
</script>

<style lang="less">
.views-home {
	position: relative;
	// height: 100vh;

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
