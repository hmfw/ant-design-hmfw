#!/usr/bin/env node

/**
 * Tree Shaking 测试 + 体积护栏
 *
 * 验证「按需引入」是否真正生效：从包入口只引入单个组件时，
 * 打包体积应远小于完整引入，并低于阈值。
 * 失败时以非零退出码结束，可作为 CI 门禁。
 */

import { execSync } from 'child_process'
import { writeFileSync, mkdirSync, rmSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const distIndex = resolve(__dirname, '../dist/index.js')
const testDir = resolve(__dirname, '../.tree-shake-test')

// 单组件按需引入体积上限（KB）—— 超过即视为 tree-shaking 失效。
// 注意：单组件会带入共享基础设施（config-provider + 主题 token 系统），
// 因此最重的组件（如 Button）约 60-70KB 属正常；阈值取 90KB 既能容纳
// 合理的基础设施开销，又能在 tree-shaking 失效（全量打入 ~397KB）时报警。
const SINGLE_COMPONENT_LIMIT_KB = 90
// 单组件相对完整引入至少应削减的比例
const MIN_REDUCTION = 0.5

rmSync(testDir, { recursive: true, force: true })
mkdirSync(testDir, { recursive: true })

console.log('\n🧪 Tree Shaking 测试 + 体积护栏\n')

const testCases = [
  { name: '完整引入', code: `import * as All from '${distIndex}'; console.log(All);`, file: 'full.js' },
  { name: '只引入 Button', code: `import { Button } from '${distIndex}'; console.log(Button);`, file: 'button.js' },
  { name: '只引入 Tag', code: `import { Tag } from '${distIndex}'; console.log(Tag);`, file: 'tag.js' },
  {
    name: '引入多个组件',
    code: `import { Button, Input, Select } from '${distIndex}'; console.log(Button, Input, Select);`,
    file: 'multiple.js',
  },
]

const results = []

for (const testCase of testCases) {
  const testFile = resolve(testDir, testCase.file)
  const bundleFile = resolve(testDir, testCase.file.replace('.js', '.bundle.js'))
  writeFileSync(testFile, testCase.code)

  try {
    // 把 vue 与 vue/jsx-runtime 都标记为 external，测量库自身代码体积
    execSync(
      `npx esbuild ${testFile} --bundle --outfile=${bundleFile} --external:vue --external:vue/jsx-runtime --format=esm --minify`,
      { stdio: 'pipe' },
    )
    const size = statSync(bundleFile).size
    results.push({ name: testCase.name, size, readable: (size / 1024).toFixed(2) + ' KB' })
    console.log(`✅ ${testCase.name}: ${(size / 1024).toFixed(2)} KB`)
  } catch (error) {
    console.error(`❌ ${testCase.name} 打包失败:`, error)
    process.exitCode = 1
  }
}

console.log('\n📊 Tree Shaking 效果:\n')
const full = results.find((r) => r.name === '完整引入')
const button = results.find((r) => r.name === '只引入 Button')

if (full && button) {
  const reduction = 1 - button.size / full.size
  console.log(`   完整引入:   ${full.readable}`)
  console.log(`   只引入 Button: ${button.readable}（削减 ${(reduction * 100).toFixed(1)}%）\n`)

  const buttonKB = button.size / 1024
  const failures = []
  if (buttonKB > SINGLE_COMPONENT_LIMIT_KB) {
    failures.push(`单组件体积 ${buttonKB.toFixed(1)} KB 超过上限 ${SINGLE_COMPONENT_LIMIT_KB} KB`)
  }
  if (reduction < MIN_REDUCTION) {
    failures.push(`削减比例 ${(reduction * 100).toFixed(1)}% 低于要求 ${MIN_REDUCTION * 100}%`)
  }

  if (failures.length) {
    console.error('❌ Tree Shaking 护栏未通过:')
    failures.forEach((f) => console.error(`   - ${f}`))
    console.error('\n   提示：检查 tsup 多入口/splitting 配置与 package.json sideEffects。\n')
    process.exitCode = 1
  } else {
    console.log(`✅ Tree Shaking 生效：单组件 ${buttonKB.toFixed(1)} KB，远小于完整引入。\n`)
  }
} else {
  console.error('❌ 缺少测量结果，无法判定。\n')
  process.exitCode = 1
}

rmSync(testDir, { recursive: true, force: true })
