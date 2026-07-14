<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 场景 1：Item/Panel 级别 classNames/styles 覆盖 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Item 级别 classNames/styles（单独定制某个面板）：</div>
      <Collapse :default-active-key="['1', '3']" :class-names="{ header: 'global-header' }" :items="customStyleItems" />
    </div>

    <!-- 场景 2：Item 级别 collapsible 覆盖 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Item 级别 collapsible 覆盖：</div>
      <Collapse collapsible="header" :default-active-key="['1']" :items="collapsibleOverrideItems" />
    </div>

    <!-- 场景 3：Panel 级别 classNames/styles + disabled -->
    <div>
      <div style="margin-bottom: 8px; color: #666">Panel 插槽级别定制：</div>
      <Collapse :default-active-key="['1', '2']" :class-names="{ header: 'base-header' }">
        <CollapsePanel key="1" header="默认样式面板">
          <p>使用 Collapse 级别的 classNames。</p>
        </CollapsePanel>
        <CollapsePanel
          key="2"
          header="单独定制面板"
          :class-names="{ header: 'panel-custom-header', body: 'panel-custom-body' }"
          :styles="{ header: { fontWeight: 600 } }"
        >
          <p>Panel 的 classNames/styles 会覆盖 Collapse 传递的值。</p>
        </CollapsePanel>
        <CollapsePanel key="3" header="禁用面板" disabled>
          <p>该面板被禁用，不可展开。</p>
        </CollapsePanel>
      </Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse, CollapsePanel } from '@hmfw/ant-design'
import type { CollapseItem } from '@hmfw/ant-design'

const customStyleItems: CollapseItem[] = [
  {
    key: '1',
    label: '默认样式面板',
    children: '该面板使用全局 classNames。',
  },
  {
    key: '2',
    label: 'Item 级定制面板',
    children: '该面板通过 item.classNames 单独定制了 header 样式。',
    classNames: { header: 'item-custom-header' },
    styles: { header: { fontWeight: 600 } },
  },
  {
    key: '3',
    label: 'Item 级 style 面板',
    children: '该面板通过 item.style 设置了额外的内联样式（蓝色边框）。',
    style: { borderLeft: '3px solid #1890ff' },
  },
]

const collapsibleOverrideItems: CollapseItem[] = [
  {
    key: '1',
    label: '全局 collapsible="header"',
    children: '点击标题或图标均可折叠。',
  },
  {
    key: '2',
    label: 'Item 覆盖为 collapsible="icon"',
    children: '该面板覆盖为只能点击图标折叠，标题点击无效。',
    collapsible: 'icon' as const,
  },
]
</script>

<style scoped>
/* 场景 1：全局 header */
:deep(.global-header) {
  background: #fafafa;
}

:deep(.item-custom-header) {
  background: linear-gradient(to right, #e6f7ff, #bae7ff);
  border-left: 3px solid #1890ff;
}

/* 场景 3：Panel 级别定制 */
:deep(.base-header) {
  background: #fafafa;
}

:deep(.panel-custom-header) {
  background: linear-gradient(to right, #fff7e6, #ffd591);
  border-left: 3px solid #fa8c16;
}

:deep(.panel-custom-body) {
  background: #fffbe6;
}
</style>
