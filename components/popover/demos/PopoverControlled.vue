<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 受控模式：v-model:open -->
    <div>
      <div style="margin-bottom: 8px; color: #666">受控模式（v-model:open）：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover v-model:open="open1" title="受控 Popover" content="通过 v-model:open 控制显隐">
          <Button>受控 Popover</Button>
        </Popover>
        <Button @click="open1 = !open1">{{ open1 ? '隐藏' : '显示' }}</Button>
        <span style="color: #8c8c8c">当前状态: {{ open1 ? '显示' : '隐藏' }}</span>
      </div>
    </div>

    <!-- 监听 openChange 事件 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">监听 openChange 事件：</div>
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
        <Popover
          title="事件监听"
          content="打开/关闭时会触发 openChange 事件"
          @open-change="handleOpenChange"
          @after-open-change="handleAfterOpenChange"
        >
          <Button>触发事件</Button>
        </Popover>
        <span style="color: #8c8c8c">打开次数: {{ openCount }}</span>
        <span style="color: #8c8c8c">关闭次数: {{ closeCount }}</span>
      </div>
      <div
        v-if="lastEventInfo"
        style="margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 13px"
      >
        最后一次事件：{{ lastEventInfo }}
      </div>
    </div>

    <!-- 外部控制显隐 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">外部控制显隐（延迟关闭）：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover v-model:open="open2" title="外部控制" content="点击按钮后 2 秒自动关闭">
          <Button>鼠标悬停</Button>
        </Popover>
        <Button type="primary" @click="showAndAutoClose">显示并 2 秒后关闭</Button>
      </div>
    </div>

    <!-- 非受控模式：defaultOpen -->
    <div>
      <div style="margin-bottom: 8px; color: #666">非受控模式（defaultOpen）：</div>
      <Popover default-open title="默认显示" content="组件挂载时默认显示，之后由用户交互控制">
        <Button>默认显示</Button>
      </Popover>
    </div>

    <!-- 受控模式：禁用交互 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">受控模式 + 禁用交互：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover
          :open="open3"
          title="仅外部控制"
          content="鼠标悬停无效，只能通过按钮控制"
          trigger="hover"
          :mouse-enter-delay="0"
        >
          <Button>悬停无效</Button>
        </Popover>
        <Button @click="open3 = !open3">{{ open3 ? '隐藏' : '显示' }}</Button>
      </div>
    </div>

    <!-- 多个 Popover 联动 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">多个 Popover 联动（同时只显示一个）：</div>
      <div style="display: flex; gap: 8px">
        <Popover
          :open="activePopover === 'A'"
          title="Popover A"
          content="点击时关闭其他 Popover"
          trigger="click"
          @open-change="(open) => handlePopoverClick('A', open)"
        >
          <Button>Popover A</Button>
        </Popover>
        <Popover
          :open="activePopover === 'B'"
          title="Popover B"
          content="点击时关闭其他 Popover"
          trigger="click"
          @open-change="(open) => handlePopoverClick('B', open)"
        >
          <Button>Popover B</Button>
        </Popover>
        <Popover
          :open="activePopover === 'C'"
          title="Popover C"
          content="点击时关闭其他 Popover"
          trigger="click"
          @open-change="(open) => handlePopoverClick('C', open)"
        >
          <Button>Popover C</Button>
        </Popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popover, Button } from '@hmfw/ant-design'
import type { PopoverOpenChangeInfo } from '@hmfw/ant-design'

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const openCount = ref(0)
const closeCount = ref(0)
const lastEventInfo = ref('')
const activePopover = ref<string | null>(null)

const handleOpenChange = (open: boolean, info: PopoverOpenChangeInfo) => {
  if (open) {
    openCount.value++
  } else {
    closeCount.value++
  }
  lastEventInfo.value = `openChange: open=${open}, source=${info.source}`
}

const handleAfterOpenChange = (open: boolean) => {
  console.log('afterOpenChange:', open)
}

const showAndAutoClose = () => {
  open2.value = true
  setTimeout(() => {
    open2.value = false
  }, 2000)
}

const handlePopoverClick = (id: string, open: boolean) => {
  if (open) {
    activePopover.value = id
  } else if (activePopover.value === id) {
    activePopover.value = null
  }
}
</script>
