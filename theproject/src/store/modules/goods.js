
import axios from "axios"
const state = {
    goods:[],
    pagenation:{},
    updates:{}
}
const mutations = {
    CommodityInformation (state, goods) {
        // console.log(goods)
        state.goods = goods
        // console.log(state);
        
      },
      setPagenation (state, pagenation) {
        console.log(pagenation)
        state.pagenation = pagenation
      },
      updates(state,data){
        // console.log(data)
        state.updates = data
         console.log(state);
      }
     
}
const getters = {
 
}
const actions = {
      Ajs ({
        commit
      }, payload = {}) {
        axios.get('/commodity', {
          params: {
            name: payload.name || '',
            value: payload.value || '',
            page: payload.page || 1,
            rows: payload.rows || 5
          }
        }).then((response) => {
          commit('CommodityInformation', response.data.rows)
          commit('setPagenation', response.data)
        })
      },
      getId ({
        commit
      }, id) {
        // console.log(id);
        axios.get('/commodity/'+id, {
        }).then((res) => {
          // console.log(res);  
          commit('updates', res.data)
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