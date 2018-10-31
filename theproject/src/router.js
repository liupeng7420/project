import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login/index.vue'
import Reg from './components/reg/index.vue'
import Stores from './components/stores/index.vue'
import Manage from './components/stores/goodsService/manage/index.vue'
import Goods from './components/stores/goodsService/goods/index.vue'
import Service from './components/stores/goodsService/service/index.vue'
import PlatftomMgt from './components/platformManagement/index.vue'
import Users from './components/platformManagement/users/index.vue'
import Platfrom from './components/platformManagement/platform/index.vue'
import SpoilMain from './components/platformManagement/spoilMain/index.vue'
import Supplier from './components/platformManagement/supplier/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Stores',
      component: Stores
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
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
      }
      ]
    },
    {
      path: '/PlatftomMgt',
      component: PlatftomMgt,
      children: [{
        path: 'Users',
        component: Users
      },
      {
        path: 'Platfrom',
        component: Platfrom
      },
      {
        path: 'SpoilMain',
        component: SpoilMain
      },
      {
        path: 'Supplier',
        component: Supplier
      }]
    }
  ]
})
