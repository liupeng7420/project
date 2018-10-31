<template>
    <div>
      <p class="font">已关闭</p>
      <PfClosedSearch></PfClosedSearch>
      <PfClosedTable></PfClosedTable>
      <PfClosedPage></PfClosedPage>
  </div>
</template>
<script>
import PfClosedPage from "./PfClosedPage.vue";
import PfClosedSearch from "./PfClosedSearch.vue";
import PfClosedTable from "./PfClosedTable.vue";
import { createNamespacedHelpers } from "vuex";
const {mapActions} = createNamespacedHelpers('closed');
export default {
  components: {
    PfClosedPage,
    PfClosedSearch,
    PfClosedTable
  },
  data: function() {
    return {};
  },
  created: function() {
    this.setPfClosed();
  },
  methods: {
    ...mapActions(["setPfClosed"])
  },
  computed: {}
};
</script>
<style scoped>
.font{
  color: red;
  text-align: center;
  font-size: 28px;
}
</style>