import {
  createRouter,
  createWebHistory,
  RouteLocationNormalizedGeneric,
} from "vue-router";
import { base } from "@/settings";

import { whiteList } from "./modules/white-list";
import { menus } from "./modules/menus";

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    ...whiteList,
    ...menus
  ],
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