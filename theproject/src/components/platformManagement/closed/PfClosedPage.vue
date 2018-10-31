<template>
    <el-pagination
  background
  layout="prev, pager, next"
  class="page"
  :page-size="PfCloPagination.eachpage"
  :total="PfCloPagination.total"
  @current-change="changePage">
</el-pagination> 
</template>
<script>
    import { createNamespacedHelpers } from "vuex";
const {mapActions,mapState} = createNamespacedHelpers('closed');
export default {
    data(){
        return{} 
    },
  computed: {
    ...mapState(["PfCloPagination"])
  },
  methods:{
      changePage(page){
          this.setPfClosed({page})
      },
      ...mapActions(['setPfClosed'])
  }
};
</script>
<style scoped>
.page{
    text-align: center;
    margin-top: 20px;
}
</style>