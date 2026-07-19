import { defineComponent, ref, computed, TransitionGroup, type PropType, type VNode } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Image } from '../image'
import { EyeOutlined, DownloadOutlined, DeleteOutlined } from '@hmfw/icons'
import type {
  UploadProps,
  UploadFile,
  UploadListType,
  UploadType,
  ShowUploadListInterface,
  CustomRequestOptions,
  BeforeUploadValue,
  ItemRenderActions,
  UploadClassNames,
  UploadStyles,
  UploadLocale,
} from './types'

let uidCounter = 0
function genUid() {
  return `__upload_${Date.now()}_${uidCounter++}`
}

function formatSize(bytes?: number) {
  if (!bytes) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

const IMAGE_EXT_RE = /\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|tiff?|avif|apng|heic|heif)$/i

/**
 * 判断是否为图片 URL/file —— AntD v6 默认行为：
 * 1) thumbUrl 存在 → 是
 * 2) MIME type 以 `image/` 开头 → 是
 * 3) URL 扩展名匹配常见图片格式 → 是
 * 4) data:image/... base64 URL → 是
 * 5) 其他网络路径（http/https/相对）默认按图片处理（与 AntD 保持一致）
 */
export function isImageUrl(file: UploadFile): boolean {
  if (file.thumbUrl) return true
  if (file.type && file.type.indexOf('image/') === 0) return true
  const url = file.url || ''
  if (!url) return false
  if (IMAGE_EXT_RE.test(url)) return true
  if (/^data:image\//.test(url)) return true
  // AntD v6: 非图片扩展名（已知文档/视频/音频）直接拒绝
  if (/\.[^./\\]+$/.test(url)) return false
  return true
}

/** Resolve `action` against AntD v6 signature: string | (file) => string | Promise<string>. */
async function resolveAction(action: UploadProps['action'], file: File): Promise<string> {
  if (typeof action === 'function') return await action(file)
  return action ?? ''
}

/** Resolve `data` per AntD v6: plain object or (file) => object | Promise<object>. */
async function resolveData(data: UploadProps['data'], file: UploadFile): Promise<Record<string, unknown>> {
  if (typeof data === 'function') return (await data(file)) ?? {}
  return data ?? {}
}

const uploadProps = {
  accept: { type: String, default: undefined },
  action: { type: [String, Function] as PropType<UploadProps['action']>, default: undefined },
  directory: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  fileList: { type: Array as PropType<UploadFile[]>, default: undefined },
  defaultFileList: { type: Array as PropType<UploadFile[]>, default: undefined },
  listType: { type: String as PropType<UploadListType>, default: 'text' },
  type: { type: String as PropType<UploadType>, default: 'select' },
  maxCount: { type: Number, default: undefined },
  multiple: { type: Boolean, default: false },
  name: { type: String, default: 'file' },
  showUploadList: {
    type: [Boolean, Object] as PropType<boolean | ShowUploadListInterface>,
    default: true,
  },
  beforeUpload: { type: Function as PropType<UploadProps['beforeUpload']>, default: undefined },
  customRequest: { type: Function as PropType<UploadProps['customRequest']>, default: undefined },
  headers: { type: Object as PropType<Record<string, string>>, default: undefined },
  data: { type: [Object, Function] as PropType<UploadProps['data']>, default: undefined },
  withCredentials: { type: Boolean, default: false },
  openFileDialogOnClick: { type: Boolean, default: true },
  method: { type: String, default: 'post' },
  onRemove: { type: Function as PropType<UploadProps['onRemove']>, default: undefined },
  isImageUrl: { type: Function as PropType<UploadProps['isImageUrl']>, default: undefined },
  itemRender: { type: Function as PropType<UploadProps['itemRender']>, default: undefined },
  locale: { type: Object as PropType<UploadLocale>, default: undefined },
  classNames: { type: Object as PropType<UploadClassNames>, default: undefined },
  styles: { type: Object as PropType<UploadStyles>, default: undefined },
} satisfies Record<keyof UploadProps, any>

export const Upload = defineComponent({
  name: 'Upload',
  props: uploadProps,
  emits: ['update:fileList', 'change', 'remove', 'preview', 'download', 'drop'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('upload')
    const contextLocale = useLocale()
    const mergedLocale = computed(() => ({ ...contextLocale.value.Upload, ...props.locale }))

    const inputRef = ref<HTMLInputElement>()
    const innerFileList = ref<UploadFile[]>(props.defaultFileList ?? [])
    /** Track drag-enter depth so child elements don't toggle hover off. */
    const dragDepth = ref(0)
    const dragging = computed(() => dragDepth.value > 0)

    /** 图片预览状态 */
    const previewOpen = ref(false)
    const previewImage = ref<string>('')
    const previewTitle = ref<string>('')

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
          f.uid === uid ? { ...f, status: 'done' as const, response, percent: 100 } : f,
        )
        updateList(list)
        emit('change', {
          file: { ...uploadFile, status: 'done', percent: 100, response },
          fileList: list,
        })
      }

      const onError = (error: Error, response?: unknown) => {
        const list = fileList.value.map((f) =>
          f.uid === uid ? { ...f, status: 'error' as const, error, response } : f,
        )
        updateList(list)
        emit('change', {
          file: { ...uploadFile, status: 'error', error, response },
          fileList: list,
        })
      }

      const onProgress = (event: { percent: number }) => {
        const list = fileList.value.map((f) => (f.uid === uid ? { ...f, percent: event.percent } : f))
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
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault()
    }

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

    const handlePreview = (file: UploadFile) => {
      // 先触发 preview 事件，兼容用户自定义行为
      emit('preview', file)

      // 如果是图片文件，打开内置预览
      if (checkImageUrl(file)) {
        const url = file.url || file.thumbUrl
        if (url) {
          previewImage.value = url
          previewTitle.value = file.name
          previewOpen.value = true
        }
      }
    }

    const triggerSelect = () => {
      if (!props.disabled && props.openFileDialogOnClick) inputRef.value?.click()
    }

    const isCardType = computed(() => props.listType === 'picture-card' || props.listType === 'picture-circle')
    const isDragType = computed(() => props.type === 'drag')

    /** Resolve `showUploadList` (boolean | object). */
    const showList = computed(() => props.showUploadList !== false)

    /** 辅助函数：根据配置计算某个图标是否显示（支持函数形式） */
    const shouldShowIcon = (
      iconKey: 'showRemoveIcon' | 'showPreviewIcon' | 'showDownloadIcon',
      file: UploadFile,
      defaultValue: boolean,
    ): boolean => {
      if (typeof props.showUploadList !== 'object') return defaultValue
      const value = props.showUploadList[iconKey]
      if (value === undefined) return defaultValue
      if (typeof value === 'function') return value(file)
      return value
    }

    /** 辅助函数：获取自定义图标（支持函数形式） */
    const getCustomIcon = (iconKey: 'removeIcon' | 'downloadIcon' | 'previewIcon', file: UploadFile): VNode | null => {
      if (typeof props.showUploadList !== 'object') return null
      const icon = props.showUploadList[iconKey]
      if (!icon) return null
      if (typeof icon === 'function') return icon(file)
      return icon
    }

    /** 检查文件是否应展示图片缩略图 —— 优先使用 props.isImageUrl 覆盖。 */
    const checkImageUrl = (file: UploadFile): boolean => {
      if (props.isImageUrl) return props.isImageUrl(file)
      return isImageUrl(file)
    }

    /** 渲染单个文件项的默认 DOM —— 抽出来便于 itemRender 包装。 */
    const renderItem = (file: UploadFile) => {
      const showThumb = checkImageUrl(file)
      const thumbSrc = file.thumbUrl || file.url
      return (
        <div
          class={cls(
            `${prefixCls}-list-item`,
            {
              [`${prefixCls}-list-item-${file.status}`]: !!file.status,
            },
            props.classNames?.listItem,
          )}
          style={props.styles?.listItem}
        >
          {(props.listType === 'picture' || isCardType.value) && showThumb && thumbSrc && !isCardType.value && (
            <div
              class={cls(`${prefixCls}-list-item-thumbnail`, props.classNames?.thumbnail)}
              style={props.styles?.thumbnail}
            >
              <img src={thumbSrc} alt={file.name} />
            </div>
          )}
          {isCardType.value ? (
            <div class={cls(`${prefixCls}-list-item-card`, props.classNames?.itemCard)} style={props.styles?.itemCard}>
              {showThumb && thumbSrc ? (
                <img src={thumbSrc} alt={file.name} />
              ) : (
                <span
                  class={cls(`${prefixCls}-list-item-icon`, props.classNames?.itemIcon)}
                  style={props.styles?.itemIcon}
                >
                  📄
                </span>
              )}
              {file.status === 'uploading' && (
                <div
                  class={cls(`${prefixCls}-list-item-progress`, props.classNames?.progress)}
                  style={props.styles?.progress}
                >
                  <div
                    class={cls(`${prefixCls}-list-item-progress-bar`, props.classNames?.progressBar)}
                    style={{ width: `${file.percent ?? 0}%`, ...props.styles?.progressBar }}
                  />
                </div>
              )}
              <div
                class={cls(`${prefixCls}-list-item-card-actions`, props.classNames?.cardActions)}
                style={props.styles?.cardActions}
              >
                {(file.url || file.thumbUrl) && shouldShowIcon('showPreviewIcon', file, true) && (
                  <button
                    class={cls(`${prefixCls}-list-item-action`, props.classNames?.itemAction)}
                    style={props.styles?.itemAction}
                    onClick={() => handlePreview(file)}
                  >
                    {getCustomIcon('previewIcon', file) || <EyeOutlined />}
                  </button>
                )}
                {shouldShowIcon('showDownloadIcon', file, false) && file.url && (
                  <button
                    class={cls(`${prefixCls}-list-item-action`, props.classNames?.itemAction)}
                    style={props.styles?.itemAction}
                    onClick={() => emit('download', file)}
                  >
                    {getCustomIcon('downloadIcon', file) || <DownloadOutlined />}
                  </button>
                )}
                {shouldShowIcon('showRemoveIcon', file, true) && (
                  <button
                    class={cls(`${prefixCls}-list-item-action`, props.classNames?.itemAction)}
                    style={props.styles?.itemAction}
                    onClick={() => handleRemove(file)}
                  >
                    {getCustomIcon('removeIcon', file) || <DeleteOutlined />}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div class={cls(`${prefixCls}-list-item-info`, props.classNames?.itemInfo)} style={props.styles?.itemInfo}>
              <span
                class={cls(`${prefixCls}-list-item-icon`, props.classNames?.itemIcon)}
                style={props.styles?.itemIcon}
              >
                {file.status === 'error' ? '❌' : file.status === 'done' ? '✅' : '📄'}
              </span>
              <span
                class={cls(`${prefixCls}-list-item-name`, props.classNames?.itemName)}
                style={props.styles?.itemName}
              >
                {file.name}
              </span>
              <span
                class={cls(`${prefixCls}-list-item-size`, props.classNames?.itemSize)}
                style={props.styles?.itemSize}
              >
                {formatSize(file.size)}
              </span>
              {file.status === 'uploading' && (
                <div
                  class={cls(`${prefixCls}-list-item-progress`, props.classNames?.progress)}
                  style={props.styles?.progress}
                >
                  <div
                    class={cls(`${prefixCls}-list-item-progress-bar`, props.classNames?.progressBar)}
                    style={{ width: `${file.percent ?? 0}%`, ...props.styles?.progressBar }}
                  />
                </div>
              )}
              {shouldShowIcon('showDownloadIcon', file, false) && file.url && (
                <button
                  class={cls(
                    `${prefixCls}-list-item-action`,
                    `${prefixCls}-list-item-download`,
                    props.classNames?.itemAction,
                  )}
                  style={props.styles?.itemAction}
                  onClick={() => emit('download', file)}
                >
                  {getCustomIcon('downloadIcon', file) || '⬇'}
                </button>
              )}
              {shouldShowIcon('showRemoveIcon', file, true) && (
                <button
                  class={cls(
                    `${prefixCls}-list-item-action`,
                    `${prefixCls}-list-item-remove`,
                    props.classNames?.itemAction,
                  )}
                  style={props.styles?.itemAction}
                  onClick={() => handleRemove(file)}
                >
                  {getCustomIcon('removeIcon', file) || '✕'}
                </button>
              )}
            </div>
          )}
        </div>
      )
    }

    const renderFileList = () => {
      if (!showList.value || fileList.value.length === 0) return null
      // TransitionGroup 在 TSX 下的类型不接受 class — 用 as any 绕过
      const TG = TransitionGroup as any
      return (
        <TG
          tag="div"
          class={cls(`${prefixCls}-list`, `${prefixCls}-list-${props.listType}`, props.classNames?.list)}
          style={props.styles?.list}
          name={`${prefixCls}-animate`}
        >
          {fileList.value.map((file) => {
            const originNode = renderItem(file)
            // itemRender 钩子 —— 用户接管单项渲染但仍可通过 actions 触发内置行为
            if (props.itemRender) {
              const actions: ItemRenderActions = {
                download: () => emit('download', file),
                preview: () => handlePreview(file),
                remove: () => handleRemove(file),
              }
              return (
                <div
                  key={file.uid}
                  class={cls(`${prefixCls}-list-item-container`, props.classNames?.listItemContainer)}
                  style={props.styles?.listItemContainer}
                >
                  {props.itemRender(originNode, file, fileList.value, actions)}
                </div>
              )
            }
            return (
              <div
                key={file.uid}
                class={cls(`${prefixCls}-list-item-container`, props.classNames?.listItemContainer)}
                style={props.styles?.listItemContainer}
              >
                {originNode}
              </div>
            )
          })}
        </TG>
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
            class={cls(
              `${prefixCls}-select`,
              `${prefixCls}-select-${props.listType}`,
              {
                [`${prefixCls}-disabled`]: props.disabled,
              },
              props.classNames?.select,
            )}
            style={props.styles?.select}
            onClick={triggerSelect}
            onDragenter={handleDragEnter}
            onDragover={handleDragOver}
            onDragleave={handleDragLeave}
            onDrop={handleDrop}
          >
            {slots.default ? (
              slots.default()
            ) : (
              <div class={`${prefixCls}-select-btn`}>
                <span
                  class={cls(`${prefixCls}-select-icon`, props.classNames?.selectIcon)}
                  style={props.styles?.selectIcon}
                >
                  +
                </span>
                <span
                  class={cls(`${prefixCls}-select-text`, props.classNames?.selectText)}
                  style={props.styles?.selectText}
                >
                  {mergedLocale.value.uploadText}
                </span>
              </div>
            )}
          </div>
        ) : null
      }

      if (isDragType.value) {
        return (
          <div
            class={cls(
              `${prefixCls}-drag`,
              {
                [`${prefixCls}-drag-uploading`]: fileList.value.some((f) => f.status === 'uploading'),
                [`${prefixCls}-drag-hover`]: dragging.value,
                [`${prefixCls}-disabled`]: props.disabled,
              },
              props.classNames?.drag,
            )}
            style={props.styles?.drag}
            onClick={triggerSelect}
            onDragenter={handleDragEnter}
            onDragover={handleDragOver}
            onDragleave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div
              class={cls(`${prefixCls}-drag-container`, props.classNames?.dragContainer)}
              style={props.styles?.dragContainer}
            >
              {slots.default?.()}
            </div>
          </div>
        )
      }

      return (
        <div
          class={cls(
            `${prefixCls}-select`,
            {
              [`${prefixCls}-disabled`]: props.disabled,
            },
            props.classNames?.select,
          )}
          style={props.styles?.select}
          onClick={triggerSelect}
        >
          {slots.default ? slots.default() : null}
        </div>
      )
    }

    return () => (
      <div
        class={cls(
          prefixCls,
          {
            [`${prefixCls}-picture-card-wrapper`]: props.listType === 'picture-card',
            [`${prefixCls}-picture-circle-wrapper`]: props.listType === 'picture-circle',
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <input
          ref={inputRef}
          type="file"
          accept={props.accept}
          multiple={props.multiple}
          style={{ display: 'none' }}
          onChange={handleChange}
          // @ts-expect-error - webkitdirectory 是非标准 HTML 属性
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
        {/* 图片预览 */}
        <Image
          style={{ display: 'none' }}
          preview={{
            open: previewOpen.value,
            onOpenChange: (open) => {
              previewOpen.value = open
            },
            src: previewImage.value,
          }}
        />
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
