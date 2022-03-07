<template>
  <div>
    <h2>首页</h2>
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
    // 获取并发请求的结果
    // this.$axios
    //   .all([
    //     this.$http.baseInstance({
    //       url: this.$url.homeMultidata
    //     }),
    //     this.$http.baseInstance({
    //       url: this.$url.homeData,
    //       params: {
    //         type: "sell",
    //         page: 4
    //       }
    //     })
    //   ])
    //   .then(
    //     this.$axios.spread((res1, res2) => {
    //       console.log(res1, res2);
    //     })
    //   );

    this.$http
      .baseInstance({
        url: this.$url.homeMultidata
      })
      .then(res => {
        console.log(res);
      });

    // this.$axios
    //   .all([
    //     this.$axios({
    //       url: this.$url.homeMultidata
    //     }),
    //     this.$axios({
    //       url: this.$url.homeData,
    //       params: {
    //         type: "sell",
    //         page: 4
    //       }
    //     })
    //   ])
    //   .then(
    //     this.$axios.spread((res1, res2) => {
    //       console.log(res1, res2);
    //     })
    //   );
    // .then(result => {
    //   console.log(result);
    // });
  }
};
</script>

<style></style>
