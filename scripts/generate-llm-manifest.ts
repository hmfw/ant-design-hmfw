#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DEMOS_DIR = join(ROOT, 'docs/demos')
const OUT_DIR = join(ROOT, 'docs/public')
const SITE = 'https://hmfw.github.io/ant-design-hmfw'
const PKG_NAME = 'ant-design-hmfw'

// ---------- helpers ----------

/** 读取 package.json 的 version / description */
function readPkg(): { version: string; description: string } {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
  return { version: pkg.version, description: pkg.description }
}

/** 解析 components/index.ts，建立 slug -> 导出组件名[] 映射 */
function buildSlugMap(): Record<string, string[]> {
  const src = readFileSync(join(ROOT, 'components/index.ts'), 'utf8')
  const map: Record<string, string[]> = {}
  const re = /export\s*\{([^}]+)\}\s*from\s*'\.\/([^']+)'/g
  let m: RegExpExecArray | null
  while ((m = re.exec(src))) {
    const names = m[1]
      .split(',')
      .map((s) => s.trim().split(/\s+as\s+/)[0].trim())
      .filter(Boolean)
    const slug = m[2]
    map[slug] = (map[slug] || []).concat(names)
  }
  return map
}

/** 拆分一行 markdown 表格为 cells，处理转义竖线 \| */
function splitRow(line: string): string[] {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  return trimmed.split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'))
}

/** 是否为表格分隔行（全是 --- :--- 之类） */
function isSeparator(line: string): boolean {
  return splitRow(line).every((c) => /^:?-+:?$/.test(c))
}

