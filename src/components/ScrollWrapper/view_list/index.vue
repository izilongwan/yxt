<template>
  <div class="view-list">
    <view-item
      v-for="item of data"
      :key="item.id"
      :item="item"
    ></view-item>
  </div>
</template>

<script>
import ViewItem from './sub'

export default {
  name: 'ViewList',
  components: { ViewItem },
  props: {
    data: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.view-list {
  background-color: #fff;
  flex-wrap: wrap;
  flex-row();
}
</style>