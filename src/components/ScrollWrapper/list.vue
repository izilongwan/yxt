<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <component v-if="!loadingShow" :is="componentField" :data="listDatas[cityId]"></component>
        <loading v-else></loading>
      </div>
      <error v-else></error>
    </div>
  </div>
</template>

<script>
import ViewList from './view_list';
import HotelList from './hotel_list';
import KtvList from './ktv_list';
import MassageList from './massae-list';
import FoodList from './food_list';
import Loading from './sub/loading';
import Error from './sub/error';

import { ListModel } from 'models/list';
import { mapState } from 'vuex';
import tools from 'utils/tools';
import BScroll from 'better-scroll';

export default {
  name: 'ListScrollWrapper',
  data () {
    return {
      listDatas: {},
      loadingShow: true,
      errorShow: false
    }
  },

  components: { 
    Loading,
    Error
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: true
    })
    this.getListDatas(this.field, this.cityId);
  },

  methods: {
    getListDatas (field, id) {
      if (!this.listDatas[id]) {
        this.loadingShow = true;
        this.listDatas[id] = [];

        new ListModel()
          .getListDatas(field, id)
          .then(res => {
            if (res && res.status === 0) {
              this.listDatas[id] = tools.formatJSON(res.data, 'keyword');
              this.loadingShow = false;
            } else {
              this.errorShow = true;
              console.log({
                errorCode: res.status,
                errorMsg: res.error
              })
            }
          })
      }
    }
  },
  
  computed: {
    ...mapState(['cityId', 'field']),

    componentField () {
      if (this.cityId) {
        this.getListDatas(this.field, this.cityId);
      }

      if (this.field) {
        switch (this.field) {
          case 'view':
            return ViewList;
            break;
          case 'food':
            return FoodList;
            break;
          case 'hotel':
            return HotelList;
            break;
          case 'ktv':
            return KtvList;
            break;
          case 'massage':
            return MassageList;
            break;
          default:
            break;
        }
      }
    }
  }
}
</script>