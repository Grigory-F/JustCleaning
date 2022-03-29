import Vue from 'vue'
import VueRouter from 'vue-router'
import { authModule } from '../store/store-module/authModule.js'
import FillWorkDay from '@/views/FillWorkDay'
import Home from '@/views/Home'
import PageNotFound from '@/views/PageNotFound'
import Authentication from '@/views/Authentication'
import CreateArticles from '@/views/CreateArticles'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Authentication',
    component: Authentication,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/work-days',
    name: 'WorkDays',
    component: FillWorkDay,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    component: CreateArticles,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound,
  }, {
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
    if (authModule.getters.isLoggedIn) {
      next()
      return
    }
    next('/auth')
  } else {
    next()
  }
})

export default router
