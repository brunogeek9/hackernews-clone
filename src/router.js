import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Single from './components/Single'
import Article from './views/Article'
import Last from './views/New'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/last',
      name: 'last',
      component: Last
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/single',
      name: 'single',
      component: Single
    },
    {
      path: '/story/:id',
      name: 'story',
      component: Article
    }
  ]
})
