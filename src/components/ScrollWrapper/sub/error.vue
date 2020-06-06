<template>
  <div class="error-bd">
    <i class="icon icon-error"></i>
    <span class="error-tip">网络走丢了~</span>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.error-bd {
  height: 30rem;
  color: #999;
  flex-column();
  vh-center();

  .icon-error {
    font-size: 5rem;
  }

  .error-tip {
    margin-top: 1rem;
    font-size: 1.4rem;
  }
}
</style>