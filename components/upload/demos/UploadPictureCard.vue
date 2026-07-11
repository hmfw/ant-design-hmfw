<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    list-type="picture-card"
    :max-count="8"
    @change="handleChange"
  >
    <div v-if="fileList.length < 8">
      <div>+ 上传</div>
    </div>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
</script>
