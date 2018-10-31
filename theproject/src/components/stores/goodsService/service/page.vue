<template>
    <div>
  <el-pagination
    layout="prev, pager, next"
    :page-size="pagination.eachpage"
    :total="pagination.total"
    @current-change="forward"
    >
  </el-pagination>
    </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState,mapActions } = createNamespacedHelpers("service");
export default {
    data() {
        return {};
    },
    methods: {
     forward(page){
            this.setServices({page});
        },
        prev(){
            this.setServices({page:this.pagination.curpage - 1});
        },
        next(){
            this.setServices({page:parseInt(this.pagination.curpage) + 1});
        },
        ...mapActions(["setServices"])
    },
    computed: {
        ...mapState(["pagination"])
    },
    components: {}
};
</script>
<style scoped>
.page {
    text-align: right;
    margin-top: 20px;
}
</style>

