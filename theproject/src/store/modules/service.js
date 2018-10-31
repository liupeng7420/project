
import axios from "axios";
const state = {
    storeId:"",
    services:[],
    serviceo:{},
    pagination: {},
    dialogVisible:false,
    dialogFormVisible:false
}
const mutations = {
  setStoreId(state,storeId){
    state.storeId=storeId;
  },
    setServices(state, services) {
        state.services = services;
    },
    setServiceo(state, serviceo) {
        state.serviceo = serviceo;
    },
    setDialogVisible(state,dialogVisible){
        state.dialogVisible=dialogVisible;
      },
      setDialogFormVisible(state,dialogFormVisible){
        state.dialogFormVisible=dialogFormVisible;
      },
      setPagination(state, pagination) {
        state.pagination = pagination;
    },
}
const getters = {

}
const actions = {
    setServices({
      state,
        commit,
        dispatch
      },payload = {}) {
        console.log("mendian",state.storeId)
        axios({
          url: "/service",
          method: "get",
          params: {
            id:state.storeId,
            type:payload.type,
            value:payload.value,
            page: payload.page || 1,
            rows: payload.rows || 8
          }
        }).then((response) => {
          commit("setServices",response.data.rows);
          commit("setPagination", response.data);
        });
      },
      setServiceo({
        commit
      },id) {
        axios({
          url: "/service/"+id,
          method: "get",
        }).then((response) => {
          commit("setServiceo",response.data);
        });
      },
      setDialogVisible({
        commit
      },a){
        commit("setDialogVisible",a)
      },
      setDialogFormVisible({
        commit
      },a){
        commit("setDialogFormVisible",a)
      },
}
export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}