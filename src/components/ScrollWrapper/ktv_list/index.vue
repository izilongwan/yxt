<template>
  <div class="ktv-list">
    <ktv-item
      v-for="item of data"
      :key="item.id"
      :item="item"
    ></ktv-item>
  </div>
</template>

<script>
import KtvItem from './sub'

export default {
  name: 'KtvList',
  props: {
    data: Array
  },
  components: { KtvItem }
}
</script>