<template>
  <div v-highlight class="markdown-body">
    <h1>AI 辅助开发</h1>

    <p>
      @hmfw/ant-design 不在大模型的训练数据里。AI 编码助手遇到
      <code>&lt;Table&gt;</code> 时若手边没有文档，只能对着 <code>dist/**/*.d.ts</code> 猜 API ——
      而类型签名既没有默认值说明，也没有用法示例（<code>Table</code> 的 JSDoc 覆盖数为 0）。
    </p>

    <p>为此，npm 包<strong>根目录内置了两份纯文本文档</strong>：无需联网、无需翻源码，AI 助手可直接读取。</p>

    <h2>包内已内置的文档</h2>

    <Table :columns="fileColumns" :data-source="fileData" :pagination="false" bordered size="small" />

    <p>
      两个文件位于包根（<code>node_modules/@hmfw/ant-design/</code>），与 <code>package.json</code> 同级。 它们由
      <code>pnpm gen:llm:pkg</code> 在 <code>build:lib</code> 时生成，内容与在线文档同源 （扫描
      <code>components/*/demos/*.md</code> 聚合），文件头的版本号与包版本一致。
    </p>

    <h2>为什么不让 AI 自己去翻 node_modules</h2>

    <ul>
      <li><code>dist/**/*.d.ts</code> 只有类型签名：没有默认值、没有「什么时候用」、没有示例；</li>
      <li>
        JSDoc 覆盖极不均：<code>select</code> 36 处、<code>form</code> 32 处，而 <code>table</code> 0 处、<code
          >modal</code
        >
        仅 6 处；
      </li>
      <li>README 只有 3 个示例，覆盖不到 71 个组件；</li>
      <li>结果是 AI 只能「猜」：猜错属性名、猜错事件名，或把 antd（React 版）的写法套过来。</li>
    </ul>

    <h2>三种接入方式</h2>

    <h3>1. Claude Code：写进 CLAUDE.md</h3>

    <p>在项目根目录的 <code>CLAUDE.md</code>（或 <code>.claude/CLAUDE.md</code>）中追加：</p>

    <pre><code>## @hmfw/ant-design

本项目使用 `@hmfw/ant-design`（Vue3 组件库，Ant Design v6 风格）。
写 UI 前先读包内文档，不要凭记忆猜 API —— 本库不在模型训练数据里。

- `node_modules/@hmfw/ant-design/llms.txt` —— 组件索引（约 9 KB），先读它确定用哪个组件
- `node_modules/@hmfw/ant-design/llms-full.txt` —— 全量文档（约 300 KB），含每个组件的
  props / events / slots 表格与完整示例源码

用法：从 llms.txt 定位组件后，到 llms-full.txt 检索该组件的 `## 组件名` 小节，只读该小节。</code></pre>

    <h3>2. Cursor：写进 .cursor/rules</h3>

    <p>新建 <code>.cursor/rules/ant-design-hmfw.mdc</code>（旧版 Cursor 用根目录 <code>.cursorrules</code>）：</p>

    <pre><code>---
description: @hmfw/ant-design 组件库 API 文档
globs: ['**/*.vue', '**/*.tsx']
alwaysApply: true
---

使用 @hmfw/ant-design 时不要猜测 props / 事件名：

1. 读 `node_modules/@hmfw/ant-design/llms.txt`（组件索引，约 9 KB）
2. 再到 `node_modules/@hmfw/ant-design/llms-full.txt` 检索目标组件的 `## 组件名` 小节</code></pre>

    <h3>3. 其他工具</h3>

    <Table :columns="toolColumns" :data-source="toolData" :pagination="false" bordered size="small" />

    <h2>token 预算与检索</h2>

    <p>
      <code>llms-full.txt</code> 约 300 KB（≈ 7.5 万 tokens），<strong>不要整份读入上下文</strong>；
      <code>llms.txt</code> 约 9 KB，可以整份读入。按需检索单个组件小节：
    </p>

    <pre><code class="language-bash"># 1. 看有哪些组件小节（含行号）
grep -n '^## ' node_modules/@hmfw/ant-design/llms-full.txt

