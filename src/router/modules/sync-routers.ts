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
        component: () => import('@/pages/index.vue')
      },
    ]
  },
]