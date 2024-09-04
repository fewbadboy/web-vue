export const whiteList = [
  {
    path: '/sign-in',
    component: () => import('@/pages/white-list/sign-in.vue')
  },
  {
    path: '/sign-up',
    component: () => import('@/pages/white-list/sign-up.vue')
  },
  {
    path: '/404',
    component: () => import('@/pages/error/404.vue')
  },

]