<template>
  <div class="main">
  <el-popover
  placement="top"
  width="160"
  v-model="visible2">
  <el-input v-model="input" placeholder="请输入价格"></el-input>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
    <el-button type="primary" size="mini" @click="submit">增加</el-button>
  </div>
  <!-- <el-button slot="reference" icon="el-icon-circle-plus"></el-button> -->
   <el-button type="primary"  slot="reference" icon="el-icon-circle-plus" @click="adds" circle></el-button>
</el-popover>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    addGoods:null,
    commodity:null
  },
  data() {
    return {
      input: "",
      visible2: false
    };
  },
  methods: {
      submit(){
        this.addGoods(this.commodity,this.input) ;
          this.visible2 = false;
      },
    adds() {
      this.visible2 = true;
    }
  }
};
</script>


<style scoped>
.main {
  display: inline-block;
}
</style>
