const Layout = () => import("@/layout/index.vue");
import people from "@/svgs/people.svg?url"

export const syncRoutes = [
  {
    path: '/dashboard',
    component: Layout,
    name: 'dashboard',
    meta: {
      icon: 'linechart'
    },
    children: [
      {
        path: '',
        name: 'dashboard-hidden',
        component: () => import('@/pages/dashboard/index.vue')
      },
    ]
  },
  {
    path: '/error',
    component: Layout,
    name: 'error',
    meta: {
      icon: 'linechart'
    },
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/pages/error/404.vue')
      },
    ]
  },
]