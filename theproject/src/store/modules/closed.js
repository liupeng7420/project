import axios from "axios"
const state = {
    PfClosed: [],
    PfCloPagination: {}
}
const mutations = {
    setPfClosed(state, PfClosed) {
        state.PfClosed = PfClosed;
    },
    setPfCloPagination(state, PfCloPagination) {
        state.PfCloPagination = PfCloPagination;
    }
}
const getters = {

}
const actions = {
    setPfClosed({
        commit
      }, payload = {}) {
        axios({
            url: "/closures",
            method: "get",
            params: {
                value: payload.value,
                type: payload.type,
                page: payload.page || 1,
                rows: payload.rows || 5
            }
        }).then((response) => {
            let ary = [];
            for (let item of response.data.rows) {
                ary.push(item.stores)
            }
            commit("setPfClosed", ary);
            commit("setPfCloPagination",response.data);
        });
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}