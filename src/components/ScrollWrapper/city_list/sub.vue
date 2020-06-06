<template>
  <p class="sub-item" @click="cityClick(cityInfo)">{{cityInfo.cityName}}</p>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CitySubItem',
  props: {
    cityInfo: Object
  },
  methods: {
    ...mapMutations(['changeCity']),

    cityClick (info) {
      this.changeCity(info);
      this.$router.push('/');
    }
  }
}
</script>

<style lang="stylus" scoped>
.sub-item {
  height: 5rem;
  padding-left: 1.5rem;
  background-color: #fff;
  font-size: 1.4rem;
  line-height: 5rem;

  & + .sub-item {
    border-top: .1rem solid #eee;
  }
}
</style>