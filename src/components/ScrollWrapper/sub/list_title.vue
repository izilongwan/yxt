<template>
  <div class="list-title">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'ListTitle',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.list-title {
  height: 5rem;
  padding-left: 1.5rem;
  margin-top: 1rem;
  background-color: #fff;
  border-bottom: .1rem solid #eee;
  font-size: 1.6rem;
  color: #000;
  line-height: 5rem;
}
</style>