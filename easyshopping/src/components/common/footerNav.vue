<template>
  <div id="footerNav">
      <ul>
          <li>
              <router-link to='/'>首页</router-link>
          </li>
          <li>
                <router-link to='/shoppingcar'>购物车</router-link>
           </li>
          <li>
              <router-link to='/mine'>我的</router-link>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'footerNav'
}
</script>
<style>
#footerNav{
    height:60px;
    width:100%;
    position: fixed;
    bottom:0;
}
#footerNav>ul{
    width:100%;
    height:100%;
    display: flex;
}
#footerNav>ul>li{
    flex: 1;
    text-align: center;
    height:60px;
    line-height: 60px;
}
</style>

