<template>
  <div class="ticket-info-bd">
    <detail-title title="购票信息" icon="icon-intro"></detail-title>
    <p class="info">{{ticketInfo}}</p>
  </div>
</template>

<script>
import DetailTitle from './title';

export default {
  name: 'DetailTicketInfo',
  components: { DetailTitle },
  props: {
    ticketInfo: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.ticket-info-bd {
  .info {
    padding: 1rem 1.5rem;
    background-color: #fff;
    font-size: 1.6rem;
    text-indent: 2em;
    line-height: 2rem;
  }
}
</style>