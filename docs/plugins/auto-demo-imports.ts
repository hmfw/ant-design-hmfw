import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

/**
 * 删除 markdown 顶层的 <script setup> 块，跳过 ``` 代码围栏内的示例片段。
 * 通过统计匹配位置之前出现的 ``` 行数判断是否处于围栏内（奇数 = 在围栏内）。
 */
function stripTopLevelScriptSetup(src: string): string {
  const re = /<script setup[^>]*>[\s\S]*?<\/script>\n?/g
  let result = ''
  let lastIndex = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(src)) !== null) {
    const fenceCount = (src.slice(0, m.index).match(/^```/gm) || []).length
    // 仅当不在代码围栏内（围栏标记成对出现）时才删除
    if (fenceCount % 2 === 0) {
      result += src.slice(lastIndex, m.index)
      lastIndex = m.index + m[0].length
    }
  }
  return result + src.slice(lastIndex)
}

/** 匹配 components/<name>/demos/ 路径 */
const DEMOS_PATH_RE = /\/components\/[^/]+\/demos\//

function isDemoMd(id: string): boolean {
  return id.endsWith('.md') && DEMOS_PATH_RE.test(id)
}

function isDemoVue(file: string): boolean {
  return file.endsWith('.vue') && DEMOS_PATH_RE.test(file)
}

export function autoDemoImports(): Plugin {
  return {
    name: 'auto-demo-imports',
    enforce: 'pre',
    configureServer(server) {
      // demo 目录下 .vue 文件增删时，让同目录的 .md 模块失效，
      // 这样下次访问时插件会重新 readdir，拿到最新的文件列表。
      const invalidate = (file: string) => {
        if (!isDemoVue(file)) return
        const dir = path.dirname(file)
        const dirName = path.basename(dir)
        const mdPath = path.join(dir, dirName + '.md')
        const mods = server.moduleGraph.getModulesByFile(mdPath)
        mods?.forEach((m) => server.moduleGraph.invalidateModule(m))
      }
      server.watcher.on('add', invalidate)
      server.watcher.on('unlink', invalidate)
    },
    transform(code, id) {
      if (!isDemoMd(id)) return
      const dir = path.dirname(id)
      const vueFiles = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith('.vue'))
        .sort()
      if (!vueFiles.length) return
      const imports = vueFiles
        .map((f) => {
          const name = f.slice(0, -4)
          return `import ${name} from './${f}'\nimport ${name}Source from './${f}?raw'`
        })
        .join('\n')
      // 仅删除顶层的 <script setup>，跳过代码围栏内的示例，
      // 否则示例里的 <script setup> 会被误删、真实的脚本块反而残留
      const stripped = stripTopLevelScriptSetup(code)
      return `<script setup>\n${imports}\n</script>\n\n${stripped}`
    },
  }
}
