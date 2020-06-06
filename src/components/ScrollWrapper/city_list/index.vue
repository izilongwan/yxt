<template>
  <div class="city-list">
    <current-city></current-city>
    <sub-item 
      v-for="item of cityList"
      :key="item.cityId"
      :city-info="item">
    </sub-item>
  </div>
</template>

<script>
import CurrentCity from './current_city'
import SubItem from './sub'
import CityDatas from 'data/cities'

export default {
  name: 'CityList',
  components: {
    CurrentCity,
    SubItem
  },
  data () {
    return {
      cityList: CityDatas
    }
  }
}
</script>