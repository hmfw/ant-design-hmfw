<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器（圆角边框）：</div>
      <QRCode value="https://ant.design" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义状态遮罩 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义状态遮罩样式：</div>
      <QRCode
        value="https://ant.design"
        status="expired"
        :class-names="{ cover: 'custom-cover' }"
        :on-refresh="() => {}"
      />
    </div>

    <!-- 场景 3：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（根容器 + 遮罩）：</div>
      <QRCode
        value="https://ant.design"
        status="loading"
        :class-names="{
          root: 'custom-root-combo',
          cover: 'custom-cover-combo',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <QRCode
        value="https://ant.design"
        :styles="{
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)',
          },
        }"
      />
    </div>

    <!-- 场景 5：动态样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">动态样式（状态切换）：</div>
      <QRCode
        value="https://ant.design"
        :status="currentStatus"
        :class-names="{ root: 'custom-dynamic', cover: 'custom-dynamic-cover' }"
        :on-refresh="handleRefresh"
      />
      <div style="margin-top: 8px">
        <button style="margin-right: 8px" @click="currentStatus = 'active'">激活</button>
        <button style="margin-right: 8px" @click="currentStatus = 'expired'">过期</button>
        <button style="margin-right: 8px" @click="currentStatus = 'loading'">加载中</button>
        <button @click="currentStatus = 'scanned'">已扫描</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QRCode } from 'ant-design-hmfw'
import type { QRCodeStatus } from 'ant-design-hmfw'

const currentStatus = ref<QRCodeStatus>('expired')

const handleRefresh = () => {
  currentStatus.value = 'loading'
  setTimeout(() => {
    currentStatus.value = 'active'
  }, 1500)
}
</script>

<style scoped>
/* 场景 1：渐变边框 + 圆角 */
:deep(.custom-root) {
  border-radius: 12px;
  border: 3px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2：自定义遮罩 */
:deep(.custom-cover) {
  background: linear-gradient(135deg, rgba(255, 77, 79, 0.9) 0%, rgba(255, 120, 117, 0.9) 100%);
  backdrop-filter: blur(4px);
}

/* 场景 3：组合样式 */
:deep(.custom-root-combo) {
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
}

:deep(.custom-cover-combo) {
  background: rgba(24, 144, 255, 0.15);
  backdrop-filter: blur(8px);
}

/* 场景 5：动态样式 */
:deep(.custom-dynamic) {
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 2px solid #d9d9d9;
}

:deep(.custom-dynamic:hover) {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
}

:deep(.custom-dynamic-cover) {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 245, 255, 0.95) 100%);
  backdrop-filter: blur(4px);
  border-radius: 6px;
}

button {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  color: #1677ff;
  border-color: #1677ff;
}
</style>
