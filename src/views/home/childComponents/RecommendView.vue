<template>
	<div class="recommend">
		<!-- {{ recommend }} -->
		<div v-for="(item, key) in recommend" :key="key" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="picture" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecommendView',
	props: {
		recommend: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style scoped lang="less">
.recommend {
	width: 100%;
	display: flex;
	text-align: center;
	padding: 10px 0 20px;
	border-bottom: 10px solid #dddddd;
	&-item {
		flex: 1;
		img {
			width: 70px;
			height: 70px;
		}
		div {
			padding: 5px 0;
		}
	}
}
</style>
