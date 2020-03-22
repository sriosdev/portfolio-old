import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from './views/AboutMe.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AboutMe
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router