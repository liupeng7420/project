<template>
    <el-pagination
  background
  layout="prev, pager, next"
  class="page"
  :page-size="PfNotAuditPagination.eachpage"
  :total="PfNotAuditPagination.total"
  @current-change="changePage">
</el-pagination> 
</template>
<script>
    import { createNamespacedHelpers } from "vuex";
const {mapActions,mapState} = createNamespacedHelpers('notAudit');
export default {
    data(){
        return{} 
    },
  computed: {
    ...mapState(["PfNotAuditPagination"])
  },
  methods:{
      changePage(page){
          this.setPfNotAuditData({page})
      },
      ...mapActions(['setPfNotAuditData'])
  }
};
</script>
<style scoped>
.page{
    text-align: center;
    margin-top: 20px;
}
</style>