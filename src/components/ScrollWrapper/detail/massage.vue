<template>
  <div class="detail-wrap">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-open-time :openTime="data.open_datetime"></detail-open-time>
    <detail-com-keyword :comKeyword="data.comment_keyword"></detail-com-keyword>
    <detail-service :service="data.service"></detail-service>
  </div>
</template>

<script>
import DetailName from './sub/name';
import DetailStars from './sub/stars';
import DetailAddress from './sub/address';
import DetailPrice from './sub/price';
import DetailOpenTime from './sub/open_time';
import DetailComKeyword from './sub/com_keyword';
import DetailService from './sub/service';

export default {
  name: 'DetailMessage',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenTime,
    DetailComKeyword,
    DetailService
  },
  props: {
    data: Object
  }
}
</script>