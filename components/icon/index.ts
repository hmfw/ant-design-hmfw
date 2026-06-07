export { default as Icon } from './Icon'
export type { IconProps, IconComponent } from './types'
export * from './icons'

// 图标元数据和工具函数
export { iconMetadata } from './metadata'
export type { IconMetadata } from './metadata'
export { searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from './utils'
export type { IconSearchResult } from './utils'
