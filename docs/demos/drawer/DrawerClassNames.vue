<template>
  <div class="demo-drawer-classnames">
    <!-- 场景 1: 自定义遮罩样式 -->
    <section class="demo-section">
      <h3>1. 自定义遮罩样式</h3>
      <Button type="primary" @click="open1 = true">打开抽屉（自定义遮罩）</Button>
      <Drawer v-model:open="open1" title="自定义遮罩" :class-names="{ mask: 'custom-mask' }">
        <p>这是一个自定义遮罩样式的抽屉</p>
        <p>遮罩层使用渐变效果</p>
      </Drawer>
    </section>

    <!-- 场景 2: 自定义包裹层样式 -->
    <section class="demo-section">
      <h3>2. 自定义包裹层样式</h3>
      <Button type="primary" @click="open2 = true">打开抽屉（自定义包裹层）</Button>
      <Drawer v-model:open="open2" title="自定义包裹层" :class-names="{ wrapper: 'custom-wrapper' }">
        <p>这是一个自定义包裹层样式的抽屉</p>
        <p>包裹层带有阴影和圆角效果</p>
      </Drawer>
    </section>

    <!-- 场景 3: 自定义内容区样式 -->
    <section class="demo-section">
      <h3>3. 自定义内容区样式</h3>
      <Button type="primary" @click="open3 = true">打开抽屉（自定义内容区）</Button>
      <Drawer v-model:open="open3" title="自定义内容区" :class-names="{ content: 'custom-content' }">
        <p>这是一个自定义内容区样式的抽屉</p>
        <p>内容区背景使用渐变色</p>
      </Drawer>
    </section>

    <!-- 场景 4: 自定义头部和标题 -->
    <section class="demo-section">
      <h3>4. 自定义头部和标题样式</h3>
      <Button type="primary" @click="open4 = true">打开抽屉（自定义头部）</Button>
      <Drawer v-model:open="open4" title="渐变标题" :class-names="{ header: 'custom-header', title: 'custom-title' }">
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个自定义头部和标题样式的抽屉</p>
        <p>头部使用渐变背景，标题使用渐变文字</p>
      </Drawer>
    </section>

    <!-- 场景 5: 自定义主体和页脚 -->
    <section class="demo-section">
      <h3>5. 自定义主体和页脚样式</h3>
      <Button type="primary" @click="open5 = true">打开抽屉（自定义主体和页脚）</Button>
      <Drawer
        v-model:open="open5"
        title="自定义主体和页脚"
        :class-names="{ body: 'custom-body', footer: 'custom-footer' }"
      >
        <p>这是一个自定义主体和页脚样式的抽屉</p>
        <p>主体区域使用柔和的背景色</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open5 = false">取消</Button>
          <Button type="primary" @click="open5 = false">确定</Button>
        </template>
      </Drawer>
    </section>

    <!-- 场景 6: 自定义扩展区域 -->
    <section class="demo-section">
      <h3>6. 自定义扩展区域样式</h3>
      <Button type="primary" @click="open6 = true">打开抽屉（自定义扩展区域）</Button>
      <Drawer v-model:open="open6" title="自定义扩展区域" :class-names="{ extra: 'custom-extra' }">
        <template #extra>
          <a href="#">链接 1</a>
          <a href="#" style="margin-left: 8px">链接 2</a>
        </template>
        <p>这是一个自定义扩展区域样式的抽屉</p>
        <p>右上角的操作链接使用自定义样式</p>
      </Drawer>
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Button type="primary" @click="open7 = true">打开抽屉（综合样式）</Button>
      <Drawer
        v-model:open="open7"
        title="综合样式抽屉"
        :class-names="{
          mask: 'combined-mask',
          wrapper: 'combined-wrapper',
          content: 'combined-content',
          header: 'combined-header',
          title: 'combined-title',
          body: 'combined-body',
          footer: 'combined-footer',
        }"
      >
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个组合多个自定义样式的抽屉</p>
        <p>所有部分都有自定义样式</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open7 = false">取消</Button>
          <Button type="primary" @click="open7 = false">确定</Button>
        </template>
      </Drawer>
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Button type="primary" @click="open8 = true">打开抽屉（动态样式）</Button>
      <Drawer
        v-model:open="open8"
        title="动态样式抽屉"
        :styles="{
          mask: { background: 'rgba(0, 0, 0, 0.6)' },
          wrapper: { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' },
          content: { borderLeft: '4px solid #1890ff' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          title: { fontWeight: 'bold', fontSize: '18px' },
          body: { padding: '32px', background: '#f0f2f5' },
          footer: { background: '#fafafa', borderTop: '2px solid #1890ff' },
        }"
      >
        <p>这是一个使用动态样式的抽屉</p>
        <p>通过 styles 属性设置内联样式</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open8 = false">取消</Button>
          <Button type="primary" @click="open8 = false">确定</Button>
        </template>
      </Drawer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const open5 = ref(false)
const open6 = ref(false)
const open7 = ref(false)
const open8 = ref(false)
</script>

<style scoped>
.demo-drawer-classnames {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义遮罩 */
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
  backdrop-filter: blur(4px);
}

/* 场景 2: 自定义包裹层 */
:deep(.custom-wrapper) {
  border-radius: 16px 0 0 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* 场景 3: 自定义内容区 */
:deep(.custom-content) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border-left: 4px solid #1890ff;
}

/* 场景 4: 自定义头部和标题 */
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-bottom: none;
  padding: 20px 24px;
}

