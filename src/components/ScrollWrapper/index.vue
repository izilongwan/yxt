<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content" v-if="!isLoadingShow">
      <icons-wrapper></icons-wrapper>

      <div v-if="!isErrorShow">
        <list-title :title="homeTitle.view"></list-title>
        <view-list :data="homeDatas.view"></view-list>
        <list-title :title="homeTitle.food"></list-title>
        <food-list :data="homeDatas.food"></food-list>
        <list-title :title="homeTitle.hotel"></list-title>
        <hotel-list :data="homeDatas.hotel"></hotel-list>
        <list-title :title="homeTitle.massage"></list-title>
        <massage-list :data="homeDatas.massage"></massage-list>
        <list-title :title="homeTitle.ktv"></list-title>
        <ktv-list :data="homeDatas.ktv"></ktv-list>
      </div>

      <error v-else></error>
    </div>

    <Loading v-else />
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import IconsWrapper from './category_icons';
import ListTitle from './sub/list_title';
import ViewList from './view_list';
import FoodList from './food_list'
import HotelList from './hotel_list';
import MassageList from './massae-list';
import KtvList from './ktv_list';
import Error from './sub/error';
import { IndexModel } from 'models/index';
import { mapState } from 'vuex';
import tools from 'utils/tools'
import Loading from 'components/ScrollWrapper/sub/loading'

export default {
  name: 'HomeScrollWrapper',
  components: {
    IconsWrapper,
    ListTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error,
    Loading
  },

  data () {
    return {
      isLoadingShow: true,
      isErrorShow: false,
      homeTitle: {
        view: '推荐·景点',
        ktv: '推荐·KTV',
        massage: '推荐·按摩',
        food: '推荐·美食',
        hotel: '推荐·酒店'
      },
      homeDatas: {},
      cache: {},
      scroll: null
    }
  },

  activated () {
    this.checkCache(this.cityId);
  },

  computed: {
    ...mapState(['cityId'])
  },

  methods: {
    initBS () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true })
      })
    },

    checkCache (id) {
      const { cache } = this;

      this.isLoadingShow = true;

      cache[id] ? this.getCacheData(id) : this.getDatas(id);
    },

    getDatas (id) {
      new IndexModel()
        .getHomeDatas(id)
        .then(res => {
          if (res.status === 0) {
            const data = res.data;
            const { homeDatas } = this;

            homeDatas.food = tools.formatJSON(data.foodDatas, 'keyword');
            homeDatas.ktv = data.ktvDatas;
            homeDatas.massage = data.massageDatas;
            homeDatas.hotel = data.hotelDatas;
            homeDatas.view = data.viewDatas;

            this.setCacheData(this.homeDatas, id);
            return;
          }

          this.isErrorShow = true;
        })
        .catch(err => {
          this.isLoadingShow = false;
          this.isErrorShow = true;
        })
    },

    scrollRefrsh () {
      const { $nextTick, scroll } = this;

      $nextTick(() => scroll.refresh());
    },

    setCacheData (data, id) {
      const { cache } = this;

      this.isLoadingShow = false;
      cache[id] = data;
      this.initBS();
    },

    getCacheData (id) {
      const { cache, scroll } = this;

      this.isLoadingShow = false;
      this.homeDatas = cache[id];
      this.scrollRefrsh();
    }
  }
}
</script>
