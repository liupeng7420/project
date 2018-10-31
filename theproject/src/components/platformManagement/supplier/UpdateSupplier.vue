<template>
    <div>
            <el-button size="mini" type="primary" @click="updateData()">修改</el-button>

        <el-dialog title="增加供应商" :visible.sync="dialogVisible">
        <el-form>
            <el-form-item label="全称" :label-width="formLabelWidth" >
            <el-input v-model="datas.fullname"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="datas.location" ></el-input>
            </el-form-item>
            <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="datas.telephone" ></el-input>
            </el-form-item>
            <el-form-item label="图片" :label-width="formLabelWidth">
            <el-input v-model="datas.img" ></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="update()">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["show","ids"],
  data() {
    return {
      formLabelWidth: "100px",
      dialogVisible: false,
      datas:{}
    };
  },
  methods: {
    updateData() {
      let id = this.ids;
      this.dialogVisible = true;
      axios({
        url: "/supplier/" + id,
        method: "get"
      }).then(response => {
        // console.log(response.data);
        this.datas = response.data;
        // console.log(this.datas);
      })  
    },
    update() {
            console.log("id",this.datas._id);
            let id = this.datas._id;
        axios({
            url:"/supplier/" + id,
            method:"put",
            data:this.datas
        }).then((response)=>{
            this.dialogVisible= false;
            this.show();
        })
    }
  }
};
</script>
<style scoped>
</style>

