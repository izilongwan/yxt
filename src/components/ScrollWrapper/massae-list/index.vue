<template>
  <div class="massage-list">
    <massage-item
      v-for="item of data"
      :key="item.id"
      :item="item"
    ></massage-item>
  </div>
</template>

<script>
import MassageItem from './sub'

export default {
  name: 'MassageList',
  props: {
    data: Array
  },
  components: { MassageItem }
}
</script>