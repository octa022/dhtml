import Vue from 'vue'
import Router from 'vue-router'
import ui from './components/uieditor/container.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ui',
      component: ui
    }
  ]
})
