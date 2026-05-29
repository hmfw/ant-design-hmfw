export interface ImageProps {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  preview?: boolean
  fallback?: string
  placeholder?: boolean
}

export interface PreviewGroupProps {
  preview?: boolean
}
