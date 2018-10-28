<template>
  <div id="logins">
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
   <el-form-item label="手机号" prop="phone">
    <el-input type="text" v-model="ruleForm2.phone"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
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
        data() {
            var checkPhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
               if(/^1\d{10}$/.test(value)){
                    callback();
                    }else{
                       callback(new Error('请输入正确格式'));
                    }
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
         
          callback();
        }
      };
 
      return {
        ruleForm2: {
          pass: '',
          phone:''
        },
        rules2: {
                phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
        methods: {

reg(){
this.$router.push("/Reg");
},
stores(){
this.$router.push("/Stores");
}
        },
             resetForm(formName) {
        this.$refs[formName].resetFields();
      }
}
</script>


<style scoped>
#logins{
width:500px;
 border: 1px solid red;
  margin: auto;
  padding:20px 20px 0 0;
}
</style>
