<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div id="custom-a" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px">
        <h3>区域 A</h3>
      </div>
      <div id="custom-b" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px">
        <h3>区域 B</h3>
      </div>
      <div id="custom-c" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>区域 C</h3>
      </div>
    </div>
    <div>
      <p style="font-size: 12px; color: #999; margin-bottom: 8px">
        getCurrentAnchor 自定义高亮逻辑。当前激活：<strong>{{ currentActive }}</strong>
      </p>
      <Anchor :items="items" :get-current-anchor="getCurrentAnchor" style="width: 200px" @change="onChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Anchor } from '@hmfw/ant-design'

const currentActive = ref('')

const items = [
  { href: '#custom-a', title: '区域 A' },
  { href: '#custom-b', title: '区域 B' },
  { href: '#custom-c', title: '区域 C' },
]

const getCurrentAnchor = (activeLink: string) => {
  // 自定义高亮逻辑：可以在这里对激活链接做转换处理
  // 例如添加前缀、映射到其他链接等
  return activeLink
}

const onChange = (link: string) => {
  currentActive.value = link
}
</script>
