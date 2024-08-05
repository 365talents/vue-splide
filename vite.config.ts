import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from "path";

export default defineConfig( {
  plugins: [
    vue(),
    dts( {
      include: [
        resolve( __dirname, "src/js/index.ts" ),
        resolve( __dirname, "src/js/components/**/*.vue" ),
        resolve( __dirname, "src/js/plugin/plugin.ts" ),
      ],
    } ),
  ],
  build: {
    lib: {
      name   : 'VueSplide',
      entry   : resolve( __dirname, "src/js/index.ts" ),
      fileName: 'vue-splide',
    },
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
} );
