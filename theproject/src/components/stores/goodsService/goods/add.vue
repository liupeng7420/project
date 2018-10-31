<template>
<div class="mains">
     <el-button type="success" @click="dialogFormVisible = true" plain>商品上架</el-button>
      <el-dialog title="全部商品信息" :visible.sync="dialogFormVisible" class="adds">
   <div style="margin-bottom: 15px" class="navs">
     <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
     <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:90px;">
        <el-option label="全部" value=""></el-option>
        <el-option label="商品名" value="name"></el-option>
        <el-option label="标题" value="title"></el-option>
        <el-option label="产地" value="origin"></el-option>
         <el-option label="供应商" value="supplier"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="CX"></el-button>
  </el-input>
</div>
        <Datas :goods="goods" :pagenation="pagenation" :downs="down"></Datas>
        <Page :name="select" :value="input5" :pagenation="pagenation"></Page>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">关闭</el-button>
    <!-- <el-button type="primary" @click="submitAdd()">确 定</el-button> -->
  </div>
</el-dialog>
</div>
</template>

<script>
import axios from "axios";
import { ElementUI } from "element-ui";
import Datas from "./datas.vue";
import Page from "./page.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("goods");
export default {
  props: {
    goods: null,
    pagenation: null,
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogVisible: false,
        input5: "",
        select: "",
    };
  },
  methods: {
    CX() {
      console.log(this.input5,this.select);
      
      let page = this.pagenation.curpage;
      this.Ajs({ page,name:this.select,value:this.input5 });
    },
    down() {
      this.dialogFormVisible = false;
    },
    // submitAdd() {
    //   axios({
    //     method: "post",
    //     url: "/commodity/adds"
    //   }).then(res => {
    //     let curpage = this.pagenation.curpage;
    //     this.Ajs({ page: curpage });
    //   });
    //   console.log(this.form);
    //   this.dialogFormVisible = false;
    // },
    ...mapActions(["Ajs"])
  },
  computed: {
    ...mapState(["pagenation", "goods"])
  },
  components: {
    Datas,
    Page
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
.navs {
  width: 50%;
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
.addimg {
  display: flex;
}
.el-select .el-input {
  width: 100px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 100px;
}
</style>