#!/usr/bin/env node
/**
 * 从 defaultSeedTokens + generateMapTokens + tokensToCssVars 自动生成
 * components/_theme/style/index.css。
 *
 * theme.ts 是唯一真值源，此 CSS 文件是构建产物，请勿手动编辑。
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import { defaultSeedTokens, generateMapTokens, tokensToCssVars } from '../components/_theme/theme.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const tokens = generateMapTokens(defaultSeedTokens)
const css = tokensToCssVars(tokens, 'hmfw')
const header = '/* 由 scripts/generate-theme-css.ts 自动生成，请勿手动编辑 */\n' + '/* theme.ts 是唯一真值源 */\n\n'

const outputPath = join(ROOT, 'components/_theme/style/index.css')
writeFileSync(outputPath, header + css + '\n')

// 使用 Prettier 格式化生成的 CSS
try {
  execSync(`prettier --write "${outputPath}"`, { cwd: ROOT, stdio: 'inherit' })
  console.log('✅ theme CSS generated & formatted → components/_theme/style/index.css')
} catch (error) {
  console.log('✅ theme CSS generated → components/_theme/style/index.css')
  console.warn('⚠️  Prettier formatting failed, file generated but not formatted')
}
