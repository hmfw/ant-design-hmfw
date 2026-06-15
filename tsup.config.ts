import { defineConfig } from 'tsup'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig([
  // ESM 构建 —— transpile-only（bundle: false），每个源文件 1:1 编译，
  // 保留相对 import 与目录结构（参考 antd es/ 布局）：dist/button/index.js、
  // dist/config-provider/... 各自独立，无 _chunks、无 hash，tree-shaking 更彻底。
  // 纯 ESM 包：不输出 CJS（现代 bundler / Node ESM / 浏览器原生 import 均走 .js）。
  {
    entry: [
      'components/**/*.{ts,tsx}',
      '!components/**/__tests__/**',
      '!components/**/*.test.*',
      '!components/**/*.spec.*',
      '!components/_visual/**',
    ],
    format: ['esm'],
    dts: { entry: 'components/index.ts' },
    external: ['vue'],
    bundle: false,
    clean: true,
    sourcemap: false,
    outDir: 'dist',
    minify: false,
    esbuildOptions(options) {
      options.jsx = 'automatic'
      options.jsxImportSource = 'vue'
      options.banner = {
        js: '/* ant-design-hmfw | MIT License | https://github.com/hmfw/ant-design-hmfw */',
      }
    },
    onSuccess: async () => {
      const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'))
      const entryCss = resolve(__dirname, 'components/style.css')
      const rawList = readFileSync(entryCss, 'utf-8')
      const importRe = /@import\s+['"]\.\/([^'"]+)['"];?/g
      let match: RegExpExecArray | null
      const parts: string[] = []
      while ((match = importRe.exec(rawList)) !== null) {
        const cssPath = resolve(__dirname, 'components', match[1])
        try {
          parts.push(`/* ${match[1]} */\n` + readFileSync(cssPath, 'utf-8'))
        } catch {
          console.warn(`⚠️  样式文件缺失，已跳过: ${match[1]}`)
        }
      }
      const banner = `/*!\n * ant-design-hmfw v${pkg.version}\n * MIT License\n * https://github.com/hmfw/ant-design-hmfw\n */\n`
      writeFileSync(resolve(__dirname, 'dist/style.css'), banner + parts.join('\n'))
      console.log(`✅ ESM build completed! 内联 ${parts.length} 个组件样式 → dist/style.css`)
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
    minify: true,
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
