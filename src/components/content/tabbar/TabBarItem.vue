<template>
  <div class="tab-bar-item"
       :class="{ 'tab-bar-item-active': isActive }"
       @click="itemClickEvent">
    <span class="iconfont item-icon"
          :class="icon"></span>
    <div class="item-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.path);
    },
  },

  methods: {
    itemClickEvent() {
      // console.log(this.$route.path);
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less">
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 0.4rem;

  &-active {
    color: red;
  }

  .item-icon {
    font-size: 1.8rem;
    padding: 0.2rem 0;
    display: inline-block;
    font-weight: 600;
  }
}
</style>
