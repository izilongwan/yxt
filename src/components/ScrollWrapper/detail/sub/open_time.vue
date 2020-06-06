<template>
  <div class="open-time-bd">
    <i class="icon icon-datetime"></i>
    <span class="open-time">{{openTime}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    openTime: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.open-time-bd {
  align-items: center; 
  height: 4.4rem;
  padding-left: 1.5rem;
  border-top: .1rem solid #eee;
  background-color: #fff;
  flex-row();
  overflow: hidden;

  .icon {
    font-size: 1.8rem;
    color: #888;
  }

  .open-time {
    padding: .5rem 1rem;
    color: #888;
    font-size: 1.4rem;
    ellipsis();
  }
}
</style>