<template>
  <div v-highlight class="markdown-body">
    <h1>主题定制</h1>

    <p>
      @hmfw/ant-design 基于 CSS Variables 实现主题定制，采用<strong>「构建时生成 + 运行时覆盖」</strong>架构。通过
      <code>ConfigProvider</code> 传入自定义 Seed Token，所有派生 Token 自动计算并注入。
    </p>

    <h2>设计 Token 系统</h2>

    <p>Token 分为三层管道：</p>

    <pre><code>SeedTokens（原始参数，16 个）
    │  用户通过 ConfigProvider 覆盖
    ▼
generateMapTokens（自动派生）
    │  lighten / darken / alpha / 间距公式
    ▼
MapTokens（~110 个 CSS 变量）
    │  tokensToCssVars / injectCssVars
    ▼
var(--hmfw-xxx)
    组件 CSS 消费</code></pre>

    <p>
      <strong>核心原则</strong>：TS 代码（<code>components/_theme/theme.ts</code>）是唯一真值源，静态 CSS
      文件（<code>style/index.css</code>）由构建脚本自动生成。修改 seed 默认值或派生逻辑后，运行
      <code>pnpm generate-theme</code> 重新生成。
    </p>

    <h2>快速上手</h2>

    <h3>修改品牌色</h3>

    <p>只需改一个 <code>colorPrimary</code>，9 个派生变体（hover / active / bg / border / text 系列）自动计算：</p>

    <pre><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :theme="{ colorPrimary: '#00b96b' }"&gt;
    &lt;Button type="primary"&gt;绿色按钮&lt;/Button&gt;
    &lt;Button&gt;默认按钮&lt;/Button&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ConfigProvider, Button } from '@hmfw/ant-design'
&lt;/script&gt;</code></pre>

    <h3>暗色模式</h3>

    <p>修改 <code>colorTextBase</code> 和 <code>colorBgBase</code>，所有文字色、背景色、边框色、填充色自动重新派生：</p>

    <pre><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :theme="{ colorTextBase: '#ffffff', colorBgBase: '#000000' }"&gt;
    &lt;App /&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;</code></pre>

    <h2>Seed Token 完整列表</h2>

    <h3>颜色</h3>

    <Table :columns="colorColumns" :data-source="colorData" :pagination="false" bordered size="small" />

    <p>
      <strong>派生规则</strong>：所有文字色从 <code>colorTextBase</code> 按透明度阶梯派生（0.88 / 0.65 / 0.45 /
      0.25）；所有背景衍生色和边框色从 <code>colorBgBase</code> 通过
      <code>darken()</code> 派生；所有语义色（primary/success/warning/error/info）的 bg / border / text / hover / active
      变体通过 <code>lighten()</code> / <code>darken()</code> 派生。
    </p>

    <h3>字体</h3>

    <Table :columns="fontColumns" :data-source="fontData" :pagination="false" bordered size="small" />

    <h3>圆角</h3>

    <Table :columns="radiusColumns" :data-source="radiusData" :pagination="false" bordered size="small" />

    <h3>动效</h3>

    <Table :columns="motionColumns" :data-source="motionData" :pagination="false" bordered size="small" />

    <h3>阴影 &amp; 布局</h3>

    <Table :columns="shadowColumns" :data-source="shadowData" :pagination="false" bordered size="small" />

    <h2>派生 Token（MapTokens）</h2>

    <p>
      以下 Token 由 SeedTokens 自动派生，<strong>无需也不应手动设置</strong>。在组件 CSS 中通过
      <code>var(--hmfw-xxx)</code> 直接使用：
    </p>

    <Table :columns="mapTokenColumns" :data-source="mapTokenData" :pagination="false" bordered size="small" />

    <p>完整列表见 <code>components/_theme/theme.ts</code> 中的 <code>MapTokens</code> 接口。</p>

    <h2>直接使用 CSS Variables</h2>

    <p>所有 Token 都会以 <code>--hmfw-</code> 前缀注入为 CSS 变量，可以在自定义样式中直接使用：</p>

    <pre><code class="language-css">.my-component {
  color: var(--hmfw-color-primary);
  border: 1px solid var(--hmfw-color-border);
  border-radius: var(--hmfw-border-radius);
  font-size: var(--hmfw-font-size);
  padding: var(--hmfw-padding-sm) var(--hmfw-padding);
}</code></pre>

    <h2>构建时生成</h2>

    <p>修改 seed 默认值或派生逻辑后，运行以下命令重新生成静态 CSS fallback：</p>

    <pre><code class="language-bash">pnpm generate-theme</code></pre>

    <p><code>precheck</code> 和 <code>build:lib</code> 会自动校验 CSS 是否与 TS 代码同步，不一致则发布失败。</p>

    <h2>更多示例</h2>

    <p>
      参见 <a href="/components/config-provider">ConfigProvider 组件文档</a> 中的交互式
      Demo（品牌色切换、暗色模式、紧凑间距）。
    </p>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

