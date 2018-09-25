import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/Home').default
    },
    {
      path: '/event/periodic',
      name: 'create-periodic',
      component: require('@/components/Events/CreatePeriodic').default
    },
    {
      path: '/event/triggered',
      name: 'create-triggered',
      component: require('@/components/Events/CreateTriggered').default
    },
    {
      path: '/event/started',
      name: 'event-started',
      component: require('@/components/Events/EventStarted').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
