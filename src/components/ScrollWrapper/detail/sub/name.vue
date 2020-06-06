<template>
  <div class="name-bd">
    <i class="icon icon-name"></i>
    <span class="name">{{name}}</span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    name: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.name-bd {
  display: flex;
  align-items: center;
  height: 4.4rem;
  padding-left: 1.5rem;
  background-color: #fff;
  overflow: hidden;

  .icon {
    font-size: 1.8rem;
  }

  .name {
    color: #000;
    font-size: 1.6rem;
    padding: 0 1rem;
    ellipsis();
  }
}
</style>