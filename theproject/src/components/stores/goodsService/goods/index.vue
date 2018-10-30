<template>
  <div class="main">
    <nav class="nav">
      <Add></Add>
     <div style="margin-left: 25px">
  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:90px;">
      <el-option label="商品名" value="name"></el-option>
      <el-option label="标题" value="title"></el-option>
      <el-option label="产地" value="origin"></el-option>
       <el-option label="供应商" value="supplier"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="CX"></el-button>
  </el-input>
</div>
    </nav>
  <Datas></Datas>
  <Page></Page>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
import { ElementUI } from "element-ui";
const { mapState, mapActions } = createNamespacedHelpers("goods");
import Datas from "./datas.vue";
import Add from "./add.vue";
import Page from "./page.vue"
//注意点一

export default {
  data: function() {
    return {
       input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  },
  methods: {
    CX(){
      console.log(this.select,this.input5);
     this.Ajs({name:this.select,value:this.input5})
      
    },
    ...mapActions(["Ajs"])
  },
  mounted() {
    this.Ajs();
    // console.log(this.goods);
  },
  computed: {
    ...mapState(["goods","pagenation"])
  },
  components: {
    Datas,
    Add,
    Page
  }
};
</script>


<style scoped>
.main {
  width: 100%;
}
.nav {
  padding: 10px 20px;
  display: flex;
}
.el-select .el-input {
    width: 180px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
