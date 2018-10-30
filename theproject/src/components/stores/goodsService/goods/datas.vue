  <template>
  <el-table
    :data="goods"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="商品名称"
     >
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
     >
    </el-table-column>
    <el-table-column
      prop="category"
      label="品类"
     >
    </el-table-column>
    <el-table-column
      prop="supplier"
      label="供应商"
     >
    </el-table-column>
     <el-table-column
      prop="thePrice"
      label="价格"
     >
    </el-table-column>
    <el-table-column
      label="......"
      width="100"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="170">
      <template slot-scope="scope">
          <ToView :goodsID="scope.row._id"></ToView>
          <Update :goodsID="scope.row._id"></Update>
          <el-button type="danger" icon="el-icon-delete"  @click="deletes(scope.row._id)" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import ToView from "./toView.vue";
import Update from "./update.vue";
import { Table, TableColumn, Button, Pagination } from "element-ui";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("goods");

export default {
  methods: {
    handleClick(id) {
      console.log(id);
    },
    deletes(id) {
        axios({
          method:"delete",
          url:"/commodity/"+id,
        }).then((res)=>{
        let curpage = this.pagenation.curpage;
        this.Ajs({page:curpage});
        })
    },
    ...mapActions(["Ajs"])
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["goods","pagenation"])

  },
   components: {
   Update,
   ToView
  }
};
</script>


<style scoped>
</style>
