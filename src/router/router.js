import { createRouter, createWebHistory } from 'vue-router'

export default  createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/pages/HomeView.vue')
    },
    {
      name:'404',
      path:'/:patchMatch(.*)*',
      component:import('@/pages/404.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/AboutView.vue')
    }
  ]
})


