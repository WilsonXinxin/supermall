<template>
	<Swiper v-if="banner.length">
		<SwiperItem v-for="(item, key) in banner" :key="key">
			<img :src="item.image" :alt="item.title" />
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
};
</script>

<style></style>
