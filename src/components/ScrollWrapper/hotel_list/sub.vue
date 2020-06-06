<template>
  <div class="hotel-item">
    <router-link class="hotel-lk" :to="{path: '/detail', query: {id: item.id, field: 'hotel'}}">
      <div class="img-wrap">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="info">
        <h3 class="title">{{item.name}}</h3>
        <p class="score">{{item.score}}分</p>
        <p class="address">{{item.address}}</p>
        <div class="other">
          <span class="price">￥{{item.default_price}} 起</span>
          <span class="item">{{item.city_name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.hotel-item {
  padding: 1rem;
  background-color: #fff;

  & + .hotel-item {
    border-top: .1rem solid #eee;
  }
}

.hotel-lk {
  flex-row();

  .img-wrap {
    width: 10rem;
    height: 10rem;

    img {
      height: 100%;
    }
  }

  .info {
    flex: 1;
    margin-left: 1rem;
    font-size: 1.4rem;
    overflow: hidden;

    .title {
      height: 3rem;
      color: #000;
      font-size: 1.6rem;
      ellipsis();
    }

    .score {
      height: 1.5rem;
      color: $starColor;
      line-height: 1.5rem;
    }

    .address {
      height: 3rem;
      line-height: 3rem;
      ellipsis();
    }

    .other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      .price {
        color: $defaultGreen;
      }
    }
  }
}
</style>