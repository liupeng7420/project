<template>
    <el-container style="height:100%;">
       <div>
     <div>当前登录账号：{{this.userName}}</div>
    <input type="button" value="注销" @click="remove">
    </div>
  <el-header style="height:20%;" class="headerTitle">爱宠系统平台管理</el-header>
   
  <!-- <el-header style="height:20%;">平台管理</el-header> -->
  
  <el-container>
    <el-aside width="200px">
        <el-col>
    <el-menu
      @open="handleOpen"
      @close="handleClose"
        :router="true"
         :default-active="path"
        background-color="#d3dce6">
       <el-menu-item index="/PlatftomMgt/Users">
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/PlatftomMgt/SpoilMain">
        <span slot="title">宠主管理</span>
      </el-menu-item>
      <el-menu-item index="/PlatftomMgt/Supplier">
        <span slot="title">供应商管理</span>
      </el-menu-item>
      
        <el-submenu index="/PlatftomMgt/Platform">
          <template slot="title">门店审核管理</template>
          <el-menu-item index="/PlatftomMgt/Platform/Platfrom">已审核</el-menu-item>
          <el-menu-item index="/PlatftomMgt/Platform/Closed">已关闭</el-menu-item>
          <el-menu-item index="/PlatftomMgt/Platform/NotAuait">未审核</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import axios from "axios";




export default {
  data() {
    return {
      userName: ""
    };
  },

  created() {
    axios({
      type: "get",
      url: "/users/getSession"
    }).then(response => {
      this.userName = response.data.username;
    });
  },
  methods: {
    remove() {
      axios({
        type: "get",
        url: "/users/removeSession"
      }).then(response => {
        this.$router.push("/");
        window.location.reload();
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
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
  line-height: 0;
  padding: 0;
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
.headerTitle{
  font-size: 30px;
  color: rgb(255, 254, 254);
}
</style>
