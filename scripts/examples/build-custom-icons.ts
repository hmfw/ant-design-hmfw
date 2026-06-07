#!/usr/bin/env node
/**
 * 自定义图标生成脚本示例
 *
 * 用途：
 *   - 从你自己的 SVG 目录生成 Vue 图标组件文件，供应用业务使用
 *   - 适用于品牌图标、业务定制图标等场景
 *
 * 使用方式：
 *   1. 复制本文件到你的项目，例如 scripts/build-my-icons.ts
 *   2. 修改下方 SVG_DIR / OUTPUT_FILE / COMPONENT_PREFIX 等配置
 *   3. 将自定义 SVG 文件（kebab-case 命名）放入 SVG_DIR
 *   4. 运行：npx tsx scripts/build-my-icons.ts
 *   5. 在业务代码中导入并通过 <Icon :component="MyBrandLogoOutlined" /> 使用
 *
 * SVG 文件命名约定：
 *   - my-logo.svg          ->  MyLogoOutlined
 *   - my-logo-filled.svg   ->  MyLogoFilled
 *
 * SVG 文件要求：
 *   - 必须包含 viewBox 属性（推荐 0 0 1024 1024）
 *   - 颜色使用 fill="currentColor" 以便外部通过 color CSS 控制
 *   - 仅使用 <path> 元素（其他元素会被忽略）
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

// ============= 用户可配置项 =============

/** SVG 源文件目录（绝对或相对路径） */
const SVG_DIR = './assets/icons'

/** 生成的组件文件输出路径 */
const OUTPUT_FILE = './src/icons/index.ts'

/** 组件名前缀，便于和 ant-design-hmfw 内置图标区分；留空则不加前缀 */
const COMPONENT_PREFIX = 'My'

/** 默认的 SVG viewBox（仅在 SVG 中没有 viewBox 时作为兜底） */
const DEFAULT_VIEW_BOX = '0 0 1024 1024'

// ============= 实现 =============

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const resolvedSvgDir = join(__dirname, SVG_DIR)
const resolvedOutputFile = join(__dirname, OUTPUT_FILE)

/** kebab-case -> PascalCase */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

/** 解析 SVG 文件，提取 viewBox 与所有 path 的 d 属性 */
function parseSvg(svgContent: string): {
  viewBox: string
  paths: Array<{ d: string; fill?: string }>
} {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : DEFAULT_VIEW_BOX

  const paths: Array<{ d: string; fill?: string }> = []
  const pathMatches = svgContent.matchAll(/<path\s+([^>]+?)\/?>/g)
  for (const match of pathMatches) {
    const attrs = match[1]
    const dMatch = attrs.match(/d="([^"]+)"/)
    if (!dMatch) continue
    const fillMatch = attrs.match(/fill="([^"]+)"/)
    const fill = fillMatch && fillMatch[1] !== 'currentColor' ? fillMatch[1] : undefined
    paths.push({ d: dMatch[1], fill })
  }
  return { viewBox, paths }
}

/** 生成单个图标组件代码 */
function generateIconComponent(name: string, viewBox: string, paths: Array<{ d: string; fill?: string }>): string {
  const isFilled = name.endsWith('-filled')
  const baseName = isFilled ? name.slice(0, -'-filled'.length) : name
  const suffix = isFilled ? 'Filled' : 'Outlined'
  const componentName = `${COMPONENT_PREFIX}${toPascalCase(baseName)}${suffix}`

  const pathsCode = paths
    .map((p) => (p.fill ? `h('path', { d: '${p.d}', fill: '${p.fill}' })` : `h('path', { d: '${p.d}' })`))
    .join(', ')

  return `export const ${componentName}: IconComponent = () =>
  h('svg', {
    viewBox: '${viewBox}',
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    focusable: false,
  }, [${pathsCode}])`
}

function main() {
  console.log('[icons] 扫描 SVG 文件:', resolvedSvgDir)

  if (!existsSync(resolvedSvgDir)) {
    console.error('[icons] 目录不存在，请先创建并放入 SVG 文件:', resolvedSvgDir)
    process.exit(1)
  }

  const svgFiles = readdirSync(resolvedSvgDir)
    .filter((f) => f.endsWith('.svg'))
    .sort()

  if (svgFiles.length === 0) {
    console.error('[icons] 没有找到任何 SVG 文件')
    process.exit(1)
  }

  console.log(`[icons] 找到 ${svgFiles.length} 个 SVG 文件`)

  const components: string[] = []
  for (const file of svgFiles) {
    const name = basename(file, '.svg')
    const svgContent = readFileSync(join(resolvedSvgDir, file), 'utf8')
    try {
      const { viewBox, paths } = parseSvg(svgContent)
      if (paths.length === 0) {
        console.warn(`  - ${name}: 未提取到 path（已跳过）`)
        continue
      }
      components.push(generateIconComponent(name, viewBox, paths))
      console.log(`  + ${name}`)
    } catch (err) {
      console.error(`  ! ${name}: ${err}`)
    }
  }

  // 输出文件：从 ant-design-hmfw 引入 IconComponent 类型
  const output = `// 此文件由 build-my-icons.ts 自动生成，请勿手动编辑
// 通过 <Icon :component="${COMPONENT_PREFIX}XxxOutlined" /> 使用
import type { IconComponent } from 'ant-design-hmfw'
import { h } from 'vue'

${components.join('\n\n')}
`

  // 确保输出目录存在
  mkdirSync(dirname(resolvedOutputFile), { recursive: true })
  writeFileSync(resolvedOutputFile, output, 'utf8')

  console.log(`[icons] 已生成 ${resolvedOutputFile}`)
  console.log(`[icons] 共 ${components.length} 个图标组件`)
}

main()
