<template>
  <div class="stars-bd">
    <i class="icon icon-smile"></i>
    <stars :starNum="Number(score)"></stars>
    <span class="score">{{score}}分</span>
  </div>
</template>

<script>
import Stars from '../../sub/stars';

export default {
  name: 'DetailStars',
  components: { Stars },
  props: {
    score: {
      type: String,
      default () {
        return '0.0';
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.stars-bd {
  align-items: center;
  height: 4.4rem;
  padding-left: 1.5rem;
  background-color: #fff;
  border-top: .1rem solid #eee;
  font-size: 1.4rem;
  flex-row();

  .icon {
    margin-right: 1rem;
    font-size: 1.8rem;
  }

  .score {
    padding-left: 1rem;
    color: $defaultOrange;
  }
}
</style>