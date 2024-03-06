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
      path: "/presentation",
      name: "presentation",
      component: () => import("/src/views/Presentation.vue"),
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: () => import("/src/views/Questionnaire.vue"),
    },
  ],
});

export default router;
