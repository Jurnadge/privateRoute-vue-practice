import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/AuthStore";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Login from "../pages/Login.vue";

const routes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.name !== "Login" && !authStore.isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
