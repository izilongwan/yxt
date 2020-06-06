import City from '@/view/City'
import Detail from '@/view/Detail'
import Index from '@/view/Index'
import List from '@/view/List'
import Search from '@/view/Search'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { index: 0 }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta: { index: 2 }
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta: { index: 1 }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { index: 1 }
    },
    {
      path: '/city',
      name: 'city',
      component: City,
      meta: { index: -1 }
    }
  ]
})
