<template>
  <div class="main">
    <nav class="nav">
      <Add :goods="goods" :pagenation="pagenation" :dpId="dpId"></Add>
    </nav>
  <IndexDatas :datas="associated" :DpId="this.dpId" :pagenation="pages"></IndexDatas>
   <IndexPage :dpsId="this.dpId"></IndexPage>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from "vuex";
import { ElementUI } from "element-ui";
const { mapState, mapActions } = createNamespacedHelpers("goods");
import IndexDatas from "./indexData.vue";
import Add from "./add.vue";
import IndexPage from "./indexPage.vue";
//注意点一

export default {
  data: function() {
    return {
      dpId: "5bd57b53e91085f327402c88"
    };
  },
  methods: {
    ...mapActions(["Ajs", "getGoods"])
  },
  mounted() {
    // console.log("初始化");
    this.Ajs();
    this.getGoods({ id: this.dpId });
  },
  computed: {
    ...mapState(["goods", "pagenation", "associated","pages"])
  },
  components: {
    // Datas,
    Add,
    IndexPage,
    IndexDatas
  }
};
</script>


<style scoped>
.main {
  width: 100%;
}
.nav {
  padding: 10px 20px;
  display: flex;
}
.el-select .el-input {
  width: 180px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
