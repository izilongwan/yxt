<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content" v-if="!isErrorShow">
      <div
        v-if="data.viewDatas && data.viewDatas.length > 0"
      >
        <list-title title="景点·搜索结果："></list-title>
        <view-list :data="data.viewDatas"></view-list>
      </div>

      <div
        v-if="data.foodDatas && data.foodDatas.length > 0"
      >
        <list-title title="美食·搜索结果："></list-title>
        <food-list :data="data.foodDatas"></food-list>
      </div>

      <div
        v-if="data.hotelDatas && data.hotelDatas.length > 0"
      >
        <list-title title="酒店·搜索结果："></list-title>
        <hotel-list :data="data.hotelDatas"></hotel-list>
      </div>

      <div
        v-if="data.massageDatas && data.massageDatas.length > 0"
      >
        <list-title title="按摩·搜索结果："></list-title>
        <massage-list :data="data.massageDatas"></massage-list>
      </div>

      <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
        <list-title title="KTV·搜索结果："></list-title>
        <ktv-list :data="data.ktvDatas"></ktv-list>
      </div>

      <no-data-tip v-show="!isLoadingShow && noDataTipShow"></no-data-tip>

      <Loading v-show="isLoadingShow" />
    </div>

    <error v-else></error>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import ListTitle from './sub/list_title';
import ViewList from './view_list';
import FoodList from './food_list'
import HotelList from './hotel_list';
import MassageList from './massae-list';
import KtvList from './ktv_list';
import NoDataTip from './sub/no_data_tip';
import Error from './sub/error';
import Loading from './sub/loading';
import { mapState } from 'vuex';
import { SearchModel } from 'models/search';
import tools from 'utils/tools';

export default {
  name: 'SearchScrollWrapper',
  components: {
    ListTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    NoDataTip,
    Error,
    Loading
  },

  props: {
    keyword: String
  },

  data () {
    return {
      data: {},
      isErrorShow: false,
      isLoadingShow: false
    }
  },

  watch: {
    keyword (val) {
      this.searchAction(val, this.cityId);
    }
  },

  mounted () {
    this.initBS();
  },

  computed: {
    ...mapState(['cityId']),

    noDataTipShow () {
      const { data, keyword } = this;

      if (!keyword) {
        return false;
      }

      if ((data.viewDatas && data.viewDatas.length > 0) ||
        (data.hotelDatas && data.hotelDatas.length > 0) ||
        (data.massageDatas && data.massageDatas.length) > 0 ||
        (data.foodDatas && data.foodDatas.length > 0) ||
        (data.ktvDatas && data.ktvDatas.length > 0)
      ) {
        return false;
      }

      return true;
    }
  },

  methods: {
    initBS () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true });
      })
    },

    searchAction (keyword, id) {
      this.isLoadingShow = true;

      new SearchModel()
        .searchAction(keyword, id)
        .then(res => {
          if (res && res.status === 0) {
            res.data.foodDatas && tools.formatJSON(res.data.foodDatas, 'keyword');
            this.data = res.data;

            this.isLoadingShow = false;
            return;
          }

          this.isErrorShow = true;
          this.isLoadingShow = false;
        })
        .catch(err => {
          console.log('err', err);
          this.isErrorShow = true;
          this.isLoadingShow = false;
        })
    }
  }
}
</script>
