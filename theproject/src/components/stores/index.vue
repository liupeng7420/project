<template>
  <div>
  <p>这是店铺管理</p>
<button @click="manage()">去分页</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
        methods: {
manage(){
    this.$router.push("/manage");
}
        }
}
</script>


<style scoped>

</style>
