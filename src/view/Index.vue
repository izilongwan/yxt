<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/home'
import HomeScrollWrapper from 'components/ScrollWrapper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeScrollWrapper
  }
}
</script>