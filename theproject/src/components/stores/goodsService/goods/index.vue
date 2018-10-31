<template>
  <div class="main">
    <nav class="nav">
      <Add :goods="goods" :pagenation="pagenation"></Add>
    </nav>
  <IndexDatas :datas="associated"  :pagenation="pages"></IndexDatas>
   <IndexPage ></IndexPage>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import { ElementUI } from "element-ui";
import IndexDatas from "./indexData.vue";
import Add from "./add.vue";
import IndexPage from "./indexPage.vue";
//注意点一

export default {
  data: function() {
    return {
      dpId:"storeId"
    };
  },
  methods: {
    ...mapActions("goods",["Ajs", "getGoods"])
  },
  mounted() {
    // console.log(1231,this.storeId);
    this.Ajs();
    this.getGoods({ id: this.storeId });
    console.log(this.associated);
    
  },
  computed: {
    ...mapState("goods",["goods", "pagenation", "associated","pages"]),
    ...mapState("service",["storeId"])
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
