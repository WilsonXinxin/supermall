<template>
	<div class="nav-bar">
		<div class="nav-bar-center">
			<div class="bar-left">
				<slot name="left" />
			</div>
			<div class="bar-center">
				<slot name="center" />
			</div>
			<div class="bar-right">
				<slot name="right" />
			</div>
		</div>
		<!-- <div class="nav-bar-block"></div> -->
	</div>
</template>

<script>
export default {
	name: 'navbar',
	props: {},
};
</script>

<style lang="less">
.nav-bar {
	&-center {
		display: flex;
		height: 44px;
		line-height: 44px;
		// box-shadow: 0 1px 1px #dfdfdf;
		// position: fixed;
		// top: 0;
		// left: 0;
		// right: 0;
		// z-index: 9;

		.bar-left,
		.bar-right {
			width: 6rem;
		}

		.bar-center {
			flex: 1;
			text-align: center;
		}
	}
	&-block {
		// height: 44px;
	}
}
</style>
