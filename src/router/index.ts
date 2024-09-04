import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";
import { base } from "@/settings";

import { whiteList } from "./modules/white-list";
import { syncRoutes } from "./modules/sync-routers";

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    ...whiteList,
    ...syncRoutes,
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404"
    },
  ],
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded, savedPosition) {
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