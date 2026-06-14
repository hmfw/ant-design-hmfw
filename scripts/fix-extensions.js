#!/usr/bin/env node

/**
 * 为 transpile-only（bundle: false）产物的相对 import/export/require 补全扩展名。
 *
 * 原因：tsup/esbuild 在 bundle:false 下保留源码的无扩展名相对引用
 * （如 `from './Button'`、`from '../config-provider'`）。bundler 能解析，
 * 但 Node 原生 ESM 必须显式扩展名。本脚本按目标是文件还是目录精确补全：
 *   - `./Button`        → `./Button.js`（存在同名文件）
 *   - `../config-provider` → `../config-provider/index.js`（目录）
 * ESM(.js) 补 .js，CJS(.cjs) 补 .cjs。
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

// 收集 dist 下所有 .js / .cjs（跳过 sourcemap 与 UMD）
function collect(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name)
    if (e.isDirectory()) collect(full, out)
    else if (/\.(js|cjs)$/.test(e.name) && !e.name.includes('.umd.')) out.push(full)
  }
  return out
}

// 把单个相对说明符解析为带扩展名的目标
function resolveSpec(fromFile, spec, ext) {
  const baseDir = dirname(fromFile)
  const abs = resolve(baseDir, spec)
  // 已有扩展名则不动
  if (/\.(js|cjs|mjs|json|css)$/.test(spec)) return spec
  // 同名文件优先
  if (existsSync(abs + ext)) return spec + ext
  // 否则按目录入口
  if (existsSync(abs) && statSync(abs).isDirectory() && existsSync(join(abs, 'index' + ext))) {
    return spec.replace(/\/?$/, '') + '/index' + ext
  }
  // 兜底：保持原样（让 bundler 处理）
  return spec
}

let patched = 0
for (const file of collect(distDir)) {
  const ext = file.endsWith('.cjs') ? '.cjs' : '.js'
  const src = readFileSync(file, 'utf-8')
  // 匹配 import/export ... from '...'、require('...')、import('...')，仅相对路径
  const re = /(\bfrom\s*|\brequire\s*\(\s*|\bimport\s*\(\s*)(['"])(\.\.?\/[^'"]*)\2/g
  let changed = false
  const next = src.replace(re, (m, kw, q, spec) => {
    const resolved = resolveSpec(file, spec, ext)
    if (resolved !== spec) changed = true
    return `${kw}${q}${resolved}${q}`
  })
  if (changed) {
    writeFileSync(file, next)
    patched++
  }
}

console.log(`✅ 补全相对引用扩展名：处理 ${patched} 个文件`)
