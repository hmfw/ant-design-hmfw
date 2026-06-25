<template>
  <Upload v-model:file-list="fileList" :custom-request="customRequest" :item-render="itemRender" multiple>
    <Button>自定义渲染</Button>
  </Upload>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile, ItemRenderActions } from '@hmfw/ant-design'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'design.pdf',
    status: 'done',
    url: 'https://example.com/design.pdf',
    size: 204800,
  },
  {
    uid: '-2',
    name: 'cover.png',
    status: 'done',
    url: 'https://example.com/cover.png',
    size: 102400,
  },
])

const customRequest = ({ onSuccess, onProgress }: any) => {
  let percent = 0
  const timer = setInterval(() => {
    percent += 25
    onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      onSuccess({})
    }
  }, 200)
}

/**
 * 自定义渲染：使用 actions 触发内置的预览/删除行为，外观完全自定义。
 * (originNode, file, fileList, actions) => VNode
 */
const itemRender = (_originNode: any, file: UploadFile, _list: UploadFile[], actions: ItemRenderActions) => (
  <div class="custom-upload-item" data-status={file.status}>
    <span class="custom-upload-item-name">📎 {file.name}</span>
    <span class="custom-upload-item-status">{file.status}</span>
    <Button class="custom-upload-item-btn" onClick={actions.preview}>
      预览
    </Button>
    <Button class="custom-upload-item-btn danger" onClick={actions.remove}>
      删除
    </Button>
  </div>
)
</script>

<style>
.custom-upload-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 8px;
}

.custom-upload-item-name {
  flex: 1;
  color: #1677ff;
}

.custom-upload-item-status {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

.custom-upload-item[data-status='error'] .custom-upload-item-name {
  color: #ff4d4f;
}

.custom-upload-item-btn {
  padding: 2px 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.custom-upload-item-btn.danger {
  color: #ff4d4f;
  border-color: #ffa39e;
}
</style>
