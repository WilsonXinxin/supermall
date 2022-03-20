<template>
	<div class="tab-bar">
		<div class="tab-bar-block"></div>
		<div class="tab-bar-center">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
};
</script>

<style lang="less">
.tab-bar {
	&-block {
		height: 49px;
	}

	&-center {
		display: flex;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
	}
}
</style>
