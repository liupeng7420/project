<template>
    <div>
        <p class="font">未审核</p>
      <PfNotAuaitSearch></PfNotAuaitSearch>
      <PfNotAuaitTable></PfNotAuaitTable>
      <PfNotAuaitPage></PfNotAuaitPage>
  </div>
</template>
<script>
import PfNotAuaitPage from "./PfNotAuaitPage.vue";
import PfNotAuaitSearch from "./PfNotAuaitSearch.vue";
import PfNotAuaitTable from "./PfNotAuaitTable.vue";
import { createNamespacedHelpers } from "vuex";
const {mapActions} = createNamespacedHelpers('notAudit');
export default {
  components: {
    PfNotAuaitPage,
    PfNotAuaitSearch,
    PfNotAuaitTable
  },
  data: function() {
    return {};
  },
  created: function() {
    this.setPfNotAuditData();
  },
  methods: {
    ...mapActions(["setPfNotAuditData"])
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