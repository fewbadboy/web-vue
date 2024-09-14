const Layout = () => import("@/layout/index.vue");


export const asyncRoutes = [
  {
    path: '/book',
    component: Layout,
    name: 'book',
    meta: {
      icon: 'solution'
    },
    children: [
      {
        path: 'vue',
        name: 'vue',
        component: () => import('@/pages/book/vue.vue')
      },
      {
        path: 'javascript',
        name: 'javascript',
        component: () => import('@/pages/book/javascript.vue')
      },
    ]
  },
  {
    path: '/car',
    component: Layout,
    name: 'car',
    meta: {
      icon: 'manage'
    },
    children: [
      {
        path: 'audi',
        name: 'audi',
        component: () => import('@/pages/car/audi.vue')
      },
      {
        path: 'bmw',
        name: 'bmw',
        component: () => import('@/pages/car/bmw.vue')
      }
    ]
  },
  {
    path: '/visual',
    component: Layout,
    name: 'visual',
    meta: {
      icon: 'barchart'
    },
    children: [
      {
        path: 'echarts',
        name: 'echarts',
        component: () => import('@/pages/visual/echarts.vue')
      },
      {
        path: 'timeline',
        name: 'timeline',
        component: () => import('@/pages/visual/vis-timeline.vue')
      },
      {
        path: 'network',
        name: 'network',
        component: () => import('@/pages/visual/vis-network.vue')
      },
      {
        path: 'leaflet',
        name: 'leaflet',
        component: () => import('@/pages/visual/map.vue')
      }
    ]
  }
]