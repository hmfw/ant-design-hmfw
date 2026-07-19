export type UploadListType = 'text' | 'picture' | 'picture-card' | 'picture-circle'
export type UploadType = 'select' | 'drag'

import type { VNode } from 'vue'

export interface UploadLocale {
  uploading?: string
  removeFile?: string
  uploadError?: string
  previewFile?: string
  downloadFile?: string
  uploadText?: string
}

export interface UploadFile {
  uid: string
  name: string
  size?: number
  type?: string
  status?: 'uploading' | 'done' | 'error' | 'removed'
  percent?: number
  url?: string
  thumbUrl?: string
  originFileObj?: File
  response?: unknown
  error?: unknown
}

export interface UploadChangeParam {
  file: UploadFile
  fileList: UploadFile[]
  event?: { percent: number }
}

export interface ShowUploadListInterface {
  showRemoveIcon?: boolean | ((file: UploadFile) => boolean)
  showPreviewIcon?: boolean | ((file: UploadFile) => boolean)
  showDownloadIcon?: boolean | ((file: UploadFile) => boolean)
  removeIcon?: VNode | ((file: UploadFile) => VNode)
  downloadIcon?: VNode | ((file: UploadFile) => VNode)
  previewIcon?: VNode | ((file: UploadFile) => VNode)
}

/** Result of beforeUpload — `false` cancels; `File/Blob` replaces the upload target. */
export type BeforeUploadValue = boolean | void | File | Blob

/** Actions exposed to itemRender callback. */
export interface ItemRenderActions {
  download: () => void
  preview: () => void
  remove: () => void
}

export interface UploadClassNames {
  root?: string // 根容器
  select?: string // 选择按钮容器
  selectIcon?: string // 选择按钮图标
  selectText?: string // 选择按钮文本
  drag?: string // 拖拽容器
  dragContainer?: string // 拖拽内部容器
  list?: string // 文件列表容器
  listItem?: string // 列表项
  listItemContainer?: string // 列表项外层容器
  thumbnail?: string // 缩略图容器
  itemInfo?: string // 文件信息容器
  itemIcon?: string // 文件图标
  itemName?: string // 文件名
  itemSize?: string // 文件大小
  itemCard?: string // 卡片模式容器
  cardActions?: string // 卡片操作区
  itemAction?: string // 操作按钮
  progress?: string // 进度条容器
  progressBar?: string // 进度条
}

export interface UploadStyles {
  root?: import('vue').CSSProperties
  select?: import('vue').CSSProperties
  selectIcon?: import('vue').CSSProperties
  selectText?: import('vue').CSSProperties
  drag?: import('vue').CSSProperties
  dragContainer?: import('vue').CSSProperties
  list?: import('vue').CSSProperties
  listItem?: import('vue').CSSProperties
  listItemContainer?: import('vue').CSSProperties
  thumbnail?: import('vue').CSSProperties
  itemInfo?: import('vue').CSSProperties
  itemIcon?: import('vue').CSSProperties
  itemName?: import('vue').CSSProperties
  itemSize?: import('vue').CSSProperties
  itemCard?: import('vue').CSSProperties
  cardActions?: import('vue').CSSProperties
  itemAction?: import('vue').CSSProperties
  progress?: import('vue').CSSProperties
  progressBar?: import('vue').CSSProperties
}

export interface UploadProps {
  accept?: string
  /** AntD v6: `string | ((file) => string | Promise<string>)`. */
  action?: string | ((file: File) => string | Promise<string>)
  directory?: boolean
  disabled?: boolean
  fileList?: UploadFile[]
  defaultFileList?: UploadFile[]
  listType?: UploadListType
  type?: UploadType
  maxCount?: number
  multiple?: boolean
  name?: string
  showUploadList?: boolean | ShowUploadListInterface
  beforeUpload?: (file: File, fileList: File[]) => BeforeUploadValue | Promise<BeforeUploadValue>
  customRequest?: (
    options: CustomRequestOptions,
    info?: { defaultRequest: (option: CustomRequestOptions) => void },
  ) => void
  headers?: Record<string, string>
  /** AntD v6: object or async function. */
  data?: Record<string, unknown> | ((file: UploadFile) => Record<string, unknown> | Promise<Record<string, unknown>>)
  withCredentials?: boolean
  openFileDialogOnClick?: boolean
  method?: string
  onRemove?: (file: UploadFile) => void | boolean | Promise<void | boolean>
  /** 自定义判断文件是否为图片（用于显示缩略图）。 */
  isImageUrl?: (file: UploadFile) => boolean
  /** 自定义文件列表项渲染。 */
  itemRender?: (originNode: VNode, file: UploadFile, fileList: UploadFile[], actions: ItemRenderActions) => VNode
  /** 国际化配置，优先级高于 ConfigProvider。 */
  locale?: UploadLocale
  classNames?: UploadClassNames
  styles?: UploadStyles
}

export interface CustomRequestOptions {
  action: string
  data?: Record<string, unknown>
  file: File
  filename?: string
  headers?: Record<string, string>
  withCredentials?: boolean
  onSuccess: (response: unknown, file?: File) => void
  onError: (error: Error, response?: unknown) => void
  onProgress: (event: { percent: number }) => void
}
