<template>
  <div id="regs">
    <h1 id="hone">账号注册</h1>
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <!-- 账号 -->
   <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="ruleForm2.username"></el-input>
  </el-form-item>
   <!-- 密码 -->
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <!-- 手机号 -->
   <el-form-item label="手机号" prop="phone">
    <el-input type="text" v-model="ruleForm2.phone"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input type="text" v-model="ruleForm2.email"></el-input>
  </el-form-item>
  <!-- 姓名 -->
  <el-form-item label="姓名" prop="name">
    <el-input type="text" v-model="ruleForm2.name"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-input v-model.number="ruleForm2.code"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
    <el-button @click="reset()">返回</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (/[a-zA-Z0-9]{3,15}$/.test(value)) {
          axios({
            method: "get",
            url: "/users/validate",
            params: {
              username: value
            }
          }).then(response => {
            if (response.data.status == 0) {
              callback(new Error("账号重复"));
            } else {
              callback();
            }
          });
        } else {
          callback(new Error("请输入正确格式"));
        }
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (/^1\d{10}$/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确格式"));
        }
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else {
        if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确格式"));
        }
      }
    };
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        if (/^\w{4,15}$/.test(value) || value == "admin") {
          callback();
        } else {
          callback(new Error("请输入4-15位"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        username: "",
        name: "",
        pass: "",
        checkPass: "",
        code: "",
        phone: "",
        email: "",
        role:""
      },
      rules2: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        name: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: "/users/reg",
            data: {
              username: this.ruleForm2.username,
              phone: this.ruleForm2.phone,
              pwd: this.ruleForm2.pass,
              name: this.ruleForm2.name,
              code: this.ruleForm2.code,
              email:this.ruleForm2.email,
              role: "门店管理员",
              condition: "申请中"
            }
          }).then(() => {
            alert("注册成功!");
            this.$router.push("/");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    reset(){
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
#regs {
  width: 500px;
  position: fixed;
  right:30PX;
  top:40PX;
  margin: auto;
  padding: 20px 20px 0 0;
}
#hone{
  width: 300PX;
  margin: 20PX auto;
}
</style>
