<template>
  <router-link to="search" class="false-input">
    <i class="icon icon-search"></i>
    <span>景点 / 美食 / 酒店 / 旅行</span>
  </router-link>
</template>

<script>
export default {
  name: 'FalseInput'
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
@import '~style/mixins.styl';

.false-input {
  flex: 1;
  color: #999;
  background-color: #fff;
  margin: 0.8rem 1rem 0.8rem 0;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  vh-center();

  .icon {
    font-size: 1.6rem;
  }
}
</style>
