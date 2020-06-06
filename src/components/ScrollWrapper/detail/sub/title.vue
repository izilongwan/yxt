<template>
  <div class="title-bd">
    <i class="icon" :class="icon"></i>
    <h3 class="title">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.title-bd {
  align-items: center;
  height: 5rem;
  padding-left: 1.5rem;
  margin-top: 1rem;
  background-color: #fff;
  border-bottom: .1rem solid #eee;
  font-size: 1.6rem;
  color: $defaultGreen;
  flex-row();

  .title {
    padding-left: 1rem;
  }
}
</style>