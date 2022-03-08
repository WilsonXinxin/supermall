<template>
  <div class="views-home">
    <!-- <h2>首页</h2> -->
    <NavBar class="home-nav-bar">
      <template slot='center'>
        购物街
      </template>
    </NavBar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log(process.env);
    this.$http
      .baseInstance({
        url: this.$url.homeMultidata,
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style lang='less'>
.views-home {
  .home-nav-bar {
    background-color: #f7aeba;
    color: #ffffff;
    font-size: 1.3rem;
  }
}
</style>
