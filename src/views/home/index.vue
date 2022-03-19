<template>
	<div class="views-home">
		<!-- <h2>首页</h2> -->
		<nav-bar class="home-nav-bar">
			<template slot="center">购物街</template>
		</nav-bar>

		<home-swiper :banner="banner" />
	</div>
</template>

<script>
import * as api from 'network/home';
import HomeSwiper from './childComponents/HomeSwiper.vue';

export default {
	components: { HomeSwiper },
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
	}
}
</style>
