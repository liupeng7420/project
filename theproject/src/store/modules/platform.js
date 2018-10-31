import axios from "axios"
const state = {
    PfStoreData: [],
    Pfpagination: {}
}
const mutations = {
    setPfStoreData(state, PfStoreData) {
        state.PfStoreData = PfStoreData;
    },
    setPfpagination(state, Pfpagination) {
        state.Pfpagination = Pfpagination;
    }
}
const getters = {

}
const actions = {
    setPfStoreData({
        commit
      }, payload = {}) {
        axios({
            url: "/platform",
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
                ary.push(item)
            }
            commit("setPfStoreData", ary);
            commit("setPfpagination",response.data);
        });
    },
    deleteAddClosed({
        commit
      }, payload = {}) {
          console.log("payload",payload)
        axios({
            url: "/platform/"+payload.deleteId,
            method: "delete"
        }).then((response) => {
            console.log(response);
        });
    },
    addClosed({
        commit
      }, payload = {}) {
        axios({
            url: "/platform/add",
            method: "post",
            data:{id:payload.addClosedId}
        }).then((response) => {
            console.log(response);
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