<template>
  <div class="home-header">
    <city-selector></city-selector>
    <false-input></false-input>
  </div>
</template>

<script>
import CitySelector from './sub/city_selector'
import FalseInput from './sub/fase_input'

export default {
  name: 'HomeHeader',
  components: {
    CitySelector,
    FalseInput
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.home-header {
  height: $headerHeight;
  background-color: $defaultBgColor;
  flex-row();
}
</style>