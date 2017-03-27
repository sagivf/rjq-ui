import Vue from 'vue'
import Router from 'vue-router'

// Components
import Queues from 'components/Queues'
import Queue from 'components/Queue'
import Home from 'components/Home'
import JobsHome from 'components/JobsHome'
import Servers from 'components/Servers'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: Home },
    { name: 'queues', path: '/queues', component: Queues },
    { name: 'queue', path: '/queues/:id/:status?', component: Queue },
    { name: 'jobs', path: '/jobs', component: JobsHome },
    { name: 'servers', path: '/servers', component: Servers }
  ]
})
