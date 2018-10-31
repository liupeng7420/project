<template>
  <div id="apps">

    <el-table
    :data="services"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="名称"
      >
    </el-table-column>
    <el-table-column
      prop="applicableSp"
      label="适用规格"
    >
    </el-table-column>
    <el-table-column
      prop="seviceSp"
      label="服务规格"
      >
    </el-table-column>
   <el-table-column
      prop="time"
      label="时间"
      >
    </el-table-column>
       <el-table-column
      prop="level"
      label="服务等级"
      >
    </el-table-column>
       <el-table-column
      prop="price"
      label="价格"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="open7(scope.row._id)" type="text" size="small">删除</el-button>
        <el-button @click="showById(scope.row._id,true)" type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
// import Update from "./Update.vue";
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions } = createNamespacedHelpers('service');
export default {
     created:function(){
        this.setServices('5bd57ca0e91085f327402c8c');
    },
        methods: {
        open7(id) {
        this.$confirm('此操作将永久删除该服务, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
                        axios({
            method:"delete",
            url:"/service/"+id,
        }).then(() =>{
           this.setServices('5bd57ca0e91085f327402c8c');
        });
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
       showById: function(id,State) {
            this.setDialogVisible(State),
            this.setServiceo(id);
        },
        ...mapActions(["setServiceo"]),
           ...mapActions(["setServices"]),
           ...mapActions(["setDialogVisible"])
        },
            computed:{
        ...mapState(["services"])
    },
        components: {
          // Update
    }
}
</script>


<style scoped>
#apps{
  width:100%;
    height:100%;
}
</style>
