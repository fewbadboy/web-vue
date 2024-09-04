import { ItemType, MenuProps } from "ant-design-vue";
import { SubMenuType } from "ant-design-vue/es/menu/src/interface";
import { defineStore } from "pinia";
import { computed, h, ref } from "vue";
import { RouteRecordRaw } from "vue-router";
import { syncRoutes } from "@/router/modules/sync-routers";
import { asyncRoutes } from "@/router/modules/async-routers";

import {
  createFromIconfontCN,
} from "@ant-design/icons-vue";
import iconFont from "@/utils/iconfont?url";
const IconFont = createFromIconfontCN({
  scriptUrl: iconFont,
});

export const usePermissionStore = defineStore('permission', () => {
  // state
  const count = ref(0)
  const accessRoutes = ref<RouteRecordRaw[]>([])
  const accessMenus = ref<MenuProps['items']>([])

  // getter
  const doubleCount = computed(() => count.value * 2)

  // action
  function generateRoutesAndMenus(menus: Array<ResMenu>) {
    const routeNames = menus.map(({ name }) => name)
    const { filterRouter, filterMenus }  = filterAccessRouterAndMenus([...syncRoutes, ...asyncRoutes], routeNames)
    accessRoutes.value = filterRouter
    accessMenus.value = filterMenus
  }

  return {
    count,
    accessRoutes,
    accessMenus,
    doubleCount,
    generateRoutesAndMenus
  }
})

/**
 * generate routes and menu
 * @param routes 
 * @param showMenusName 
 * @returns 
 */
export function filterAccessRouterAndMenus(routes: RouteRecordRaw[], showMenusName: string[]) {
  const filterRouter: RouteRecordRaw[] = []
  const filterMenus: MenuProps['items']  = []

  routes.forEach((route) => {
    const temp: RouteRecordRaw = { ...route }
    let menu: ItemType

    if (route.path) {
      if (route.meta?.icon) {
        menu = {
          key: route.path,
          icon: () => h(IconFont, { type: `icon-${route.meta?.icon}` }),
          title: route.name as string,
          label: route.name as string,
        }
      } else {
        menu = {
          key: route.path,
          title: route.name as string,
          label: route.name as string,
        }
      }
    } else {
      menu = null
    }

    if (hasPermission(showMenusName, temp)) {
      if (temp.children) {
        const childResult = filterAccessRouterAndMenus(temp.children, showMenusName)

        temp.children = childResult.filterRouter

        if (childResult.filterMenus.length > 0) {
          (menu as SubMenuType).children = childResult.filterMenus
        }
      }

      filterRouter.push(temp)
      if (menu)  {
        filterMenus.push(menu)
      }
    }
  });
  return {
    filterRouter,
    filterMenus
  }
}

export function hasPermission(routeNames: string[], route: RouteRecordRaw) {
  return routeNames.includes(route.name as string) || route.name === 'dashboard' || route.path === ''
}