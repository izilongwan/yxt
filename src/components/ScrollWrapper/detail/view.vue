<template>
  <div class="detail-wrap">
    <detail-name :name="data.name"></detail-name>
    <detail-stars :score="data.score"></detail-stars>
    <detail-address :address="data.address"></detail-address>
    <detail-price :price="data.default_price"></detail-price>
    <detail-tip :tip="data.tip"></detail-tip>
    <detail-intro :intro="data.intro"></detail-intro>
    <detail-ticket-info :ticketInfo="data.ticket_info"></detail-ticket-info>
  </div>
</template>

<script>
import DetailName from './sub/name';
import DetailStars from './sub/stars';
import DetailAddress from './sub/address';
import DetailPrice from './sub/price';
import DetailTip from './sub/tip';
import DetailIntro from './sub/intro';
import DetailTicketInfo from './sub/ticket_info';

export default {
  name: 'DetailView',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailTip,
    DetailIntro,
    DetailTicketInfo
  },
  props: {
    data: Object
  }
}
</script>