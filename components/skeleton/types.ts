import type { CSSProperties } from 'vue'

/**
 * Skeleton Avatar 配置
 */
export interface SkeletonAvatarProps {
  /** Avatar 尺寸，支持预设值或数字像素值 (建议范围 8-200) */
  size?: 'large' | 'small' | 'default' | number
  /** Avatar 形状 */
  shape?: 'circle' | 'square'
}

/**
 * Skeleton Title 配置
 */
export interface SkeletonTitleProps {
  /** 标题宽度，支持 CSS 单位或数字像素值 */
  width?: string | number
}

/**
 * Skeleton Paragraph 配置
 */
export interface SkeletonParagraphProps {
  /**
   * 段落行数，默认根据 avatar/title 组合自动推断 (2 或 3)
   * 建议范围: 1-20
   */
  rows?: number
  /**
   * 每行宽度
   * - 单值: 仅应用于最后一行，其余为 100%
   * - 数组: 按索引对应每行，长度不足时自动填充 100%
   * - 单位: string 保持原样，number 自动追加 px
   */
  width?: string | number | (string | number)[]
}

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

/**
 * Skeleton 主组件 Props
 */
export interface SkeletonProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** 是否加载中，false 时显示子内容 */
  loading?: boolean
  /** Avatar 配置，true 启用默认配置，对象自定义配置 */
  avatar?: boolean | SkeletonAvatarProps
  /** Title 配置，false 隐藏，true 或对象显示 */
  title?: boolean | SkeletonTitleProps
  /** Paragraph 配置，false 隐藏，true 或对象显示 */
  paragraph?: boolean | SkeletonParagraphProps
  /** 是否使用圆角样式 */
  round?: boolean
  /** 语义化 class 名称 */
  classNames?: SkeletonClassNames
  /** 语义化内联样式 */
  styles?: SkeletonStyles
}

/**
 * SkeletonButton 组件 Props
 */
export interface SkeletonButtonProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** 按钮尺寸 */
  size?: 'large' | 'small' | 'default'
  /** 按钮形状 */
  shape?: 'default' | 'circle' | 'round' | 'square'
  /** 是否块级元素 */
  block?: boolean
  /** 语义化 class 名称 */
  classNames?: SkeletonButtonClassNames
  /** 语义化内联样式 */
  styles?: SkeletonButtonStyles
}

/**
 * SkeletonInput 组件 Props
 */
export interface SkeletonInputProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** 输入框尺寸 */
  size?: 'large' | 'small' | 'default'
  /** 是否块级元素 */
  block?: boolean
  /** 语义化 class 名称 */
  classNames?: SkeletonInputClassNames
  /** 语义化内联样式 */
  styles?: SkeletonInputStyles
}

/**
 * SkeletonAvatar 组件 Props (独立使用时)
 */
export interface SkeletonAvatarComponentProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** Avatar 尺寸，支持预设值或数字像素值 (建议范围 8-200) */
  size?: 'large' | 'small' | 'default' | number
  /** Avatar 形状 */
  shape?: 'circle' | 'square'
  /** 语义化 class 名称 */
  classNames?: SkeletonAvatarClassNames
  /** 语义化内联样式 */
  styles?: SkeletonAvatarStyles
}

/**
 * SkeletonImage 组件 Props
 */
export interface SkeletonImageProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** 语义化 class 名称 */
  classNames?: SkeletonImageClassNames
  /** 语义化内联样式 */
  styles?: SkeletonImageStyles
}

/**
 * SkeletonNode 组件 Props
 */
export interface SkeletonNodeProps {
  /** 是否显示加载动画 */
  active?: boolean
  /** 节点是否填满整个区域 */
  fullSize?: boolean
  /** 节点样式 */
  nodeStyle?: CSSProperties
  /** 语义化 class 名称 */
  classNames?: SkeletonNodeClassNames
  /** 语义化内联样式 */
  styles?: SkeletonNodeStyles
}
