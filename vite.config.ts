import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/posts": {
        target: "https://g1uv1ser4g.execute-api.us-west-1.amazonaws.com/dev",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/posts/, ""),
      },
    },
  },
  plugins: [vue()],
})
