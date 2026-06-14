#!/usr/bin/env node

/**
 * Bundle 体积分析 + 护栏
 *
 * 测量各发布产物的原始/Gzip 体积，并对关键产物施加阈值门禁。
 * 超过阈值以非零退出码结束，可作为 CI 防回归门禁。
 */

import { gzipSync } from 'zlib'
import { readFileSync, statSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const distDir = resolve(__dirname, '../dist')

const kb = (n) => (n / 1024).toFixed(2) + ' KB'
const gzipKB = (buf) => gzipSync(buf).length

// 关键产物阈值（Gzip KB）—— 超过即失败
const BUDGETS = [
  { name: 'UMD (CDN)', file: 'ant-design-hmfw.umd.js', gzipLimit: 500 },
  { name: 'ESM 入口', file: 'index.js', gzipLimit: 200 },
  { name: '样式', file: 'style.css', gzipLimit: 60 },
]

console.log('\n📦 Bundle 体积分析\n')
console.log('产物                  原始        Gzip        阈值(Gzip)   状态')
console.log('─'.repeat(68))

let failed = false
for (const b of BUDGETS) {
  const path = resolve(distDir, b.file)
  try {
    const content = readFileSync(path)
    const raw = content.length
    const gz = gzipKB(content)
    const gzKB = gz / 1024
    const ok = gzKB <= b.gzipLimit
    if (!ok) failed = true
    const status = ok ? '✅' : '❌ 超标'
    console.log(
      `${b.name.padEnd(20)} ${kb(raw).padEnd(11)} ${kb(gz).padEnd(11)} ${(b.gzipLimit + ' KB').padEnd(12)} ${status}`,
    )
  } catch {
    console.log(`${b.name.padEnd(20)} ${'未找到'.padEnd(11)} —`)
    failed = true
  }
}

console.log('─'.repeat(68))

// 统计组件分包数量（验证多入口/splitting 生效）
try {
  const dirs = readdirSync(distDir, { withFileTypes: true }).filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  let componentEntries = 0
  for (const d of dirs) {
    try {
      statSync(resolve(distDir, d.name, 'index.js'))
      componentEntries++
    } catch {
      /* 该目录无独立入口 */
    }
  }
  const chunkDir = resolve(distDir, '_chunks')
  let chunks = 0
  try {
    chunks = readdirSync(chunkDir).filter((f) => f.endsWith('.js')).length
  } catch {
    /* 无 chunks */
  }
  console.log(`\n📂 分包结构: ${componentEntries} 个组件独立入口 + ${chunks} 个共享 chunk`)
  if (componentEntries < 50) {
    console.log('⚠️  组件独立入口偏少，多入口/splitting 可能未生效。')
    failed = true
  }
} catch (e) {
  console.error('分包结构分析失败:', e.message)
}

console.log(`\n${failed ? '❌ 体积护栏未通过' : '✅ 体积护栏通过'}\n`)
process.exitCode = failed ? 1 : 0
