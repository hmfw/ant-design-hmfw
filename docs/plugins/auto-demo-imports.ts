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

export function autoDemoImports(): Plugin {
  return {
    name: 'auto-demo-imports',
    enforce: 'pre',
    configureServer(server) {
      // demo 目录下 .vue 文件增删时，让同目录的 .md 模块失效，
      // 这样下次访问时插件会重新 readdir，拿到最新的文件列表。
      const invalidate = (file: string) => {
        if (!file.endsWith('.vue') || !file.includes('/demos/')) return
        const dir = path.dirname(file)
        const mdPath = path.join(dir, path.basename(dir) + '.md')
        const mods = server.moduleGraph.getModulesByFile(mdPath)
        mods?.forEach((m) => server.moduleGraph.invalidateModule(m))
      }
      server.watcher.on('add', invalidate)
      server.watcher.on('unlink', invalidate)
    },
    transform(code, id) {
      if (!id.endsWith('.md') || !id.includes('/demos/')) return
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
      // Strip author-written <script setup> blocks (with or without
      // attributes like lang="ts") so we don't emit a duplicate one.
      // 仅删除顶层的 <script setup>，跳过 ```vue / ```html 等代码围栏内的示例，
      // 否则示例里的 <script setup> 会被误删、真实的脚本块反而残留，导致出现
      // 两个 <script setup>，Vue 编译报 "missing end tag"。
      const stripped = stripTopLevelScriptSetup(code)
      return `<script setup>\n${imports}\n</script>\n\n${stripped}`
    },
  }
}
