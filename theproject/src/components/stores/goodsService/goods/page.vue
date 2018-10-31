<template>
<!-- 商品添加 -->
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
  props: {
    name: null,
    value: null,
    pagenation: ""
  },
  methods: {
    before() {
      let name = this.names;
      let value = this.value;
      let curpage = this.pagenation.curpage - 1;
      this.Ajs({ page: curpage, name, value });
    },
    after() {
      let name = this.names;
      let value = this.value;
      let curpage = this.pagenation.curpage + 1;
      this.Ajs({ page: curpage, name, value });
    },
    pages(page) {
      let name = this.names;
      let value = this.value;
      this.Ajs({ page, name, value });
    },
    ...mapActions(["Ajs"])
  }
  // computed: {
  //   ...mapState(["pagenation"])
  // }
};
</script>


<style scoped>
</style>