<template>
  <div class="service-bd">
    <detail-title title="商家服务" icon="icon-service"></detail-title>
    <div class="service-content">
      <p><span class="item">停车场：</span>{{service && service.parking ? '有' : '无'}}</p>
      <p><span class="item">WIFI：</span>{{service && service.wifi ? '有' : '无'}}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from './title';

export default {
  name: 'DetailService',
  components: { DetailTitle },
  props: {
    service: Object
  }
}
</script>

<style lang="stylus" scoped>

.service-content {
  padding: 1rem 1.5rem;
  background-color: #fff;
  font-size: 1.6rem;
  line-height: 2.2rem;

  .item {
    display: inline-block;
    width: 6.4rem;
    text-align-last: justify;
  }
}

</style>