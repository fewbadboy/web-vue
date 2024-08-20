import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web/',
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
