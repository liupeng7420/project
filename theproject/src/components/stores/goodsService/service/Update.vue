
<template>
  <div>
    <el-dialog
  title="修改"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form>
  <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="serviceo.name"></el-input>
                </el-form-item>
                <el-form-item label="适用规格" :label-width="formLabelWidth">
                    <el-input v-model="serviceo.applicableSp"></el-input>
                </el-form-item>
                <el-form-item label="时间" :label-width="formLabelWidth">
                    <el-input v-model="serviceo.time"></el-input>
                </el-form-item>
<el-form-item label="服务员等级" :label-width="formLabelWidth">
      <el-radio-group v-model="serviceo.level">
        <el-radio-button label="一等"></el-radio-button>
         <el-radio-button label="二等"></el-radio-button>
          <el-radio-button label="三等"></el-radio-button>
         </el-radio-group>
         </el-form-item>
   <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model="serviceo.price"></el-input>
                </el-form-item>
                <el-form-item label="服务规格" :label-width="formLabelWidth">
   <el-radio-group v-model="serviceo.seviceSp">

        <el-radio-button label="普修"></el-radio-button>
         <el-radio-button label="精修"></el-radio-button>
         </el-radio-group>
         </el-form-item>
            <el-upload
            class="upload-demo"
            action="/service/upload"
            name="informationsUploadImg"
            :on-success="handlePreview"
            :limit="1"
            :on-remove="handleRemove"
            :file-list="[{name:'food.jpg',url:'http://127.0.0.1:3000/upload/service/'+serviceo.img}]"
            list-type="picture">
                <el-button size="small" type="primary">点击上传图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="()=>this.setDialogVisible(false)">取 消</el-button>
    <el-button type="primary" @click="updated(serviceo._id)">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>

import axios from "axios";
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions,mapmutations } = createNamespacedHelpers('service');

export default {
  data() {
      return {
          formLabelWidth: "100px",
          img:""
      };
    },
    //   beforeUpdate:function(){
    //    console.log("liuliuiu",this.$store.state.service.serviceo.level)
    //    this.levelValue=this.$store.state.service.serviceo.level
    //   console.log("123123")
    // //    console.log(this.service)
    //     // console.log(this.service.level)
    // },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(123123)
        this.img=file
        console.log(this.img)
      },
        updated:function(id){
          let img = "";
            if(this.img){
              img = this.img
            }else{
              img = this.serviceo.img
            }
         axios({
          url: "/service/"+this.serviceo._id,
          method: "put",
          params: {
            name:this.serviceo.name,
             applicableSp:this.serviceo.applicableSp,
              seviceSp:this.serviceo.seviceSp,
               time:this.serviceo.time,
                level:this.serviceo.level,
                 price:this.serviceo.price,
                img:img
          }
        }).then((response) => {
         this.setServices('5bd57ca0e91085f327402c8c');
        });
   
            this.setDialogVisible(false);
        },
      handleClose(done) {
        console.log(this.serviceo)
        this.$confirm('确认关闭？')
          .then(_ => {
            this.setDialogVisible(false);
          })
          .catch(_ => {});
      },
        ...mapActions(["setServices"]),
 ...mapActions(["setDialogVisible"])
    },
                    computed:{
        ...mapState(["dialogVisible"]),
        ...mapState(["serviceo"])
    },
            components: {

    }
}
</script>

<style>
#app {

}
  html,body,#app{
        height:100%;
    }
    router-view{
      height:100%;
    }
</style>
