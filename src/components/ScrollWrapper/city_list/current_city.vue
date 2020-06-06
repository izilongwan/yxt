<template>
  <div class="current-city">
    <span class="position">当前位置：</span>
    <i class="icon icon-position"></i>
    <span class="city-name">{{cityName}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CurrentCity',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.current-city {
  height: 5rem;
  align-items: center;
  background-color: #fff;
  font-size: 1.4rem;
  flex-row();

  .position {
    padding-left: 1.5rem;
  }

  .icon-position {
    color: #ffc300;
    font-size: 1.4rem;
    vertical-align: middle;
  }
}
</style>