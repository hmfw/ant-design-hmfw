import type { InjectionKey } from 'vue'
import type { ImgInfo, PreviewConfig } from './types'

// ---- PreviewGroup context ----
export interface PreviewGroupContext {
  register: (getItem: () => ImgInfo) => () => void
  open: (item: () => ImgInfo) => void
  preview: () => boolean | PreviewConfig | undefined
}

export const PREVIEW_GROUP_KEY: InjectionKey<PreviewGroupContext> = Symbol('PreviewGroup')
