<template>
	<div class="views-home">
		<!-- <h2>首页</h2> -->
		<nav-bar class="home-nav-bar">
			<template slot="center">购物街</template>
		</nav-bar>

		<home-swiper :banner="banner" />
		<recommend-view :recommend="recommend" />
		<feature />
	</div>
</template>

<script>
import * as api from 'network/home';
import HomeSwiper from './childComponents/HomeSwiper';
import RecommendView from './childComponents/RecommendView';
import Feature from './childComponents/Feature';

export default {
	components: { HomeSwiper, RecommendView, Feature },
	data() {
		return {
			banner: [],
			recommend: [],
		};
	},
	comments: true,

	watch: {},

	methods: {
		getHomeMultidata() {
			api.getHomeMultidata().then(res => {
				this.banner = res.data.banner.list;
				this.recommend = res.data.recommend.list;
			});
		},
	},

	async created() {
		console.log(this);
		await this.getHomeMultidata();
	},

	mounted() {
		this.$nextTick().then(res => {
			console.log('Dom update');
		});
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
		z-index: 99999;
	}
}
</style>