/** 提取某个二级标题段落内容（到下一个 ## 为止） */
function sectionBody(md: string, heading: string): string {
  const re = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|\\Z)`, 'm')
  const m = md.match(re)
  return m ? m[1].trim() : ''
}

/** 取首段纯文本（跳过空行） */
function firstParagraph(text: string): string {
  for (const block of text.split(/\n\s*\n/)) {
    const t = block.trim()
    if (t && !t.startsWith('#') && !t.startsWith('<') && !t.startsWith('-')) return t
  }
  return ''
}

interface TableBlock {
  section: string
  headers: string[]
  rows: string[][]
}

/** 从 API 段提取所有表格，附带其上方最近的 ### 子标题 */
function parseApiTables(md: string): TableBlock[] {
  const apiMatch = md.match(/^##\s+API\s*$([\s\S]*)$/m)
  if (!apiMatch) return []
  const lines = apiMatch[1].split('\n')
  const blocks: TableBlock[] = []
  let section = ''
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const h3 = line.match(/^###\s+(.+?)\s*$/)
    if (h3) {
      section = h3[1].trim()
      i++
      continue
    }
    if (line.trim().startsWith('|')) {
      const headers = splitRow(line)
      const rows: string[][] = []
      i++
      if (i < lines.length && isSeparator(lines[i])) i++ // skip separator
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(splitRow(lines[i]))
        i++
      }
      blocks.push({ section, headers, rows })
      continue
    }
    i++
  }
  return blocks
}

interface PropRow { section: string; name: string; description: string; type: string; default: string }
interface EventRow { section: string; name: string; description: string; params: string }
interface SlotRow { name: string; description: string }

/** 把表格块按表头分类为 props / events / slots */
function classifyTables(blocks: TableBlock[]) {
  const props: PropRow[] = []
  const events: EventRow[] = []
  const slots: SlotRow[] = []
  const idx = (headers: string[], key: string) => headers.findIndex((h) => h.includes(key))
  for (const b of blocks) {
    const h = b.headers
    if (idx(h, '事件名') >= 0) {
      const ni = idx(h, '事件名'), di = idx(h, '说明'), pi = idx(h, '回调参数')
      for (const r of b.rows) events.push({ section: b.section, name: r[ni] || '', description: r[di] || '', params: pi >= 0 ? r[pi] || '' : '' })
    } else if (idx(h, '插槽名') >= 0) {
      const ni = idx(h, '插槽名'), di = idx(h, '说明')
      for (const r of b.rows) slots.push({ name: r[ni] || '', description: di >= 0 ? r[di] || '' : '' })
    } else if (idx(h, '参数') >= 0) {
      const ni = idx(h, '参数'), di = idx(h, '说明'), ti = idx(h, '类型'), vi = idx(h, '默认值')
      for (const r of b.rows) props.push({ section: b.section, name: r[ni] || '', description: di >= 0 ? r[di] || '' : '', type: ti >= 0 ? r[ti] || '' : '', default: vi >= 0 ? r[vi] || '' : '' })
    }
  }
  return { props, events, slots }
}

interface Demo { title: string; description: string; code: string }

/** 解析「代码演示」段，提取 demo 标题/说明/源码 */
function parseDemos(md: string, dir: string): Demo[] {
  const body = sectionBody(md, '代码演示')
  if (!body) return []
  const demos: Demo[] = []
  // 以 ### 切分
  const chunks = body.split(/^###\s+/m).slice(1)
  for (const chunk of chunks) {
    const nl = chunk.indexOf('\n')
    const title = chunk.slice(0, nl).trim()
    const rest = chunk.slice(nl + 1)
    const blockMatch = rest.match(/<DemoBlock[^>]*:source="(\w+?)Source"/)
    if (!blockMatch) continue
    const description = firstParagraph(rest.split('<DemoBlock')[0])
    const vueFile = join(dir, `${blockMatch[1]}.vue`)
    let code = ''
    if (existsSync(vueFile)) code = readFileSync(vueFile, 'utf8').trim()
    demos.push({ title, description, code })
  }
  return demos
}

console.log('🔍 Scanning component docs...')

const { version, description } = readPkg()
const slugMap = buildSlugMap()

const slugs = readdirSync(DEMOS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .filter((slug) => existsSync(join(DEMOS_DIR, slug, `${slug}.md`)))
  .sort()

interface Component {
  name: string; slug: string; title: string; description: string; whenToUse: string
  import: string; props: PropRow[]; events: EventRow[]; slots: SlotRow[]; demos: Demo[]; docUrl: string
}

const components: Component[] = []

for (const slug of slugs) {
  const dir = join(DEMOS_DIR, slug)
  const md = readFileSync(join(dir, `${slug}.md`), 'utf8')

  const titleMatch = md.match(/^#\s+(.+?)\s*$/m)
  const title = titleMatch ? titleMatch[1].trim() : slug
  const afterTitle = titleMatch ? md.slice(md.indexOf(titleMatch[0]) + titleMatch[0].length) : md
  const desc = firstParagraph(afterTitle.split(/^##\s/m)[0])
  const whenToUse = firstParagraph(sectionBody(md, '何时使用'))

  const names = slugMap[slug] && slugMap[slug].length ? slugMap[slug] : [title.split(/\s/)[0]]
  const importStmt = `import { ${names.join(', ')} } from '${PKG_NAME}'`

  const { props, events, slots } = classifyTables(parseApiTables(md))
  const demos = parseDemos(md, dir)

  components.push({
    name: names[0], slug, title, description: desc, whenToUse,
    import: importStmt, props, events, slots, demos,
    docUrl: `${SITE}/components/${slug}`,
  })
  console.log(`  ✓ ${slug} — ${props.length} props, ${events.length} events, ${slots.length} slots, ${demos.length} demos`)
}

// ---------- components.json ----------
const manifest = {
  name: PKG_NAME,
  version,
  description,
  docs: SITE,
  install: `pnpm add ${PKG_NAME}`,
  usage: {
    global: `import AntDesignHmfw from '${PKG_NAME}'\nimport '${PKG_NAME}/style.css'\napp.use(AntDesignHmfw)`,
    onDemand: `import { Button } from '${PKG_NAME}'\nimport '${PKG_NAME}/style.css'`,
  },
  components,
}
writeFileSync(join(OUT_DIR, 'components.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8')

// ---------- llms.txt (index) ----------
const blurb = '基于 Ant Design v6 的 Vue3 UI 组件库，TypeScript + TSX 实现。'
let llms = `# ${PKG_NAME}\n\n> ${blurb}\n\n`
llms += `安装：\`pnpm add ${PKG_NAME}\`\n\n`
llms += `按需引入：\n\`\`\`ts\nimport { Button } from '${PKG_NAME}'\nimport '${PKG_NAME}/style.css'\n\`\`\`\n\n`
llms += `## Components\n\n`
for (const c of components) {
  const oneLine = (c.description || c.whenToUse || '').replace(/\n+/g, ' ').slice(0, 80)
  llms += `- [${c.title}](${c.docUrl}): ${oneLine}\n`
}
llms += `\n## More\n\n`
llms += `- [components.json](${SITE}/components.json): 全量结构化 API 数据（props/events/slots/demos）\n`
llms += `- [llms-full.txt](${SITE}/llms-full.txt): 自包含全量文档，可直接喂给大模型\n`
writeFileSync(join(OUT_DIR, 'llms.txt'), llms, 'utf8')

