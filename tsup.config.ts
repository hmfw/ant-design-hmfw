import { defineConfig } from 'tsup'
import type { Plugin } from 'esbuild'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { transformAsync } from '@babel/core'
import vueJsx from '@vue/babel-plugin-jsx'
// @ts-expect-error 该 Babel 插件未发布类型声明
import tsPlugin from '@babel/plugin-transform-typescript'

// ---------------------------------------------------------------------------
// vue-jsx-babel —— 让库产物与开发/文档/单测走「同一套」JSX 转换
// ---------------------------------------------------------------------------
// 背景：此前库构建用 esbuild 的 automatic runtime（jsx:'automatic' + jsxImportSource:'vue'），
// 它只做 `jsx(type, props, children)`，不包裹组件插槽、不认 v-slots；
// 而 dev/docs/vitest 走 @vitejs/plugin-vue-jsx（Babel @vue/babel-plugin-jsx），
// 会自动把组件 children 包成函数插槽并处理 v-slots。两套工具链语义不一致，
// 导致「组件裸 children / v-slots」类 bug 只在已发布产物里暴露、仓库内永远测不出。
//
// 本插件在 esbuild 的 onLoad 阶段拦截 .tsx，改用与 @vitejs/plugin-vue-jsx 完全相同的
// Babel 插件链（@vue/babel-plugin-jsx + @babel/plugin-transform-typescript{isTSX}），
// 使 dist 与 dev 语义彻底对齐。bundle:false 下 esbuild 仍会对「入口文件」执行 onLoad，
// 而本库每个源文件都是入口（glob 展开），因此逐文件产物不受影响。
const vueJsxBabel = (): Plugin => ({
  name: 'vue-jsx-babel',
  setup(build) {
    build.onLoad({ filter: /\.tsx$/ }, async (args) => {
      const source = readFileSync(args.path, 'utf-8')
      const result = await transformAsync(source, {
        filename: args.path,
        babelrc: false,
        configFile: false,
        sourceMaps: false,
        // 与 @vitejs/plugin-vue-jsx 一致：先 vue-jsx，再 ts 转换(isTSX)
        plugins: [
          [vueJsx, {}],
          [tsPlugin, { isTSX: true, allowExtensions: true }],
          // 为 defineComponent 调用标注 /* @__PURE__ */，利于下游 tree-shaking
          () => ({
            visitor: {
              CallExpression: {
                enter(path: any) {
                  const callee = path.node.callee
                  if (callee?.type === 'Identifier' && callee.name === 'defineComponent') {
                    callee.name = `/* @__PURE__ */ ${callee.name}`
                  }
                },
              },
            },
          }),
        ],
      })
      return { contents: result?.code ?? source, loader: 'js' }
    })
  },
})

export default defineConfig([
  // ESM 构建 —— transpile-only（bundle: false）
  {
    entry: [
      'components/**/*.{ts,tsx}',
      '!components/**/__tests__/**',
      '!components/**/demos/**',
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
    esbuildPlugins: [vueJsxBabel()],
    esbuildOptions(options) {
      // .tsx 的 JSX 由 vueJsxBabel 插件(Babel)处理；此处配置仅用于 esbuild 自身兜底，
      // Babel 产物已无 JSX，automatic runtime 不再生效，保留无副作用。
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
    esbuildPlugins: [vueJsxBabel()],
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
