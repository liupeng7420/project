<template>
  <div>
  <p>这是店铺管理</p>
<button @click="manage()">去分页</button>
<button @click="platftomMgt()">去平台管理</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    manage() {
      this.$router.push("/manage");
    },
    platftomMgt() {
      this.$router.push("/PlatftomMgt");
    }
  }
};
</script>

<style scoped>
</style>
