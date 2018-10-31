import axios from "axios"
const state = {
    PfNotAuditData: [],
    PfNotAuditPagination: {}
}
const mutations = {
    setPfNotAuditData(state, PfNotAuditData) {
        state.PfNotAuditData = PfNotAuditData;
    },
    setPfNotAuditPagination(state, PfNotAuditPagination) {
        state.PfNotAuditPagination = PfNotAuditPagination;
    }
}
const getters = {

}
const actions = {
    setPfNotAuditData({
        commit
      }, payload = {}) {
        axios({
            url: "/applyfor",
            method: "get",
            params: {
                value: payload.value,
                type: payload.type,
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then((response) => {
            commit("setPfNotAuditData", response.data.rows);
            commit("setPfNotAuditPagination",response.data);
        });
    },
    throughTheReview({
        commit
      }, value) {
        axios({
            url: "/applyfor/add",
            method: "post",
            data:value
        }).then((response) => {
            console.log(response)
        });
    },
    refuseToPass({
        commit
      }, payload = {}) {
        axios({
            url: "/applyfor/"+payload.id,
            method: "delete"
        }).then((response) => {
            console.log(response)
        });
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}