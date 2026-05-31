import {
  defineComponent, ref, computed, type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type {
  UploadProps,
  UploadFile,
  UploadListType,
  UploadType,
  ShowUploadListInterface,
  CustomRequestOptions,
  BeforeUploadValue,
} from './types'

let uidCounter = 0
function genUid() { return `__upload_${Date.now()}_${uidCounter++}` }

function formatSize(bytes?: number) {
  if (!bytes) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

/** Resolve `action` against AntD v6 signature: string | (file) => string | Promise<string>. */
async function resolveAction(action: UploadProps['action'], file: File): Promise<string> {
  if (typeof action === 'function') return await action(file)
  return action ?? ''
}

/** Resolve `data` per AntD v6: plain object or (file) => object | Promise<object>. */
async function resolveData(
  data: UploadProps['data'],
  file: UploadFile,
): Promise<Record<string, unknown>> {
  if (typeof data === 'function') return (await data(file)) ?? {}
  return data ?? {}
}

export const Upload = defineComponent({
  name: 'Upload',
  props: {
    accept: String,
    action: [String, Function] as PropType<UploadProps['action']>,
    directory: Boolean,
    disabled: Boolean,
    fileList: Array as PropType<UploadFile[]>,
    defaultFileList: Array as PropType<UploadFile[]>,
    listType: { type: String as PropType<UploadListType>, default: 'text' },
    type: { type: String as PropType<UploadType>, default: 'select' },
    maxCount: Number,
    multiple: Boolean,
    name: { type: String, default: 'file' },
    showUploadList: {
      type: [Boolean, Object] as PropType<boolean | ShowUploadListInterface>,
      default: true,
    },
    beforeUpload: Function as PropType<UploadProps['beforeUpload']>,
    customRequest: Function as PropType<UploadProps['customRequest']>,
    headers: Object as PropType<Record<string, string>>,
    data: [Object, Function] as PropType<UploadProps['data']>,
    withCredentials: Boolean,
    openFileDialogOnClick: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    onRemove: Function as PropType<UploadProps['onRemove']>,
  },
  emits: ['update:fileList', 'change', 'remove', 'preview', 'download', 'drop'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('upload')
    const inputRef = ref<HTMLInputElement>()
    const innerFileList = ref<UploadFile[]>(props.defaultFileList ?? [])
    /** Track drag-enter depth so child elements don't toggle hover off. */
    const dragDepth = ref(0)
    const dragging = computed(() => dragDepth.value > 0)

    const fileList = computed(() => props.fileList ?? innerFileList.value)

    const updateList = (list: UploadFile[]) => {
      innerFileList.value = list
      emit('update:fileList', list)
    }

    /** Default XHR upload, exposed so customRequest can call it via the second arg. */
    const defaultRequest = (opts: CustomRequestOptions) => {
      const xhr = new XMLHttpRequest()
      const formData = new FormData()
      if (opts.data) {
        Object.entries(opts.data).forEach(([k, v]) => formData.append(k, v as string))
      }
      formData.append(opts.filename ?? 'file', opts.file)

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) opts.onProgress({ percent: Math.round((e.loaded / e.total) * 100) })
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) opts.onSuccess(xhr.response, opts.file)
        else opts.onError(new Error(`HTTP ${xhr.status}`))
      }
      xhr.onerror = () => opts.onError(new Error('Network error'))

      if (opts.withCredentials) xhr.withCredentials = true
      if (opts.headers) Object.entries(opts.headers).forEach(([k, v]) => xhr.setRequestHeader(k, v))
      xhr.open(props.method ?? 'post', opts.action)
      xhr.send(formData)
    }

    const doUpload = async (file: File) => {
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
      if (props.maxCount === 1) {
        next.splice(0, next.length - 1)
      } else if (props.maxCount && next.length > props.maxCount) {
        // Cut to match count
        next.splice(props.maxCount)
      }
      updateList(next)
      emit('change', { file: uploadFile, fileList: next })

      const onSuccess = (response: unknown) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, status: 'done' as const, response, percent: 100 } : f
        )
        updateList(list)
        emit('change', { file: { ...uploadFile, status: 'done', percent: 100, response }, fileList: list })
      }

      const onError = (error: Error, response?: unknown) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, status: 'error' as const, error, response } : f
        )
        updateList(list)
        emit('change', { file: { ...uploadFile, status: 'error', error, response }, fileList: list })
      }

      const onProgress = (event: { percent: number }) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, percent: event.percent } : f
        )
        updateList(list)
        // AntD v6: progress events include the original event payload.
        emit('change', { file: { ...uploadFile, percent: event.percent }, fileList: list, event })
      }

      const resolvedAction = await resolveAction(props.action, file)
      const resolvedData = await resolveData(props.data, uploadFile)

      const requestOpts: CustomRequestOptions = {
        action: resolvedAction,
        data: resolvedData,
        file,
        filename: props.name,
        headers: props.headers,
        withCredentials: props.withCredentials,
        onSuccess,
        onError,
        onProgress,
      }

      if (props.customRequest) {
        // AntD 5.28+ second arg exposes the default XHR for opt-in fallback.
        props.customRequest(requestOpts, { defaultRequest })
        return
      }

      if (!resolvedAction) {
        // No action configured: simulate done (used by demos).
        setTimeout(() => onSuccess({}), 500)
        return
      }

      defaultRequest(requestOpts)
    }

    const processFiles = async (files: File[]) => {
      for (const file of files) {
        let uploadTarget: File = file
        if (props.beforeUpload) {
          const result: BeforeUploadValue | Promise<BeforeUploadValue> = props.beforeUpload(file, files)
          const awaited = await Promise.resolve(result)
          if (awaited === false) continue
          // AntD v6: returning a File/Blob replaces the upload target.
          if (awaited instanceof File) {
            uploadTarget = awaited
          } else if (awaited instanceof Blob) {
            uploadTarget = new File([awaited], file.name, { type: awaited.type || file.type })
          }
        }
        await doUpload(uploadTarget)
      }
    }

    const handleChange = (e: Event) => {
      const files = Array.from((e.target as HTMLInputElement).files ?? [])
      processFiles(files)
      if (inputRef.value) inputRef.value.value = ''
    }

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault()
      dragDepth.value += 1
    }
    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault()
      dragDepth.value = Math.max(0, dragDepth.value - 1)
    }
    const handleDragOver = (e: DragEvent) => { e.preventDefault() }

    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      dragDepth.value = 0
      // AntD v6 emits the native `drop` event regardless of disabled state.
      emit('drop', e)
      if (props.disabled) return
      const files = Array.from(e.dataTransfer?.files ?? [])
      processFiles(files)
    }

    const handleRemove = async (file: UploadFile) => {
      const result = props.onRemove ? await Promise.resolve(props.onRemove(file)) : true
      // AntD v6: returning `false` from onRemove cancels the removal.
      if (result === false) return
      const next = fileList.value.filter((f) => f.uid !== file.uid)
      updateList(next)
      emit('remove', file)
      emit('change', { file: { ...file, status: 'removed' }, fileList: next })
    }

    const triggerSelect = () => {
      if (!props.disabled && props.openFileDialogOnClick) inputRef.value?.click()
    }

    const isCardType = computed(() => props.listType === 'picture-card' || props.listType === 'picture-circle')
    const isDragType = computed(() => props.type === 'drag')

    /** Resolve `showUploadList` (boolean | object). */
    const showList = computed(() => props.showUploadList !== false)
    const showRemove = computed(() => {
      if (typeof props.showUploadList === 'object') return props.showUploadList.showRemoveIcon !== false
      return true
    })
    const showPreview = computed(() => {
      if (typeof props.showUploadList === 'object') return props.showUploadList.showPreviewIcon !== false
      return true
    })

    const renderFileList = () => {
      if (!showList.value || fileList.value.length === 0) return null
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
                    {file.url && showPreview.value && (
                      <button class={`${prefixCls}-list-item-action`} onClick={() => emit('preview', file)}>👁</button>
                    )}
                    {showRemove.value && (
                      <button class={`${prefixCls}-list-item-action`} onClick={() => handleRemove(file)}>🗑</button>
                    )}
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
                  {showRemove.value && (
                    <button
                      class={`${prefixCls}-list-item-action ${prefixCls}-list-item-remove`}
                      onClick={() => handleRemove(file)}
                    >
                      ✕
                    </button>
                  )}
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
            onDragenter={handleDragEnter}
            onDragover={handleDragOver}
            onDragleave={handleDragLeave}
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

      if (isDragType.value) {
        return (
          <div
            class={cls(`${prefixCls}-drag`, {
              [`${prefixCls}-drag-uploading`]: fileList.value.some((f) => f.status === 'uploading'),
              [`${prefixCls}-drag-hover`]: dragging.value,
              [`${prefixCls}-disabled`]: props.disabled,
            })}
            onClick={triggerSelect}
            onDragenter={handleDragEnter}
            onDragover={handleDragOver}
            onDragleave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div class={`${prefixCls}-drag-container`}>
              {slots.default?.()}
            </div>
          </div>
        )
      }

      return (
        <div
          class={cls(`${prefixCls}-select`, {
            [`${prefixCls}-disabled`]: props.disabled,
          })}
          onClick={triggerSelect}
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

/**
 * Upload.Dragger — convenience wrapper for `<Upload type="drag">` (AntD v6 parity).
 */
export const UploadDragger = defineComponent({
  name: 'UploadDragger',
  inheritAttrs: false,
  setup(_, { slots, attrs }) {
    return () => (
      <Upload {...attrs} type="drag">
        {{ default: () => slots.default?.() }}
      </Upload>
    )
  },
})

// Compound API: `<Upload.Dragger>` parity with AntD.
;(Upload as typeof Upload & { Dragger: typeof UploadDragger }).Dragger = UploadDragger
