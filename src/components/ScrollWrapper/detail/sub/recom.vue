<template>
  <div class="recom-bd">
    <detail-title icon="icon-recom" title="推荐菜品"></detail-title>
    <div class="recom-content">{{recom}}</div>
  </div>
</template>

<script>
import DetailTitle from './title';

export default {
  name: 'DetailRecom',
  components: { DetailTitle },
  props: {
    recom: {
      type: String,
      default () {
        return '……';
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';
.recom-bd {

  .recom-content {
    padding: 1rem 1.5rem;
    background-color: #fff;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-indent: 2em;
  }
}

</style>