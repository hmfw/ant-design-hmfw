import { defineConfig } from 'tsup'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig([
  // ESM 构建 —— transpile-only（bundle: false）
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
        js: '/* @hmfw/ant-design | MIT License | https://github.com/hmfw/ant-design-hmfw */',
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
      const banner = `/*!\n * @hmfw/ant-design v${pkg.version}\n * MIT License\n * https://github.com/hmfw/ant-design-hmfw\n */\n`
      writeFileSync(resolve(__dirname, 'dist/style.css'), banner + parts.join('\n'))
      console.log(`✅ ESM build completed! 内联 ${parts.length} 个组件样式 → dist/style.css`)
    },
  },
  // UMD 构建 — @hmfw/icons 不打进，需要额外加载 hmfw-icons.umd.js
  {
    entry: {
      'ant-design.umd': 'components/index.ts',
    },
    format: ['iife'],
    globalName: 'AntDesignHmfw',
    external: ['vue', '@hmfw/icons'],
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
      options.external = ['vue', '@hmfw/icons']
      // banner 注入全局 require，esbuild IIFE 的 require polyfill 会找到它
      // hmfw-icons.umd.js 挂在 globalThis.HmfwIcons，require shim 将其映射为模块
      // esbuild IIFE 对 external 包走 require polyfill（typeof require !== "undefined" ? require : throw）
      // 注入全局 require shim 桥接已加载的 HmfwIcons，使 @hmfw/icons → HmfwIcons
      options.banner = {
        js: `/* @hmfw/ant-design (UMD) | MIT License */\n/* 依赖: vue (全局 Vue), @hmfw/icons (全局 HmfwIcons — 先加载 hmfw-icons.umd.global.js) */\nvar HmfwIcons=typeof globalThis!=='undefined'?globalThis.HmfwIcons:typeof window!=='undefined'?window.HmfwIcons:{};if(typeof require==='undefined'){var require=function(e){if(e==='@hmfw/icons')return HmfwIcons;throw new Error('Module not found: '+e);};}`,
      }
    },
    onSuccess: async () => {
      console.log('✅ UMD build completed!')
    },
  },
])
