<template>
  <div class="demo-grid">
    <h3>Flex 布局</h3>
    <p>使用 flex 属性实现灵活的列宽</p>

    <h4>flex: auto</h4>
    <Row :gutter="16">
      <Col flex="auto">
        <div class="demo-col">flex: auto</div>
      </Col>
      <Col flex="200px">
        <div class="demo-col">flex: 200px</div>
      </Col>
    </Row>

    <h4>flex: number</h4>
    <Row :gutter="16">
      <Col :flex="2">
        <div class="demo-col">flex: 2</div>
      </Col>
      <Col :flex="3">
        <div class="demo-col">flex: 3</div>
      </Col>
      <Col :flex="1">
        <div class="demo-col">flex: 1</div>
      </Col>
    </Row>

    <h4>flex: none</h4>
    <Row :gutter="16">
      <Col flex="none">
        <div class="demo-col">flex: none (固定宽度)</div>
      </Col>
      <Col flex="auto">
        <div class="demo-col">flex: auto</div>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
import { Row, Col } from 'ant-design-hmfw'
</script>

<style scoped>
.demo-grid {
  padding: 20px;
}

.demo-col {
  padding: 16px;
  background: #0092ff;
  color: white;
  text-align: center;
  border-radius: 4px;
}

h4 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