// ---- 辅助函数 ----

const code = (v: string) => h('code', v)

/** 将字符串中 `...` 包裹的部分渲染为 <code>，其余为纯文本 */
function renderMixed(v: string) {
  const regex = /`([^`]+)`/g
  const parts: (string | ReturnType<typeof h>)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(v)) !== null) {
    if (match.index > lastIndex) {
      parts.push(v.slice(lastIndex, match.index))
    }
    parts.push(h('code', match[1]))
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < v.length) {
    parts.push(v.slice(lastIndex))
  }
  return parts.length === 1 ? parts[0] : parts
}

// ---- 颜色 ----

const colorColumns: TableColumn[] = [
  { title: 'Token', dataIndex: 'token', key: 'token', render: code },
  { title: '说明', dataIndex: 'description', key: 'description' },
  { title: '类型', dataIndex: 'type', key: 'type', render: code },
  { title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue', render: code },
]

const colorData = [
  { token: 'colorPrimary', description: '品牌主色', type: 'string', defaultValue: "'#1677ff'" },
  { token: 'colorSuccess', description: '成功色', type: 'string', defaultValue: "'#52c41a'" },
  { token: 'colorWarning', description: '警告色', type: 'string', defaultValue: "'#faad14'" },
  { token: 'colorError', description: '错误色', type: 'string', defaultValue: "'#ff4d4f'" },
  { token: 'colorInfo', description: '信息色', type: 'string', defaultValue: "'#1677ff'" },
  { token: 'colorTextBase', description: '文字基准色', type: 'string', defaultValue: "'#000000'" },
  { token: 'colorBgBase', description: '背景基准色', type: 'string', defaultValue: "'#ffffff'" },
]

// ---- 字体 ----

const fontColumns: TableColumn[] = [
  { title: 'Token', dataIndex: 'token', key: 'token', render: code },
  { title: '说明', dataIndex: 'description', key: 'description' },
  { title: '类型', dataIndex: 'type', key: 'type', render: code },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    key: 'defaultValue',
    render: (value: string | number) => (typeof value === 'number' ? h('code', String(value)) : value),
  },
]

const fontData = [
  { token: 'fontFamily', description: '字体家族', type: 'string', defaultValue: '系统字体栈' },
  { token: 'fontSizeBase', description: '基础字号', type: 'number', defaultValue: 14 },
  { token: 'lineHeightBase', description: '基础行高', type: 'number', defaultValue: 1.5714 },
]

// ---- 圆角 ----

const radiusColumns: TableColumn[] = [
  { title: 'Token', dataIndex: 'token', key: 'token', render: code },
  { title: '说明', dataIndex: 'description', key: 'description' },
  { title: '类型', dataIndex: 'type', key: 'type', render: code },
  { title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue', render: code },
]

const radiusData = [
  { token: 'borderRadius', description: '基础圆角', type: 'number', defaultValue: '6' },
  { token: 'borderRadiusSM', description: '小圆角', type: 'number', defaultValue: '4' },
  { token: 'borderRadiusLG', description: '大圆角', type: 'number', defaultValue: '8' },
]

// ---- 动效 ----

const motionColumns: TableColumn[] = [
  { title: 'Token', dataIndex: 'token', key: 'token', render: code },
  { title: '说明', dataIndex: 'description', key: 'description' },
  { title: '类型', dataIndex: 'type', key: 'type', render: code },
  { title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue', render: code },
]

const motionData = [
  { token: 'motionDurationFast', description: '快速动画时长', type: 'string', defaultValue: "'0.1s'" },
  { token: 'motionDurationMid', description: '中速动画时长', type: 'string', defaultValue: "'0.2s'" },
  { token: 'motionDurationSlow', description: '慢速动画时长', type: 'string', defaultValue: "'0.3s'" },
  {
    token: 'motionEaseInOut',
    description: '进出缓动',
    type: 'string',
    defaultValue: "'cubic-bezier(0.645, 0.045, 0.355, 1)'",
  },
  {
    token: 'motionEaseOut',
    description: '出缓动',
    type: 'string',
    defaultValue: "'cubic-bezier(0.215, 0.61, 0.355, 1)'",
  },
]

// ---- 阴影 & 布局 ----

const shadowColumns: TableColumn[] = [
  { title: 'Token', dataIndex: 'token', key: 'token', render: code },
  { title: '说明', dataIndex: 'description', key: 'description' },
  { title: '类型', dataIndex: 'type', key: 'type', render: code },
  { title: '默认值', dataIndex: 'defaultValue', key: 'defaultValue' },
]

const shadowData = [
  { token: 'boxShadow', description: '基础阴影', type: 'string', defaultValue: '-' },
  { token: 'boxShadowSecondary', description: '次级阴影', type: 'string', defaultValue: '-' },
  { token: 'boxShadowTertiary', description: '三级阴影', type: 'string', defaultValue: '-' },
  { token: 'boxShadowPopoverArrow', description: '弹出层箭头', type: 'string', defaultValue: '-' },
  { token: 'colorBgHeader', description: 'Header 背景色', type: 'string', defaultValue: "'#001529'" },
]

// ---- 派生 Token ----

const mapTokenColumns: TableColumn[] = [
  { title: '类别', dataIndex: 'category', key: 'category' },
  { title: '数量', dataIndex: 'count', key: 'count' },
  { title: '示例', dataIndex: 'example', key: 'example', render: renderMixed as TableColumn['render'] },
  { title: '派生来源', dataIndex: 'source', key: 'source', render: renderMixed as TableColumn['render'] },
]

const mapTokenData = [
  {
    category: '文字色',
    count: '9',
    example: '`colorText` / `colorTextSecondary` / `colorTextDisabled`',
    source: '`colorTextBase` + alpha 透明度',
  },
  {
    category: '主色变体',
    count: '9',
    example: '`colorPrimaryHover` / `colorPrimaryBg` / `colorPrimaryBorder`',
    source: '`colorPrimary` + lighten / darken',
  },
  {
    category: '语义色变体',
    count: '15',
    example: '`colorSuccessBg` / `colorInfoHover` / `colorErrorActive`',
    source: '各语义色 + lighten / darken',
  },
  {
    category: '背景衍生色',
    count: '7',
    example: '`colorBgContainer` / `colorBgLayout` / `colorBgMask`',
    source: '`colorBgBase` / `colorTextBase`',
  },
  {
    category: '边框/填充',
    count: '8',
    example: '`colorBorder` / `colorFill` / `colorFillSecondary`',
    source: '`colorBgBase` + darken / `colorTextBase` + alpha',
  },
  { category: '间距', count: '16', example: '`padding` / `marginSM` / `marginXXL`', source: '内部间距公式' },
  {
    category: '字号/行高',
    count: '16',
    example: '`fontSize` / `fontSizeHeading1` / `lineHeightSM`',
    source: '`fontSizeBase` / `lineHeightBase`',
  },
  {
    category: '控件尺寸',
    count: '6',
    example: '`controlHeight` / `controlHeightSM` / `controlPaddingHorizontal`',
    source: '固定设计常量',
  },
  { category: '补充 Token', count: '14', example: '`zIndexPopup` / `colorSplit` / `arrowBg`', source: '混合' },
]
</script>
