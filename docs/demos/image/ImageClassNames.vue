<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器与图片 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义根容器与图片样式：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :preview="false"
        :class-names="{
          root: 'custom-root',
          img: 'custom-img',
        }"
      />
    </div>

    <!-- 场景 2：自定义 hover 遮罩 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义 hover 遮罩与遮罩文本：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :class-names="{
          mask: 'custom-mask',
          maskInfo: 'custom-mask-info',
        }"
      />
    </div>

    <!-- 场景 3：自定义预览弹层 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义预览弹层样式（点击图片预览）：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :class-names="{
          preview: 'custom-preview',
          previewMask: 'custom-preview-mask',
          operations: 'custom-operations',
          operationBtn: 'custom-operation-btn',
        }"
      />
    </div>

    <!-- 场景 4：自定义占位与错误状态 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义占位与错误状态：</div>
      <div style="display: flex; gap: 16px">
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width="200"
          :placeholder="true"
          :class-names="{
            placeholder: 'custom-placeholder',
          }"
        />
        <Image
          src="invalid-url"
          width="200"
          :class-names="{
            error: 'custom-error',
          }"
        />
      </div>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">使用内联样式对象：</div>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        width="200"
        :styles="{
          root: {
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          img: {
            transition: 'transform 0.3s',
          },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Image } from '@hmfw/ant-design'
</script>

<style scoped>
/* 场景 1：根容器与图片 */
:deep(.custom-root) {
  border: 3px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  overflow: hidden;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

:deep(.custom-img) {
  transition: transform 0.5s ease;
}

:deep(.custom-root:hover .custom-img) {
  transform: scale(1.05);
}

/* 场景 2：hover 遮罩 */
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%);
  backdrop-filter: blur(4px);
}

:deep(.custom-mask-info) {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* 场景 3：预览弹层（使用 :global() 因为预览挂载到 body） */
:global(.custom-preview) {
  background: rgba(0, 0, 0, 0.92);
}

:global(.custom-preview-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
}

:global(.custom-operations) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 8px 16px;
}

:global(.custom-operation-btn) {
  color: #fff;
  transition: all 0.3s;
}

:global(.custom-operation-btn:hover) {
  transform: scale(1.2);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}

/* 场景 4：占位与错误 */
:deep(.custom-placeholder) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f7ff 100%);
  border: 2px dashed #91d5ff;
}

:deep(.custom-error) {
  background: linear-gradient(135deg, #fff2e8 0%, #ffece0 100%);
  border: 2px dashed #ffbb96;
}

:deep(.custom-error .hmfw-image-error-icon) {
  color: #ff7a45;
  font-size: 32px;
}
</style>
