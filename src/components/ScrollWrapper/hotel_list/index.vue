<template>
  <div class="hotel-list">
    <hotel-item
      v-for="item of data"
      :key="item.id"
      :item="item"
    ></hotel-item>
  </div>
</template>

<script>
import HotelItem from './sub'

export default {
  name: 'HotelList',
  components: { HotelItem },
  props: {
    data: Array
  }
}
</script>