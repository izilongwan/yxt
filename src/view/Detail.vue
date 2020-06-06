<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <detail-scroll-wrapper></detail-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/common';
import DetailScrollWrapper from 'components/ScrollWrapper/detail';

export default {
  name: 'Detail',
  components: {
    CommonHeader,
    DetailScrollWrapper
  },
  data () {
    return {
      title: '详 情'
    }
  }
}
</script>