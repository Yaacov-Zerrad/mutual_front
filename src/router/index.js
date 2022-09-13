import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CategoryView from '../views/CategoryView.vue'
import MyAccount from '../views/account/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title: 'בית'
    }
  },
  {
    path: '/my-account',
    name: 'my-account',
    component: MyAccount,
    meta:{
      title: 'חשבון שלי'
    }
  },
  {
    path: '/category/:category_slug',
    name: 'category',
    component: CategoryView,
    props:true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, ) =>{
  if (to.params.category_slug != ''){

  }
})
router.afterEach((to) =>{
  // name of title
  if (to.params.category_slug != ''){
    document.title = to.params.category_slug  + ' | MutualAid'
  } else if (to.meta.title != '') {
    document.title =  to.meta.title   + ' | MutualAid'
  } 
})


export default router
