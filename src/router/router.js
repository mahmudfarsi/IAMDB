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
      name:'detail',
      path:'/detail',
      component:import('@/pages/DetailMovies.vue')
    },
    {
      name:'404',
      path:'/:pathMatch(.*)*',
      component:import('@/pages/404.vue')
    }
  ]
})


