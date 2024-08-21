import {
  createRouter,
  createWebHistory,
  RouteLocationNormalizedGeneric,
} from "vue-router";
import { base } from "@/settings";

const router = createRouter({
  history: createWebHistory(base),
  routes: [],
  scrollBehavior(to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: "smooth",
      };
    }
  }
})

export default router;