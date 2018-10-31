<template>
  <el-table
    :data="indent"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="订单">
            <span>{{ props.row.indent }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.store }}</span>
          </el-form-item>
          <el-form-item label="订单总金额">
            <span>{{ props.row.sum}}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.grades }}</span>
          </el-form-item>
          <el-form-item label="评论">
            <span>{{ props.row.content }}</span>
          </el-form-item>
          <el-form-item label="评价性质">
            <span>{{ props.row.ate }}</span>
          </el-form-item>
          <el-form-item label="评价人">
            <span>{{ props.row.user }}</span>
          </el-form-item>
           <el-form-item label="时间">
            <span>{{ props.row.time }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单"
      prop="indent">
    </el-table-column>
    <el-table-column
      label="店铺"
      prop="store">
    </el-table-column>
    <el-table-column
      label="订单金额"
      prop="sum">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="grades">
    </el-table-column>
    <el-table-column
      label="性值"
      prop="ate">
    </el-table-column>
    <el-table-column
      label="评论人"
      prop="user">
    </el-table-column>
  </el-table>
</template>
<script>
     import { createNamespacedHelpers } from 'vuex'
  const { mapState,mapActions,mapMutations } = createNamespacedHelpers('indent')

  export default {
  methods: {
        ...mapActions(["setIndent"]),
  },
  created() {
      this.setIndent("小冲的店1")
  },
  computed: {
      ...mapState(["indent"])
  },
  components: {
  }
};
</script>
<style scoped>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand {
      display: flex;
      flex-wrap: wrap;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    display: flex;
    align-items: center;
  }
</style>