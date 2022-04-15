import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import FillWorkDay from '@/views/FillWorkDay'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound'
import Base from '@/views/Base'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Authentication',
    component: () => import('@/views/Authentication'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/base',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/base',
        name: 'Base',
        component: Base,
      },
      {
        path: '/work-days',
        name: 'WorkDays',
        component: FillWorkDay,
      },
      {
        path: '/create-article',
        name: 'CreateArticle',
        component: () => import('@/views/CreateArticles'),
      },
    ]
  },

  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/auth')
  } else {
    next()
  }
})

export default router
