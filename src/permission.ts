import router from "./router";

router.beforeEach(() => {})

router.afterEach((to, from, failure) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'

  if (failure) {
    // todo：全局导航故障处理
  }
})

