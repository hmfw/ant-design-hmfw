<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
  >
    <Button>点击上传</Button>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  if (info.file.status === 'done') {
    console.log(`${info.file.name} 上传成功`)
  } else if (info.file.status === 'error') {
    console.log(`${info.file.name} 上传失败`)
  }
  fileList.value = info.fileList
}
</script>
