<template>
	<Swiper v-if="banner.length">
		<SwiperItem v-for="(item, key) in banner" :key="key">
			<img :src="item.image" :alt="item.title" @load="imgLoad" />
		</SwiperItem>
	</Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
	name: 'HomeSwiper',
	components: { Swiper, SwiperItem },
	props: {
		banner: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			isLoad: false,
		};
	},
	methods: {
		imgLoad() {
			if (!this.isLoad) {
				this.$bus.$emit('swiperImgLoad');
				this.isLoad = true;
			}
		},
	},
};
</script>

<style></style>
