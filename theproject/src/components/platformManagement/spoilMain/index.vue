<template>
  <div>
<div style="width:400px; margin-top: 15px;margin-bottom:15px;">
  <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
    <el-select style="width:100px;" v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="电话" value="phone"></el-option>
      <el-option label="昵称" value="nickname"></el-option>
      <el-option label="真实姓名" value="name"></el-option>
      <el-option label="会员卡" value="mmbcard"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="searchBtn()"></el-button>
  </el-input>
</div>

    <el-table
    :data="spoilMain"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="宠物名">
            <span>{{ props.row.pet[0].petname }}</span>
          </el-form-item>
          <el-form-item label="品类">
            <span>{{ props.row.pet[0].breed }}</span>
          </el-form-item>
          <el-form-item label="种类">
            <span>{{ props.row.pet[0].type }}</span>
          </el-form-item>
          <el-form-item label="颜色">
            <span>{{ props.row.pet[0].color }}</span>
          </el-form-item>
          <el-form-item label="出生日期">
            <span>{{ props.row.pet[0].bordate }}</span>
          </el-form-item>
          <el-form-item label="性格">
            <span>{{ props.row.pet[0].nature }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    
    <el-table-column
      label="昵称"
      prop="nickname">
    </el-table-column>
    <el-table-column
      label="电话"
      prop="phone">
    </el-table-column>
    
    <el-table-column
      label="姓名"
      prop="name">
    </el-table-column>
    
    <el-table-column
      label="会员卡"
      prop="mmbcard">
    </el-table-column>

    <el-table-column
      label="头像"
      prop="headchart">
    </el-table-column>

    <el-table-column
      label="送货地址"
      prop="givelocation">
    </el-table-column>

    <el-table-column
      label="区域"
      prop="region">
    </el-table-column>

    <el-table-column
      label="积分"
      prop="integral">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input5: "",
      select: "",
      spoilMain: []
    };
  },
  created() {
    this.showPetsKeepers();
  },
  methods: {
    showPetsKeepers() {
      axios({
        method: "get",
        url: "/spoilMain/spoilMain",
        params: {
          page: 1,
          rows: 5
        }
      }).then(response => {
        // console.log(response.data.rows[0]);
        this.spoilMain = response.data.rows;
      });
    },
    searchBtn() {
      // console.log(1231231);
      console.log(this.input5);
      console.log(this.select);
      axios({
        method: "get",
        url: "/spoilMain/spoilMain",
        params: {
          value: this.input5,
          type: this.select
        }
      }).then(response => {
        console.log(response.data);
        this.spoilMain = response.data;
      });
    }
  },
  computed: {}
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
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>