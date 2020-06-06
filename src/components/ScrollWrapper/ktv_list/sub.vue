<template>
  <div class="ktv-item">
    <router-link class="ktv-lk" :to="{path: '/detail', query: {id: item.id, field: 'ktv'}}">
      <div class="img-wrap">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="info">
        <h3 class="title">{{item.name}}</h3>
        <div class="stars-wrap">
          <stars :starNum="Number(item.score)"></stars>
          <div class="score">{{item.score}}分</div>
        </div>
        <div class="other">
          <span class="price-wrap">
            <span>￥<span class="price">{{item.default_price}}</span>元起</span>
          </span>
          <span class="area">{{item.area}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../sub/stars';

export default {
  name: 'KtvItem',
  props: {
    item: Object
  },
  components: { Stars }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.ktv-item {
  padding: 1rem;
  background-color: #fff;

  & + .ktv-item {
    border-top: .1rem solid #eee;
  }

  .ktv-lk {
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
        font-size: 1.6rem;
        color: #000;
        ellipsis();
      }

      .stars-wrap {
        height: 3rem;
        line-height: 3rem;
        flex-row();
      }

      .other {
        display: flex;
        justify-content: space-between;
        align-items:center;
        margin-top: 2rem;

        .price {
          color: $defaultGreen;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>