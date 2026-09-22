<template>
  <!--
    Tour 是全屏引导浮层（根节点 position:fixed inset:0），默认 Teleport 到 body 且居中定位，
    SemanticPreview 无法框选。这里用 getPopupContainer 把浮层挂回预览区本地容器，
    并通过 styles.root / styles.popover 覆盖为 position:static 让卡片就地内联渲染；
    关闭 mask（遮罩会覆盖整页），并用 defaultCurrent=1 使「上一步」按钮与指示器一并渲染。
    注：mask（已关闭）与 arrow（居中模式不显示箭头）两节点在本演示中不渲染，详见各自说明。
  -->
  <SemanticPreview component="Tour" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <div :ref="setStage" style="width: 100%; min-height: 300px; position: relative">
        <Tour
          v-if="stage"
          :open="true"
          :default-current="1"
          :mask="false"
          :steps="steps"
          placement="center"
          :get-popup-container="() => stage!"
          :class-names="classNames"
          :styles="{ root: rootStyle, popover: popoverStyle }"
        />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour } from '@hmfw/ant-design'

// 函数式 ref：容器 DOM 挂载即赋值，stage 有值才渲染 Tour，getPopupContainer 便能取到容器。
// 相比 onMounted 置位，此法在 SemanticPreview 懒渲染（slot 延迟挂载）下仍可靠。
const stage = ref<HTMLElement>()
const setStage = (el: Element | null) => {
  stage.value = (el as HTMLElement | null) ?? undefined
}

// 覆盖 fixed/absolute 定位，让根容器与卡片在预览区内随文档流内联展示
const rootStyle = { position: 'static' as const, inset: 'auto' }
const popoverStyle = { position: 'static' as const }

const steps = [
  { title: '第一步', description: '这是引导的第一步说明。' },
  {
    title: '第二步',
    description: '这是引导的第二步说明，包含封面图。',
    cover: '',
  },
]

// 与 TourClassNames / TourStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-tour-root）。承载引导浮层整体层级，默认 position:fixed 铺满视口，展开时渲染。',
  },
  {
    name: 'mask',
    desc: '遮罩层（div.hmfw-tour-mask）。承载高亮镂空与背景暗化，仅在 mask 开启时渲染；本演示为避免遮罩覆盖整页已关闭，故不渲染。',
  },
  {
    name: 'popover',
    desc: '弹出卡片（div.hmfw-tour-popover）。承载引导卡片的定位与宽度，展开时渲染。',
  },
  {
    name: 'popoverInner',
    desc: '卡片内层（div.hmfw-tour-popover-inner）。承载卡片背景、圆角、阴影与内边距，展开时渲染。',
  },
  {
    name: 'arrow',
    desc: '箭头（div.hmfw-tour-arrow）。指向目标元素的小三角，仅在有目标且非居中模式时渲染；本演示为居中展示，故不渲染。',
  },
  {
    name: 'close',
    desc: '关闭按钮（button.hmfw-tour-close）。承载右上角关闭图标样式，closeIcon 不为 null 时渲染。',
  },
  {
    name: 'cover',
    desc: '封面区域（div.hmfw-tour-cover）。承载步骤封面图/自定义内容，仅在 step.cover 存在时渲染。',
  },
  {
    name: 'title',
    desc: '标题（div.hmfw-tour-title）。承载步骤标题文本样式，仅在 step.title 存在时渲染。',
  },
  {
    name: 'description',
    desc: '描述文本（div.hmfw-tour-description）。承载步骤说明文本样式，仅在 step.description 存在时渲染。',
  },
  {
    name: 'footer',
    desc: '底部区域（div.hmfw-tour-footer）。承载指示器与按钮组的布局，展开时渲染。',
  },
  {
    name: 'indicators',
    desc: '指示器容器（div.hmfw-tour-indicators）。承载步骤进度圆点的布局，仅在步骤数 > 1 时渲染。',
  },
  {
    name: 'indicator',
    desc: '单个指示器点（button.hmfw-tour-indicator）。承载单个步骤圆点样式与激活态，每个步骤各渲染一个。',
  },
  {
    name: 'buttons',
    desc: '按钮组（div.hmfw-tour-buttons）。承载上一步/下一步按钮的布局，展开时渲染。',
  },
  {
    name: 'prevBtn',
    desc: '上一步按钮（button.hmfw-tour-prev-btn）。承载上一步按钮样式，仅在非首步（current > 0）时渲染。',
  },
  {
    name: 'nextBtn',
    desc: '下一步/完成按钮（button.hmfw-tour-next-btn）。承载下一步或完成按钮样式，展开时渲染。',
  },
]
</script>
