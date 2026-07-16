import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // 全局忽略（替代旧的 .eslintignore 与 ignorePatterns）
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'docs-dist/**',
      'coverage/**',
      'test-build/**',
      '.claude/**',
      '.playwright-cli/**',
      '.analysis/**',
      '**/generated/**',
      '**/auto-generated/**',
      '**/*.d.ts',
      '**/*.min.js',
      '**/*.umd.js',
      '*.config.js',
      '*.config.ts',
    ],
  },

  // 基础推荐规则
  js.configs.recommended,

  // TypeScript / TSX 文件
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // 关闭由 TS 编译器负责的核心规则（no-undef 等），等价旧配置的 eslint-recommended 层
      ...tseslint.configs['flat/eslint-recommended'].rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'warn',
        { selector: 'typeAlias', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'] },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      'no-empty': ['warn', { allowEmptyCatch: true }],
      'no-console': 'off',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  },

  // 普通 JS / MJS 文件
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      'no-empty': ['warn', { allowEmptyCatch: true }],
      'no-console': 'off',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-var': 'error',
    },
  },

  // Vue 单文件组件（将推荐规则限定到 .vue，避免泄漏到 .tsx）
  ...vue.configs['flat/recommended'].map((c) => (c.rules ? { ...c, files: ['**/*.vue'] } : c)),
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': ['error', { ignorePattern: '^highlighted' }],
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },

  // 测试文件放宽规则
  {
    files: ['**/__tests__/**', '**/*.test.*', '**/*.spec.*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
    },
  },

  // 脚本目录
  {
    files: ['scripts/**'],
    rules: {
      'no-console': 'off',
    },
  },

  // 关闭与 prettier 冲突的格式化规则（必须放在最后）
  prettier,
]
