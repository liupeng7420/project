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
      label="查看商品信息/添加商品"
      width="120"
     >
      <template slot-scope="scope">
          <ToView :goodsID="scope.row._id"></ToView>
            <Popover :addGoods="addGoods" :commodity="scope.row._id"></Popover>
          <!-- 价格弹窗 -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import ToView from "./toView.vue";
import Popover from './popover.vue';
import { Table, TableColumn, Button, Pagination } from "element-ui";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("goods");

export default {
  props: {
    goods: null,
    pagenation: null,
    dpId: null,
    downs: null
  },
  methods: {
    handleClick(id) {
      console.log(id);
    },
    addGoods(id,price) {
      let page=this.pages.curpage
      console.log(id,price);
      
      // // 新增店铺商品
      axios({
        method: "post",
        url: "/product",
        data: {
          commodity: {
            $ref: "commodity",
            $id: id
          },
          stores: {
            $ref: "stores",
            $id: this.dpId
          },price:price
        }
      }).then(res => {
        alert("新增成功");
        // this.downs();
        this.getGoods({id:this.dpId,page})
      });
    },
        ...mapActions(["Ajs","getGoods"])
  },
  computed: {
    ...mapState(['pages'])
  },
  components: {
    ToView,
    Popover
  }
};
</script>


<style scoped>
.caozuo {
  display: flex;
  justify-content: space-between;
}
</style>
