import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'

import StartDummy from './views/StartDummy'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      name: 'start_dummy', path: '/start_dummy',
      components: { default: StartDummy }
    }
  ]
})
