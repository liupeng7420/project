<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">增加</el-button>
    <el-dialog title="增加供应商" :visible.sync="dialogFormVisible">
        <el-form>
            <el-form-item label="全称" :label-width="formLabelWidth" >
            <el-input v-model="fullname"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="location" ></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="telephone" ></el-input>
            </el-form-item>
            <el-form-item label="图片" :label-width="formLabelWidth">
            <el-input v-model="img" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="add()">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>

<script>
// import { mapActions } from "vuex";
import axios from "axios";
export default {
  props:["show"],
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "100px",
      fullname: "",
      location: "",
      telephone: "",
      img: ""
    };
  },
  methods: {
    add() {
      // console.log(this.fullname);
      // console.log(this.location);
      // console.log(this.telephone);
      // console.log(this.img);
      axios({
        url: "/supplier",
        method: "post",
        params: {
          fullname: this.fullname,
          location: this.location,
          telephone: this.telephone,
          img: this.img
        }
      }).then((response) => {
        this.dialogFormVisible= false,
        this.fullname="",
        this.location="",
        this.telephone="",
        this.img="",
        this.show()
        // console.log(1232123);
        // console.log(response.data);

        
      });
    }
  }
};
</script>

<style scoped>
</style>
