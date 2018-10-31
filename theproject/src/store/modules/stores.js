
import axios from "axios"
const state = {
    stores: [],
    addstore:{},
    dialogFormVisible:false
}
const mutations = {
    setStores(state,stores){
        state.stores=stores
    },
    updatedialog(state,dialogFormVisible){
          state.dialogFormVisible=dialogFormVisible
    },
    addStore(state,addstore){
         state.addstore=addstore
    }
}
const getters = {

}
const actions = {
    setStores({
        commit
    }, id) {
        axios({
            method: "get",
            url: "/stores/" + id
        }).then((response) => {
            console.log(response);
            
            commit("setStores", response.data);
        })
    },
    addstore({
        commit
    }, addstore) {
        axios({
            method: "post",
            url: "/stores",
            data:addstore
        }).then((response) => {
            console.log(response.data);
            commit("addStore", response.data);
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}