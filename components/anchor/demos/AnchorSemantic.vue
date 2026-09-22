<template>
  <SemanticPreview component="Anchor" :semantics="semantics" :height="200">
    <template #default="{ classNames }">
      <!-- getCurrentAnchor 强制第一项为激活态，使 ink / linkActive / titleActive 渲染 -->
      <Anchor :affix="false" :items="items" :get-current-anchor="getCurrentAnchor" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const items = [
  { key: 'a', href: '#anchor-demo-1', title: '基本用法' },
  { key: 'b', href: '#anchor-demo-2', title: '静态位置' },
  { key: 'c', href: '#anchor-demo-3', title: '自定义锚点' },
]

// 固定返回第一项，锁定激活链接，让激活态相关节点稳定渲染
const getCurrentAnchor = () => '#anchor-demo-1'

// 与 AnchorClassNames / AnchorStyles 的 key 一一对应
const semantics = [
  {
    name: 'wrapper',
    desc: '外层滚动容器（div.hmfw-anchor-wrapper）。承载 affix 定位与最大高度约束，水平模式下带 -wrapper-horizontal 类名，始终渲染。',
  },
  {
    name: 'root',
    desc: '锚点根容器（div.hmfw-anchor）。承载锚点列表的整体布局与左侧指示轨道，非 affix 时带 -fixed 类名，始终渲染。',
  },
  {
    name: 'ink',
    desc: '指示器滑块（span.hmfw-anchor-ink）。跟随激活项移动的高亮条，其位置由激活链接测量得出；存在激活链接时带 -ink-visible 类名，节点本身始终渲染。',
  },
  {
    name: 'link',
    desc: '链接项容器（div.hmfw-anchor-link）。包裹单个锚点链接及其子链接，承载缩进与间距，每个 item 各渲染一个。',
  },
  {
    name: 'linkActive',
    desc: '激活状态的链接项。作为附加类叠加在处于激活态的 link 容器上，仅当该链接为当前激活项时应用，因此高亮框只框住激活的那一项。',
  },
  {
    name: 'title',
    desc: '链接文本（a.hmfw-anchor-link-title）。承载链接文字的颜色、字号与省略样式，每个 item 各渲染一个。',
  },
  {
    name: 'titleActive',
    desc: '激活状态的链接文本。作为附加类叠加在激活态的 title 节点上，仅当该链接为当前激活项时应用，高亮框只框住激活项的文字。',
  },
]
</script>
