import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import register from './views/register.vue'
import upload from './views/upload.vue'
import about from './views/About.vue'
import mainbar from './components/mainbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children : [{
        path :'/about/:id',
        name : 'article',
        component : mainbar
      }]
    },
    {
      path : '/upload',
      name : 'upload',
      component : upload
    },
    {
      path : '/register',
      name : 'register',
      component : register
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        children : [{
          path :'/about/:id',
          name : 'article',
          component : mainbar
        }]
    }
  ]
})
