<template>
  <div class="breadcrumb-custom-render-demo">
    <div class="demo-section">
      <h4>自定义渲染 - 添加图标和样式</h4>
      <Breadcrumb :items="items" :item-render="itemRenderWithIcon" />
    </div>

    <div class="demo-section">
      <h4>自定义渲染 - 添加徽章</h4>
      <Breadcrumb :items="items" :item-render="itemRenderWithBadge" />
    </div>

    <div class="demo-section">
      <h4>自定义渲染 - 链接样式</h4>
      <Breadcrumb :items="items" :item-render="itemRenderWithLink" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, Icon } from 'ant-design-hmfw'
import type { BreadcrumbItem as BreadcrumbItemType } from 'ant-design-hmfw'

const items: BreadcrumbItemType[] = [
  { title: '首页', path: 'home' },
  { title: '产品', path: 'products' },
  { title: '详情' },
]

// 自定义渲染 - 添加图标
const itemRenderWithIcon = (
  item: BreadcrumbItemType,
  params: Record<string, any>,
  items: BreadcrumbItemType[],
  paths: string[]
) => {
  const isLast = items.indexOf(item) === items.length - 1
  const iconType = item.title === '首页' ? 'home' : item.title === '产品' ? 'appstore' : 'file'

  const content = h(
    'span',
    { style: 'display: flex; align-items: center; gap: 4px;' },
    [
      h(Icon, { type: iconType, style: 'font-size: 14px;' }),
      h('span', item.title as string),
    ]
  )

  if (isLast) {
    return h('span', { class: 'hmfw-breadcrumb-link' }, [content])
  }

  return h(
    'a',
    {
      class: 'hmfw-breadcrumb-link',
      href: `#/${paths.join('/')}`,
      style: 'color: #1890ff;',
    },
    [content]
  )
}

// 自定义渲染 - 添加徽章
const itemRenderWithBadge = (
  item: BreadcrumbItemType,
  params: Record<string, any>,
  items: BreadcrumbItemType[],
  paths: string[]
) => {
  const isLast = items.indexOf(item) === items.length - 1
  const showBadge = item.title === '产品'

  const content = h(
    'span',
    { style: 'display: inline-flex; align-items: center; gap: 8px;' },
    [
      h('span', item.title as string),
      showBadge &&
        h(
          'span',
          {
            style:
              'background: #ff4d4f; color: white; padding: 0 6px; border-radius: 10px; font-size: 12px;',
          },
          'New'
        ),
    ].filter(Boolean)
  )

  if (isLast) {
    return h('span', { class: 'hmfw-breadcrumb-link' }, [content])
  }

  return h(
    'a',
    {
      class: 'hmfw-breadcrumb-link',
      href: `#/${paths.join('/')}`,
    },
    [content]
  )
}

// 自定义渲染 - 自定义链接样式
const itemRenderWithLink = (
  item: BreadcrumbItemType,
  params: Record<string, any>,
  items: BreadcrumbItemType[],
  paths: string[]
) => {
  const isLast = items.indexOf(item) === items.length - 1

  if (isLast) {
    return h(
      'span',
      {
        class: 'hmfw-breadcrumb-link',
        style: 'font-weight: 600; color: #262626;',
      },
      item.title as string
    )
  }

  return h(
    'a',
    {
      class: 'hmfw-breadcrumb-link',
      href: `#/${paths.join('/')}`,
      style:
        'color: #1890ff; text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px;',
      onMouseenter: (e: MouseEvent) => {
        ;(e.target as HTMLElement).style.color = '#40a9ff'
      },
      onMouseleave: (e: MouseEvent) => {
        ;(e.target as HTMLElement).style.color = '#1890ff'
      },
    },
    item.title as string
  )
}
</script>

<style scoped>
.breadcrumb-custom-render-demo {
  padding: 16px;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-section h4 {
  margin-bottom: 12px;
  font-size: 14px;
  color: #666;
}
</style>
