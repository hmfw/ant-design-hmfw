#!/usr/bin/env node

/**
 * 发布前检查脚本
 * 确保所有必要的文件和配置都已准备好
 */

import { readFileSync, existsSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = resolve(__dirname, '..')

console.log('\n📋 发布前检查清单\n')

let hasErrors = false
const warnings = []

// 检查必需文件
console.log('1️⃣  检查必需文件...\n')

const requiredFiles = [
  { path: 'package.json', name: 'Package 配置' },
  { path: 'README.md', name: 'README 文档' },
  { path: 'LICENSE', name: 'LICENSE 许可证' },
  { path: 'CHANGELOG.md', name: 'CHANGELOG 更新日志' },
  { path: 'dist/index.js', name: 'ESM 构建产物' },
  { path: 'dist/index.d.ts', name: 'TypeScript 类型声明' },
  { path: 'dist/style.css', name: 'CSS 样式文件' },
]

requiredFiles.forEach(({ path, name }) => {
  const fullPath = resolve(rootDir, path)
  if (existsSync(fullPath)) {
    const size = statSync(fullPath).size
    const sizeKB = (size / 1024).toFixed(2)
    console.log(`   ✅ ${name.padEnd(30)} (${sizeKB} KB)`)
  } else {
    console.log(`   ❌ ${name.padEnd(30)} 文件不存在！`)
    hasErrors = true
  }
})

// 检查 package.json 配置
console.log('\n2️⃣  检查 package.json 配置...\n')

try {
  const packageJson = JSON.parse(readFileSync(resolve(rootDir, 'package.json'), 'utf-8'))

  const requiredFields = [
    { key: 'name', value: packageJson.name, required: true },
    { key: 'version', value: packageJson.version, required: true },
    { key: 'description', value: packageJson.description, required: true },
    { key: 'license', value: packageJson.license, required: true },
    { key: 'module', value: packageJson.module, required: true },
    { key: 'types', value: packageJson.types, required: true },
    { key: 'repository.url', value: packageJson.repository?.url, required: true },
    { key: 'homepage', value: packageJson.homepage, required: false },
    { key: 'keywords', value: packageJson.keywords?.length, required: true },
  ]

  requiredFields.forEach(({ key, value, required }) => {
    if (value) {
      const display = typeof value === 'object' ? JSON.stringify(value) : value
      console.log(`   ✅ ${key.padEnd(20)} ${display}`)
    } else if (required) {
      console.log(`   ❌ ${key.padEnd(20)} 缺失！`)
      hasErrors = true
    } else {
      console.log(`   ⚠️  ${key.padEnd(20)} 可选字段未设置`)
      warnings.push(`${key} 未设置`)
    }
  })

  // 检查 exports 配置
  if (packageJson.exports) {
    console.log(`   ✅ exports 配置`)
  } else {
    console.log(`   ⚠️  exports 未配置`)
    warnings.push('exports 字段未配置')
  }

  // 检查 files 配置
  if (packageJson.files && packageJson.files.length > 0) {
    console.log(`   ✅ files 白名单: ${packageJson.files.join(', ')}`)
  } else {
    console.log(`   ❌ files 白名单未配置！`)
    hasErrors = true
  }

  // 检查 peerDependencies
  if (packageJson.peerDependencies) {
    console.log(`   ✅ peerDependencies: ${Object.keys(packageJson.peerDependencies).join(', ')}`)
  } else {
    console.log(`   ⚠️  peerDependencies 未配置`)
    warnings.push('peerDependencies 未配置')
  }
} catch (error) {
  console.log(`   ❌ package.json 解析失败: ${error.message}`)
  hasErrors = true
}

// 运行测试
console.log('\n3️⃣  运行测试...\n')

try {
  execSync('pnpm test', { stdio: 'pipe', cwd: rootDir })
  console.log('   ✅ 所有测试通过')
} catch (error) {
  console.log('   ❌ 测试失败！')
  hasErrors = true
}

// 类型检查
console.log('\n4️⃣  类型检查...\n')

try {
  execSync('pnpm typecheck', { stdio: 'pipe', cwd: rootDir })
  console.log('   ✅ 类型检查通过')
} catch (error) {
  console.log('   ❌ 类型检查失败！')
  hasErrors = true
}

// 检查构建产物
console.log('\n5️⃣  检查构建产物大小...\n')

const distFiles = ['dist/index.js', 'dist/ant-design-hmfw.umd.js', 'dist/style.css']

distFiles.forEach((file) => {
  const fullPath = resolve(rootDir, file)
  if (existsSync(fullPath)) {
    const size = statSync(fullPath).size
    const sizeKB = (size / 1024).toFixed(2)
    const sizeMB = (size / 1024 / 1024).toFixed(2)
    const display = size > 1024 * 1024 ? `${sizeMB} MB` : `${sizeKB} KB`
    console.log(`   📦 ${file.padEnd(35)} ${display}`)
  }
})

// 检查 Git 状态
console.log('\n6️⃣  检查 Git 状态...\n')

try {
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf-8', cwd: rootDir })
  if (gitStatus.trim()) {
    console.log('   ⚠️  有未提交的更改')
    warnings.push('有未提交的 Git 更改')
  } else {
    console.log('   ✅ Git 工作区干净')
  }
} catch (error) {
  console.log('   ⚠️  无法检查 Git 状态')
}

// 总结
console.log('\n' + '='.repeat(60) + '\n')

if (hasErrors) {
  console.log('❌ 发布前检查失败！请修复上述错误后重试。\n')
  process.exit(1)
} else if (warnings.length > 0) {
  console.log('⚠️  发布前检查通过，但有以下警告：\n')
  warnings.forEach((warning) => console.log(`   • ${warning}`))
  console.log('\n✅ 可以发布，但建议处理上述警告。\n')
} else {
  console.log('✅ 发布前检查全部通过！可以安全发布。\n')
}

console.log('📦 下一步：')
console.log('   1. 确认版本号: package.json 中的 version 字段')
console.log('   2. 更新 CHANGELOG.md')
console.log('   3. 提交代码: git add . && git commit -m "chore: release vX.X.X"')
console.log('   4. 发布到 npm: pnpm release')
console.log('   5. 打标签: git tag vX.X.X && git push --tags\n')
