<template>
  <div class="icons-wrapper">
    <icons-item 
      v-for="item of iconsList"
      :key="item.id"
      :icon="item"
    ></icons-item>
  </div>
</template>

<script>
import IconsItem from './sub'
import Fields from 'data/fields'

export default {
  name: 'IconsWrapper',
  components: { IconsItem },
  data () {
    return {
      iconsList: Fields
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.icons-wrapper {
  height: 10rem;
  background-color: #fff;
  flex-row();
}
</style>