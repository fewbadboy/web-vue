import { NavigationGuardReturn, RouteLocationNormalized } from "vue-router";
import router from "./router";
import { whiteList } from "./router/modules/white-list";
import { getToken } from "./utils/auth";
import { usePermissionStore } from "./stores/permission";
import { storeToRefs } from "pinia";

const whiteListRoutes: string[] = []
whiteList.forEach(({ path }) => whiteListRoutes.push(path))
 
async function canAccessPage(to: RouteLocationNormalized): Promise<NavigationGuardReturn> {
  const token =  getToken()
  const permission = usePermissionStore()
  const { accessMenus, accessRoutes } = storeToRefs(permission)
  const { generateRoutesAndMenus } = permission
  
  return new Promise((resolve, reject) => {
    if (token) {
      if (whiteListRoutes.includes(to.path)) {
        resolve({ path: "/dashboard" });
      } else {
        const hasMenu = accessMenus.value?.length ?? false
        if (hasMenu) {
          resolve(true);
        } else {
          // todo: getMenus
          generateRoutesAndMenus([
            { name: 'dashboard' },
            { name: 'book' },
            { name: 'vue' },
            { name: 'javascript' },
            { name: 'car' },
            { name: 'audi' },
            // { name: 'bmw' },
            { name: 'visual' },
            { name: 'echarts' },
            { name: 'timeline' },
            { name: 'network' },
          ])
          console.log(accessMenus.value, accessRoutes.value)
          accessRoutes.value.forEach((route) => {
            router.addRoute(route)
          })
          resolve(true)
        }
      }
    } else {
      if (!whiteListRoutes.includes(to.path)) {
        resolve({ path: "/sign-in" });
      } else {
        resolve(true)
      }
    }
  })
}

router.beforeEach(async(to: RouteLocationNormalized) => {
  return await canAccessPage(to)
})

router.afterEach((to, from, failure) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'

  if (failure) {
    // todo：全局导航故障处理
  }
})

