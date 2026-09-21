/**
 * 文档站搜索 —— 等价实现 dumi 内置搜索的核心逻辑，为 Vue3 文档站定制。
 *
 * 设计要点（对标 ant-design 官网 dumi SearchBar）：
 * - 索引以 `componentGroups` + `guideSidebar` 为主源（实时最新、覆盖全部组件），
 *   懒加载 `public/components.json` 按 slug 补充组件描述（陈旧/失败均不影响可用性）。
 * - 数据量小（数十条），同步过滤即可即时出结果，无需 dumi 的 Web Worker；
 *   仍保留 200ms 防抖 + loading 态，与 dumi 交互观感一致。
 * - 命中片段拆分供高亮渲染；结果按类型（组件 / 指南）分组并附连续 activeIndex，
 *   方便方向键循环导航。
 */
import { ref, computed, watch, type Ref, type ComputedRef } from 'vue'
import { componentGroups, guideSidebar } from '../router/sidebar'

/** 单条可搜索索引项 */
export interface SearchEntry {
  type: 'component' | 'guide'
  /** 分组标题（组件为「通用/布局...」，指南为「指南」） */
  group: string
  /** 完整标题，如 "Button 按钮" */
  title: string
  /** 英文名（组件），如 "Button"；指南为空串 */
  titleEn: string
  /** 中文名，如 "按钮" */
  titleCn: string
  /** 路由路径 */
  path: string
  /** 描述（组件可由 components.json 补充） */
  description: string
  /** 小写化后的检索文本，预拼好避免每次搜索重复 toLowerCase */
  haystack: string
  /**
   * 功能性属性名（组件专属，由 components.json 补充，已过滤通用属性）。
   * 保留原始大小写用于展示，检索时按需 toLowerCase。
   */
  propNames: string[]
}

/** 高亮片段：命中部分 highlighted 为 true */
export interface HighlightPart {
  text: string
  highlighted: boolean
}

/** 命中结果项 */
export interface SearchHit {
  entry: SearchEntry
  /** 排序分值，越小越靠前 */
  score: number
  titleParts: HighlightPart[]
  descParts: HighlightPart[]
  /** 因属性名命中时，标注命中的属性（供 UI 显示「· allowClear」归因） */
  matchedProp?: string
}

/** 结果分组（渲染用），activeIndex 在整个扁平结果里连续递增 */
export interface SearchGroup {
  title: string
  hits: (SearchHit & { activeIndex: number })[]
}

/**
 * 组件搜索别名字典（按组件目录名）。
 * 纯子串匹配无同义词概念，用户常用词往往不等于组件中文名
 * （搜「弹窗」≠「对话框」、搜「下拉菜单」≠「下拉菜单」但 Dropdown 亦叫「菜单」）。
 * 这里为高频组件补一批口语化别名，拼进 haystack 提升召回。
 */
const componentAliases: Record<string, string[]> = {
  modal: ['弹窗', '弹框', '对话框', '模态框', '浮层'],
  drawer: ['抽屉', '侧边栏', '侧滑'],
  dropdown: ['下拉', '下拉菜单', '菜单'],
  message: ['提示', '轻提示', 'toast', '消息'],
  notification: ['通知', '消息', '通知提醒'],
  tooltip: ['提示', '悬浮提示', '气泡'],
  popover: ['气泡', '弹出层', '悬浮卡片'],
  popconfirm: ['气泡确认', '二次确认', '删除确认'],
  select: ['下拉选择', '选择框', '下拉框'],
  'auto-complete': ['自动补全', '联想输入', '搜索建议'],
  cascader: ['级联', '多级选择', '省市区'],
  'tree-select': ['树选择', '树形下拉'],
  'date-picker': ['日期', '选日期', '日历选择'],
  'range-picker': ['日期区间', '起止日期', '时间范围'],
  'time-picker': ['时间', '选时间'],
  spin: ['加载', 'loading', '转圈', '加载中'],
  skeleton: ['骨架', '占位', '加载占位'],
  progress: ['进度', '进度条', '加载进度'],
  badge: ['角标', '红点', '未读', '小红点'],
  tag: ['标签', '徽章'],
  avatar: ['头像', '用户头像'],
  table: ['表格', '列表', '数据表', '分页排序'],
  pagination: ['分页', '翻页', '页码'],
  form: ['表单', '校验', '提交'],
  upload: ['上传', '文件上传', '图片上传'],
  carousel: ['轮播', '走马灯', '幻灯片', 'banner'],
  breadcrumb: ['面包屑', '导航路径'],
  steps: ['步骤', '流程', '向导'],
  tour: ['引导', '新手引导', '漫游'],
  'config-provider': ['全局配置', '主题', '国际化配置'],
  watermark: ['水印', '防伪'],
  qrcode: ['二维码', 'qr'],
}

