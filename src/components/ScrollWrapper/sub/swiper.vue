<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, idx) of picList"
        :key="idx"
        class="swiper-slide"
      >
        <img class="swiper-img" :src="item" alt="图片" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'SwpierWrap',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    picList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl';

.swiper-wrap >>> .swiper-pagination-bullet-active {
  background-color: $defaultGreen;
}

.swiper-slide {
  height: 20rem;
  background-color: #ccc;
}

.swiper-img {
  height: 100%;
}
</style>