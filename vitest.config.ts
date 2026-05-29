import { defineConfig } from 'vitest/config'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['components/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
