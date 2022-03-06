import vue from '@vitejs/plugin-vue'
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/ts/index.ts'),
      name: 'VueSlimTable',
      fileName: (format) => `vst.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
