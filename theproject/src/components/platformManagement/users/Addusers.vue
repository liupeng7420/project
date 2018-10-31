<template>
     <div id="add">
      <el-button type="text" @click="dialogVisible = true">增加新用户</el-button>
      <el-dialog
  title="增加新用户"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>
        账　号<input type="text" v-model="username.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        密　码<input type="text" v-model="pwd.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        手机号<input type="text" v-model="phone.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        邮　箱<input type="text" v-model="email.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        姓　名<input type="text" v-model="name.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        权　限<input type="text" v-model="role.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        验证码<input type="text" v-model="code.value" @blur="$emit('input',$event.target.value)">
        <p></p>
    
        <form action="condition">
            <input type="radio" name="condition" value="申请中" v-model="condition.value" @blur="$emit('input',$event.target.value)">申请中
            <input type="radio" name="condition" value="已审核" v-model="condition.value" @blur="$emit('input',$event.target.value)">已审核
            <input type="radio" name="condition" value="已关闭" v-model="condition.value" @blur="$emit('input',$event.target.value)">已关闭
        </form>
        <input type="button" value="增加" @click="usersAdd"><div>（可多次增加）</div>
        <p></p>
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </div>

    
</template>

<script>
import axios from "axios";

export default {
  props: ["show"],
  data() {
    return {
       
      username: {
        value: ""
      },
      pwd: {
        value: ""
      },
      phone: {
        value: ""
      },
      email: {
        value: ""
      },
      name: {
        value: ""
      },
      role: {
        value: ""
      },
      code:{
        value:""
      },
      condition: {
        value: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    usersAdd: function() {
      axios({
        method: "post",
        url: "/users/add",
        data: {
          username: this.username.value,
          pwd: this.pwd.value,
          phone: this.phone.value,
          email: this.email.value,
          name: this.name.value,
          role: this.role.value,
          code:this.code.value,
          condition: this.condition.value
        }
      }).then(() => {
        
        this.show();
        this.username.value = "";
        this.pwd.value = "";
        this.phone.value = "";
        this.email.value = "";
        this.name.value = "";
        this.role.value = "";
        this.code.value = "";
        this.condition.value = "";
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          
        })
        .catch(_ => {});
    }
  }
};
</script>



<style scoped>


.el-button--text>span{
  color: white;
}
.el-dialog{

}
.el-dialog__body {
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    line-height: 30PX;
}
</style>