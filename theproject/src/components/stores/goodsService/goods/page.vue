<template>
<div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="pagenation.total"
  :page-size="pagenation.eachpage"
  @prev-click="before"
  @next-click="after"
  @current-change="pages"
  >
</el-pagination>
</div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
import { ElementUI } from "element-ui";
const { mapState, mapActions } = createNamespacedHelpers("goods");
export default {
  methods: {
    before() {
      let curpage = this.pagenation.curpage - 1;
      this.Ajs({ page: curpage });
    },
    after() {
      let curpage = this.pagenation.curpage + 1;
      this.Ajs({ page: curpage });
    },
    pages(page){
         this.Ajs({ page});
    },
    ...mapActions(["Ajs"])
  },
  computed: {
    ...mapState(["pagenation"])
  }
};
</script>


<style scoped>
</style>