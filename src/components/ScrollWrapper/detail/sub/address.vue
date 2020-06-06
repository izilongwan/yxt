<template>
  <div class="address-bd">
    <i class="icon icon-position"></i>
    <span class="address">{{address}}</span>
  </div>
</template>

<script>
export default {
  name: 'DetailAddress',
  props: {
    address: {
      type: String,
      default () {
        return '加载中……';
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.address-bd {
  align-items: center;
  height: 4.4rem;
  padding-left: 1.5rem;
  background-color: #fff;
  border-top: .1rem solid #eee;
  overflow: hidden;
  flex-row();

  .icon {
    font-size: 1.8rem;
    color: #999;
  }

  .address {
    padding: .5rem 1rem;
    font-size: 1.4rem;
    color: #666;
    ellipsis();
  }
}

</style>