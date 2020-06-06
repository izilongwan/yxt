<template>
  <div class="loading-wrap">
    <img src="~/images/loading.gif" alt="加载中……" />
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.loading-wrap {
  height: 10rem;
  vh-center();

  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>