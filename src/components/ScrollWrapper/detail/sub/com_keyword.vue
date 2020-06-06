<template>
  <div class="com-keyword-bd">
    <detail-title title="推荐关键词" icon="icon-haoping"></detail-title>
    <p class="com-keyword-content">
      <span class="com-keyword"
        v-for="item of comKeyword"
        :key="item"
      >{{item}}</span>
    </p>
  </div>
</template>

<script>
import DetailTitle from './title';

export default {
  name: 'DetailComKeyword',
  components: { DetailTitle },
  props: {
    comKeyword: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.com-keyword-bd {
  .com-keyword-content {
    padding: 1rem 1.5rem;
    background-color: #fff;

    .com-keyword {
      display: inline-block;
      padding: .5rem;
      margin: .4rem;
      border: .1rem solid $defaultGreen;
      border-radius: .5rem;
      color: $defaultGreen;
      font-size: 1.4rem;
    }
  }
}
</style>