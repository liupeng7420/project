<template>
  <div id="logins">
    <h1>欢迎使用XXX软件管理，请登录</h1>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <el-form-item label="手机号" prop="username">
    <el-input type="text" v-model="ruleForm2.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="stores">登陆</el-button>
    <el-button @click="reg()">注册</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from "axios";
export default {
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
        pass: "",
        username: ""
      },
      rules2: {
        username: [{ validator: checkusername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    reg() {
      this.$router.push("/Reg");
    },
    stores:function() {
      axios({
        method: "get",
        url: "/users/login",
        params: {
          username: this.ruleForm2.username,
          pwd: this.ruleForm2.password
        }
      }).then(res => {
        if (res.data.status == 1) {
          this.$router.push("/Stores")
        } else if (res.data.status == 2) {
          this.$router.push("/PlatftomMgt");
        } else {
          alert("账号或密码错误");
        }
      });
    }
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  }
};
</script>

<style scoped>
#logins {
  width: 500px;
  border: 1px solid red;
  margin: auto;
  padding: 20px 20px 0 0;
}
</style>
