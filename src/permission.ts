import { NavigationGuardReturn, RouteLocationNormalizedGeneric } from "vue-router";
import router from "./router";
import { getToken } from "./utils/auth";

const whileList = ["/sign-in", "/sign-up"];
 
async function canAccessPage(to: RouteLocationNormalizedGeneric): Promise<NavigationGuardReturn> {
  const token =  getToken()
  return new Promise((resolve, reject) => {
    if (token) {
      if (whileList.includes(to.path)) {
        resolve({ path: "/" });
      } else {
        resolve(true)
      }
    } else {
      if (!whileList.includes(to.path)) {
        resolve({ path: "/sign-in" });
      } else {
        resolve(true)
      }
    }
  })
}

router.beforeEach(async(to: RouteLocationNormalizedGeneric) => {
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

