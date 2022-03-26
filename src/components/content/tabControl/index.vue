<template>
	<div class="tab-control">
		<div
			v-for="(item, key) in titles"
			:key="key"
			class="tab-control-item"
			:class="{ active: key === currentIndex }"
			@click="itemClick(key)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabControl',
	props: {
		titles: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			currentIndex: 0,
		};
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index;
			this.$emit('handleClick', index);
		},
	},
};
</script>

<style lang="less" scope>
.tab-control {
	display: flex;
	text-align: center;
	font-size: 13px;
	background-color: #ffffff;

	&-item {
		flex: 1;
		height: 40px;
		line-height: 40px;

		span {
			padding: 5px;
		}
	}

	.active {
		color: var(--color-high-text);
	}

	.active span {
		border-bottom: 3px solid var(--color-tint);
	}
}
</style>
