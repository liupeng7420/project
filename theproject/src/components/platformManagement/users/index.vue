<template>
  <div>
    <div id="fuwu">
<Addusers :show="show" id="add"></Addusers>
   <div id="sc">
  <el-input placeholder="请输入内容" v-model="content" class="input-with-select" >
    <el-select v-model="select" slot="prepend" placeholder="请选择"  style="width:120PX">
      <el-option label="姓名" value="name" ></el-option>
      <el-option label="手机号" value="phone" ></el-option>
      <el-option label="状态" value="condition" ></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="clickSc()"></el-button>
  </el-input>
</div>
    </div>
    
  <el-table
    :data="tableData"
    style="width: 100%">

    <!-- 姓名 -->
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>

     <!-- 店铺状态 -->
    <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.condition }}</el-tag>
          </div>
      </template>
    </el-table-column>

    <!-- 手机号 -->
    <el-table-column
      label="手机号"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.phone }}</el-tag>
          </div>
      </template>
    </el-table-column>

    <!-- 邮箱 -->
    <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.email }}</el-tag>
          </div>
      </template>
    </el-table-column>

    <!-- 账户信息 -->
    <el-table-column
      label="账户信息"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>账号：{{scope.row.username}}</p>
          <p>密码：{{scope.row.pwd}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium"  id="search">{{ "查看" }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <!-- 标签 -->
    <el-table-column
      prop="tag"
      label="标签(筛选)"
      width="150"
      :filters="[{ text: '平台管理员', value: '平台管理员' }, { text: '门店管理员', value: '门店管理员' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.role === '平台管理员' ?  'success':'primary' "
          disable-transitions>{{scope.row.role}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
       <Upusers :id="scope.row._id" :show="show"></Upusers>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>

      </template>
    </el-table-column>
  </el-table> 
  <!-- 分页 -->
  <div class="block">
    <span class="demonstration"></span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5, 15, 20, 25,30]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>



<script>
import axios from "axios";
import Addusers from "./Addusers.vue";
import Upusers from "./Upusers.vue";
// import Scusers from "./Scusers.vue";

export default {
  data() {
    return {
      username: {
        value: ""
      },
      pwd: {
        value: ""
      },
      phone: {
        value: ""
      },
      email: {
        value: ""
      },
      name: {
        value: ""
      },
      role: {
        value: ""
      },
      condition: {
        value: ""
      },
      tableData: [],

      visible2: false,

      dialogVisible: false,
      page: 0,
      rows: 0,
      total: "",
      content: "",
      select: ""
    };
  },
  components: {
    Addusers,
    Upusers
  },
  methods: {
    //搜索
    clickSc() {
      let b;
      if (this.select == "name") {
        b = "name";
      } else if (this.select == "phone") {
        b = "phone";
      } else {
        b = "condition";
      }
      axios({
        method: "get",
        url: "/users/show",
        params: {
          type: b,
          value: this.content
        }
      }).then(response => {
        if (response.data.length > 0) {
          console.log(response.data);
          this.tableData = response.data;
        } else {
          alert("未查询到相关信息");
        }
      });
    },
    //点击修改
    handleEdit(index, row) {
      // console.log(index, row._id);
    },
    //关闭弹窗
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
          this.show();
        })
        .catch(_ => {});
    },

    //删除
    handleDelete(index, row) {
      // console.log(index, row);
      axios({
        method: "delete",
        url: "/users/dele",
        data: {
          id: row._id
        }
      }).then(() => {
        this.show();
      });
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.role === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    show(page = 1, rows = 5) {
      axios({
        method: "get",
        url: "/users/show",
        params: {
          page,
          rows
        }
      }).then(response => {
        console.log(response.data.total);
        this.tableData = response.data.rows;
        this.total = response.data.total;
      });
    },
    handleSizeChange(val) {
      console.log(` ${val} 条/页`);
      this.rows = val;
      this.show(1, val);
    },
    handleCurrentChange(val) {
      console.log(`每页 ${val} 条`);
      this.page = val;
      this.show(val, 5);
    }
  },
  created() {
    this.show();
    axios({
      type: "get",
      url: "/users/getSession"
    }).then(response => {
      this.admin = response.data;
      console.log(this.admin);
    });
  }
};
</script>
<style scoped>
.el-main[data-v-1dfd3629] {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 0px;
}
.has-gutter {
  line-height: 0px;
}
.el-table__header-wrapper {
  line-height: 0px;
}
th > .cell {
  line-height: 0px;
}
#search {
  background-color: #ffcccc;
  color: #ff6666;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
#sc {
  width: 500px;
}
#fuwu{
  display: flex;
  flex: start;
  align-items:center;
}
#add{
  line-height: 20PX;
  widows: 200PX;
  background-color: #ffffff;
  height: 38PX;
  display: inline-block;
  float: left;
  border:1PX solid #dddddd;
  border-radius: 5PX;
  
  margin-right: 10PX;
}
</style>