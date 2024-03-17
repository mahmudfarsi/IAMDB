import { createRouter, createWebHistory } from 'vue-router'

export default  createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: import('@/pages/HomeView.vue')
    },
    {
      name:'movie',
      path:'/movie',
      component:import('@/pages/MovieView.vue')
    },
    {
      name:'404',
      path:'/:pathMatch(.*)*',
      component:import('@/pages/404.vue')
    }
  ]
})


