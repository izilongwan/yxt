<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab></tab>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/common';
import Tab from 'components/Tab';
import ListScrollWrapper from 'components/ScrollWrapper/list';

import { mapState } from 'vuex';
import fieldDatas from 'data/fields';

export default {
  name: 'List',
  components: { 
    CommonHeader,
    Tab,
    ListScrollWrapper
  },
  data () {
    return {
      listDatas: {}
    }
  },
  computed: {
    ...mapState(['field']),

    title () {
      if (this.field) {
        const item = fieldDatas.find(val => val.field === this.field);
        return `${item.iconText}·列表`;
      }
    }
  }
}
</script>