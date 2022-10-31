
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    assetFileNames: `assets/[name].css`,
    globals: {
      vue: 'Vue'
    }
  }
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    sourcemap: true,
    brotliSize: true,
    lib: {
      entry: './src/entry.ts',
      name: 'smarty_ui',
      fileName: 'smarty_ui',
      // 导出模块格式
      formats: ['esm', 'umd', 'iife']
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
});
