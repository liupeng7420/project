<template>
    <el-pagination
  background
  layout="prev, pager, next"
  class="page"
  :page-size="Pfpagination.eachpage"
  :total="Pfpagination.total"
  @current-change="changePage">
</el-pagination> 
</template>
<script>
    import { createNamespacedHelpers } from "vuex";
const {mapActions,mapState} = createNamespacedHelpers('platform');
export default {
    data(){
        return{} 
    },
  computed: {
    ...mapState(["Pfpagination"])
  },
  methods:{
      changePage(page){
          this.setPfStoreData({page})
      },
      ...mapActions(['setPfStoreData'])
  }
};
</script>
<style scoped>
.page{
    text-align: center;
    margin-top: 20px;
}
</style>