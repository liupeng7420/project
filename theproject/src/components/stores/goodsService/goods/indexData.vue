 <template>
  <el-table
    :data="datas"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="commodity.name"
      label="商品名称"
     >
    </el-table-column>
    <el-table-column
      prop="commodity.title"
      label="标题"
     >
    </el-table-column>
    <el-table-column
      prop="commodity.category"
      label="品类"
     >
    </el-table-column>
    <el-table-column
      prop="price"
      label="售价"
     >
    </el-table-column>
     <el-table-column
      prop="commodity.thePrice"
      label="进价"
     >
    </el-table-column>
    <el-table-column
      label="......"
      width="100"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="查看商品信息/删除商品"
      width="120"
     >
      <template slot-scope="scope">
          <ToView :goodsID="scope.row.commodity._id"></ToView>
          <el-button type="primary" icon="el-icon-delete" @click="deleteGoods(scope.row._id)"  circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>

<script>
import axios from "axios";
import ToView from "./toView.vue";
import { createNamespacedHelpers } from "vuex";
import { ElementUI } from "element-ui";
const { mapState, mapActions } = createNamespacedHelpers("goods");
export default {
  props: {
    datas: null,
    pagenation: null,
    DpId: null
  },
  methods: {
    handleClick(id) {
      console.log(this.DpId);
    },
    deleteGoods(id) {
      // console.log(this.pagenation);
       let page = this.pagenation.curpage;
      axios({
        method: "delete",
        url: "/product/"+id,
      }).then(res => {
          this.getGoods({id:this.DpId,page})
        alert("已删除");
      });
    },
...mapActions(["getGoods"])
  },
  data() {
    return {};
  },
  components: {
    ToView
  }
};
</script>


<style scoped>
.caozuo {
  display: flex;
  justify-content: space-between;
}
</style>