/**
 * 属性搜索的停用词表：这些属性几乎每个组件都有，无区分度，
 * 纳入检索只会制造噪声（搜「size」炸出 40 个组件），故排除在属性索引之外。
 */
const propStopList = new Set([
  'classnames',
  'styles',
  'style',
  'class',
  'classname',
  'disabled',
  'size',
  'title',
  'type',
  'icon',
  'key',
  'value',
  'defaultvalue',
  'label',
  'name',
  'id',
  'children',
  'prefixcls',
])

/** 将 "Button 按钮" 拆成英文名 / 中文名 */
function splitTitle(title: string): { en: string; cn: string } {
  const match = title.match(/^([A-Za-z][\w.-]*)\s+(.*)$/)
  if (match) {
    return { en: match[1], cn: match[2] }
  }
  return { en: '', cn: title }
}

/** 构建静态索引（组件 + 指南），组件描述稍后异步补充 */
function buildBaseIndex(): SearchEntry[] {
  const entries: SearchEntry[] = []

  for (const grp of componentGroups) {
    for (const item of grp.children) {
      const { en, cn } = splitTitle(item.title)
      const aliases = componentAliases[item.name] ?? []
      entries.push({
        type: 'component',
        group: grp.title,
        title: item.title,
        titleEn: en,
        titleCn: cn,
        path: `/components/${item.name}`,
        description: '',
        haystack: `${item.title} ${item.name} ${aliases.join(' ')}`.toLowerCase(),
        propNames: [],
      })
    }
  }

  for (const grp of guideSidebar) {
    for (const item of grp.children) {
      entries.push({
        type: 'guide',
        group: grp.title,
        title: item.title,
        titleEn: '',
        titleCn: item.title,
        path: item.path,
        description: '',
        haystack: item.title.toLowerCase(),
        propNames: [],
      })
    }
  }

  return entries
}

/**
 * 从 components.json 的 props 表提炼可检索的属性名。
 * 原始数据含噪声：`value(v-model)` 尾缀、反引号包裹的函数签名（如 `() => void`）、
 * `data-\*` 通配等。这里只保留「干净的驼峰标识符」：
 * - 去掉 (v-model) / 空格尾缀，取首个 token
 * - 仅接受 /^[a-z][a-zA-Z0-9]*$/（Vue 属性均驼峰，天然排除函数签名与 data-* 连字符名）
 * - 过滤停用词（size/type 等无区分度的通用属性）
 * 保留原始大小写用于展示与高亮。
 */
function extractPropNames(props?: { name?: string }[]): string[] {
  if (!props) return []
  const out: string[] = []
  const seen = new Set<string>()
  for (const p of props) {
    const raw = (p.name ?? '').trim()
    if (!raw) continue
    // 取首 token：切掉 "(v-model)"、空格后的备注
    const name = raw.split(/[\s(]/)[0]
    if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) continue
    const lower = name.toLowerCase()
    if (propStopList.has(lower) || seen.has(lower)) continue
    seen.add(lower)
    out.push(name)
  }
  return out
}

