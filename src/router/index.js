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
      path: "/test",
      name: "test",
      component: () => import("/src/views/Hometest.vue"),
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: () => import("/src/views/Questionnaire.vue"),
    },
    {
      path: "/qtest",
      name: "qtest",
      component: () => import("/src/views/QTest.vue"),
    },
  ],
});

export default router;
