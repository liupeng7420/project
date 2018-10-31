
<template>
  <div>
    <el-dialog
  title="增加"
  :visible.sync="dialogFormVisible"
  width="30%"
  :before-close="handleClose">
  <el-form>
  <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="适用规格" :label-width="formLabelWidth">
                    <el-input v-model="applicableSp"></el-input>
                </el-form-item>
                <el-form-item label="时间" :label-width="formLabelWidth">
                    <el-input v-model="time"></el-input>
                </el-form-item>
<el-form-item label="服务员等级" :label-width="formLabelWidth">
      <el-radio-group v-model="level">
        <el-radio-button label="一等"></el-radio-button>
         <el-radio-button label="二等"></el-radio-button>
          <el-radio-button label="三等"></el-radio-button>
         </el-radio-group>
         </el-form-item>
   <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model="price"></el-input>
                </el-form-item>
                <el-form-item label="服务规格" :label-width="formLabelWidth">
   <el-radio-group v-model="seviceSp">

        <el-radio-button label="普修"></el-radio-button>
         <el-radio-button label="精修"></el-radio-button>
         </el-radio-group>
         </el-form-item>
              <el-upload
              :limit="1"
              class="upload-demo"
              action="/service/upload"
              :on-success="handlePreview"
              :on-remove="handleRemove"
              name="informationsUploadImg"
               :file-list="[]"
              list-type="picture">
                  <el-button size="small" type="primary">点击上传图片</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>

  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="()=>this.setDialogFormVisible(false)">取 消</el-button>
    <el-button type="primary" @click="addUpdated()">确 定</el-button>
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
            name:"",
            applicableSp:"",
            seviceSp:"", 
            time:"",
            level:"",
            price:"",
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
        this.img=file
      },
        addUpdated:function(){
          console.log(this.storeId)
         axios({
          url: "/service",
          method: "post",
          data: {
              stores:this.storeId,
                name:this.name,
                applicableSp:this.applicableSp,
                seviceSp:this.seviceSp,
                time:this.time,
                level:this.level,
                price:this.price,
                img:this.img 
          }
        }).then((response) => {
         this.setServices();
          this.name="";
          this.applicableSp="";
          this.seviceSp="";
          this.time="";
          this.level="";
          this.price="";
          this.img=""
        });
  this.setDialogFormVisible(false);
        },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.setDialogFormVisible(false);
          })
          .catch(_ => {});
      },
        ...mapActions(["setServices"]),
 ...mapActions(["setDialogFormVisible"])
    },
                    computed:{
        ...mapState(["dialogFormVisible","storeId"])
        // ...mapState(["serviceo"])
    },
            components: {

    }
}
</script>

<style scoped>
  html,body,#app{
        height:100%;
    }
    router-view{
      height:100%;
    }
</style>