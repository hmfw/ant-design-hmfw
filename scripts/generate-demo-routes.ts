/**
 * 生成 demo 路由文件（输出到 docs/src/router/demo-routes.gen.ts）
 *
 * 扫描 components/{name}/demos/ 下的所有 .md 文件，生成显式的 import() 路由表。
 *
 * 使用方式：
 *   npx tsx scripts/generate-demo-routes.ts
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const routerDir = path.join(projectRoot, 'docs', 'src', 'router')

interface DemoEntry {
  /** 组件名（如 button） */
  name: string
  /** .md 文件的绝对路径 */
  absPath: string
}

const entries: DemoEntry[] = []

// 扫描 components/<name>/demos/<name>.md
const componentsDir = path.join(projectRoot, 'components')
if (fs.existsSync(componentsDir)) {
  for (const dir of fs.readdirSync(componentsDir)) {
    if (dir.startsWith('_')) continue // 跳过 _theme, _utils 等内部目录
    const demosDir = path.join(componentsDir, dir, 'demos')
    if (!fs.existsSync(demosDir) || !fs.statSync(demosDir).isDirectory()) continue
    const mdPath = path.join(demosDir, `${dir}.md`)
    if (fs.existsSync(mdPath)) {
      entries.push({ name: dir, absPath: mdPath })
    }
  }
}

// 按组件名排序
entries.sort((a, b) => a.name.localeCompare(b.name))

// 生成导入代码（路径相对于 router 目录）
const importLines = entries.map((e) => {
  let relPath = path.relative(routerDir, e.absPath).replace(/\\/g, '/')
  if (!relPath.startsWith('.')) relPath = './' + relPath
  return `  '${e.name}': () => import('${relPath}'),`
})

const output = [
  '// 此文件由 scripts/generate-demo-routes.ts 自动生成，请勿手动编辑',
  '// 生成时间: ' + new Date().toISOString(),
  `// 共 ${entries.length} 个组件 demo 路由`,
  '',
  'export const demoRoutes: Record<string, () => Promise<any>> = {',
  ...importLines,
  '}',
  '',
].join('\n')

const outputPath = path.join(routerDir, 'demo-routes.gen.ts')
fs.writeFileSync(outputPath, output, 'utf-8')
console.log(`✅ 已生成 ${entries.length} 个 demo 路由 → ${path.relative(projectRoot, outputPath)}`)
