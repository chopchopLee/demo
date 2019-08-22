import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/Home'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/hello',
      children: [
        {
          path: '/hello',
          name: 'hello',
          component: HelloWorld
        },
        {
          path: '/test',
          name: 'test',
          component: Test
        }
      ]
    }
  ]
})
