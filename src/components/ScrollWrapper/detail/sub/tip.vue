<template>
  <div class="tip-bd">
    <i class="icon icon-tip"></i>
    <span class="tip">{{tip}}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailTip',
  props: {
    tip: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.tip-bd {
  display: flex;
  align-items: center;
  height: 4.4rem;
  padding-left: 1.5rem;
  background-color: #fff;
  overflow: hidden;

  .icon {
    font-size: 1.8rem;
    color: #888;
  }

  .tip {
    color: #888;
    font-size: 1.6rem;
    padding: 0 1rem;
    ellipsis();
  }
}
</style>