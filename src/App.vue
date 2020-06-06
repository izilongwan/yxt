<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="Home,Detail">
        <router-view class="view" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (from, to, next) {
      this.transitionName = from.meta.index < to.meta.index
                          ? 'slide-right'
                          : 'slide-left';
    }
  }
}
</script>

<style lang="stylus" scoped>

.view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(50px);
}

.slide-right-enter,
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
