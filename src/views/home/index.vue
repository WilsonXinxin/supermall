<template>
  <div class="views-home">
    <!-- <h2>首页</h2> -->
    <NavBar class="home-nav-bar">
      <template slot="center">购物街</template>
    </NavBar>

    <Swiper v-if="banner.length">
      <SwiperItem v-for="(item, key) in banner" :key="key">
        <img :src="item.image" :alt="item.title" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
// import * as api from "network/home";
import { getHomeMultidata } from "network/home";
import Swiper from "../../components/common/swiper/swiper.vue";
import SwiperItem from "../../components/common/swiper/swiperItem.vue";

export default {
  components: { Swiper, SwiperItem },
  data() {
    return {
      banner: [],
      recommend: [],
    };
  },

  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
  },

  mounted() {
    this.$nextTick().then((res) => {
      console.log("Dom update");
    });
  },

  async created() {
    await this.getHomeMultidata();
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
