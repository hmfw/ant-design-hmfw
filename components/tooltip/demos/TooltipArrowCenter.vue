<template>
  <div class="demo-arrow-center">
    <h4 style="margin-top: 0">设置 <code>arrow.pointAtCenter</code> 可以让箭头始终指向触发元素的中心。</h4>
    <div class="demo-row">
      <div class="demo-item">
        <h4>默认箭头位置</h4>
        <Tooltip title="默认箭头跟随浮层边缘" placement="topLeft">
          <Button style="width: 200px">长按钮 - 默认箭头</Button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <h4>箭头居中</h4>
        <Tooltip title="箭头指向按钮中心" placement="topLeft" :arrow="{ pointAtCenter: true }">
          <Button style="width: 200px">长按钮 - 箭头居中</Button>
        </Tooltip>
      </div>
    </div>
    <div class="demo-row" style="margin-top: 40px">
      <div class="demo-item">
        <Tooltip title="bottomRight 默认" placement="bottomRight">
          <Button style="width: 200px">bottomRight - 默认</Button>
        </Tooltip>
      </div>
      <div class="demo-item">
        <Tooltip title="bottomRight 居中" placement="bottomRight" :arrow="{ pointAtCenter: true }">
          <Button style="width: 200px">bottomRight - 居中</Button>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from '@hmfw/ant-design'
</script>

<style scoped>
.demo-row {
  display: flex;
  gap: 40px;
}
.demo-item {
  flex: 1;
}
.demo-item h4 {
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}
</style>
