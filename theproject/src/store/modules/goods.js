
import axios from "axios"
const state = {
    goods:[],
    pagenation:{},
    updates:{},
    associated:[],
    pages:{}
}
const mutations = {
    CommodityInformation (state, goods) {
        // console.log(123,goods)
        state.goods = goods
        // console.log(state);
        
      },
      setPage(state, pages){
        state.pages = pages
      },
      setPagenation (state, pagenation) {
    
        // console.log(pagenation)
        state.pagenation = pagenation
      },
      Associated(state, associated){
        state.associated = associated
        //  console.log(state);
      },
      updates(state,data){
        // console.log(data)
        state.updates = data
        //  console.log(state);
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
      },
      getGoods ({
        commit
      } ,payload = {}) {
        axios.get('/product', {
          params: {
            id: payload.id || '',
            page: payload.page || 1,
            rows: payload.rows || 5,
            key:payload.key ||'',
            value:payload.value ||'',
          }
        }).then((res) => {
          console.log(payload.id ,'关联数据',res.data);  
          // commit('updates', res.data)
          commit('Associated',res.data[0]);
          commit('setPage',res.data[1]);
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