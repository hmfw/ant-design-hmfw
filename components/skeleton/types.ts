import type { CSSProperties } from 'vue'

/**
 * Skeleton 组件的 classNames
 */
export interface SkeletonClassNames {
  /** 根节点 */
  root?: string
  /** 头部区域（包含 avatar） */
  header?: string
  /** Avatar 元素 */
  avatar?: string
  /** 内容区域（section） */
  section?: string
  /** 标题元素 */
  title?: string
  /** 段落容器 */
  paragraph?: string
  /** 段落行项 */
  row?: string
}

/**
 * Skeleton 组件的 styles
 */
export interface SkeletonStyles {
  /** 根节点 */
  root?: CSSProperties
  /** 头部区域（包含 avatar） */
  header?: CSSProperties
  /** Avatar 元素 */
  avatar?: CSSProperties
  /** 内容区域（section） */
  section?: CSSProperties
  /** 标题元素 */
  title?: CSSProperties
  /** 段落容器 */
  paragraph?: CSSProperties
  /** 段落行项 */
  row?: CSSProperties
}

/**
 * SkeletonButton 组件的 classNames
 */
export interface SkeletonButtonClassNames {
  /** 根节点 */
  root?: string
  /** Button 元素 */
  button?: string
}

/**
 * SkeletonButton 组件的 styles
 */
export interface SkeletonButtonStyles {
  /** 根节点 */
  root?: CSSProperties
  /** Button 元素 */
  button?: CSSProperties
}

/**
 * SkeletonInput 组件的 classNames
 */
export interface SkeletonInputClassNames {
  /** 根节点 */
  root?: string
  /** Input 元素 */
  input?: string
}

/**
 * SkeletonInput 组件的 styles
 */
export interface SkeletonInputStyles {
  /** 根节点 */
  root?: CSSProperties
  /** Input 元素 */
  input?: CSSProperties
}

/**
 * SkeletonAvatar 组件的 classNames
 */
export interface SkeletonAvatarClassNames {
  /** 根节点 */
  root?: string
  /** Avatar 元素 */
  avatar?: string
}

/**
 * SkeletonAvatar 组件的 styles
 */
export interface SkeletonAvatarStyles {
  /** 根节点 */
  root?: CSSProperties
  /** Avatar 元素 */
  avatar?: CSSProperties
}

/**
 * SkeletonImage 组件的 classNames
 */
export interface SkeletonImageClassNames {
  /** 根节点 */
  root?: string
  /** Image 容器 */
  image?: string
  /** SVG 图标 */
  svg?: string
  /** SVG 路径 */
  path?: string
}

/**
 * SkeletonImage 组件的 styles
 */
export interface SkeletonImageStyles {
  /** 根节点 */
  root?: CSSProperties
  /** Image 容器 */
  image?: CSSProperties
  /** SVG 图标 */
  svg?: CSSProperties
  /** SVG 路径 */
  path?: CSSProperties
}

/**
 * SkeletonNode 组件的 classNames
 */
export interface SkeletonNodeClassNames {
  /** 根节点 */
  root?: string
  /** Node 容器 */
  node?: string
}

/**
 * SkeletonNode 组件的 styles
 */
export interface SkeletonNodeStyles {
  /** 根节点 */
  root?: CSSProperties
  /** Node 容器 */
  node?: CSSProperties
}
