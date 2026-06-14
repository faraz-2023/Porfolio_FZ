import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // split heavy libs into separate chunks for faster load
        manualChunks: {
          'react-vendor':  ['react', 'react-dom'],
          'motion':        ['framer-motion'],
          'gsap-vendor':   ['gsap'],
          'icons':         ['lucide-react', 'react-icons'],
          'particles':     ['@tsparticles/react', '@tsparticles/slim'],
          'three-vendor':  ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  preview: {
    port: 4173,
  },
})
