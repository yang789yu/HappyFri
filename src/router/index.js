import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import HomeIndex from '../pages/home/HomeIndex'
import ItemIndex from '../pages/item/ItemIndex'
import ScoreIndex from '../pages/score/ScoreIndex'



Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    // component: resolve => require(['../pages/home/HomeIndex'],resolve)
    component:HomeIndex
  },
  {
    path:'/item',
    // component: resolve => require(['../pages/item/ItemIndex'],resolve)
    component:ItemIndex
  },
  {
    path:'/score',
    // component: resolve => require(['../pages/score/ScoreIndex',resolve])
    component:ScoreIndex
  }
    
  

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
