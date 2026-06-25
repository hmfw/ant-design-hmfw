<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义选择按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择按钮样式：</div>
      <Upload
        action="/api/upload"
        :file-list="fileList1"
        :class-names="{
          select: 'custom-select',
          selectIcon: 'custom-select-icon',
          selectText: 'custom-select-text',
        }"
        @update:file-list="fileList1 = $event"
      >
        <Button>
          <UploadOutlined />
          上传文件
        </Button>
      </Upload>
    </div>

    <!-- 场景 2：自定义拖拽区 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义拖拽区样式：</div>
      <Upload
        action="/api/upload"
        type="drag"
        :file-list="fileList2"
        :class-names="{
          drag: 'custom-drag',
          dragContainer: 'custom-drag-container',
        }"
        @update:file-list="fileList2 = $event"
      >
        <p class="ant-upload-drag-icon">
          <InboxOutlined style="font-size: 48px; color: #1890ff" />
        </p>
        <p class="ant-upload-text">点击或拖拽文件到此区域上传</p>
      </Upload>
    </div>

    <!-- 场景 3：自定义文件列表项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义文件列表项样式：</div>
      <Upload
        action="/api/upload"
        :default-file-list="defaultFiles"
        :class-names="{
          list: 'custom-list',
          listItem: 'custom-list-item',
          itemIcon: 'custom-item-icon',
          itemName: 'custom-item-name',
        }"
      >
        <Button>
          <UploadOutlined />
          上传文件
        </Button>
      </Upload>
    </div>

    <!-- 场景 4：自定义图片卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片卡片样式：</div>
      <Upload
        action="/api/upload"
        list-type="picture-card"
        :default-file-list="pictureFiles"
        :class-names="{
          itemCard: 'custom-card',
          thumbnail: 'custom-thumbnail',
          cardActions: 'custom-actions',
        }"
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <PlusOutlined style="font-size: 24px; margin-bottom: 8px" />
          <div>上传图片</div>
        </div>
      </Upload>
    </div>

    <!-- 场景 5：使用内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制：</div>
      <Upload
        action="/api/upload"
        type="drag"
        :file-list="fileList3"
        :styles="{
          drag: { borderColor: '#722ed1', borderWidth: '2px' },
          dragContainer: { padding: '32px' },
          progress: { backgroundColor: 'rgba(114, 46, 209, 0.1)' },
          progressBar: { backgroundColor: '#722ed1' },
        }"
        @update:file-list="fileList3 = $event"
      >
        <p class="ant-upload-drag-icon">
          <InboxOutlined style="font-size: 48px; color: #722ed1" />
        </p>
        <p class="ant-upload-text" style="color: #722ed1">紫色主题拖拽上传</p>
      </Upload>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button, UploadOutlined, InboxOutlined, PlusOutlined } from '@hmfw/ant-design'

const fileList1 = ref([])
const fileList2 = ref([])
const fileList3 = ref([])

const defaultFiles = [
  {
    uid: '-1',
    name: 'document.pdf',
    status: 'done' as const,
    url: 'https://example.com/document.pdf',
  },
  {
    uid: '-2',
    name: 'readme.txt',
    status: 'done' as const,
    url: 'https://example.com/readme.txt',
  },
]

const pictureFiles = [
  {
    uid: '-1',
    name: 'image1.png',
    status: 'done' as const,
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'image2.png',
    status: 'done' as const,
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]
</script>

<style scoped>
/* 自定义选择按钮 */
:deep(.custom-select) {
  display: inline-block;
  transition: all 0.3s;
}

:deep(.custom-select-icon) {
  font-size: 18px;
  color: #1890ff;
  margin-right: 8px;
}

:deep(.custom-select-text) {
  font-weight: 500;
  color: #1890ff;
}

/* 自定义拖拽区 */
:deep(.custom-drag) {
  border: 2px dashed #1890ff !important;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(9, 109, 217, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.custom-drag:hover) {
  border-color: #40a9ff !important;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(9, 109, 217, 0.1) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

:deep(.custom-drag-container) {
  padding: 32px;
}

/* 自定义文件列表 */
:deep(.custom-list) {
  margin-top: 16px;
}

:deep(.custom-list-item) {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(82, 196, 26, 0.05), rgba(56, 158, 13, 0.05));
  border: 1px solid rgba(82, 196, 26, 0.2);
  transition: all 0.3s;
}

:deep(.custom-list-item:hover) {
  background: linear-gradient(to right, rgba(82, 196, 26, 0.1), rgba(56, 158, 13, 0.1));
  border-color: rgba(82, 196, 26, 0.4);
  transform: translateX(4px);
}

:deep(.custom-item-icon) {
  color: #52c41a;
  font-size: 18px;
}

:deep(.custom-item-name) {
  color: #389e0d;
  font-weight: 500;
}

/* 自定义图片卡片 */
:deep(.custom-card) {
  border-radius: 12px;
  border: 2px dashed #faad14;
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.05) 0%, rgba(250, 219, 20, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.custom-card:hover) {
  border-color: #ffc53d;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
  transform: translateY(-2px);
}

:deep(.custom-thumbnail) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.custom-actions) {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}
</style>
