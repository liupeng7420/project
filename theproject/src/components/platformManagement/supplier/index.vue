<template>
  <div>
    <div class="supplierStyle">
      <addSupplier :show="showSupplier"></addSupplier>
    <div style="width:400px;margin-bottom:15px;margin-left:15px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
      <el-select style="width:100px;" v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="全称" value="fullname"></el-option>
        <el-option label="地址" value="location"></el-option>
        <el-option label="电话" value="telephone"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchBtn()"></el-button>
    </el-input>
    </div>
    </div>
  
    <el-table
    :data="supplier"
    style="width: 100%">

    <el-table-column
      label="全称"
      width="220">
      <template slot-scope="scope">
        <span>{{ scope.row.fullname }}</span>
      </template>
    </el-table-column>

<el-table-column
      label="地址"
      width="220">
      <template slot-scope="scope">
        <span>{{ scope.row.location }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="电话"
      width="220">
      <template slot-scope="scope">
        <span>{{ scope.row.telephone }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="图片"
      width="220">
      <template slot-scope="scope">
        <span>{{ scope.row.img }}</span>
      </template>
    </el-table-column>

    <el-table-column class="updateFlex" label="操作">
      <template slot-scope="scope">
        <updateSupplier :show="showSupplier" :ids="scope.row._id"></updateSupplier>
        <el-button
          size="mini"
          type="danger"
          @click="handleDeleteBtn(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- <pageSupplier></pageSupplier> -->

  </div>
</template>
<script>
import axios from "axios";
import addSupplier from "./AddSupplier";
import updateSupplier from "./UpdateSupplier";
// import pageSupplier from "./PageSupplier";
export default {
  components: {
    addSupplier,
    updateSupplier
    // pageSupplier
  },
  data() {
    return {
      input5: "",
      select: "",
      supplier: []
      // dialogVisible:false
    };
  },
  created() {
    this.showSupplier();
  },
  methods: {
    //渲染
    showSupplier() {
      axios({
        method: "get",
        url: "/supplier/supplier"
      }).then((response) => {
        // console.log(123231);
        // console.log(response.data[0]);
        this.supplier = response.data;
      });
    },
    //搜索查询
    searchBtn() {
      // console.log(1231231);
      // console.log(this.input5);
      // console.log(this.select);
      axios({
        method: "get",
        url: "/supplier/supplier",
        params: {
          value: this.input5,
          type: this.select
        }
      }).then(response => {
        // console.log(response.data);
        this.supplier = response.data;
      });
    },
    //删除
    handleDeleteBtn(id) {
      // console.log(123);
      // console.log(id);
      axios({
        method: "delete",
        url: "/supplier/" + id
      }).then(response => {
        console.log(response.data);
        this.showSupplier();
      });
    }
    // updatePopup(){
    //   this.$emit("update:dialogVisible", true);
    // }
  }
};
</script>

<style scoped>
.supplierStyle {
  display: flex;
}
.updateFlex{
  display: flex;
  width: 200px;
}
</style>