:deep(.custom-header .hmfw-drawer-close) {
  color: white;
}

:deep(.custom-header .hmfw-drawer-close:hover) {
  background: rgba(255, 255, 255, 0.2);
}

:deep(.custom-title) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 20px;
}

:deep(.custom-header .hmfw-drawer-extra a) {
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.custom-header .hmfw-drawer-extra a:hover) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* 场景 5: 自定义主体和页脚 */
:deep(.custom-body) {
  background: #f6ffed;
  padding: 32px;
  color: #389e0d;
  font-size: 15px;
  line-height: 1.8;
}

:deep(.custom-footer) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  border-top: none;
  padding: 16px 24px;
}

:deep(.custom-footer .hmfw-btn) {
  border-radius: 6px;
}

/* 场景 6: 自定义扩展区域 */
:deep(.custom-extra a) {
  padding: 6px 14px;
  background: #1890ff;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

:deep(.custom-extra a:hover) {
  background: #40a9ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
}

/* 场景 7: 组合样式 */
:deep(.combined-mask) {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}

:deep(.combined-wrapper) {
  border-radius: 12px 0 0 12px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s ease;
}

:deep(.combined-content) {
  background: linear-gradient(to bottom, #fff7e6 0%, #ffffff 50%, #e6f7ff 100%);
  border-left: 5px solid #faad14;
}

:deep(.combined-header) {
  background: linear-gradient(135deg, #fa8c16 0%, #faad14 100%);
  border-bottom: 2px solid #fa8c16;
  padding: 24px;
}

:deep(.combined-header .hmfw-drawer-close) {
  color: white;
}

:deep(.combined-header .hmfw-drawer-close:hover) {
  background: rgba(255, 255, 255, 0.25);
  transform: rotate(90deg);
}

:deep(.combined-title) {
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.combined-header .hmfw-drawer-extra a) {
  color: #fff7e6;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

:deep(.combined-header .hmfw-drawer-extra a:hover) {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

:deep(.combined-body) {
  padding: 32px;
  color: #8c6e3b;
  font-size: 15px;
  line-height: 1.8;
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.05) 0%, rgba(24, 144, 255, 0.05) 100%);
}

:deep(.combined-footer) {
  background: #fffbe6;
  border-top: 2px solid #ffd666;
  padding: 20px 24px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}
</style>
