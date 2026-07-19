<template>
  <div class="upload-custom-icons-demo">
    <h4>自定义图标</h4>
    <Upload
      v-model:file-list="fileList1"
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      list-type="picture-card"
      :show-upload-list="{
        showPreviewIcon: true,
        showDownloadIcon: true,
        showRemoveIcon: true,
        previewIcon: () => h(SearchOutlined, { style: { fontSize: '18px' } }),
        downloadIcon: () => h(DownloadOutlined, { style: { fontSize: '18px', color: '#52c41a' } }),
        removeIcon: () => h(CloseCircleOutlined, { style: { fontSize: '18px', color: '#ff4d4f' } }),
      }"
    >
      <div style="display: flex; flex-direction: column; align-items: center">
        <PlusOutlined style="font-size: 20px" />
        <span style="margin-top: 8px; font-size: 14px">上传</span>
      </div>
    </Upload>

    <h4 style="margin-top: 24px">动态控制图标显示（上传中隐藏删除）</h4>
    <Upload
      v-model:file-list="fileList2"
      :show-upload-list="{
        showRemoveIcon: (file) => file.status !== 'uploading',
        showPreviewIcon: (file) => file.status === 'done',
        removeIcon: (file) =>
          file.status === 'error' ? h(CloseCircleOutlined, { style: { color: '#ff4d4f' } }) : h(DeleteOutlined),
      }"
      :custom-request="slowRequest"
    >
      <Button>点击上传</Button>
    </Upload>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Upload, Button } from '@hmfw/ant-design'
import { PlusOutlined, SearchOutlined, DownloadOutlined, CloseCircleOutlined, DeleteOutlined } from '@hmfw/icons'
import type { UploadFile } from '@hmfw/ant-design'

const fileList1 = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'image1.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
])

const fileList2 = ref<UploadFile[]>([])

const slowRequest = ({ onSuccess, onProgress }: any) => {
  let percent = 0
  const timer = setInterval(() => {
    percent += 10
    onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      onSuccess({})
    }
  }, 500)
}
</script>

<style scoped>
h4 {
  margin-bottom: 12px;
  font-weight: 500;
}
</style>
