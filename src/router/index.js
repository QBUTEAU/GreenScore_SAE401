import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Presentation from '/src/views/Presentation.vue'

const app = createApp()

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/presentation',
      name: 'Presentation',
      component: Presentation,
    }
  ]
})

app.use(router)

export default router
