import Vue from 'vue'
import VueRouter from 'vue-router'
import FillWorkDay from '@/views/FillWorkDay.vue'
import Home from '@/views/Home.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Authentication from '@/views/Authentication'
import CreateArticles from '@/views/CreateArticles.vue'

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
  },
  {
    path: '/work-days',
    name: 'WorkDays',
    component: FillWorkDay,
  },
  {
    path: '/create-article',
    name: 'CreateArticle',
    component: CreateArticles,
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

export default router
