<template>
    <el-container style="height:100%;">
  <el-header style="height:20%;">平台管理</el-header>
  <el-container>
    <el-aside width="200px">
        <el-col>
    <el-menu
        :router="true" :default-active="path"
        background-color="#d3dce6">
        <el-menu-item-group>
          <el-menu-item index="/PlatftomMgt/Users">用户管理</el-menu-item>
          <el-menu-item index="/PlatftomMgt/Platfrom">平台管理</el-menu-item>
          <el-menu-item index="/PlatftomMgt/SpoilMain">宠主管理</el-menu-item>
          <el-menu-item index="/PlatftomMgt/Supplier">供应商管理</el-menu-item>
        </el-menu-item-group>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
        <router-view> </router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
