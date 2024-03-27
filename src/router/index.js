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
    }
  ],
});

export default router;
