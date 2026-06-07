import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

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
        mods?.forEach(m => server.moduleGraph.invalidateModule(m))
      }
      server.watcher.on('add', invalidate)
      server.watcher.on('unlink', invalidate)
    },
    transform(code, id) {
      if (!id.endsWith('.md') || !id.includes('/demos/')) return
      const dir = path.dirname(id)
      const vueFiles = fs.readdirSync(dir).filter(f => f.endsWith('.vue')).sort()
      if (!vueFiles.length) return
      const imports = vueFiles
        .map(f => {
          const name = f.slice(0, -4)
          return `import ${name} from './${f}'\nimport ${name}Source from './${f}?raw'`
        })
        .join('\n')
      // Strip any author-written <script setup> block (with or without
      // attributes like lang="ts") so we don't emit a duplicate one.
      const stripped = code.replace(/<script setup[^>]*>[\s\S]*?<\/script>\n?/, '')
      return `<script setup>\n${imports}\n</script>\n\n${stripped}`
    },
  }
}
