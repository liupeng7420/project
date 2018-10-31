

<template>
  <div class="fenye">
<el-container style="height:100%;">
  <el-header style="height:20%;">这里是分页卡</el-header>
  <el-container>
    <el-aside width="200px">
     <el-menu :default-openeds="['1', '3']" router="true">
        <el-menu-item-group>

          <el-menu-item index="/manage/Goods">去商品</el-menu-item>
          <el-menu-item index="/manage/Service">去服务</el-menu-item>
          <el-menu-item index="/manage/indent">订单管理</el-menu-item>
          <el-menu-item index="/manage/Statitics">数据统计</el-menu-item>

        </el-menu-item-group>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view> </router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import axios from "axios";
 import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapMutations } = createNamespacedHelpers('service')
export default {
        methods: {
          ...mapMutations(["setStoreId"])
        },
        created:function(){
           this.setStoreId(this.$route.query.id)
           console.log(this.$route.query)
        }
}
</script>

<style scoped>
.fenye,body,html{
    width:100%;
    height:100%;
}
  .el-header {
    width:100%;
    height:200px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    padding:0;
    background-color: #E9EEF3;
    color: #333;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
