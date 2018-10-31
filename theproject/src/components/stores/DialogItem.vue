<template>
  <el-dialog title="申请新门店" :visible="dialogFormVisible" @open="updatedialog(true)"  @close="updatedialog(false)">
  <el-form :model="form">
    <el-form-item label="门店名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="营业执照号码" :label-width="formLabelWidth">
      <el-input v-model="form.licensenumber" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="营业执照照片" :label-width="formLabelWidth">
    <el-upload
      class="avatar-uploader"
      action="/stores/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="form.licenseimg" :src="form.licenseimg" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</el-form-item>
    <el-form-item label="营业地址" :label-width="formLabelWidth">
      <el-input v-model="form.licensesite" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="法人" :label-width="formLabelWidth">
      <el-input v-model="form.corp" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="电话" :label-width="formLabelWidth">
      <el-input v-model="form.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="定位" :label-width="formLabelWidth">
      <el-input v-model="form.location" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="佣金比例" :label-width="formLabelWidth">
      <el-input v-model="form.commissionrate" autocomplete="off"></el-input>
    </el-form-item>
   <el-form-item label="店员信息" :label-width="formLabelWidth">
   <div>
      姓名： <el-input v-model="form.clerk[0].clerksname" autocomplete="off"></el-input>
      职位： <el-input v-model="form.clerk[0].clerkspost" autocomplete="off"></el-input>
      电话： <el-input v-model="form.clerk[0].clerksphone" autocomplete="off"></el-input>
   </div>
    </el-form-item>
    
   <el-form-item label="门店照片" :label-width="formLabelWidth">
    <el-upload
      class="avatar-uploader"
      action="/stores/upload"
      :show-file-list="false"
      :on-success="handleAvatar"
      :before-upload="beforeAvatarUpload">
      <img v-if="form.indeximg" :src="form.indeximg" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
</el-form-item>
 <el-form-item label="特色" :label-width="formLabelWidth">
      <el-input v-model="form.feature" autocomplete="off"></el-input>
    </el-form-item>
  
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="updatedialog(false)">取 消</el-button>
    <el-button type="primary" @click="add()">确 定</el-button>
  </div>
</el-dialog>

</template>
<script>
    import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapActions,mapMutations } = createNamespacedHelpers('stores')
export default {
  data(){
    return {
     imageUrl: '',
     form: {
            users:{
              $ref:"users",
              $id:"5bd96723d0c5335c80dfe2b5"
          },
          name: '',
          licensenumber: '',
          licensesite:"",
          licenseimg:"",
          corp: '',
          phone:"",
          location:"",
          commissionrate:"",
          clerk:[
            {
            clerksname:"",
            clerkspost:"",
            clerksphone:""
            }
          ],
          time:[0,0,0,0,0,0,0,0,0,0,0,0],
          indeximg:"",
          viplevel:'一级',
          feature:""
        },
        formLabelWidth: '100px'
    }
  },
        methods: {
          ...mapActions(["addstore"]),
          ...mapMutations(["updatedialog"]),
          handleAvatarSuccess(res, file, fileList) {
        this.form.licenseimg = URL.createObjectURL(file.raw);
      },
      handleAvatar(res, file, fileList) {
        this.form.indeximg = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      add(){
         this.addstore(this.form);
         this.updatedialog(false);
      }
    },
    computed: {
        ...mapState(["dialogFormVisible"])
    }
}

</script>
<style scoped>
.avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;

    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
    
</style>