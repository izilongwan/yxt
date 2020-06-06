<template>
  <div class="icon-item" @click="routerTo(icon.field)">
    <div class="icon-cell" :style="{backgroundColor: icon.bgColor}">
      <i class="icon" :class="icon.icon"></i>
    </div>
    <span class="icon-text">{{icon.iconText}}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'IconItem',
  props: {
    icon: Object
  },

  methods: {
    ...mapMutations(['changeField']),

    routerTo (field) {
      this.changeField(field);
      this.$router.push('/List');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.icon-item {
  width: 20%;

  flex-column();
  vh-center();

  .icon-cell {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    vh-center();

    .icon {
      color: #fff;
    }
  }

  .icon-text {
    margin-top: 1rem;
    font-size: 1.4rem;
  }
}
</style>