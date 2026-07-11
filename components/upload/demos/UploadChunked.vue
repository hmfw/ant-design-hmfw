<template>
  <div class="upload-chunked-demo">
    <Upload v-model:file-list="fileList" :custom-request="chunkedRequest" :before-upload="beforeUpload" multiple>
      <Button>分片上传</Button>
    </Upload>
    <div v-if="logs.length" class="upload-chunked-log">
      <div v-for="(log, i) in logs" :key="i">
        {{ log }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile, CustomRequestOptions } from '@hmfw/ant-design'

const fileList = ref<UploadFile[]>([])
const logs = ref<string[]>([])

const CHUNK_SIZE = 1024 * 1024 // 每片 1MB

const beforeUpload = (file: File) => {
  logs.value = []
  logs.value.push(`选中文件 ${file.name}，大小 ${(file.size / 1024).toFixed(1)} KB`)
  return true
}

/**
 * 分片上传实现：
 * 1. 按 CHUNK_SIZE 切片
 * 2. 串行上传每片到 /api/upload-chunk（演示中用 setTimeout 模拟）
 * 3. 全部成功后调用 /api/merge-chunks 合并（演示中模拟）
 * 4. 通过 onProgress 上报整体进度
 */
const chunkedRequest = async (opts: CustomRequestOptions) => {
  const { file, onSuccess, onError, onProgress } = opts
  try {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE)
    logs.value.push(`开始分片：共 ${totalChunks} 片`)

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE
      const end = Math.min(start + CHUNK_SIZE, file.size)
      const chunk = file.slice(start, end)
      await uploadChunk(file.name, i, totalChunks, chunk)
      const percent = Math.round(((i + 1) / totalChunks) * 95)
      onProgress({ percent })
      logs.value.push(`第 ${i + 1}/${totalChunks} 片上传完成（${chunk.size} 字节）`)
    }

    // 通知服务端合并分片
    await mergeChunks(file.name, totalChunks)
    onProgress({ percent: 100 })
    logs.value.push('合并完成')
    onSuccess({ url: URL.createObjectURL(file) })
  } catch (err) {
    onError(err as Error)
    logs.value.push(`上传失败：${(err as Error).message}`)
  }
}

/** 模拟单片上传：实际项目里这里会是 fetch('/api/upload-chunk', { method: 'POST', body: formData })。 */
function uploadChunk(name: string, index: number, total: number, chunk: Blob) {
  return new Promise<void>((resolve) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('index', String(index))
    formData.append('total', String(total))
    formData.append('chunk', chunk)
    // 模拟网络耗时
    setTimeout(resolve, 300)
  })
}

/** 模拟合并请求：fetch('/api/merge-chunks', { method: 'POST', body: JSON.stringify({ name, total }) })。 */
function mergeChunks(_name: string, _total: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 400)
  })
}
</script>

<style scoped>
.upload-chunked-log {
  margin-top: 12px;
  padding: 8px 12px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  max-height: 160px;
  overflow-y: auto;
}
</style>
