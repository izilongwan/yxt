<template>
  <div class="search-input">
    <div class="search-wrap">
      <i class="icon icon-search"></i>
      <input
        type="search"
        v-model="keyword"
        :placeholder="placeholder"
        autofocus
      />
    </div>
  </div>
</template>

<script>
import tools from 'utils/tools';

export default {
  name: 'SearchInput',
  data () {
    return {
      keyword: '',
      placeholder: '景点 / 美食 / 酒店 / 旅行'
    }
  },

  watch: {
    keyword: {
      handler: tools.throttle(function () {
        const keyword = tools.replaceSpace(this.keyword);

        this.$emit('handleSearchKey', keyword);
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';

.search-input {
  height: 4.4rem;
  background-color: #fff;
  line-height: 4.4rem;

  .search-wrap {
    height: 3rem;
    margin: 0.7rem 1.5rem;
    border: 0.1rem solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    flex-row();
    align-items: center;

    .icon {
      font-size: 1.6rem;
      padding: 0 1rem;
    }

    input {
      width: 100%;
      height: 100%;
      font-size: 1.6rem;
    }
  }
}
</style>
