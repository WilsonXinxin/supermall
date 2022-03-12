<template>
  <div class="slide">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.slide{
  width: 100%;
  flex-shrink: 0;

  img{
    width: 100%;
  }
}
</style>