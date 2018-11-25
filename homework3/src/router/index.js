import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Welcome from '@/components/Welcome'
import WordLadder from '@/components/WordLadder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/WordLadder',
      name: 'WordLadder',
      component: WordLadder
    }
  ]
})
