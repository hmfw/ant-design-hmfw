import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * 高亮 Vue SFC 代码 — 拆分 template/script/style 三部分分别用对应语言高亮。
 * 与 markdown-it-vue-sfc 插件逻辑一致，用于运行时 v-highlight 指令。
 */
export function highlightVueSFC(code: string): string {
  const sections: { tag: string; content: string; attrs: string; start: number; end: number }[] = []

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
    if (section.start > lastEnd) {
      result += escapeHtml(code.slice(lastEnd, section.start))
    }

    const openTag = `<${section.tag}${section.attrs}>`
    result += Prism.highlight(openTag, Prism.languages.markup, 'markup')

    let highlightedContent: string
    if (section.tag === 'template') {
      highlightedContent = Prism.highlight(section.content, Prism.languages.markup, 'markup')
    } else if (section.tag === 'script') {
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

    const closeTag = `</${section.tag}>`
    result += Prism.highlight(closeTag, Prism.languages.markup, 'markup')

    lastEnd = section.end
  }

  if (lastEnd < code.length) {
    result += escapeHtml(code.slice(lastEnd))
  }

  return result
}
