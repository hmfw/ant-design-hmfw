import { defineConfig } from 'tsup'
import { copyFileSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig([
  // ESM + CJS 构建
  {
    entry: ['components/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    external: ['vue'],
    treeshake: true,
    splitting: true,
    clean: true,
    sourcemap: true,
    outDir: 'dist',
    minify: false, // 保持可读性，让用户的构建工具处理压缩
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.jsxImportSource = 'vue'
      options.banner = {
        js: '/* ant-design-hmfw | MIT License | https://github.com/hmfw/ant-design-hmfw */',
      }
    },
    onSuccess: async () => {
      // 复制样式文件
      const stylePath = resolve(__dirname, 'components/style.css')
      const distStylePath = resolve(__dirname, 'dist/style.css')
      copyFileSync(stylePath, distStylePath)

      // 添加样式文件 banner
      const cssContent = readFileSync(distStylePath, 'utf-8')
      const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
      const cssWithBanner = `/*!\n * ant-design-hmfw v${packageJson.version}\n * MIT License\n * https://github.com/hmfw/ant-design-hmfw\n */\n${cssContent}`
      writeFileSync(distStylePath, cssWithBanner)

      console.log('✅ ESM/CJS build completed successfully!')
    },
  },
  // UMD 构建 (用于 CDN 和 <script> 标签)
  {
    entry: {
      'ant-design-hmfw.umd': 'components/index.ts',
    },
    format: ['iife'],
    globalName: 'AntDesignHmfw',
    external: ['vue'],
    outDir: 'dist',
    outExtension: () => ({ js: '.js' }),
    minify: false,
    sourcemap: true,
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.jsxImportSource = 'vue'
      options.define = {
        'import.meta.env.DEV': 'false',
        'import.meta.env.PROD': 'true',
      }
      options.banner = {
        js: '/* ant-design-hmfw (UMD) | MIT License | https://github.com/hmfw/ant-design-hmfw */',
      }
    },
    onSuccess: async () => {
      console.log('✅ UMD build completed successfully!')
    },
  },
])
