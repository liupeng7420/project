import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login/index.vue'
import Reg from './components/reg/index.vue'
import Stores from './components/stores/index.vue'
import Manage from './components/stores/goodsService/manage/index.vue'
import Goods from './components/stores/goodsService/goods/index.vue'
import Service from './components/stores/goodsService/service/index.vue'
import Indent from './components/stores/goodsService/indent/index.vue'
import Statitics from './components/stores/goodsService/Statitics/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Stores',
      name: 'Stores',
      component: Stores
    },
    {
      path: '/Manage',
      component: Manage,
      children: [{
          path: 'Goods',
          component: Goods
        },
        {
          path: 'Service',
          component: Service
        },
        {
          path: 'Indent',
          component: Indent
        },
        {
          path: 'Statitics',
          component: Statitics
        }
      ]
    }
  ]
})
