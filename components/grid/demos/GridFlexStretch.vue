<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>align="stretch" — 列自动拉伸至等高</h4>
      <Row align="stretch" style="height: 120px; background: #f5f5f5">
        <Col :span="8">
          <div style="background: #1677ff; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">
            col-8<br />高度 100%
          </div>
        </Col>
        <Col :span="8">
          <div style="background: #4096ff; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">
            col-8<br />高度 100%
          </div>
        </Col>
        <Col :span="8">
          <div style="background: #1677ff; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">
            col-8<br />高度 100%
          </div>
        </Col>
      </Row>
    </div>

    <div>
      <h4>不设置 align（flex 默认 stretch）</h4>
      <Row style="height: 120px; background: #f5f5f5">
        <Col :span="8">
          <div style="background: #52c41a; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">col-8</div>
        </Col>
        <Col :span="8">
          <div style="background: #73d13d; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">col-8</div>
        </Col>
        <Col :span="8">
          <div style="background: #52c41a; color: #fff; padding: 8px; height: 100%; box-sizing: border-box">col-8</div>
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
