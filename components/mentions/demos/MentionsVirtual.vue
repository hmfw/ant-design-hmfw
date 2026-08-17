<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">虚拟滚动（默认开启，100 个选项）</div>
      <Mentions
        :options="manyOptions"
        :list-height="256"
        :list-item-height="32"
        placeholder="输入 @ 查看虚拟滚动效果（仅渲染可见项）"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        虚拟滚动默认开启，大数据量时自动优化性能，仅渲染可见的 DOM 节点
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">关闭虚拟滚动（渲染全部选项）</div>
      <Mentions :options="manyOptions" :virtual="false" placeholder="输入 @ 查看普通渲染（渲染全部 100 项）" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        设置 :virtual="false" 可关闭虚拟滚动，适用于小数据量场景
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">自定义列表高度和项高度</div>
      <Mentions
        :options="manyOptions"
        :list-height="180"
        :list-item-height="40"
        placeholder="输入 @ 查看自定义高度效果"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        通过 listHeight 和 listItemHeight 自定义列表容器和选项的高度
      </div>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'

// 生成 100 个选项模拟大数据量
const manyOptions = Array.from({ length: 100 }, (_, i) => ({
  value: `user-${i}`,
  label: `User ${i}`,
}))
</script>
