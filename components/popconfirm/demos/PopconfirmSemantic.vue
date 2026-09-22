<template>
  <SemanticPreview component="Popconfirm" :semantics="semantics" :height="220">
    <template #default="{ classNames }">
      <!--
        Popconfirm 的浮层默认经 Tooltip teleport 到 body，SemanticPreview 无法框选。
        这里把浮层挂载容器指向本地 stageRef（就地渲染），并用 overlayStyle 将定位
        改为 static 抵消绝对定位，使浮层随文档流内嵌显示，从而让 message / icon /
        title / description / buttons / cancelBtn / okBtn 全部语义节点都能被框选。
        ready 守卫确保 stageRef 挂载后再渲染 Popconfirm，getPopupContainer 才能拿到容器。
      -->
      <div ref="stageRef" class="popconfirm-semantic-stage">
        <Popconfirm
          v-if="ready"
          :open="true"
          title="确认删除这条记录吗？"
          description="删除后数据将无法恢复，请谨慎操作。"
          :get-popup-container="() => stageRef!"
          :overlay-style="{ position: 'static' }"
          :class-names="classNames"
        >
          <Button>触发气泡确认框</Button>
        </Popconfirm>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Popconfirm, Button } from '@hmfw/ant-design'

// stageRef 挂载后再渲染 Popconfirm，确保 getPopupContainer 能取到就地容器
const stageRef = ref<HTMLElement | null>(null)
const ready = ref(false)
onMounted(() => {
  ready.value = true
})

// 与 PopconfirmClassNames / PopconfirmStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'message',
    desc: '消息容器（div.hmfw-popconfirm-message）。包裹图标与标题的一行，承载二者的水平排列与间距，始终渲染。',
  },
  {
    name: 'icon',
    desc: '图标容器（span.hmfw-popconfirm-message-icon）。承载提示图标的颜色与右侧间距，仅在 icon 不为空时渲染（默认为警告图标）。',
  },
  {
    name: 'title',
    desc: '标题容器（div.hmfw-popconfirm-message-title）。承载确认标题的字重与排版，始终渲染。',
  },
  {
    name: 'description',
    desc: '描述文本（div.hmfw-popconfirm-description）。承载补充说明文字的间距与颜色，仅在提供 description 时渲染。',
  },
  {
    name: 'buttons',
    desc: '按钮组容器（div.hmfw-popconfirm-buttons）。承载取消/确定按钮的右对齐与间距，始终渲染。',
  },
  {
    name: 'cancelBtn',
    desc: '取消按钮。className 合并到取消 Button 的根节点上，仅在 showCancel 为 true 时渲染。',
  },
  {
    name: 'okBtn',
    desc: '确定按钮。className 合并到确定 Button 的根节点上，始终渲染。',
  },
]
</script>

<style scoped>
.popconfirm-semantic-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
</style>
