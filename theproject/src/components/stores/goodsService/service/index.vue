<template>
  <div id="app">
<div class="hear">
    <el-row>  
    <el-button plain @click="addButton(true)">增加服务类型</el-button>
  
</el-row>
  <search />
  </div>
<add></add>
  <Update />
      <serviceTable />
      <page></page>
  </div>
</template>

<script>
import axios from "axios";
import serviceTable from "./serviceTable.vue";
import Update from "./Update.vue";
import add from "./add.vue";
import page from "./page.vue";
import search from "./search.vue";
import { createNamespacedHelpers } from 'vuex';
const { mapState,mapActions } = createNamespacedHelpers('service');
export default {
  
        methods: {
addButton:function(State){
this.setDialogFormVisible(State)
},
 ...mapActions(["setDialogFormVisible"])
        },
                  computed:{

    },
          components: {
        serviceTable,
        Update,
        add,
        page,
        search
    }
}
</script>


<style scoped>
#app{
  width:100%;
  height:100%;
}
.hear{
  width:100%;
  display:flex;
 padding:10px;
}
</style>
