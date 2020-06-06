<template>
  <div class="intro-bd">
    <detail-title title="详情介绍" icon="icon-intro"></detail-title>
    <p class="intro">{{intro}}</p>
  </div>
</template>

<script>
import DetailTitle from './title';

export default {
  name: 'DetailIntro',
  components: { DetailTitle },
  props: {
    intro: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.intro-bd {
  .intro {
    padding: 1rem 1.5rem;
    background-color: #fff;
    background-color: #fff;
    font-size: 1.6rem;
    text-indent: 2rem;
    line-height: 2rem;
  }
}
</style>