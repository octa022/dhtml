import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import prueba from './components/prueba/prueba.vue';
import example1 from './components/prueba/prueba.vue';



Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/prueba',
      name: 'prueba',
      component: prueba
    },
    {
      path: '/example1',
      name: 'example1',
      component: example1
    },
  ]
})
