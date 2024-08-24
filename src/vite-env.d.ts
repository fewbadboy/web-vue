/// <reference types="vite/client" />

import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    transition?: string
  }
}