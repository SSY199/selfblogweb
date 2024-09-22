import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
      target: 'http://localhost:3035',
      secure: false,
    },
  },
},
  plugins: [react()],
  alias: {
    "source-map-js": "source-map"
  }
  
})
