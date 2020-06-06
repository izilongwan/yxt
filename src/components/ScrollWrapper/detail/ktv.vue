<template>
  <div class="detail-wrap">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-service :service="data.service"></detail-service>
  </div>
</template>

<script>
import DetailName from './sub/name';
import DetailStars from './sub/stars';
import DetailAddress from './sub/address';
import DetailPrice from './sub/price';
import DetailService from './sub/service';

export default {
  name: 'DetailKtv',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailService
  },
  props: {
    data: Object
  }
}
</script>