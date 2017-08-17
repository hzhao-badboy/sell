<template>
  <div>
    <vheader></vheader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link></div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link></div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import vheader from './components/header/header';

  export default {
    components: {
      vheader
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex:1
      text-align: center
</style>
