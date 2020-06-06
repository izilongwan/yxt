<template>
  <div class="stars">
    <i :class="['icon', 'icon-star', { active: starNum >= 1 }]"></i>
    <i :class="['icon', 'icon-star', { active: starNum >= 2 }]"></i>
    <i :class="['icon', 'icon-star', { active: starNum >= 3 }]"></i>
    <i :class="['icon', 'icon-star', { active: starNum >= 4 }]"></i>
    <i :class="['icon', 'icon-star', { active: starNum >= 5 }]"></i>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'

.stars {
  .icon-star {
    color: #ccc;
    font-size: 1.2rem;

    &.active {
      color: $starColor;
    }
  }
}
</style>