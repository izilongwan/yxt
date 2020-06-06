<template>
  <p class="no-data-tip">- 没有搜索到相关信息 -</p>
</template>

<script>
export default {
  name: 'NoDataTip'
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.no-data-tip {
  height: 30rem;
  vh-center();
  color: #999;
  font-size: 1.8rem;
}
</style>