/**
 * 子序列匹配：key 的字符按序出现在 text 中即命中（允许中间有间隔）。
 * 用于漏字母的容错兜底，如 "buton" 命中 "button"。
 */
function isSubsequence(text: string, key: string): boolean {
  if (!key) return false
  let i = 0
  for (let j = 0; j < text.length && i < key.length; j++) {
    if (text[j] === key[i]) i++
  }
  return i === key.length
}

/** 把 text 中命中 keyword（大小写不敏感）的片段拆出用于高亮 */
function highlight(text: string, keyword: string): HighlightPart[] {
  if (!text || !keyword) return text ? [{ text, highlighted: false }] : []
  const lower = text.toLowerCase()
  const key = keyword.toLowerCase()
  const parts: HighlightPart[] = []
  let from = 0
  let idx = lower.indexOf(key, from)
  while (idx !== -1) {
    if (idx > from) parts.push({ text: text.slice(from, idx), highlighted: false })
    parts.push({ text: text.slice(idx, idx + key.length), highlighted: true })
    from = idx + key.length
    idx = lower.indexOf(key, from)
  }
  if (from < text.length) parts.push({ text: text.slice(from), highlighted: false })
  return parts
}

/** components.json 的组件片段类型（仅取用到的字段） */
interface ComponentsJson {
  components?: {
    slug?: string
    description?: string
    whenToUse?: string
    props?: { name?: string }[]
  }[]
}

/** 用于补充的组件文本：display 供渲染，search 供检索（后者含 whenToUse 场景词） */
interface EnrichText {
  display: string
  search: string
}

// 模块级单例：索引与「描述已补充」标志跨组件实例复用，避免重复 fetch
let baseIndex: SearchEntry[] | null = null
let enriched = false
let enriching: Promise<void> | null = null

