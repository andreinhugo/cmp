import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import nodePolyfills from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: JSON.stringify({})
  },
  // esbuild: {
  //   jsxInject: `import React from 'react'`
  // },
  plugins: [
    nodePolyfills(),
    reactRefresh()
  ]
})
