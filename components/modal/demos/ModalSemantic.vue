<template>
  <!--
    Modal 默认 Teleport 到 body 且根节点 position:fixed 铺满视口，SemanticPreview 无法框选。
    这里用 getContainer 把浮层挂回预览区本地宿主，并通过 styles 把 root/mask/wrapper 覆盖为
    position:absolute，使其约束在宿主容器内就地渲染；:open 常开让各节点一并渲染。
    注：宿主设 position:relative + overflow:hidden，遮罩(absolute inset:0)即覆盖宿主而非整页。
  -->
  <SemanticPreview component="Modal" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <div :ref="setHost" class="demo-modal-host">
        <Modal
          v-if="host"
          :open="true"
          :mask="true"
          :mask-closable="false"
          title="对话框标题"
          :get-container="() => host!"
          :class-names="classNames"
          :styles="{ root: absStyle, mask: absStyle, wrapper: absStyle }"
        >
          这是对话框的正文内容，用于展示 body 语义节点。
        </Modal>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from '@hmfw/ant-design'

// 用函数式 ref 在宿主 DOM 挂载时即赋值：host 一有值才渲染 Modal，
// getContainer 便能取到宿主。相比 onMounted 置位，此法在 SemanticPreview 懒渲染
// （slot 延迟到进入视口才挂载）下依然可靠——ready 标志会随组件挂载提前触发而失效。
const host = ref<HTMLElement>()
const setHost = (el: Element | null) => {
  host.value = (el as HTMLElement | null) ?? undefined
}

// 把 fixed 覆盖为 absolute，使浮层约束在宿主容器内而非整页
const absStyle = { position: 'absolute' as const }

// 与 ModalClassNames / ModalStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-modal-root）。承载浮层整体层级，默认 position:fixed 铺满视口，展开时渲染。',
  },
  {
    name: 'header',
    desc: '头部区域（div.hmfw-modal-header）。承载标题栏样式，仅在有 title 时渲染。',
  },
  {
    name: 'body',
    desc: '主体区域（div.hmfw-modal-body）。承载正文内容的内边距与滚动，展开时渲染。',
  },
  {
    name: 'footer',
    desc: '底部区域（div.hmfw-modal-footer）。承载操作按钮组的布局，默认渲染确定/取消按钮，footer 为 null 时不渲染。',
  },
  {
    name: 'mask',
    desc: '遮罩层（div.hmfw-modal-mask）。承载背景暗化，仅在 mask 开启时渲染。',
  },
  {
    name: 'wrapper',
    desc: '定位包裹层（div.hmfw-modal-wrap）。承载对话框的居中/滚动定位，展开时渲染。',
  },
  {
    name: 'content',
    desc: '内容卡片（div.hmfw-modal-content）。承载卡片背景、圆角、阴影与内边距，展开时渲染。',
  },
]
</script>

<style scoped>
/* 宿主设为定位上下文并裁掉溢出，遮罩与浮层就地约束在预览区内 */
.demo-modal-host {
  position: relative;
  width: 100%;
  min-height: 320px;
  overflow: hidden;
}
</style>