# 2. 只打印「Table 表格」这一节（到下一个分隔线为止）
sed -n '/^## Table 表格/,/^---$/p' node_modules/@hmfw/ant-design/llms-full.txt</code></pre>

    <h2>验证接入是否生效</h2>

    <p>接入后问一句即可验证：</p>

    <pre><code>用 @hmfw/ant-design 的 Table 写一个带分页和排序的表格，先说明你参考了哪个文件</code></pre>

    <p>
      如果回答里出现了 <code>llms-full.txt</code> 中的属性（如 <code>rowKey</code>、<code>virtual</code>），
      说明接入成功；如果它开始「回忆」antd（React 版）的 API，说明规则没被读到。
    </p>

    <h2>在线地址</h2>

    <p>文档站同样发布这两份文件，可作为包外备份或喂给在线模型：</p>

    <ul>
      <li>
        <a href="https://hmfw.github.io/ant-design-hmfw/llms.txt" target="_blank" rel="noopener">llms.txt</a>
        —— 组件索引
      </li>
      <li>
        <a href="https://hmfw.github.io/ant-design-hmfw/llms-full.txt" target="_blank" rel="noopener">llms-full.txt</a>
        —— 全量文档
      </li>
    </ul>

    <pre><code class="language-bash">curl -o llms-full.txt https://hmfw.github.io/ant-design-hmfw/llms-full.txt</code></pre>

    <h2>常见问题</h2>

    <h3>为什么包里没有 components.json？</h3>

    <p>
      它有 1.5 MB（≈ 37.5 万 tokens），没有任何模型能一次读进上下文，放进包里只会白增安装体积。
      结构化的原始数据仍然发布在文档站：
      <a href="https://hmfw.github.io/ant-design-hmfw/components.json" target="_blank" rel="noopener">components.json</a
      >。
    </p>

    <h3>文档会不会和安装的版本对不上？</h3>

    <p>
      不会。两份文件在 <code>pnpm build:lib</code> 时重新生成并与该版本一起发布， 文件头的版本号与
      <code>package.json</code> 的 <code>version</code> 一致，可直接用它判断文档是否过期。
    </p>

    <h3>直接把 llms-full.txt 整个读进来行不行？</h3>

    <p>
      不建议。约 7.5 万 tokens 会吃掉大部分上下文预算，且绝大多数内容与当前任务无关。 正确姿势是先用
      <code>llms.txt</code> 定位组件，再只读目标组件的那个小节。
    </p>

    <h3>我的工具不支持读文件怎么办？</h3>

    <p>用上面的 <code>curl</code> 把在线版本存到本地，或把目标组件的小节内容直接复制进对话。</p>

    <h2>维护者视角</h2>

    <p>两份文档由 <code>scripts/generate-llm-manifest.ts</code> 生成：</p>

    <pre><code class="language-bash">pnpm gen:llm       # 只更新文档站产物 docs/public/
pnpm gen:llm:pkg   # 额外把两份文档写到包根（pnpm build:lib 会自动执行）</code></pre>

    <p>
      数据源是 <code>components/*/demos/*.md</code> 的「API」表格与「代码演示」小节 ——
      <strong>把组件的 props / 事件 / 插槽补进 demo markdown，AI 文档就会同步变好</strong>。
    </p>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

/** 单元格渲染为等宽代码 */
const code = (v: string) => h('code', v)

/** 包内两份文档的对比 */
const fileColumns: TableColumn[] = [
  { title: '文件', dataIndex: 'file', key: 'file', render: code },
  { title: '体积', dataIndex: 'size', key: 'size' },
  { title: '内容', dataIndex: 'content', key: 'content' },
  { title: '建议用法', dataIndex: 'usage', key: 'usage' },
]

const fileData = [
  {
    file: 'llms.txt',
    size: '约 9 KB',
    content: '71 个组件的名称、一句话简介与文档链接',
    usage: '可整份读入，回答「有哪些组件、该用哪个」',
  },
  {
    file: 'llms-full.txt',
    size: '约 300 KB（≈ 7.5 万 tokens）',
    content: '每个组件的 props / events / slots 表格 + 2 个完整示例源码',
    usage: '按需检索单个组件小节，不要整份读入',
  },
]

/** 各 AI 工具对应的规则文件 */
const toolColumns: TableColumn[] = [
  { title: '工具', dataIndex: 'tool', key: 'tool' },
  { title: '规则文件', dataIndex: 'file', key: 'file', render: code },
]

const toolData = [
  { tool: 'Claude Code', file: 'CLAUDE.md' },
  { tool: 'Cursor', file: '.cursor/rules/*.mdc（旧版为 .cursorrules）' },
  { tool: 'GitHub Copilot', file: '.github/copilot-instructions.md' },
  { tool: 'Windsurf', file: '.windsurfrules' },
  { tool: 'Aider 等自建 agent', file: '任意可注入 system prompt / 规则文件的位置' },
]
</script>
