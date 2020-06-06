<template>
  <div class="tab">
    <tab-item
      v-for="item of cityList"
      :key="item.id"
      :cityInfo="item"
    ></tab-item>
  </div>
</template>

<script>
import TabItem from './sub';
import cityDatas from 'data/cities';

export default {
  name: 'Tab',
  components: { TabItem },
  data () {
    return {
      cityList: cityDatas
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';
  
.tab {
  flex-row();
}
</style>