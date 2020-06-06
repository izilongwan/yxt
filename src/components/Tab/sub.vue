<template>
  <div 
    :class="['tab-item', {current: cityInfo.cityId === cityId}]"
    @click="tabClick(cityInfo)"
  >
    <span class="item">{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'TabItem',
  props: {
    cityInfo: Object
  },

  computed: {
    ...mapState(['cityId'])
  },

  methods: {
    ...mapMutations(['changeCity']),

    tabClick (info) {
      this.changeCity(info);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
@import '~style/mixins.styl';

.tab-item {
  width: 20%;
  height: 5rem;
  background-color: #fff;
  border-bottom: .2rem solid transparent;
  font-size: 1.6rem;
  vh-center();

  &.current {
    border-color: $defaultGreen;

    .item {
      font-size: 1.6rem;
      color: $defaultGreen;
    }
  }
}
</style>