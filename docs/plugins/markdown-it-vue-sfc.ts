import type MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

/**
 * 高亮 Vue SFC 代码
 * 拆分 <template>、<script>、<style> 三个部分分别处理
 */
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlightVueSFC(code: string): string {
  const sections: { tag: string; content: string; attrs: string; start: number; end: number }[] = []

  // 逐个扫描 template/script/style 的开闭标签，用深度计数匹配对应的结束标签。
  // 这样能正确处理嵌套（如 <template> 内的具名插槽 <template #footer>），
  // 避免非贪婪正则把外层 <template> 误配到内层 </template> 上，
  // 从而漏掉真正的外层结束标签、导致其原样泄漏到页面里。
  const tokenRegex = /<(\/?)(template|script|style)((?:"[^"]*"|'[^']*'|[^'">])*)>/g
  let match: RegExpExecArray | null
  let depth = 0
  let curTag = ''
  let openStart = 0
  let openAttrs = ''
  let contentStart = 0

  while ((match = tokenRegex.exec(code)) !== null) {
    const isClose = match[1] === '/'
    const tag = match[2]

    if (depth === 0) {
      if (!isClose) {
        curTag = tag
        openStart = match.index
        openAttrs = match[3]
        contentStart = match.index + match[0].length
        depth = 1
      }
    } else if (tag === curTag) {
      if (isClose) {
        depth--
        if (depth === 0) {
          sections.push({
            tag: curTag,
            attrs: openAttrs,
            content: code.slice(contentStart, match.index),
            start: openStart,
            end: match.index + match[0].length,
          })
        }
      } else {
        depth++
      }
    }
  }

  let result = ''
  let lastEnd = 0

  for (const section of sections) {
    // 添加标签之间的内容（通常是空白）——必须转义，避免原始 HTML 泄漏
    if (section.start > lastEnd) {
      result += escapeHtml(code.slice(lastEnd, section.start))
    }

    // 高亮开始标签
    const openTag = `<${section.tag}${section.attrs}>`
    result += Prism.highlight(openTag, Prism.languages.markup, 'markup')

    // 根据标签类型高亮内容
    let highlightedContent: string
    if (section.tag === 'template') {
      highlightedContent = Prism.highlight(section.content, Prism.languages.markup, 'markup')
    } else if (section.tag === 'script') {
      // 检测 script 标签的 lang 属性
      const isTs = /lang=["']ts["']/.test(section.attrs) || /lang=["']typescript["']/.test(section.attrs)
      const isTsx = /lang=["']tsx["']/.test(section.attrs)
      const lang = isTsx ? 'tsx' : isTs ? 'typescript' : 'javascript'
      highlightedContent = Prism.highlight(section.content, Prism.languages[lang], lang)
    } else if (section.tag === 'style') {
      highlightedContent = Prism.highlight(section.content, Prism.languages.css, 'css')
    } else {
      highlightedContent = section.content
    }

    result += highlightedContent

    // 高亮结束标签
    const closeTag = `</${section.tag}>`
    result += Prism.highlight(closeTag, Prism.languages.markup, 'markup')

    lastEnd = section.end
  }

  // 添加剩余内容（同样需要转义）
  if (lastEnd < code.length) {
    result += escapeHtml(code.slice(lastEnd))
  }

  return result
}

/**
 * markdown-it 插件：为 vue 代码块添加特殊的语法高亮处理
 */
export default function markdownItVueSFC(md: MarkdownIt) {
  // 保存原始的 fence 渲染器
  const defaultFence = md.renderer.rules.fence!

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const lang = token.info.trim()

    // 如果是 vue 代码块，使用自定义高亮
    if (lang === 'vue') {
      const code = token.content
      const highlighted = highlightVueSFC(code)

      return `<pre class="language-vue"><code>${highlighted}</code></pre>`
    }

    // 其他语言使用默认处理
    return defaultFence(tokens, idx, options, env, self)
  }
}
