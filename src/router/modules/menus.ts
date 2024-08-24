import Layout from "@/layout/index.vue"


export const menus = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/pages/index.vue')
      },
      {
        path: 'book',
        component: () => import('@/pages/book/javascript.vue')
      },
      {
        path: 'car',
        component: () => import('@/pages/car/audo.vue')
      }
    ]
  }
]