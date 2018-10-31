<template>
  <el-table
    :data="PfNotAuditData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商铺名称:">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="法人:">
            <span>{{ props.row.corp }}</span>
          </el-form-item>
          <el-form-item label="营业执照号码:">
            <span>{{ props.row.licensenumber }}</span>
          </el-form-item>
          <el-form-item label="营业地址:">
            <span>{{ props.row.licensesite }}</span>
          </el-form-item>
          <el-form-item label="电话:">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="特色:">
            <span>{{ props.row.feature }}</span>
          </el-form-item>
          <el-form-item label="VIP等级:">
            <span>{{ props.row.viplevel }}</span>
          </el-form-item>
          <el-form-item label="佣金比例:">
            <span>{{ props.row.commissionrate }}</span>
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
      prop="name">
    </el-table-column>
    <el-table-column
      label="法人"
      prop="corp">
    </el-table-column>
    <el-table-column
      label="营业地址"
      prop="licensesite">
    </el-table-column>
    <el-table-column
      label="VIP等级"
      prop="viplevel">
    </el-table-column>
    <el-table-column
      label="佣金比例"
      prop="commissionrate">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" class="btn">
  <el-button @click="through(scope.row)" class="throughBtn" type="success" size="mini">通过审核</el-button>
  <el-button @click="refusedTo(scope.row._id)" class="refusedToBtn" type="danger" size="mini">拒绝通过审核</el-button>
</template>
    </el-table-column>
  </el-table>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("notAudit");
export default {
  methods: {
    ...mapActions(["setPfNotAuditData","throughTheReview","refuseToPass"]),
    through(value){
      this.throughTheReview(value);
      this.setPfNotAuditData()
    },
    refusedTo(id) {
      this.refuseToPass({id});
      this.setPfNotAuditData()
    }
  },
  created:function(){
       this.setPfNotAuditData()
    },
  computed: {
    ...mapState(["PfNotAuditData"])
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
.btn {
  display: flex;
}
.throughBtn {
  width: 60px;
  font-size: 12px;
  padding-left: 5px;
}
.refusedToBtn {
  width: 80px;
  font-size: 12px;
  padding-left: 2px;
}
</style>