// ---------- llms-full.txt (self-contained) ----------
function mdTable(headers: string[], rows: string[][]): string {
  // 单元格内的 | 需转义，否则会破坏 markdown 表格列
  const esc = (c: string) => (c || '').replace(/\|/g, '\\|').replace(/\n+/g, ' ')
  let t = `| ${headers.join(' | ')} |\n| ${headers.map(() => '---').join(' | ')} |\n`
  for (const r of rows) t += `| ${r.map(esc).join(' | ')} |\n`
  return t
}
let full = `# ${PKG_NAME}\n\n> ${blurb}\n\n版本 ${version}。安装 \`pnpm add ${PKG_NAME}\`，样式 \`import '${PKG_NAME}/style.css'\`。\n\n`
for (const c of components) {
  full += `\n---\n\n## ${c.title}\n\n`
  if (c.description) full += `${c.description}\n\n`
  if (c.whenToUse) full += `**何时使用**：${c.whenToUse.replace(/\n+/g, ' ')}\n\n`
  full += `导入：\n\`\`\`ts\n${c.import}\n\`\`\`\n\n`
  if (c.props.length) {
    full += `### Props\n\n`
    const bySection: Record<string, PropRow[]> = {}
    for (const p of c.props) (bySection[p.section] ||= []).push(p)
    for (const [sec, rows] of Object.entries(bySection)) {
      if (sec) full += `**${sec}**\n\n`
      full += mdTable(['参数', '说明', '类型', '默认值'], rows.map((r) => [r.name, r.description, r.type, r.default])) + '\n'
    }
  }
  if (c.events.length) {
    full += `### Events\n\n`
    full += mdTable(['事件名', '说明', '回调参数'], c.events.map((e) => [e.name, e.description, e.params])) + '\n'
  }
  if (c.slots.length) {
    full += `### Slots\n\n`
    full += mdTable(['插槽名', '说明'], c.slots.map((s) => [s.name, s.description])) + '\n'
  }
  const demos = c.demos.filter((d) => d.code).slice(0, 2)
  if (demos.length) {
    full += `### 示例\n\n`
    for (const d of demos) {
      full += `${d.title}${d.description ? ` — ${d.description}` : ''}\n\n\`\`\`vue\n${d.code}\n\`\`\`\n\n`
    }
  }
}
writeFileSync(join(OUT_DIR, 'llms-full.txt'), full, 'utf8')

console.log(`\n✅ Generated for ${components.length} components:`)
console.log(`   docs/public/components.json`)
console.log(`   docs/public/llms.txt`)
console.log(`   docs/public/llms-full.txt`)
