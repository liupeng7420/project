<template>
<div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="pages.total"
  :page-size="pages.eachpage"
  @current-change="updatapage"
  >
</el-pagination>
  <!-- @prev-click="before" -->
  <!-- @next-click="after" -->
</div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
import { ElementUI } from "element-ui";
const { mapState, mapActions } = createNamespacedHelpers("goods");
export default {
  props: {
    dpsId: null,
    // name:null,
    // value:null
  },
  methods: {
    // before() {
    //   let page = this.pages.curpage;
    //   // console.log(this.pages.curpage);
    //     // this.getGoods({ id: this.dpsId,paeg});
    //   // this.getGoods({ id: this.dpsId, page,key:this.name,value:this.value});
    // },
    // after() {
    //   let page = this.pages.curpage;
    //   // console.log(this.pages.curpage);
    //     // this.getGoods({ id: this.dpsId,paeg});
    //   // this.getGoods({ id: this.dpsId, page,key:this.name,value:this.value});
    // },
    updatapage(page) {
      console.log(page);
      this.getGoods({ id: this.dpsId,page});
    },
    ...mapActions(["getGoods"])
  },
  computed: {
    ...mapState(["pages"])
  }
};
</script>


<style scoped>
</style>