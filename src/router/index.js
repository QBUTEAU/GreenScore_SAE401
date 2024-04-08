import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("/src/views/Home.vue"),
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: () => import("/src/views/Questionnaire.vue"),
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import("/src/views/Notice.vue"),
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import('/src/views/LeaderTest.vue')
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('/src/views/DefenseTest.vue')
    },
    {
      path: '/test3',
      name: 'test3',
      component: () => import('/src/views/ActeurTest.vue')
    },
    {
      path: '/test4',
      name: 'test4',
      component: () => import('/src/views/NoviceTest.vue')
    }
  ],
});

export default router;
