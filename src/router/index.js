import Vue from 'vue'
import Router from 'vue-router'
import Photography from '@/components/Photography'
import Documentary from '@/components/Documentary'
import Information from '@/components/Information'
import About from '@/components/About'

import 'vue-awesome/icons/bars'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Router)
Vue.component('icon', Icon)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Photography',
      component: Photography
    },
    {
      path: '/documentary',
      name: 'Documentary',
      component: Documentary
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
