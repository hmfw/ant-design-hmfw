<template>
  <SemanticPreview component="Upload" :semantics="semantics" :height="420">
    <template #default="{ classNames }">
      <div style="display: flex; flex-direction: column; gap: 20px; width: 100%">
        <!-- 用例一：picture 列表，覆盖 select / list / listItem / thumbnail / itemInfo / itemName / itemSize / progress 等 -->
        <Upload list-type="picture" :file-list="pictureList" :class-names="classNames">
          <Button :icon="UploadOutlined">点击上传</Button>
        </Upload>

        <!-- 用例二：picture-card，覆盖 selectIcon / selectText / itemCard / cardActions / itemAction -->
        <Upload list-type="picture-card" :file-list="cardList" :class-names="classNames" />

        <!-- 用例三：拖拽上传，覆盖 drag / dragContainer -->
        <Upload type="drag" :file-list="[]" :class-names="classNames">
          <p style="margin: 0">将文件拖到此处，或点击上传</p>
        </Upload>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { UploadOutlined } from '@hmfw/icons'
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

// 1x1 透明 PNG，让缩略图 / 卡片图片有真实图源
const IMG =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

// picture 列表：一个上传中（触发 progress/progressBar）、一个已完成
const pictureList: UploadFile[] = [
  { uid: '1', name: 'design.png', size: 102400, status: 'uploading', percent: 60, thumbUrl: IMG },
  { uid: '2', name: 'photo.png', size: 204800, status: 'done', url: IMG, thumbUrl: IMG },
]

// 卡片列表：一个已完成图片卡片
const cardList: UploadFile[] = [{ uid: '3', name: 'cover.png', size: 51200, status: 'done', url: IMG, thumbUrl: IMG }]

// 与 UploadClassNames / UploadStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-upload）。承载整体布局，picture-card / picture-circle 模式下附加对应 wrapper 类，始终渲染。',
  },
  {
    name: 'select',
    desc: '选择触发区（div.hmfw-upload-select）。承载点击上传按钮的容器样式；card 模式为「+」占位块，始终随可添加状态渲染（drag 模式改用 drag 节点）。',
  },
  {
    name: 'selectIcon',
    desc: '卡片选择按钮图标（span.hmfw-upload-select-icon）。承载「+」号样式，仅在 picture-card/circle 模式且未传默认插槽时渲染（本例第二个实例）。',
  },
  {
    name: 'selectText',
    desc: '卡片选择按钮文本（span.hmfw-upload-select-text）。承载上传文案样式，渲染条件同 selectIcon。',
  },
  {
    name: 'drag',
    desc: '拖拽区（div.hmfw-upload-drag）。承载拖拽上传框的边框、背景与 hover/uploading 状态样式，仅在 type="drag" 时渲染（本例第三个实例）。',
  },
  {
    name: 'dragContainer',
    desc: '拖拽区内层容器（div.hmfw-upload-drag-container）。承载拖拽区内容的居中布局，仅在 type="drag" 时渲染。',
  },
  {
    name: 'list',
    desc: '文件列表容器（div.hmfw-upload-list，附加 list-{listType} 类）。承载列表整体布局，仅在展示列表且存在文件时渲染。',
  },
  {
    name: 'listItemContainer',
    desc: '列表项外层容器（div.hmfw-upload-list-item-container）。承载单项的过渡动画包裹，每个文件渲染一个。',
  },
  {
    name: 'listItem',
    desc: '列表项（div.hmfw-upload-list-item）。承载单项布局与 status（uploading/done/error）状态类，每个文件渲染一个。',
  },
  {
    name: 'thumbnail',
    desc: '缩略图容器（div.hmfw-upload-list-item-thumbnail）。承载图片缩略图样式，仅在 picture（非 card）模式且文件为图片时渲染（本例第一个实例）。',
  },
  {
    name: 'itemInfo',
    desc: '文件信息容器（div.hmfw-upload-list-item-info）。承载图标+文件名+大小的行布局，仅在非卡片模式时渲染。',
  },
  {
    name: 'itemIcon',
    desc: '文件图标（span.hmfw-upload-list-item-icon）。信息区显示状态 emoji，卡片区为文件占位图标；随对应列表项渲染。',
  },
  {
    name: 'itemName',
    desc: '文件名（span.hmfw-upload-list-item-name）。承载文件名文字与省略样式，仅在非卡片模式随信息区渲染。',
  },
  {
    name: 'itemSize',
    desc: '文件大小（span.hmfw-upload-list-item-size）。承载格式化后的体积文字样式，仅在非卡片模式随信息区渲染。',
  },
  {
    name: 'itemCard',
    desc: '卡片模式容器（div.hmfw-upload-list-item-card）。承载卡片图片/图标与操作层，仅在 picture-card/circle 模式随列表项渲染（本例第二个实例）。',
  },
  {
    name: 'cardActions',
    desc: '卡片操作区（div.hmfw-upload-list-item-card-actions）。承载预览/下载/删除按钮的浮层布局，仅在卡片模式渲染。',
  },
  {
    name: 'itemAction',
    desc: '操作按钮（button.hmfw-upload-list-item-action）。承载预览/下载/删除按钮样式，按 showXxxIcon 配置渲染（卡片模式与信息模式均可能出现多个）。',
  },
  {
    name: 'progress',
    desc: '进度条容器（div.hmfw-upload-list-item-progress）。承载进度轨道样式，仅在该文件 status 为 uploading 时渲染（本例第一个实例的上传中文件）。',
  },
  {
    name: 'progressBar',
    desc: '进度条（div.hmfw-upload-list-item-progress-bar）。承载已上传进度的填充条，宽度按 percent 计算，渲染条件同 progress。',
  },
]
</script>
