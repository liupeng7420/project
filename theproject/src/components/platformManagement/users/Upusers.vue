<template>
     <div id="up">
       <el-button
          size="mini"
          @click="dialogVisible = true">编辑</el-button>
      <el-dialog
  title="编辑账号"
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
        验证码<input type="text" v-model="code.value" @blur="$emit('input',$event.target.value)">
        <p></p>
        
    
        <form action="condition">
            <input type="radio" name="condition" value="申请中" v-model="condition.value" @blur="$emit('input',$event.target.value)">申请中
            <input type="radio" name="condition" value="已审核" v-model="condition.value" @blur="$emit('input',$event.target.value)">已审核
            <input type="radio" name="condition" value="已关闭" v-model="condition.value" @blur="$emit('input',$event.target.value)">已关闭
            
        </form>
        <input type="button" value="修改" @click="usersUp">
        <p></p>
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确认修改</el-button>
  </span>
</el-dialog>
    </div>

    
</template>

<script>
import axios from "axios";
export default {
  props: ["id", "show"],
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
      code: {
        value: ""
      },
      role: {
        value: ""
      },
      condition: {
        value: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    upshow() {
      //   console.log(this.id);
      axios({
        method: "get",
        url: "/users/edit",
        params: {
          id: this.id
        }
      }).then(data => {
        // console.log(data.data);
        this.username.value = data.data.username;
        this.pwd.value = data.data.pwd;
        this.phone.value = data.data.phone;
        this.email.value = data.data.email;
        this.name.value = data.data.name;
        this.role.value = data.data.role;
        this.condition.value = data.data.condition;
        this.code.value = data.data.code;
      });
    },
    usersUp: function() {
      console.log(this.id);
      axios({
        method: "put",
        url: "/users/put",
        data: {
          id: this.id,
          username: this.username.value,
          pwd: this.pwd.value,
          phone: this.phone.value,
          email: this.email.value,
          name: this.name.value,
          role: this.role.value,
          condition: this.condition.value,
          code: this.code.value
        }
      }).then(() => {
        this.show();
        console.log("修改成功");
        dialogVisible: false;
       
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  created() {
    this.upshow();
  }
};
</script>



<style scoped>
#up {
  display: inline-block;
}
</style>