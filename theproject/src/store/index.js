import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import stores from './modules/stores'
import service from './modules/service'
import goods from './modules/goods'



import indent from "./modules/indent";
=======
import stores from "./modules/stores"
import service from "./modules/service"
import goods from "./modules/goods"
import indent from "./modules/indent"
>>>>>>> 2db0f9573732a310fe4c924f41313c9197b2f4f2

import platform from './modules/platform'
import closed from './modules/closed'
import notAudit from './modules/notAudit'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    stores,
    service,
    goods,
    indent,
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
