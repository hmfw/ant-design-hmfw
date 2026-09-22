<template>
  <SemanticPreview component="Drawer" :semantics="semantics" :height="420" :padding="false">
    <template #default="{ classNames }">
      <!-- get-container=false 就地渲染 + :open 常开，让抽屉各节点在预览区内渲染可框选。
           styles.root 覆盖为 absolute 定位，把默认 fixed 全屏抽屉约束在宿主容器内。
           mask 关闭：常开抽屉若启用遮罩会通过 useScrollLock 永久锁定页面滚动（见回报说明）。 -->
      <div class="demo-drawer-host">
        <Drawer
          :open="true"
          :get-container="false"
          :mask="false"
          title="抽屉标题"
          :styles="rootStyle"
          :class-names="classNames"
        >
          <template #extra>
            <a href="#">操作</a>
          </template>
          <p>抽屉主体内容区，可放置表单或详情。</p>
          <template #footer>
            <Button style="margin-right: 8px">取消</Button>
            <Button type="primary">确定</Button>
          </template>
        </Drawer>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Drawer, Button } from '@hmfw/ant-design'

// 把根节点从默认的 fixed 全屏改为 absolute，约束在宿主容器内展示
const rootStyle = { root: { position: 'absolute' as const } }

// 与 DrawerClassNames / DrawerStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '最外层容器（div.hmfw-drawer，含遮罩）。承载层级与整体定位，open 或 forceRender 时渲染。',
  },
  {
    name: 'mask',
    desc: '遮罩层（div.hmfw-drawer-mask）。承载半透明蒙层样式，仅在 mask 开启时渲染。注意：常开抽屉启用遮罩会锁定页面滚动，本演示关闭了 mask，故此节点未渲染。',
  },
  {
    name: 'wrapper',
    desc: '抽屉内容包裹层（div.hmfw-drawer-content-wrapper）。承载方位定位、尺寸、背景与阴影，随抽屉渲染。',
  },
  {
    name: 'content',
    desc: '抽屉内容区（div.hmfw-drawer-content）。纵向排布头部/主体/页脚，随抽屉渲染。',
  },
  {
    name: 'header',
    desc: '头部区域（div.hmfw-drawer-header）。承载标题、关闭按钮与扩展区，仅在有标题/可关闭/扩展内容时渲染。',
  },
  {
    name: 'title',
    desc: '标题（div.hmfw-drawer-title）。承载标题文字样式，仅在传入 title 或 title 插槽时渲染。',
  },
  {
    name: 'extra',
    desc: '右上角扩展区域（div.hmfw-drawer-extra）。承载头部右侧操作区样式，仅在提供 extra 插槽时渲染。',
  },
  {
    name: 'body',
    desc: '主体内容区（div.hmfw-drawer-body）。承载滚动与内边距，展示默认插槽内容，随抽屉渲染。',
  },
  {
    name: 'footer',
    desc: '页脚区域（div.hmfw-drawer-footer）。承载底部操作区样式，仅在提供 footer 插槽时渲染。',
  },
]
</script>

<style scoped>
.demo-drawer-host {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
}
</style>
