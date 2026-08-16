<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>响应式 flex — 不同断点切换 flex 取值</h4>
      <Row :gutter="16">
        <Col :xs="{ span: 24 }" :md="{ span: 12, flex: '200px' }" :lg="{ span: 8, flex: 'auto' }">
          <div style="background: #1677ff; color: #fff; padding: 8px; text-align: center">
            xs: 全宽<br />md: 固定 200px<br />lg: 弹性 auto
          </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 12, flex: 'auto' }" :lg="{ span: 16, flex: 'auto' }">
          <div style="background: #4096ff; color: #fff; padding: 8px; text-align: center">自适应剩余空间</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>断点重置 offset / order — 0 值清除上级断点的偏移与排序</h4>
      <Row :gutter="16">
        <Col :xs="{ span: 12, offset: 4, order: 2 }" :md="{ span: 8, offset: 0, order: 1 }">
          <div style="background: #52c41a; color: #fff; padding: 8px; text-align: center">
            xs: offset-4 且排第二<br />md: 无偏移且排第一
          </div>
        </Col>
        <Col :xs="{ span: 12, order: 1 }" :md="{ span: 8, order: 2 }">
          <div style="background: #73d13d; color: #fff; padding: 8px; text-align: center">
            xs: 排第一<br />md: 排第二
          </div>
        </Col>
      </Row>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from '@hmfw/ant-design'
</script>

<style scoped>
h4 {
  margin: 16px 0 8px;
  font-size: 14px;
  color: #666;
}
</style>
