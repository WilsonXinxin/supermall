<template>
	<div class="goods-list-item">
		<img :src="data.show.img" alt="" @load="imgLoad" />
		<div class="goods-list-item-desc">
			<p>{{ data.title }}</p>
			<span class="price">{{ data.price }}</span>
			<span class="collect">{{ data.cfav }}</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		imgLoad() {
			this.$bus.$emit('goodsListImgLoad');
		},
	},
};
</script>

<style lang="less">
.goods-list-item {
	width: 48%;
	padding-bottom: 40px;
	position: relative;
	img {
		width: 100%;
		border-radius: 5px;
	}
	&-desc {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;

		p {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			margin-bottom: 3px;
			padding: 0 5px;
		}

		.price {
			// text-align: center;
			color: var(--color-high-text);
			margin-right: 20px;
		}

		.collect {
			position: relative;
		}

		.collect::before {
			content: '';
			position: absolute;
			left: -15px;
			top: -1px;
			width: 14px;
			height: 14px;
			background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
		}
	}
}
</style>
