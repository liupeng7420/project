<template>
  <div id="logins">
    <h1 id="hone">欢迎使用XXX软件管理，请登录</h1>
    <p></p>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="ruleForm2.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pwd">
    <el-input type="password" v-model="ruleForm2.pwd" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="stores()">登陆</el-button>
    <el-button @click="reg()">注册</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from "axios";





export default {
  props:["admin"],
  data() {
    var checkusername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入登录账号"));
      } else {
        if (/[a-zA-Z0-9]{3,15}$/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确格式"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入登录密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm2: {
        pwd: "",
        username: ""
      },
      rules2: {
        username: [{ validator: checkusername, trigger: "blur" }],
        pwd: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    reg() {
      this.$router.push("/Reg");
    },
    stores() {
      axios({
        method: "get",
        url: "/users/login",
        params: {
          username: this.ruleForm2.username,
          pwd: this.ruleForm2.pwd
        }
      }).then(response => {
        if (response.data.status == 1) {
        console.log(response.data.status);
          
          this.$router.push("/Stores");

        }

        if (response.data.status == 2) {
          console.log(response.data.status);

          this.$router.push("/PlatftomMgt");

        } else if (response.data.status == 0) {
          console.log(response.data.status);
          alert("账号或密码错误");
        }
      });
    }
  },
  // computed:{
  //   isLogin(){
  //     //通过sessionstoreage获取vuex里isLogin的状态
  //     if(sessionStorage.getItem("userName") && sessionStorage.getItem("userToken")){
  //       this.$store.commit("userStatus",sessionStorage.getItem("userName"));
  //     }else{
  //       this.$store.commit("userStatus",null);
  //     }
  //     return this.$store.getters.isLogin;
  //   }
  // },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
  beforRouteEnter:(to,from,next)=>{
    //已登录状态回到登录界面，即 登出
    next(vm =>{
      vm.$store.dispath("setUser",null);
    })
  }
};
</script>

<style scoped>
#logins {
  width: 500px;
  
  position: fixed;
  right: 30PX;
  top:200PX;
  margin: auto;
  padding: 20px 20px 0 0;
}
#hone{
  width: 300PX;
  margin: 20PX auto;
}
</style>
