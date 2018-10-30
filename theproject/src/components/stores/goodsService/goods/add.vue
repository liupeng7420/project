<template>
<div class="mains">
     <el-button type="success" @click="dialogFormVisible = true" plain>新增</el-button>
      <el-dialog title="新增" :visible.sync="dialogFormVisible" class="adds">
  <el-form :model="form" label-width="80px">
    <el-form-item label="商品名称:">
    <el-input v-model="form.name" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="标题:">
    <el-input v-model="form.title" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="品类:">
    <el-input v-model="form.category" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="制作方法:">
    <el-input v-model="form.ProductionMethods" class="inputs"></el-input>
  </el-form-item>
   <el-form-item label="适用范围:">
    <el-input v-model="form.applicableSpecifications" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="专属规格:">
    <el-input v-model="form.exclusiveSpecifications" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="包装规格:">
    <el-input v-model="form.packingSpecification" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="口味:">
    <el-input v-model="form.taste" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="特殊功用:">
    <el-input v-model="form.specialFunction" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="产地:">
    <el-input v-model="form.origin" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="生产日期:">
    <el-input v-model="form.theDateOfProduction" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="保质期:">
    <el-input v-model="form.shelfLife" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="特色说明:">
    <el-input v-model="form.featuresThat" class="inputs"></el-input>
  </el-form-item>
 <el-form-item label="供应商:">
    <el-input v-model="form.supplier" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="基准价格:">
    <el-input v-model="form.thePrice" class="inputs"></el-input>
  </el-form-item>
  <div class="addimg">
  <p class="spans">选择照片：</p>
<el-upload
  class="avatar-uploader"
  action="/commodity/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</div>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitAdd()">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import axios from "axios";
import { ElementUI } from "element-ui";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("goods");
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
      imageUrl: '',
      form: {
        name: "商品名称",
        title: "标题",
        category: "品类",
        ProductionMethods: "制作方法",
        applicableSpecifications: "适用范围，大型犬，小型犬",
        exclusiveSpecifications: "专属规格:什么犬类专用",
        packingSpecification: "包装规格：1kg，5kg等",
        taste: "口味",
        specialFunction: "特殊功用",
        origin: "产地",
        theDateOfProduction: "生产日期",
        shelfLife: "保质期",
        featuresThat: "特色说明",
        supplier: "供应商",
        thePrice: "基准价格",
        img:""
      }
    };
  },
  methods: {
   handleAvatarSuccess(res, file) {
        console.log(file.response);    
        this.imageUrl = URL.createObjectURL(file.raw);
        this.form.img = file.response;
        
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
    submitAdd() {
      axios({
        method: "post",
        url: "/commodity/adds",
        data: {
          name: this.form.name,
          title: this.form.title,
          category: this.form.category,
          ProductionMethods: this.form.ProductionMethods,
          applicableSpecifications: this.form.applicableSpecifications,
          exclusiveSpecifications: this.form.exclusiveSpecifications,
          packingSpecification: this.form.packingSpecification,
          taste: this.form.taste,
          specialFunction: this.form.specialFunction,
          origin: this.form.origin,
          theDateOfProduction: this.form.theDateOfProduction,
          shelfLife: this.form.shelfLife,
          featuresThat: this.form.featuresThat,
          supplier: this.form.supplier,
          thePrice: this.form.thePrice,
          img: this.form.img
        }
      }).then(res => {
        let curpage = this.pagenation.curpage;
        this.Ajs({page:curpage});
      });
      console.log(this.form);
      this.dialogFormVisible = false;
    },
    ...mapActions(["Ajs"])
  },
   computed: {
    ...mapState(["pagenation"])
  }
};
</script>


<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.spans{
  display: inline-block;
  margin-top: 75px;
}
.avatar-uploader-icon {
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
.adds {
  width: 1500px;
  overflow: "scroll";
  margin: 0 auto;
}
.inputs {
  width: 600px;
}
.el-img {
  width: 100px;
  height: 100px;
}
.mains {
  overflow: "scroll";
}
.addimg{
  display:flex
}
</style>