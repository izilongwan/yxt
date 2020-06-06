<template>
  <div class="massage-item">
    <router-link class="massage-lk" :to="{path: '/detail', query: {id: item.id, field: 'massage'}}">
      <div class="img-wrap">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="info">
        <h3 class="title">{{item.name}}</h3>
        <div class="stars-wrap">
          <stars :starNum="Number(item.score)"></stars>
          <span class="score">{{item.score}}分</span>
        </div>
        <div class="other">
          <span class="price-wrap">￥<span class="price">{{item.default_price}}</span>元</span>
          <span class="city-name">{{item.city_name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../sub/stars';

export default {
  name: 'MassageItem',
  props: {
    item: Object
  },
  components: { Stars }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.massage-item {
  padding: 1rem;
  background-color: #fff;

  & + .massage-item {
    border-top: .1rem solid #eee;
  }

  .massage-lk {
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
      }

      .stars-wrap {
        height: 3rem;
        line-height: 3rem;
        flex-row();

        .score {
          margin-left: 1rem;
        }
      }

      .other {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.8rem;

        .price {
          color: $defaultOrange;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>