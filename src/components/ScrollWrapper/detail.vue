<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content" v-if="!isLoadingShow">
      <div v-if="!isErrorShow">
        <swiper :picList="data.pics"></swiper>

        <component :is="componentField" :data="data"></component>
      </div>

      <Error v-else />
    </div>

    <loading v-else></loading>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Swiper from './sub/swiper';
import DetailView from './detail/view';
import DetailFood from './detail/food';
import DetailHotel from './detail/hotel';
import DetailMassage from './detail/massage';
import DetailKtv from './detail/ktv';
import Loading from './sub/loading';
import { DetailModel } from 'models/detail';
import tools from 'utils/tools';
import Error from './sub/error';

export default {
  name: 'DetailScrollWrapper',
  components: {
    Swiper,
    Loading
  },

  data () {
    return {
      isLoadingShow: true,
      isErrorShow: false,
      cache: {},
      data: {},
      scroll: null
    }
  },

  methods: {
    checkCache (field, id) {
      const { cache } = this;

      this.isLoadingShow = true;

      if (!cache[field]) {
        this.getDetail(field, id);
        return;
      }

      if (!cache[field][id]) {
        this.getDetail(field, id);
        return;
      }

      this.getCacheData({ field, id });
    },

    getDetail (field, id) {
      new DetailModel()
        .getDetail(field, id)
        .then(res => {

          if (res && res.status === 0) {
            const data = res.data;

            data.pics && (data.pics = tools.josnToArray(data.pics));
            data.service && (data.service = tools.josnToArray(data.service));
            data.recom && (data.recom = tools.replaceToSpace(data.recom));
            data.comment_keyword && (data.comment_keyword = tools.strToArray(data.comment_keyword));

            this.setCacheData({ data, field, id });
            return;
          }

          this.isErrorShow = true;
        })
        .catch(err => {
          this.isLoadingShow = false;
          this.isErrorShow = true;
        })
    },

    initBS () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true })
      })
    },

    scrollRefrsh () {
      const { $nextTick, scroll } = this;

      $nextTick(() => scroll.refresh());
    },

    setCacheData ({ data, field, id }) {
      const { cache } = this;

      this.data = data;
      !cache[field] && (cache[field] = {});
      this.isLoadingShow = false;
      cache[field][id] = data;
      this.initBS();
    },

    getCacheData ({ field, id }) {
      this.isLoadingShow = false;
      this.data = this.cache[field][id];
      this.scrollRefrsh();
    }
  },

  activated () {
    const { field, id } = this.$route.query;

    this.checkCache(field, id);
  },

  computed: {
    componentField () {
      const { field } = this.$route.query;

      switch (field) {
        case 'view':
          return DetailView;
          break;
        case 'food':
          return DetailFood;
          break;
        case 'hotel':
          return DetailHotel;
          break;
        case 'ktv':
          return DetailKtv;
          break;
        case 'massage':
          return DetailMassage;
          break;
        default:
          break;
      }
    }
  }
}
</script>

