<template>
  <el-container class="container">
    <el-header class="nav" height="100px" > 
       <img class="img">
       <span class="username">{{user.username}}</span>
       <el-button size="mini" type="danger" plain  @click="logout()">注销</el-button>
    </el-header>
    <el-main class="main">
    <el-col v-for="item in stores" :key="item" class="box"> 
        <el-card>
            <div slot="header" class="clearfix">
                <span>{{item.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="into(item._id)">进入店铺</el-button>
            </div>
            <div>
              地址：{{item.licensesite}}
            </div>
            <div>
              店长：{{item.clerk[0].name}}
              电话：{{item.clerk[0].phone}}
            </div>
    </el-card>
    </el-col>
    <el-col class="box-card">
     <el-card>
    <div class="add" @click="updatedialog(true)">+</div>
    </el-card>
</el-col>
   <DialogItem>
   </DialogItem>
    
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import DialogItem from "./DialogItem.vue";
import { mapState, mapActions, mapMutations  } from "vuex"; 
export default {
  data() {
    return {
      user:{}
    };
  },
  methods: {
    into(id) {
      this.setStoreId(id);
      this.$router.push("/manage");
    },
    logout() {
       axios({
        type: "get",
        url: "/users/removeSession"
      }).then(response => {
        this.$router.push("/");
        window.location.reload();
      });
    },
    ...mapMutations("stores",["updatedialog"]),
    ...mapActions("stores",["setStores"]),
    ...mapMutations("service",["setStoreId"])
  },
  created() {
    axios({
      type: "get",
      url: "/users/getSession"
    }).then(response => {
      this.setStores(response.data._id);
      this.user = response.data;
    });
  },
  computed: {
    ...mapState("stores",["stores", "dialogFormVisible"])
  },
  components: {
    DialogItem
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}
.nav {
  background: #0099cc;
  display: flex;
  align-items: center;
}
.img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
  background-color: white;
}
.username {
  margin: 0 10px;
  color: white;
  font-size: 24px;
}
.box-card {
  width: 340px;
  text-align: center;
  line-height: 100px;
  box-sizing: border-box;
  font-size: 80px;
}
.box {
  width: 350px;
  height: 200px;
  margin-right: 20px;
}
.main {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}
</style>
