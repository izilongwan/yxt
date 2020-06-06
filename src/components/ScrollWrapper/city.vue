<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import CityList from './city_list'

export default {
  name: 'CityScrollWrapper',
  components: {
    CityList
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3
    });
  }
}
</script>