<template>
  <router-link to="city" class="city-selector">
    <span class="city-name">{{cityName}}</span>
    <i class="icon icon-header-arrow"></i>
  </router-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'citySelector',
  computed: {
    ...mapState(['cityName'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';
@import '~style/mixins.styl';

.city-selector {
  width: 7rem;
  font-size: 1.4rem;
  flex-row();
  vh-center();

  .city-name {
    font-weight: bold;
  }
}
</style>
