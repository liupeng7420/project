
import axios from "axios"
const state = {
    indent:[]
}
const mutations = {
    setIndent(state,indent){
        state.indent=indent
    },
}
const getters = {

}
const actions = {
    setIndent({
        commit
    }, storeId) {
        axios({
            method: "get",
            url: "/indent",
            params:{
                storeId,
            }
        }).then((response) => {
            console.log(response.data);
            commit("setIndent", response.data);
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}