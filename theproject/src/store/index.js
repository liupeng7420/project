import Vue from 'vue'
import Vuex from 'vuex'
import stores from "./modules/stores"
import service from "./modules/service"
import goods from "./modules/goods"
import indent from "./modules/indent"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stores,
    service,
    goods,
    indent
  },
  state: {

  },
  mutations: {
  },
  getters: {
   
  },
  actions: {
   
  }
})