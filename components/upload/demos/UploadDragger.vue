<template>
  <UploadDragger
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
    @drop="handleDrop"
  >
    <div style="padding: 32px; text-align: center">
      <p style="font-size: 48px; margin-bottom: 8px">📥</p>
      <p style="font-size: 16px; margin-bottom: 4px">点击或拖拽文件到此区域上传</p>
      <p style="color: #999; font-size: 14px">支持单个或批量上传，严禁上传公司数据或其他违禁文件</p>
    </div>
  </UploadDragger>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadDragger } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  console.log('文件状态：', info.file.status)
  fileList.value = info.fileList
}

const handleDrop = (event: DragEvent) => {
  console.log('拖拽文件：', event.dataTransfer?.files)
}
</script>
