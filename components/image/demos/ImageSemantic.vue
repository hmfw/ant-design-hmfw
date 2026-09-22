<template>
  <SemanticPreview component="Image" :semantics="semantics" :height="240">
    <template #default="{ classNames }">
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start">
        <!-- 加载成功：命中 root / img / mask / maskInfo（hover 图片可见遮罩） -->
        <Image :src="okSrc" width="140" :class-names="classNames" />
        <!-- 持续加载中：命中 placeholder（用永不返回的地址维持 loading 态） -->
        <Image :src="loadingSrc" :placeholder="true" width="140" :class-names="classNames" />
        <!-- 加载失败且无 fallback：命中 error -->
        <Image src="/__not-exist__.png" width="140" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Image } from '@hmfw/ant-design'

const okSrc = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
// 指向一个不会完成的请求，使图片长期停留在 loading 占位态
const loadingSrc = 'https://httpbin.org/delay/600'

// 与 ImageClassNames / ImageStyles 的 key 一一对应
// 说明：preview* / operations / operationBtn / closeBtn / switchBtn / count 属于全屏预览弹层，
// 弹层为 position: fixed 且默认 Teleport 到 body，无法在预览区内框选，故此处仅演示就地渲染的 6 个节点。
const semantics = [
  {
    name: 'root',
    desc: '图片根容器（div.hmfw-image）。承载宽高、相对定位与预览/错误态类名，始终渲染。',
  },
  {
    name: 'img',
    desc: 'img 元素（img.hmfw-image-img）。承载图片本身的对象填充与点击预览触发，仅在非错误态时渲染。',
  },
  {
    name: 'mask',
    desc: 'hover 遮罩层（div.hmfw-image-mask）。承载悬停时的半透明蒙层与「预览」提示，仅在开启 preview、图片已加载且遮罩启用时渲染（悬停图片可见）。',
  },
  {
    name: 'maskInfo',
    desc: '遮罩内容（span.hmfw-image-mask-info）。承载遮罩内的预览图标与文字，仅在遮罩渲染且未自定义 cover 时渲染。',
  },
  {
    name: 'preview',
    desc: '预览弹层根容器（div.hmfw-image-preview-root）。承载全屏预览的定位与 z-index，仅在打开预览时渲染；弹层为 fixed 定位并默认挂载到 body。',
  },
  {
    name: 'previewMask',
    desc: '预览遮罩层（div.hmfw-image-preview-mask）。承载预览背景的半透明黑色蒙层，随预览弹层一同渲染。',
  },
  {
    name: 'previewWrap',
    desc: '预览图片包裹容器（div.hmfw-image-preview-wrap）。承载预览图片的居中布局与滚轮缩放区域，随预览弹层一同渲染。',
  },
  {
    name: 'previewImg',
    desc: '预览图片元素（img.hmfw-image-preview-img）。承载大图的最大宽高与 transform 变换，随预览弹层一同渲染。',
  },
  {
    name: 'operations',
    desc: '预览操作栏（div.hmfw-image-preview-operations）。承载底部工具条的背景与布局，随预览弹层一同渲染。',
  },
  {
    name: 'operationBtn',
    desc: '预览操作按钮（button.hmfw-image-preview-op-btn）。承载翻转/旋转/缩放等单个操作按钮，随操作栏一同渲染。',
  },
  {
    name: 'closeBtn',
    desc: '预览关闭按钮（button.hmfw-image-preview-close）。承载右上角关闭按钮的样式，随预览弹层一同渲染。',
  },
  {
    name: 'switchBtn',
    desc: '预览切换按钮（button.hmfw-image-preview-switch）。承载左右箭头的样式，仅在 PreviewGroup 多图场景且存在上一张/下一张时渲染。',
  },
  {
    name: 'count',
    desc: '预览图片计数（div.hmfw-image-preview-count）。承载「当前/总数」文案，仅在 PreviewGroup 多图场景（总数大于 1）时渲染。',
  },
  {
    name: 'placeholder',
    desc: '加载占位容器（div.hmfw-image-placeholder）。承载加载中的骨架/自定义占位内容，仅在 placeholder 开启且图片处于 loading 态时渲染。',
  },
  {
    name: 'error',
    desc: '错误占位容器（div.hmfw-image-error-placeholder）。承载加载失败提示，仅在图片加载失败且无可用 fallback 时渲染。',
  },
]
</script>
