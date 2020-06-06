<template>
  <div class="food-list">
    <food-item
      v-for="item of data"
      :key="item.id"
      :item="item"
    ></food-item>
  </div>
</template>

<script>
import FoodItem from './sub'

export default {
  name: 'FoodList',
  components: { FoodItem },
  props: {
    data: Array
  }
}
</script>
