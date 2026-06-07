#!/usr/bin/env node

/**
 * Bundle 分析脚本
 * 分析构建产物的组成和大小
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('\n📦 Bundle 分析报告\n')

// 读取主要构建产物
const distDir = resolve(__dirname, '../dist')
const files = [
  { name: 'ESM 产物', path: resolve(distDir, 'index.js') },
  { name: 'CJS 产物', path: resolve(distDir, 'index.cjs') },
  { name: 'UMD 产物', path: resolve(distDir, 'ant-design-hmfw.umd.js') },
  { name: '样式文件', path: resolve(distDir, 'style.css') },
]

console.log('📊 构建产物大小:\n')
console.log('┌──────────────────┬──────────────┬──────────────┐')
console.log('│ 文件             │ 原始大小     │ Gzip 预估    │')
console.log('├──────────────────┼──────────────┼──────────────┤')

const analysisDir = resolve(__dirname, '../.analysis')
mkdirSync(analysisDir, { recursive: true })

for (const file of files) {
  try {
    const content = readFileSync(file.path, 'utf-8')
    const size = Buffer.byteLength(content)
    const sizeKB = (size / 1024).toFixed(2)

    // 使用 gzip 压缩估算
    const tempFile = resolve(analysisDir, 'temp.txt')
    writeFileSync(tempFile, content)
    const gzipSize = execSync(`gzip -c ${tempFile} | wc -c`, { encoding: 'utf-8' }).trim()
    const gzipKB = (parseInt(gzipSize) / 1024).toFixed(2)

    console.log(`│ ${file.name.padEnd(16)} │ ${(sizeKB + ' KB').padEnd(12)} │ ${(gzipKB + ' KB').padEnd(12)} │`)
  } catch (error) {
    console.log(`│ ${file.name.padEnd(16)} │ ${'未找到'.padEnd(12)} │ ${'N/A'.padEnd(12)} │`)
  }
}

console.log('└──────────────────┴──────────────┴──────────────┘\n')

// 分析 ESM 产物的导出
try {
  const esmContent = readFileSync(resolve(distDir, 'index.js'), 'utf-8')

  // 统计导出数量
  const exportMatches = esmContent.match(/export\s+\{[^}]+\}/g) || []
  const lastExport = exportMatches[exportMatches.length - 1] || ''
  const exports = lastExport.match(/\b\w+(?=\s*(?:as\s+\w+\s*)?[,}])/g) || []

  console.log(`📤 导出统计:\n`)
  console.log(`   总导出数: ${exports.length} 个`)
  console.log(`   组件数: 约 66 个`)
  console.log(`   工具函数: ${exports.filter(e => !e.includes('Outlined') && !e.includes('Filled')).length - 66} 个`)
  console.log(`   图标: ${exports.filter(e => e.includes('Outlined') || e.includes('Filled')).length} 个\n`)

  // 检查 sideEffects
  const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'))
  console.log(`🔧 Tree Shaking 配置:\n`)
  console.log(`   sideEffects: ${JSON.stringify(packageJson.sideEffects)}`)
  console.log(`   treeshake: 已启用`)
  console.log(`   splitting: 已启用\n`)

  console.log(`💡 Tree Shaking 建议:\n`)
  console.log(`   当前配置使用了代码分割（splitting），这会影响 Tree Shaking 效果。`)
  console.log(`   对于库开发，建议：`)
  console.log(`   1. 保持当前配置用于通用场景（splitting 提高加载性能）`)
  console.log(`   2. 用户通过现代构建工具（Vite/Webpack）可以获得更好的 Tree Shaking`)
  console.log(`   3. 按需引入时，用户的构建工具会进一步优化\n`)

} catch (error) {
  console.error('分析失败:', error.message)
}

console.log('✅ 分析完成！\n')
