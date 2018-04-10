<template>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="汉堡" name="second">汉堡</el-tab-pane>
    <el-tab-pane label="薯条" name="third">薯条</el-tab-pane>
    <el-tab-pane label="炸鸡" name="fourth">炸鸡</el-tab-pane>
    <el-tab-pane label="饮料" name="fifth">饮料</el-tab-pane>
    <el-tab-pane label="套餐1" name="sixth">套餐1</el-tab-pane>
    <el-tab-pane label="套餐2" name="seventh">套餐2</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name:'list',
  data(){
      return{
activeName:'first'
      }
  }
  
}
</script>
<style>

</style>
