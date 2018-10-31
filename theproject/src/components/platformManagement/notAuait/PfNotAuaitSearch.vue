<template>
    <div>
        <div style="margin-top: 15px;width: 530px;">
  <el-input placeholder="请输入内容" v-model="value" class="input1">
    <el-select v-model="type" class="select" slot="prepend" placeholder="请选择">
      <el-option label="商铺名称" value="name"></el-option>
      <el-option label="法人" value="corp"></el-option>
      <el-option label="电话" value="phone"></el-option>
      <el-option label="营业执照号码" value="licensenumber"></el-option>
      <el-option label="营业地址" value="licensesite"></el-option>
      <el-option label="特色" value="feature"></el-option>
      <el-option label="VIP等级" value="viplevel"></el-option>
      <el-option label="佣金比例" value="commissionrate"></el-option>
    </el-select>
    <el-button slot="append" @click="searchStore(value,type)" icon="el-icon-search"></el-button>
  </el-input>
</div>
    </div>    
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const {mapActions} = createNamespacedHelpers('notAudit');
export default {
  data(){
    return {
        value:'',
        type: 'name'
    }
  },
  methods: {
    searchStore: function(value,type) {
      this.setPfNotAuditData({value,type});
      this.value = '';
      
    },
    ...mapActions(["setPfNotAuditData"])
  }
};
</script>
<style scoped>
.select {
  width: 180px;
}
.input1{
    width: 600px;
}
</style>