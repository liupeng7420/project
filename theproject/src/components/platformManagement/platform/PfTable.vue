<template>
  <el-table
    :data="PfStoreData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商铺名称:">
            <span>{{ props.row.stores.name }}</span>
          </el-form-item>
          <el-form-item label="法人:">
            <span>{{ props.row.stores.corp }}</span>
          </el-form-item>
          <el-form-item label="营业执照号码:">
            <span>{{ props.row.stores.licensenumber }}</span>
          </el-form-item>
          <el-form-item label="营业地址:">
            <span>{{ props.row.stores.licensesite }}</span>
          </el-form-item>
          <el-form-item label="电话:">
            <span>{{ props.row.stores.phone }}</span>
          </el-form-item>
          <el-form-item label="特色:">
            <span>{{ props.row.stores.feature }}</span>
          </el-form-item>
          <el-form-item label="VIP等级:">
            <span>{{ props.row.stores.viplevel }}</span>
          </el-form-item>
          <el-form-item label="佣金比例:">
            <span>{{ props.row.stores.commissionrate }}</span>
          </el-form-item>
          <!-- <el-form-item label="营业执照照片:">
            <img src="" alt="">
          </el-form-item>
          <el-form-item label="法人照片:">
            <img src="" alt="">
          </el-form-item> -->
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商铺名称"
      prop="stores.name">
    </el-table-column>
    <el-table-column
      label="法人"
      prop="stores.corp">
    </el-table-column>
    <el-table-column
      label="营业地址"
      prop="stores.licensesite">
    </el-table-column>
    <el-table-column
      label="VIP等级"
      prop="stores.viplevel">
    </el-table-column>
    <el-table-column
      label="佣金比例"
      prop="stores.commissionrate">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" class="btn">
  <el-button @click="addToClosed(scope.row)" class="refusedToBtn" type="danger" size="mini">添加到已关闭</el-button>
</template>
    </el-table-column>
  </el-table>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("platform");
export default {
  
  methods: {
    ...mapActions(["setPfStoreData","deleteAddClosed","addClosed"]),
    addToClosed(data) {
      console.log(data._id);
      console.log(data.stores._id)
      let deleteId = data._id
      let addClosedId = data.stores._id
      this.deleteAddClosed({deleteId});
      this.addClosed({addClosedId})
      this.setPfStoreData()
    }
  },
  created:function(){
       this.setPfStoreData()
    },
  computed: {
    ...mapState(["PfStoreData"])
  }
};
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>