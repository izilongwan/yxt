<template>
  <div class="detail-wrap">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-open-time :openTime="data.open_datetime"></detail-open-time>
    <detail-recom :recom="data.recom"></detail-recom>
    <detail-com-keyword :comKeyword="data.comment_keyword"></detail-com-keyword>
  </div>
</template>

<script>
import DetailName from './sub/name';
import DetailStars from './sub/stars';
import DetailAddress from './sub/address';
import DetailPrice from './sub/price';
import DetailOpenTime from './sub/open_time';
import DetailRecom from './sub/recom';
import DetailComKeyword from './sub/com_keyword';

export default {
  name: 'DetailFood',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenTime,
    DetailRecom,
    DetailComKeyword
  },
  props: {
    data: Object
  }
}
</script>