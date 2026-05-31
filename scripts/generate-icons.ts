#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// SVG 文件目录
const SVG_DIR = join(__dirname, '../components/icon/svg')
const OUTPUT_FILE = join(__dirname, '../components/icon/icons.ts')

// 将 kebab-case 转换为 PascalCase
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// 解析 SVG 文件，提取 viewBox 和 path 元素
function parseSvg(svgContent: string): { viewBox: string; paths: string[] } {
  // 提取 viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 1024 1024'

  // 提取所有 path 元素
  const pathMatches = svgContent.matchAll(/<path\s+([^>]+)>/g)
  const paths: string[] = []

  for (const match of pathMatches) {
    const pathAttrs = match[1]
    // 提取 d 属性
    const dMatch = pathAttrs.match(/d="([^"]+)"/)
    if (dMatch) {
      const d = dMatch[1]
      // 检查是否有 fill 属性
      const fillMatch = pathAttrs.match(/fill="([^"]+)"/)
      const fill = fillMatch ? fillMatch[1] : undefined

      if (fill && fill !== 'currentColor') {
        // 如果有特定的 fill 颜色，保留它
        paths.push(`h('path', { d: '${d}', fill: '${fill}' })`)
      } else {
        paths.push(`h('path', { d: '${d}' })`)
      }
    }
  }

  return { viewBox, paths }
}

// 生成图标组件代码
function generateIconComponent(name: string, viewBox: string, paths: string[]): string {
  // 文件名以 -filled 结尾时生成 Filled 后缀组件，否则默认 Outlined
  const isFilled = name.endsWith('-filled')
  const baseName = isFilled ? name.slice(0, -'-filled'.length) : name
  const suffix = isFilled ? 'Filled' : 'Outlined'
  const componentName = `${toPascalCase(baseName)}${suffix}`
  const pathsCode = paths.length > 0 ? paths.join(', ') : ''

  return `export const ${componentName}: IconComponent = () =>
  h('svg', {
    viewBox: '${viewBox}',
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    focusable: false,
  }, [${pathsCode}])`
}

// 主函数
function main() {
  console.log('🔍 Scanning SVG files...')

  // 读取所有 SVG 文件
  const svgFiles = readdirSync(SVG_DIR)
    .filter(file => file.endsWith('.svg'))
    .sort()

  if (svgFiles.length === 0) {
    console.error('❌ No SVG files found in', SVG_DIR)
    process.exit(1)
  }

  console.log(`📦 Found ${svgFiles.length} SVG files`)

  // 生成代码
  const components: string[] = []

  for (const file of svgFiles) {
    const filePath = join(SVG_DIR, file)
    const name = basename(file, '.svg')
    const svgContent = readFileSync(filePath, 'utf8')

    try {
      const { viewBox, paths } = parseSvg(svgContent)
      const component = generateIconComponent(name, viewBox, paths)
      components.push(component)
      console.log(`  ✓ ${name}`)
    } catch (error) {
      console.error(`  ✗ ${name}: ${error}`)
    }
  }

  // 生成完整的 icons.ts 文件
  const output = `import type { IconComponent } from './types'
import { h } from 'vue'

// 此文件由 scripts/generate-icons.ts 自动生成
// 请勿手动编辑，运行 pnpm gen:icons 重新生成

${components.join('\n\n')}
`

  writeFileSync(OUTPUT_FILE, output, 'utf8')
  console.log(`\n✅ Generated ${OUTPUT_FILE}`)
  console.log(`📊 Total: ${components.length} icon components`)
}

main()
