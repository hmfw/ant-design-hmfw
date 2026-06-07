#!/usr/bin/env node

/**
 * Tree Shaking 测试脚本
 * 验证按需引入是否有效
 */

import { execSync } from 'child_process'
import { writeFileSync, readFileSync, mkdirSync, rmSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const testDir = resolve(__dirname, '../test-build')

// 清理旧的测试目录
try {
  rmSync(testDir, { recursive: true, force: true })
} catch (e) {
  // ignore
}

mkdirSync(testDir, { recursive: true })

console.log('\n🧪 Tree Shaking 测试\n')

// 测试用例
const testCases = [
  {
    name: '完整引入',
    code: `import AntDesignHmfw from '../dist/index.js'; console.log(AntDesignHmfw);`,
    file: 'test-full.js',
  },
  {
    name: '只引入 Button',
    code: `import { Button } from '../dist/index.js'; console.log(Button);`,
    file: 'test-button.js',
  },
  {
    name: '引入多个组件',
    code: `import { Button, Input, Select } from '../dist/index.js'; console.log(Button, Input, Select);`,
    file: 'test-multiple.js',
  },
]

const results = []

for (const testCase of testCases) {
  const testFile = resolve(testDir, testCase.file)
  const bundleFile = resolve(testDir, testCase.file.replace('.js', '.bundle.js'))
  const metaFile = resolve(testDir, testCase.file.replace('.js', '.meta.json'))

  // 写入测试文件
  writeFileSync(testFile, testCase.code)

  try {
    // 使用 esbuild 打包并生成 metafile
    execSync(
      `npx esbuild ${testFile} --bundle --outfile=${bundleFile} --metafile=${metaFile} --external:vue --format=esm --minify`,
      { stdio: 'pipe' },
    )

    const bundleSize = statSync(bundleFile).size
    const meta = JSON.parse(readFileSync(metaFile, 'utf-8'))

    // 分析哪些模块被包含
    const outputs = Object.values(meta.outputs || {})
    const firstOutput = outputs[0] || {}
    const includedModules = Object.keys(firstOutput.inputs || {}).length

    results.push({
      name: testCase.name,
      size: bundleSize,
      readable: (bundleSize / 1024).toFixed(2) + ' KB',
      modules: includedModules,
    })

    console.log(`✅ ${testCase.name}`)
    console.log(`   Bundle 大小: ${(bundleSize / 1024).toFixed(2)} KB`)
  } catch (error) {
    console.error(`❌ ${testCase.name} 失败:`, error.message)
  }
}

console.log('\n📊 Tree Shaking 效果对比:\n')
console.log('┌────────────────────┬────────────┬──────────────┐')
console.log('│ 测试用例           │ Bundle大小 │ Tree Shaking │')
console.log('├────────────────────┼────────────┼──────────────┤')

const fullSize = results[0]?.size || 0
results.forEach((result, index) => {
  const reduction = fullSize > 0 ? ((1 - result.size / fullSize) * 100).toFixed(1) : '0'
  const status = index === 0 ? '基准' : `-${reduction}%`
  console.log(`│ ${result.name.padEnd(18)} │ ${result.readable.padEnd(10)} │ ${status.padEnd(12)} │`)
})

console.log('└────────────────────┴────────────┴──────────────┘\n')

if (results.length > 1 && results[1].size < fullSize) {
  console.log('✅ Tree Shaking 工作正常！按需引入可以显著减小打包体积。\n')
} else {
  console.log('⚠️  警告：Tree Shaking 可能未生效，建议检查配置。\n')
}

// 清理测试文件
rmSync(testDir, { recursive: true, force: true })
