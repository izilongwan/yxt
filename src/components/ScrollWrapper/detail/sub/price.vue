<template>
  <div class="price-bd">
    <i class="icon icon-price"></i>
    <span class="price">￥{{price}}起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.price-bd {
  align-items: center; 
  height: 4.4rem;
  padding-left: 1.5rem;
  border-top: .1rem solid #eee;
  background-color: #fff;
  flex-row();

  .icon {
    font-size: 1.8rem;
  }

  .price {
    padding-left: 1rem;
    color: $defaultOrange;
    font-size: 1.6rem;
  }
}

</style>