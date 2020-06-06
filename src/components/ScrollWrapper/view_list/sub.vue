<template>
  <div class="view-item">
    <router-link :to="{path: '/detail', query: {field: 'view', id: item.id}}">
      <div class="img-wrap">
        <img :src="item.img" :alt="item.name" />
      </div>
      <div class="info">
        <h3 class="title">{{item.name}}</h3>
        <div class="star-wrap">
          <stars :starNum="Number(item.score)"></stars>
          <span class="score">{{item.score}}分</span>
        </div>
        <div class="other">
          <span class="item price-wrap">
            <span class="price">￥{{item.default_price}}</span>
            <span>起</span>
          </span>
          <span class="item city-name">{{item.city_name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../sub/stars';

export default {
  name: 'ViewItem',
  components: { Stars },
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.view-item {
  width: 50%;
  padding: 1rem .8rem;
  box-sizing: border-box;
  border-bottom: .1rem solid #eee;
  
  .img-wrap {
    img {
      width: 100%;
      height: 11rem;
    }
  }

  .info {
    font-size: 1.4rem;

    .title {
      height: 3rem;
      line-height: 3rem;
      font-weight: bold;
      ellipsis();
    }

    .star-wrap {
      height: 1.8rem;
      line-height: 1.8rem;
      flex-row();

      .score {
        margin-left: 1rem;
        color: $starColor;
      }
    }

    .other {
      display: flex;
      justify-content: space-between;
      height: 2.5rem;
      line-height: 2.5rem;
    }

    .price {
      color: $defaultGreen;
    }

  }
}
</style>