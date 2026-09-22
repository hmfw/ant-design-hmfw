<template>
  <!--
    Tooltip 浮层默认经 Trigger Teleport 到 body，SemanticPreview 只测量自身容器内节点。
    用 Tooltip 自带的 getPopupContainer 把浮层挂回触发器父容器 + :open 常开，
    让 root/content/arrow/inner 落在预览区内可被框选。
  -->
  <SemanticPreview component="Tooltip" :semantics="semantics" :height="160">
    <template #default="{ classNames }">
      <div style="padding: 48px 0; text-align: center">
        <Tooltip
          title="提示文字"
          :open="true"
          :arrow="true"
          :get-popup-container="getPopupContainer"
          :class-names="classNames"
        >
          <span style="display: inline-block; padding: 4px 8px; border: 1px dashed #d9d9d9"> 悬停查看提示 </span>
        </Tooltip>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Tooltip } from '@hmfw/ant-design'

// 浮层就近挂到触发器父容器，保证浮层节点落在预览容器内
const getPopupContainer = (triggerNode: HTMLElement) => triggerNode.parentElement ?? document.body

// 与 TooltipClassNames / TooltipStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '最外层弹层容器（div.hmfw-tooltip）。承载浮层定位、颜色与整体样式，展开时渲染。',
  },
  {
    name: 'content',
    desc: '内容包裹层（div.hmfw-tooltip-content）。承载气泡主体的背景、圆角与阴影，展开时渲染。',
  },
  {
    name: 'arrow',
    desc: '箭头元素（div.hmfw-tooltip-arrow）。承载指向触发器的小三角样式，仅在 arrow 开启时渲染。',
  },
  {
    name: 'inner',
    desc: '内部内容区域（div.hmfw-tooltip-inner）。承载提示文本的内边距与文字样式，展开时渲染。',
  },
]
</script>
