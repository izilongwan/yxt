<template>
  <div class="container">
    <common-header :title="title" />

    <search-input
      @handleSearchKey="key => this.keyword = key"
    />

    <search-scroll-wrapper :keyword="keyword" />
  </div>
</template>

<script>
import CommonHeader from 'components/Header/common';
import SearchInput from 'components/SearchInput';
import SearchScrollWrapper from 'components/ScrollWrapper/search';

export default {
  name: 'Search',
  components: {
    CommonHeader,
    SearchInput,
    SearchScrollWrapper
  },
  data () {
    return {
      keyword: '',
      title: '搜 索'
    }
  }
}
</script>
