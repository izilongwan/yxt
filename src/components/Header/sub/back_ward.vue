<template>
  <div class="back-ward" @click="routerTo">
    <i class="icon icon-header-arrow-left"></i>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackWard',
  methods: {
    routerTo () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  width: $headerHeight;
  height: 100%;
  vh-center();
}
</style>