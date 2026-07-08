<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>order — 栅格排序</h4>
      <Row>
        <Col :span="6" :order="3">
          <div style="background: #1677ff; color: #fff; padding: 8px; text-align: center">1 (order=3)</div>
        </Col>
        <Col :span="6" :order="1">
          <div style="background: #4096ff; color: #fff; padding: 8px; text-align: center">2 (order=1)</div>
        </Col>
        <Col :span="6" :order="2">
          <div style="background: #1677ff; color: #fff; padding: 8px; text-align: center">3 (order=2)</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>push — 向右移动</h4>
      <Row>
        <Col :span="8" :push="8">
          <div style="background: #52c41a; color: #fff; padding: 8px; text-align: center">col-8 push-8</div>
        </Col>
        <Col :span="8">
          <div style="background: #73d13d; color: #fff; padding: 8px; text-align: center">col-8</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>pull — 向左移动</h4>
      <Row>
        <Col :span="8">
          <div style="background: #faad14; color: #fff; padding: 8px; text-align: center">col-8</div>
        </Col>
        <Col :span="8" :pull="8">
          <div style="background: #ffc53d; color: #fff; padding: 8px; text-align: center">col-8 pull-8</div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>综合应用 — 响应式 + 排序</h4>
      <Row>
        <Col :xs="24" :sm="{ span: 12, order: 2 }" :md="{ span: 8, order: 1 }">
          <div style="background: #1677ff; color: #fff; padding: 16px; text-align: center; margin-bottom: 8px">
            移动端排第二<br />桌面端排第一
          </div>
        </Col>
        <Col :xs="24" :sm="{ span: 12, order: 1 }" :md="{ span: 16, order: 2 }">
          <div style="background: #4096ff; color: #fff; padding: 16px; text-align: center">
            移动端排第一<br />桌面端排第二
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
