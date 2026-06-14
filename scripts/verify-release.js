#!/usr/bin/env node

/**
 * 发布流程验证脚本
 * 模拟完整的发布流程，确保一切准备就绪
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = resolve(__dirname, '..')

console.log('\n🧪 发布流程验证\n')
console.log('='.repeat(60) + '\n')

let hasErrors = false
const warnings = []

// 步骤 1: 版本号检查
console.log('📋 步骤 1: 版本号检查\n')

try {
  const packageJson = JSON.parse(readFileSync(resolve(rootDir, 'package.json'), 'utf-8'))
  const currentVersion = packageJson.version

  console.log(`   当前版本: ${currentVersion}`)

  // 检查版本号格式
  const semverRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9.-]+)?(\+[a-zA-Z0-9.-]+)?$/
  if (semverRegex.test(currentVersion)) {
    console.log(`   ✅ 版本号格式正确 (语义化版本)\n`)
  } else {
    console.log(`   ❌ 版本号格式不正确！\n`)
    hasErrors = true
  }

  // 检查是否为预发布版本
  if (currentVersion.includes('-')) {
    console.log(`   ℹ️  这是一个预发布版本 (pre-release)\n`)
  }
} catch (error) {
  console.log(`   ❌ 读取 package.json 失败: ${error.message}\n`)
  hasErrors = true
}

// 步骤 2: 构建测试
console.log('📦 步骤 2: 构建测试\n')

try {
  console.log('   正在构建...')
  execSync('pnpm build:lib', { stdio: 'pipe', cwd: rootDir })
  console.log('   ✅ 构建成功\n')
} catch (error) {
  console.log('   ❌ 构建失败！\n')
  hasErrors = true
}

// 步骤 3: 打包测试
console.log('📦 步骤 3: 打包测试\n')

try {
  const packOutput = execSync('npm pack --dry-run', { encoding: 'utf-8', cwd: rootDir })

  // 解析打包信息
  const sizeMatch = packOutput.match(/package size:\s+([\d.]+\s+[A-Z]+)/i)
  const unpackedMatch = packOutput.match(/unpacked size:\s+([\d.]+\s+[A-Z]+)/i)
  const filesMatch = packOutput.match(/total files:\s+(\d+)/i)

  if (sizeMatch && unpackedMatch && filesMatch) {
    console.log(`   包大小: ${sizeMatch[1]}`)
    console.log(`   解压后大小: ${unpackedMatch[1]}`)
    console.log(`   文件数量: ${filesMatch[1]} 个`)

    // 检查包大小
    const sizeMB = parseFloat(sizeMatch[1])
    if (sizeMB > 5) {
      warnings.push(`包大小较大 (${sizeMatch[1]})，建议优化`)
    }

    console.log('   ✅ 打包信息正常\n')
  } else {
    console.log('   ⚠️  无法解析打包信息\n')
    warnings.push('打包信息解析失败')
  }
} catch (error) {
  console.log(`   ❌ 打包测试失败: ${error.message}\n`)
  hasErrors = true
}

// 步骤 4: 本地安装测试
console.log('🧪 步骤 4: 本地安装测试\n')

const testDir = resolve(rootDir, '.test-install')

try {
  // 清理旧的测试目录
  if (existsSync(testDir)) {
    rmSync(testDir, { recursive: true, force: true })
  }

  // 创建测试目录
  mkdirSync(testDir, { recursive: true })

  console.log('   正在创建测试包...')
  const packOutput = execSync('npm pack', { encoding: 'utf-8', cwd: rootDir })
  const tarballName = packOutput.trim().split('\n').pop()

  console.log(`   测试包: ${tarballName}`)

  // 创建测试项目
  const testPackageJson = {
    name: 'test-install',
    version: '1.0.0',
    private: true,
    type: 'module',
  }

  writeFileSync(resolve(testDir, 'package.json'), JSON.stringify(testPackageJson, null, 2))

  // 安装本地包
  console.log('   正在安装本地包...')
  execSync(`npm install ${resolve(rootDir, tarballName)}`, {
    stdio: 'pipe',
    cwd: testDir,
  })

  // 验证安装
  const installedPackage = resolve(testDir, 'node_modules/ant-design-hmfw/package.json')
  if (existsSync(installedPackage)) {
    const installed = JSON.parse(readFileSync(installedPackage, 'utf-8'))
    console.log(`   ✅ 安装成功 (v${installed.version})`)

    // 检查必要文件
    const requiredFiles = ['dist/index.js', 'dist/style.css', 'README.md', 'LICENSE']
    const installedDir = resolve(testDir, 'node_modules/ant-design-hmfw')

    requiredFiles.forEach((file) => {
      if (existsSync(resolve(installedDir, file))) {
        console.log(`   ✅ ${file}`)
      } else {
        console.log(`   ❌ ${file} 缺失！`)
        hasErrors = true
      }
    })
  } else {
    console.log('   ❌ 安装失败！\n')
    hasErrors = true
  }

  // 清理
  console.log('\n   正在清理测试文件...')
  rmSync(testDir, { recursive: true, force: true })
  rmSync(resolve(rootDir, tarballName), { force: true })
  console.log('   ✅ 清理完成\n')
} catch (error) {
  console.log(`   ❌ 本地安装测试失败: ${error.message}\n`)
  hasErrors = true

  // 清理
  if (existsSync(testDir)) {
    rmSync(testDir, { recursive: true, force: true })
  }
}

// 步骤 5: 导入测试
console.log('📥 步骤 5: 导入测试\n')

const importTestDir = resolve(rootDir, '.test-import')

try {
  // 清理旧的测试目录
  if (existsSync(importTestDir)) {
    rmSync(importTestDir, { recursive: true, force: true })
  }

  mkdirSync(importTestDir, { recursive: true })

  // 创建测试包
  console.log('   正在创建测试包...')
  const packOutput = execSync('npm pack', { encoding: 'utf-8', cwd: rootDir })
  const tarballName = packOutput.trim().split('\n').pop()

  // 创建测试项目
  const testPackageJson = {
    name: 'test-import',
    version: '1.0.0',
    private: true,
    type: 'module',
  }

  writeFileSync(resolve(importTestDir, 'package.json'), JSON.stringify(testPackageJson, null, 2))

  // 安装包
  execSync(`npm install ${resolve(rootDir, tarballName)} vue@3`, {
    stdio: 'pipe',
    cwd: importTestDir,
  })

  // 测试 ESM 导入
  const esmTestCode = `
import { Button, Input, Select } from 'ant-design-hmfw'

console.log('✅ ESM 导入成功')
console.log('Button:', typeof Button)
console.log('Input:', typeof Input)
console.log('Select:', typeof Select)
`

  writeFileSync(resolve(importTestDir, 'test-esm.js'), esmTestCode)

  console.log('   测试 ESM 导入...')
  const esmOutput = execSync('node test-esm.js', { encoding: 'utf-8', cwd: importTestDir })

  if (esmOutput.includes('✅ ESM 导入成功')) {
    console.log('   ✅ ESM 导入测试通过')
  } else {
    console.log('   ❌ ESM 导入测试失败')
    hasErrors = true
  }

  // 清理
  console.log('   正在清理测试文件...')
  rmSync(importTestDir, { recursive: true, force: true })
  rmSync(resolve(rootDir, tarballName), { force: true })
  console.log('   ✅ 清理完成\n')
} catch (error) {
  console.log(`   ❌ 导入测试失败: ${error.message}\n`)
  hasErrors = true

  // 清理
  if (existsSync(importTestDir)) {
    rmSync(importTestDir, { recursive: true, force: true })
  }
}

// 步骤 6: Git 检查
console.log('🔍 步骤 6: Git 检查\n')

try {
  // 检查是否有未提交的更改
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf-8', cwd: rootDir })

  if (gitStatus.trim()) {
    console.log('   ⚠️  有未提交的更改\n')
    warnings.push('Git 工作区不干净')
  } else {
    console.log('   ✅ Git 工作区干净\n')
  }

  // 检查当前分支
  const currentBranch = execSync('git branch --show-current', {
    encoding: 'utf-8',
    cwd: rootDir,
  }).trim()
  console.log(`   当前分支: ${currentBranch}`)

  if (currentBranch !== 'main' && currentBranch !== 'master') {
    console.log(`   ⚠️  不在主分支上\n`)
    warnings.push(`当前在 ${currentBranch} 分支`)
  } else {
    console.log('   ✅ 在主分支上\n')
  }
} catch (error) {
  console.log(`   ⚠️  Git 检查失败: ${error.message}\n`)
}

// 步骤 7: NPM 配置检查
console.log('🔧 步骤 7: NPM 配置检查\n')

try {
  // 检查 npm 登录状态
  try {
    const whoami = execSync('npm whoami', { encoding: 'utf-8', stdio: 'pipe' }).trim()
    console.log(`   ✅ 已登录 npm (用户: ${whoami})\n`)
  } catch {
    console.log('   ⚠️  未登录 npm，发布前需要运行 `npm login`\n')
    warnings.push('未登录 npm')
  }

  // 检查 registry
  const registry = execSync('npm config get registry', { encoding: 'utf-8' }).trim()
  console.log(`   Registry: ${registry}`)

  if (registry.includes('registry.npmjs.org')) {
    console.log('   ✅ 使用官方 registry\n')
  } else {
    console.log('   ⚠️  不是官方 registry\n')
    warnings.push(`当前 registry: ${registry}`)
  }
} catch (error) {
  console.log(`   ⚠️  NPM 配置检查失败: ${error.message}\n`)
}

// 总结
console.log('='.repeat(60) + '\n')
console.log('📊 验证总结\n')

if (hasErrors) {
  console.log('❌ 发布流程验证失败！\n')
  console.log('请修复上述错误后重试。\n')
  process.exit(1)
} else if (warnings.length > 0) {
  console.log('⚠️  发布流程验证通过，但有以下警告：\n')
  warnings.forEach((warning) => console.log(`   • ${warning}`))
  console.log('\n建议处理这些警告后再发布。\n')
} else {
  console.log('✅ 发布流程验证全部通过！\n')
  console.log('可以安全发布到 npm。\n')
}

console.log('📦 发布步骤：\n')
console.log('   1. 确认版本号并更新 CHANGELOG.md')
console.log('   2. 提交代码: git add . && git commit -m "chore: release vX.X.X"')
console.log('   3. 打标签: git tag vX.X.X')
console.log('   4. 推送: git push && git push --tags')
console.log('   5. 发布: pnpm release (或 npm publish)')
console.log('   6. 验证: npm view ant-design-hmfw\n')
