<template>
    <div>
      <p class="font">已审核</p>
      <PfSearch></PfSearch>
      <PfTable></PfTable>
      <PfPage></PfPage>
  </div>
</template>
<script>
import PfPage from "./PfPage.vue";
import PfReviseStore from "./PfReviseStore.vue";
import PfSearch from "./PfSearch.vue";
import PfTable from "./PfTable.vue";
import { createNamespacedHelpers } from "vuex";
const {mapActions} = createNamespacedHelpers('platform');
export default {
  components: {
    PfPage,
    PfReviseStore,
    PfSearch,
    PfTable
  },
  data: function() {
    return {};
  },
  created: function() {
    this.setPfStoreData();
  },
  methods: {
    ...mapActions(["setPfStoreData"])
  },
  computed: {}
};
</script>
<style scoped>
.font{
  color: rgb(14, 168, 14);
  text-align: center;
  font-size: 28px;
}
</style>
