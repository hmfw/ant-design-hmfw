export type UploadListType = 'text' | 'picture' | 'picture-card' | 'picture-circle'

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

export interface UploadProps {
  accept?: string
  action?: string
  directory?: boolean
  disabled?: boolean
  fileList?: UploadFile[]
  listType?: UploadListType
  maxCount?: number
  multiple?: boolean
  name?: string
  showUploadList?: boolean
  beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<File | boolean>
  customRequest?: (options: CustomRequestOptions) => void
  headers?: Record<string, string>
  data?: Record<string, unknown>
  withCredentials?: boolean
  openFileDialogOnClick?: boolean
  method?: string
}

export interface CustomRequestOptions {
  action: string
  data?: Record<string, unknown>
  file: File
  filename?: string
  headers?: Record<string, string>
  withCredentials?: boolean
  onSuccess: (response: unknown, file: File) => void
  onError: (error: Error, response?: unknown) => void
  onProgress: (event: { percent: number }) => void
}
