<template>
  <div class="nav-bar">
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
</template>

<script>
export default {
  name: "navbar",
  props: {},
};
</script>

<style lang='less'>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 3px 3px #dfdfdf;

  .bar-left,
  .bar-right {
    width: 6rem;
    // background-color: aqua;
  }

  .bar-center {
    flex: 1;
    text-align: center;
    // background-color: pink;
  }
}
</style>