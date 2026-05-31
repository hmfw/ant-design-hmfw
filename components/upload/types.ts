export type UploadListType = 'text' | 'picture' | 'picture-card' | 'picture-circle'
export type UploadType = 'select' | 'drag'

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
  showRemoveIcon?: boolean
  showPreviewIcon?: boolean
  showDownloadIcon?: boolean
}

/** Result of beforeUpload — `false` cancels; `File/Blob` replaces the upload target. */
export type BeforeUploadValue = boolean | void | File | Blob

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
  data?:
    | Record<string, unknown>
    | ((file: UploadFile) => Record<string, unknown> | Promise<Record<string, unknown>>)
  withCredentials?: boolean
  openFileDialogOnClick?: boolean
  method?: string
  onRemove?: (file: UploadFile) => void | boolean | Promise<void | boolean>
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
