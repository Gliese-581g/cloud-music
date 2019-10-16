import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './components/Recommend'
import TopList from './components/TopList'
import Singer from "./components/Singer"
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: TopList
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
  ]
})
