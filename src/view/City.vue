<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/common'
import CityScrollWrapper from 'components/ScrollWrapper/city'

export default {
  name: 'City',
  components: {
    CommonHeader,
    CityScrollWrapper
  },
  data () {
    return  {
      title: '切换城市'
    }
  }
}
</script>