<template>
  <div style="display: flex; gap: 24px">
    <!-- 内容区域 -->
    <div style="flex: 1">
      <div id="click-part-1" style="height: 180px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>第一部分</h3>
        <p>这是第一部分的内容。点击锚点会触发自定义事件。</p>
      </div>
      <div id="click-part-2" style="height: 180px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>第二部分</h3>
        <p>这是第二部分的内容。</p>
      </div>
      <div id="click-part-3" style="height: 180px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>第三部分</h3>
        <p>这是第三部分的内容。</p>
      </div>
    </div>

    <!-- 锚点导航 -->
    <div style="width: 200px">
      <Anchor :items="items" @click="handleClick" />

      <!-- 点击反馈 -->
      <div
        v-if="clickInfo"
        style="
          margin-top: 16px;
          padding: 12px;
          background: #f0f5ff;
          border: 1px solid #adc6ff;
          border-radius: 4px;
          font-size: 13px;
        "
      >
        <div style="font-weight: 600; margin-bottom: 4px">最近点击：</div>
        <div style="color: #595959">标题: {{ clickInfo.title }}</div>
        <div style="color: #595959">链接: {{ clickInfo.href }}</div>
        <div style="color: #8c8c8c; font-size: 12px; margin-top: 4px">时间: {{ clickInfo.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'

const items = [
  { href: '#click-part-1', title: '第一部分' },
  { href: '#click-part-2', title: '第二部分' },
  { href: '#click-part-3', title: '第三部分' },
]

interface ClickInfo {
  title: string
  href: string
  time: string
}

const clickInfo = ref<ClickInfo | null>(null)

const handleClick = (e: MouseEvent, link: { title: string; href: string }) => {
  const now = new Date()
  clickInfo.value = {
    title: link.title,
    href: link.href,
    time: now.toLocaleTimeString(),
  }

  // 可在此处添加自定义逻辑，如埋点统计
  console.log('锚点点击:', link)

  // 如需阻止默认跳转，可使用：
  // e.preventDefault()
}
</script>
