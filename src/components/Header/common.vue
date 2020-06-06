<template>
  <div class="header">
    <back-ward></back-ward>
    <h1 class="title">{{title}}</h1>
  </div>
</template>

<script>
import BackWard from './sub/back_ward'

export default {
  name: 'HeaderTitle',
  components: { BackWard },
  props: {
    title: {
      type: String,
      default () {
        return '一线通'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.header {
  position: relative;
  height: $headerHeight;
  background-color: $defaultBgColor;
  vh-center();

  .title {
    font-size: 1.8rem;
  }
}
</style>