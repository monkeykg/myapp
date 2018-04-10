<template>
  <div id="app">
   <router-view></router-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/common/footerNav.vue'
export default {
  name: 'App',
  components:{
    footerNav
  }
}
</script>

<style>
html,body{
  height:100%;
}
#app{
  height:100%;
}
</style>
