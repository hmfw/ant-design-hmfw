<template>
  <Image
    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    width="200"
    :preview="{ toolbarRender, imageRender }"
  />
</template>

<script setup lang="tsx">
import { Image, Button } from '@hmfw/ant-design'
import type { VNode } from 'vue'
import type { ToolbarRenderInfoType, ImageRenderInfoType } from '@hmfw/ant-design'

// 自定义工具栏：保留原始操作栏，并在其下方追加缩放比例与“重置”按钮
function toolbarRender(originalNode: VNode, info: ToolbarRenderInfoType) {
  return (
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
      {originalNode}
      <div style="display:flex;gap:12px;color:#fff;font-size:13px;align-items:center">
        <span>缩放 {Math.round(info.transform.scale * 100)}%</span>
        <Button
          onClick={info.actions.onReset}
          style="padding:2px 10px;border:none;border-radius:4px;background:rgba(255,255,255,.2);color:#fff;cursor:pointer"
        >
          重置
        </Button>
      </div>
    </div>
  )
}

// 自定义预览内容：给图片加一个圆角边框包裹
function imageRender(originalNode: VNode, _info: ImageRenderInfoType) {
  return <div style="padding:8px;border-radius:8px;background:rgba(255,255,255,.08)">{originalNode}</div>
}
</script>
