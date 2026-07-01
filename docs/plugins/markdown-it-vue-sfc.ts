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
function highlightVueSFC(code: string): string {
  const sections: { tag: string; content: string; attrs: string; start: number; end: number }[] = []

  // 匹配三种标签
  const tagRegex = /<(template|script|style)([^>]*)>([\s\S]*?)<\/\1>/g
  let match: RegExpExecArray | null

  while ((match = tagRegex.exec(code)) !== null) {
    sections.push({
      tag: match[1],
      attrs: match[2],
      content: match[3],
      start: match.index,
      end: match.index + match[0].length,
    })
  }

  // 按位置排序
  sections.sort((a, b) => a.start - b.start)

  let result = ''
  let lastEnd = 0

  for (const section of sections) {
    // 添加标签之间的内容（通常是空白）
    if (section.start > lastEnd) {
      result += code.slice(lastEnd, section.start)
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

  // 添加剩余内容
  if (lastEnd < code.length) {
    result += code.slice(lastEnd)
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
