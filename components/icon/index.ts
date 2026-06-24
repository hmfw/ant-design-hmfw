// Icon 包装器保留在主包（依赖 ConfigProvider 前缀）
export { default as Icon } from './Icon'

// IconProps 类型（包装器专用）
export type { IconProps } from './types'

// 图标组件和元数据从 @hmfw/icons 全部重导出
export * from '@hmfw/icons'
export { iconMetadata, searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from '@hmfw/icons'
export type { IconMetadata, IconSearchResult, IconComponent } from '@hmfw/icons'