/** 懒加载 components.json，按 slug 给组件补描述（幂等、失败静默降级） */
async function enrichDescriptions(index: SearchEntry[]): Promise<void> {
  if (enriched) return
  if (enriching) return enriching
  enriching = (async () => {
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}components.json`)
      if (!res.ok) return
      const json = (await res.json()) as ComponentsJson
      const bySlug = new Map<string, EnrichText>()
      const propsBySlug = new Map<string, string[]>()
      for (const c of json.components ?? []) {
        if (!c.slug) continue
        const description = (c.description ?? '').trim()
        const whenToUse = (c.whenToUse ?? '').trim()
        bySlug.set(c.slug, {
          // 渲染优先用 description，缺失时退回 whenToUse
          display: description || whenToUse,
          // 检索时两者都纳入，whenToUse 是「场景词」富矿（如「消息提醒」→Badge）
          search: `${description} ${whenToUse}`.trim(),
        })
        propsBySlug.set(c.slug, extractPropNames(c.props))
      }
      for (const entry of index) {
        if (entry.type !== 'component') continue
        const slug = entry.path.replace('/components/', '')
        const text = bySlug.get(slug)
        if (text) {
          entry.description = text.display
          if (text.search) entry.haystack = `${entry.haystack} ${text.search.toLowerCase()}`
        }
        entry.propNames = propsBySlug.get(slug) ?? []
      }
      enriched = true
    } catch {
      // 网络失败：保持仅标题检索，静默降级
    } finally {
      enriching = null
    }
  })()
  return enriching
}

export interface UseDocSearch {
  /** 输入框绑定的关键词（v-model 直接拥有，避免与内部状态竞争写入） */
  keywords: Ref<string>
  loading: Ref<boolean>
  /** 扁平命中列表（供键盘导航按序索引） */
  flatHits: ComputedRef<(SearchHit & { activeIndex: number })[]>
  /** 分组后的命中列表（供渲染） */
  groups: ComputedRef<SearchGroup[]>
  /** 命中总数 */
  total: ComputedRef<number>
  /** 触发一次索引加载（含描述补充）——聚焦 / hover 时调用，幂等 */
  load: () => void
  /** 清空关键词 */
  clear: () => void
}

export function useDocSearch(): UseDocSearch {
  if (!baseIndex) baseIndex = buildBaseIndex()
  const index = baseIndex

  // keywords 由输入框 v-model 独占写入；debounced 是内部派生的检索词，
  // 二者分离，彻底避免「v-model 写一次、回调再写一次」的竞态。
  const keywords = ref('')
  const debounced = ref('')
  const loading = ref(false)
  // 描述补充完成后自增，用于让 computed 在异步 enrich 后重新计算
  const revision = ref(0)

  let timer: ReturnType<typeof setTimeout> | undefined

  const load = () => {
    if (enriched) return
    enrichDescriptions(index).then(() => {
      revision.value++
    })
  }

  // 监听 keywords（v-model 更新，含 IME composition 结束后的同步），
  // 做 200ms 防抖后写入 debounced，驱动检索。
  watch(keywords, (val) => {
    load()
    const str = val.trim()
    clearTimeout(timer)
    if (!str) {
      debounced.value = ''
      loading.value = false
      return
    }
    loading.value = true
    timer = setTimeout(() => {
      debounced.value = str
      loading.value = false
    }, 200)
  })

  const clear = () => {
    keywords.value = ''
  }

  /** 计算单条命中：score 越小越靠前，matchedProp 记录因属性命中时的属性名；null 表示不命中 */
  function scoreOf(entry: SearchEntry, key: string): { score: number; matchedProp?: string } | null {
    const en = entry.titleEn.toLowerCase()
    const cn = entry.titleCn.toLowerCase()
    if (en && en === key) return { score: 0 } // 英文名完全匹配
    if (en.startsWith(key)) return { score: 1 } // 英文名前缀
    if (cn.startsWith(key)) return { score: 2 } // 中文名前缀
    if (entry.title.toLowerCase().includes(key)) return { score: 3 } // 标题内包含
    if (entry.haystack.includes(key)) return { score: 4 } // 描述/别名/slug 命中
    // 属性名命中：门控为「ASCII 标识符关键词（≥2 字符）」，避免中文/单字符炸出噪声。
    // 属性名不进 haystack，单独在此匹配并回传命中的属性用于归因标注。
    if (/^[a-z][a-z0-9]+$/.test(key)) {
      const hit = entry.propNames.find((p) => p.toLowerCase().includes(key))
      if (hit) return { score: 5, matchedProp: hit }
    }
    // 容错兜底：仅对 ASCII 关键词做英文名子序列匹配（漏字母，如 buton→button），
    // 中文子序列噪声大，不参与
    if (/^[a-z0-9]+$/.test(key) && en && isSubsequence(en, key)) return { score: 6 }
    return null
  }

  const flatHits = computed<(SearchHit & { activeIndex: number })[]>(() => {
    // 建立对 revision 的依赖，使描述异步补充后重算
    void revision.value
    const key = debounced.value.toLowerCase()
    if (!key) return []

    const hits: SearchHit[] = []
    for (const entry of index) {
      const matched = scoreOf(entry, key)
      if (matched === null) continue
      hits.push({
        entry,
        score: matched.score,
        titleParts: highlight(entry.title, debounced.value),
        descParts: highlight(entry.description, debounced.value),
        matchedProp: matched.matchedProp,
      })
    }

    hits.sort((a, b) => a.score - b.score || a.entry.title.localeCompare(b.entry.title))

    return hits.map((hit, i) => ({ ...hit, activeIndex: i }))
  })

  const groups = computed<SearchGroup[]>(() => {
    const compHits = flatHits.value.filter((h) => h.entry.type === 'component')
    const guideHits = flatHits.value.filter((h) => h.entry.type === 'guide')
    const result: SearchGroup[] = []
    if (compHits.length) result.push({ title: '组件', hits: compHits })
    if (guideHits.length) result.push({ title: '指南', hits: guideHits })
    return result
  })

  const total = computed(() => flatHits.value.length)

  return { keywords, loading, flatHits, groups, total, load, clear }
}
