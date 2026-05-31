import type { Plugin } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

export function autoDemoImports(): Plugin {
  return {
    name: 'auto-demo-imports',
    enforce: 'pre',
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
