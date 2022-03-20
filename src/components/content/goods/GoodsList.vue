<template>
	<div class="goods-list">
		<goods-list-item v-for="(item, key) in goods" :key="key" :data="item" />
	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
	name: 'GoodsList',
	components: { GoodsListItem },
	props: {
		goods: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style>
.goods-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	padding: 0 2px;
}
</style>
