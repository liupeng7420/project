import Vue from 'vue'
import Vuex from 'vuex'
import stores from "./modules/stores"
import service from "./modules/service"
import goods from "./modules/goods"
import platform from './modules/platform'
import closed from './modules/closed'
import notAudit from './modules/notAudit'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stores,
    service,
    goods,
    platform,
    closed,
    notAudit
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