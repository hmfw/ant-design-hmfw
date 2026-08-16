<template>
  <div>
    <p>当前命中的断点（<code>useBreakpoint()</code> 返回响应式断点表）：</p>
    <div class="breakpoint-badges">
      <span v-for="bp in breakpoints" :key="bp" class="badge" :class="{ active: screens[bp] }">
        {{ bp }}
      </span>
    </div>
    <Row
      :gutter="16"
      :align="{ xs: 'top', lg: 'middle' }"
      style="margin-top: 16px; background: #f5f5f5; min-height: 100px"
    >
      <Col :xs="24" :lg="12">
        <div style="background: #1677ff; color: #fff; padding: 16px; text-align: center">
          xs 全宽、lg 半宽<br />lg 及以上垂直居中
        </div>
      </Col>
      <Col :xs="24" :lg="12">
        <div style="background: #4096ff; color: #fff; padding: 24px; text-align: center">拖动窗口宽度观察变化</div>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { useBreakpoint, Row, Col } from '@hmfw/ant-design'

const screens = useBreakpoint()
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as const
</script>

<style scoped>
.breakpoint-badges {
  display: flex;
  gap: 8px;
}
.badge {
  padding: 2px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #999;
}
.badge.active {
  color: #1677ff;
  border-color: #1677ff;
  background: #e6f4ff;
}
</style>
