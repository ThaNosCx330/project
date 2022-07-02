import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入全局的css样式
import '../assets/css/global.css'

// 引入登录的组件
import Login from '../components/Login'

// 引入home主页的组件
import Home from '../components/Home'

// 引入home页面的welcome主页
import Welcome from '../components/Welcome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  // 注册路由
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  // 主页路由
  {
    path: '/home',
    name: 'home',
    component: Home,

    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const newToken = window.sessionStorage.getItem('token')

  if (!newToken) {
    return next('/login')
  }

  next()
})

export default router
