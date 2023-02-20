import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

module.exports = defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist/types',
      // logDiagnostics: true,
      // skipDiagnostics: false,
    }),
  ],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'VueSlimTable',
      formats: ['es', 'umd'],
      fileName: (format) => `vst.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    sourcemap: true
  }
})
