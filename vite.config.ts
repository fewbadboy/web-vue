import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { base } from "./src/settings";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  },
  html: {
    cspNonce: '123'
  },
  assetsInclude: [
    '**/*.gltf'
  ],
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          // todo 手动分块
          // https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E4%BD%BF%E7%94%A8-Vite
        }
      }
    }
  },
  server: {
    // host: ''
    proxy: {
      '/api': {
        target: 'http://172.0.0.2:8090',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/socket.io': {
        target: 'ws://localhost:8088',
        ws: true,
        rewriteWsOrigin: true
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          // Disables automatic CSS imports, using CSS-in-JS
          importStyle: false
        })
      ]
    })
  ],
})
