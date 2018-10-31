<template>
  <div>
  <el-input placeholder="请输入搜索内容" v-model="input5" class="input-with-select">
    <el-select v-model="type" slot="prepend" placeholder="请选择" style="width:100px;">
      <el-option label="名称" value="name"></el-option>
      <el-option label="适用规格" value="applicableSp"></el-option>
      <el-option label="服务规格" value="seviceSp"></el-option>
      <el-option label="时间" value="time"></el-option>
      <el-option label="服务员等级" value="level"></el-option>
      <el-option label="价格" value="price"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="search(type,input5)"></el-button>
  </el-input>
</div>
</template>

<script>
import axios from "axios";
// import {  mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions } = createNamespacedHelpers('service');
export default {
    data: function() {
        return {
            input5:'',
            type: ''
        };
    },
    methods:{
        search(type,value){
            this.setServices({type,value});
        },
           ...mapActions(["setServices"]),
    },
   
    components: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
