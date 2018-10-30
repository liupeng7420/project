<template>
<div class="mains">
    <el-button type="primary" icon="el-icon-edit" @click="update(goodsID)"  circle></el-button>
      <el-dialog title="修改" :visible.sync="dialogFormVisible" class="adds">
  <el-form :model="updates" label-width="80px">
    <el-form-item label="商品名称:">
    <el-input v-model="updates.name" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="标题:">
    <el-input v-model="updates.title" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="品类:">
    <el-input v-model="updates.category" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="制作方法:">
    <el-input v-model="updates.ProductionMethods" class="inputs"></el-input>
  </el-form-item>
   <el-form-item label="适用范围:">
    <el-input v-model="updates.applicableSpecifications" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="专属规格:">
    <el-input v-model="updates.exclusiveSpecifications" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="包装规格:">
    <el-input v-model="updates.packingSpecification" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="口味:">
    <el-input v-model="updates.taste" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="特殊功用:">
    <el-input v-model="updates.specialFunction" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="产地:">
    <el-input v-model="updates.origin" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="生产日期:">
    <el-input v-model="updates.theDateOfProduction" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="保质期:">
    <el-input v-model="updates.shelfLife" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="特色说明:">
    <el-input v-model="updates.featuresThat" class="inputs"></el-input>
  </el-form-item>
 <el-form-item label="供应商:">
    <el-input v-model="updates.supplier" class="inputs"></el-input>
  </el-form-item>
  <el-form-item label="基准价格:">
    <el-input v-model="updates.thePrice" class="inputs"></el-input>
  </el-form-item>
    <!-- 图片 -->
  </el-form>
    <div class="addimg">
  <p class="spans">选择照片：</p>
<el-upload
  class="avatar-uploader"
  action="/commodity/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="updates.img" :src="/upload/+updates.img" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
</div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitupdate(updates._id)">确 定</el-button>
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
  props: {
    goodsID: null
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      console.log(file);
    },
    update(id) {
      this.getId(id);
      this.dialogFormVisible = true;
    },
    submitupdate(id) {
      console.log(this.updates);

      axios({
        method: "put",
        url: "/commodity/" + id,
        data: this.updates
      }).then(res => {
        this.dialogFormVisible = false;
        let curpage = this.pagenation.curpage;
        this.Ajs({ page: curpage });
      });
    },
    handleAvatarSuccess(res, file) {
      this.updates.img = file.response;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    ...mapActions(["Ajs", "getId"])
  },
  computed: {
    ...mapState(["updates", "pagenation"])
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
.spans {
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
  width: 1600px;
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
  display: inline-block;
}
.spans {
  display: inline-block;
  margin-top: 75px;
}
.addimg {
  display: flex;
}
</style>