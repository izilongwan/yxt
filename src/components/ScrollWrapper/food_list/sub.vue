<template>
  <div class="food-item">
    <router-link class="food-lk" :to="{path: '/detail', query: {id: item.id, field: 'food'}}">
      <div class="img-wrap">
        <img :src="item.img" alt="item.name" />
      </div>
      <div class="info">
        <h3 class="title">{{item.name}}</h3>
        <div class="stars-wrap">
          <stars :starNum="Number(item.score)"></stars>
          <span class="price">￥{{item.default_price}}/人</span>
        </div>
        <p class="keywords">
          <span class="badge"
            v-for="item of item.keyword"
            :key="item"
          >{{item}}</span>
        </p>
        <div class="other">
          <span class="item">{{item.field}}</span>
          <span class="item">{{item.area}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from '../sub/stars'

export default {
  name: 'FoodItem',
  props: {
    item: Object
  },
  components: { Stars }
}
</script>

<style lang="stylus" scoped>
@import '~style/variables.styl'
@import '~style/mixins.styl';

.food-item {
  padding: 1rem;
  background-color: #fff;

  .food-lk {
    flex-row();
  }

  & + .food-item {
    border-top: .1rem solid #eee;
  }

  .img-wrap {
    width: 10rem;
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
      height: 2rem;
      line-height: 2rem;
      flex-row();

      .price {
        margin-left: 1rem;
      }
    }

    .keywords {
      height: 3.5rem;
      line-height: 3.5rem;
      ellipsis();

      .badge {
        background-color: rgb(251, 244, 222);
        color: rgb(190, 158, 77);
        padding: 0 .5rem;
        margin-right: .5rem;
      }
    }

    .other {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
