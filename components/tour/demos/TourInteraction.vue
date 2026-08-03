<template>
  <div>
    <Space>
      <Button type="primary" @click="openInteractive">可交互高亮</Button>
      <Button @click="openDisabled">禁用交互</Button>
      <Button @click="openWideGap">自定义 gap</Button>
    </Space>
    <Divider />
    <Space>
      <Button ref="counterRef" @click="count++">已点击 {{ count }} 次</Button>
      <span class="tour-hint">引导期间点击上方按钮，观察计数是否变化</span>
    </Space>

    <!-- 默认 disabledInteraction=false：高亮元素可正常点击 -->
    <Tour v-model:open="interactiveOpen" :steps="interactiveSteps" />

    <!-- disabledInteraction=true：高亮元素也被遮罩拦截 -->
    <Tour v-model:open="disabledOpen" disabled-interaction :steps="disabledSteps" />

    <!-- gap.offset 控制高亮区域外扩，gap.radius 控制高亮圆角 -->
    <Tour v-model:open="wideGapOpen" :gap="{ offset: [20, 10], radius: 12 }" :steps="gapSteps" />
  </div>
</template>

<script setup lang="ts">
import { ref, type ComponentPublicInstance } from 'vue'
import { Tour, Button, Space, Divider } from '@hmfw/ant-design'
import type { TourStep } from '@hmfw/ant-design'

const count = ref(0)
const interactiveOpen = ref(false)
const disabledOpen = ref(false)
const wideGapOpen = ref(false)
// ref 挂在组件上拿到的是组件实例，Tour 会自动解包出根元素
const counterRef = ref<ComponentPublicInstance>()

const target = () => counterRef.value

const interactiveSteps: TourStep[] = [
  {
    title: '高亮区域可交互',
    description: '默认情况下高亮的元素仍可点击，试试点击计数按钮，数字会正常增加。',
    target,
  },
]

const disabledSteps: TourStep[] = [
  {
    title: '禁用高亮交互',
    description: '设置 disabledInteraction 后，遮罩会拦截全部点击，计数按钮不再响应。',
    target,
  },
]

const gapSteps: TourStep[] = [
  {
    title: '自定义高亮区域',
    description: 'gap.offset 支持 [x, y] 分别控制水平与垂直外扩，gap.radius 控制高亮框圆角。',
    target,
  },
]

function openInteractive() {
  count.value = 0
  interactiveOpen.value = true
}

function openDisabled() {
  count.value = 0
  disabledOpen.value = true
}

function openWideGap() {
  wideGapOpen.value = true
}
</script>

<style scoped>
.tour-hint {
  color: var(--hmfw-color-text-tertiary);
  font-size: var(--hmfw-font-size-sm);
}
</style>
