<template>
  <Result
    status="success"
    title="语义化样式定制"
    sub-title="通过 classNames / styles 精细化控制各节点样式。"
    :class-names="resultClassNames"
    :styles="resultStyles"
  >
    <template #extra>
      <Button type="primary">查看详情</Button>
    </template>
    <p>这里是补充说明内容，渲染在 content 节点内。</p>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from '@hmfw/ant-design'
import type { ResultClassNames, ResultStyles } from '@hmfw/ant-design'

// classNames：为各语义节点追加自定义 class
const resultClassNames: ResultClassNames = {
  root: 'demo-result-root',
  title: 'demo-result-title',
}

// styles：直接为各语义节点注入内联样式
const resultStyles: ResultStyles = {
  root: { border: '1px solid var(--hmfw-color-success-border)', borderRadius: '8px' },
  title: { color: 'var(--hmfw-color-success)' },
  content: { background: 'var(--hmfw-color-success-bg)' },
}
</script>

<style scoped>
.demo-result-root {
  transition: box-shadow 0.3s;
}
.demo-result-title {
  letter-spacing: 1px;
}
</style>
