import {
  defineComponent, ref, computed, type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { UploadProps, UploadFile, UploadListType } from './types'

let uidCounter = 0
function genUid() { return `__upload_${Date.now()}_${uidCounter++}` }

function formatSize(bytes?: number) {
  if (!bytes) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

export const Upload = defineComponent({
  name: 'Upload',
  props: {
    accept: String,
    action: { type: String, default: '' },
    directory: Boolean,
    disabled: Boolean,
    fileList: Array as PropType<UploadFile[]>,
    listType: { type: String as PropType<UploadListType>, default: 'text' },
    maxCount: Number,
    multiple: Boolean,
    name: { type: String, default: 'file' },
    showUploadList: { type: Boolean, default: true },
    beforeUpload: Function as PropType<UploadProps['beforeUpload']>,
    customRequest: Function as PropType<UploadProps['customRequest']>,
    headers: Object as PropType<Record<string, string>>,
    data: Object as PropType<Record<string, unknown>>,
    withCredentials: Boolean,
    openFileDialogOnClick: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
  },
  emits: ['update:fileList', 'change', 'remove', 'preview', 'download'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('upload')
    const inputRef = ref<HTMLInputElement>()
    const innerFileList = ref<UploadFile[]>([])
    const dragging = ref(false)

    const fileList = computed(() => props.fileList ?? innerFileList.value)

    const updateList = (list: UploadFile[]) => {
      innerFileList.value = list
      emit('update:fileList', list)
    }

    const doUpload = (file: File) => {
      const uid = genUid()
      const uploadFile: UploadFile = {
        uid,
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        percent: 0,
        originFileObj: file,
      }

      const next = [...fileList.value, uploadFile]
      if (props.maxCount && next.length > props.maxCount) next.splice(0, next.length - props.maxCount)
      updateList(next)
      emit('change', { file: uploadFile, fileList: next })

      const onSuccess = (response: unknown) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, status: 'done' as const, response, percent: 100 } : f
        )
        updateList(list)
        emit('change', { file: { ...uploadFile, status: 'done', percent: 100 }, fileList: list })
      }

      const onError = (error: Error, response?: unknown) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, status: 'error' as const, error, response } : f
        )
        updateList(list)
        emit('change', { file: { ...uploadFile, status: 'error' }, fileList: list })
      }

      const onProgress = (event: { percent: number }) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, percent: event.percent } : f
        )
        updateList(list)
      }

      if (props.customRequest) {
        props.customRequest({
          action: props.action ?? '',
          data: props.data,
          file,
          filename: props.name,
          headers: props.headers,
          withCredentials: props.withCredentials,
          onSuccess,
          onError,
          onProgress,
        })
        return
      }

      if (!props.action) {
        // No action: mark as done immediately (used in demos)
        setTimeout(() => onSuccess({}), 500)
        return
      }

      const xhr = new XMLHttpRequest()
      const formData = new FormData()
      if (props.data) {
        Object.entries(props.data).forEach(([k, v]) => formData.append(k, v as string))
      }
      formData.append(props.name ?? 'file', file)

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) onProgress({ percent: Math.round((e.loaded / e.total) * 100) })
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          onSuccess(xhr.response)
        } else {
          onError(new Error(`HTTP ${xhr.status}`))
        }
      }
      xhr.onerror = () => onError(new Error('Network error'))

      if (props.withCredentials) xhr.withCredentials = true
      if (props.headers) {
        Object.entries(props.headers).forEach(([k, v]) => xhr.setRequestHeader(k, v))
      }

      xhr.open(props.method ?? 'post', props.action ?? '')
      xhr.send(formData)
    }

    const processFiles = async (files: File[]) => {
      for (const file of files) {
        if (props.beforeUpload) {
          const result = await props.beforeUpload(file, files)
          if (result === false) continue
        }
        doUpload(file)
      }
    }

    const handleChange = (e: Event) => {
      const files = Array.from((e.target as HTMLInputElement).files ?? [])
      processFiles(files)
      if (inputRef.value) inputRef.value.value = ''
    }

    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      dragging.value = false
      if (props.disabled) return
      const files = Array.from(e.dataTransfer?.files ?? [])
      processFiles(files)
    }

    const handleRemove = (file: UploadFile) => {
      const next = fileList.value.filter((f) => f.uid !== file.uid)
      updateList(next)
      emit('remove', file)
      emit('change', { file: { ...file, status: 'removed' }, fileList: next })
    }

    const triggerSelect = () => {
      if (!props.disabled && props.openFileDialogOnClick) inputRef.value?.click()
    }

    const isCardType = computed(() => props.listType === 'picture-card' || props.listType === 'picture-circle')

    const renderFileList = () => {
      if (!props.showUploadList || fileList.value.length === 0) return null
      return (
        <div class={`${prefixCls}-list ${prefixCls}-list-${props.listType}`}>
          {fileList.value.map((file) => (
            <div
              key={file.uid}
              class={cls(`${prefixCls}-list-item`, {
                [`${prefixCls}-list-item-${file.status}`]: !!file.status,
              })}
            >
              {(props.listType === 'picture' || isCardType.value) && file.thumbUrl && (
                <div class={`${prefixCls}-list-item-thumbnail`}>
                  <img src={file.thumbUrl} alt={file.name} />
                </div>
              )}
              {isCardType.value ? (
                <div class={`${prefixCls}-list-item-card`}>
                  {file.thumbUrl
                    ? <img src={file.thumbUrl} alt={file.name} />
                    : <span class={`${prefixCls}-list-item-icon`}>📄</span>
                  }
                  {file.status === 'uploading' && (
                    <div class={`${prefixCls}-list-item-progress`}>
                      <div class={`${prefixCls}-list-item-progress-bar`} style={{ width: `${file.percent ?? 0}%` }} />
                    </div>
                  )}
                  <div class={`${prefixCls}-list-item-card-actions`}>
                    {file.url && (
                      <button class={`${prefixCls}-list-item-action`} onClick={() => emit('preview', file)}>👁</button>
                    )}
                    <button class={`${prefixCls}-list-item-action`} onClick={() => handleRemove(file)}>🗑</button>
                  </div>
                </div>
              ) : (
                <div class={`${prefixCls}-list-item-info`}>
                  <span class={`${prefixCls}-list-item-icon`}>
                    {file.status === 'error' ? '❌' : file.status === 'done' ? '✅' : '📄'}
                  </span>
                  <span class={`${prefixCls}-list-item-name`}>{file.name}</span>
                  <span class={`${prefixCls}-list-item-size`}>{formatSize(file.size)}</span>
                  {file.status === 'uploading' && (
                    <div class={`${prefixCls}-list-item-progress`}>
                      <div class={`${prefixCls}-list-item-progress-bar`} style={{ width: `${file.percent ?? 0}%` }} />
                    </div>
                  )}
                  <button
                    class={`${prefixCls}-list-item-action ${prefixCls}-list-item-remove`}
                    onClick={() => handleRemove(file)}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }

    const canAddMore = computed(() => {
      if (!props.maxCount) return true
      return fileList.value.length < props.maxCount
    })

    const renderTrigger = () => {
      if (isCardType.value) {
        return canAddMore.value ? (
          <div
            class={cls(`${prefixCls}-select`, `${prefixCls}-select-${props.listType}`, {
              [`${prefixCls}-disabled`]: props.disabled,
            })}
            onClick={triggerSelect}
            onDragover={(e) => { e.preventDefault(); dragging.value = true }}
            onDragleave={() => { dragging.value = false }}
            onDrop={handleDrop}
          >
            {slots.default ? slots.default() : (
              <div class={`${prefixCls}-select-btn`}>
                <span class={`${prefixCls}-select-icon`}>+</span>
                <span class={`${prefixCls}-select-text`}>上传</span>
              </div>
            )}
          </div>
        ) : null
      }

      return (
        <div
          class={cls(`${prefixCls}-select`, {
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-drag`]: dragging.value,
          })}
          onClick={triggerSelect}
          onDragover={(e) => { e.preventDefault(); dragging.value = true }}
          onDragleave={() => { dragging.value = false }}
          onDrop={handleDrop}
        >
          {slots.default ? slots.default() : null}
        </div>
      )
    }

    return () => (
      <div class={cls(prefixCls, {
        [`${prefixCls}-picture-card-wrapper`]: props.listType === 'picture-card',
        [`${prefixCls}-picture-circle-wrapper`]: props.listType === 'picture-circle',
      })}>
        <input
          ref={inputRef}
          type="file"
          accept={props.accept}
          multiple={props.multiple}
          style={{ display: 'none' }}
          onChange={handleChange}
          // @ts-ignore
          webkitdirectory={props.directory || undefined}
        />
        {isCardType.value ? (
          <div class={`${prefixCls}-list-${props.listType}-wrapper`}>
            {renderFileList()}
            {renderTrigger()}
          </div>
        ) : (
          <>
            {renderTrigger()}
            {renderFileList()}
          </>
        )}
      </div>
    )
  },
})
