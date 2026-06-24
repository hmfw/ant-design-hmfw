import type { CSSProperties, VNode } from 'vue'
import type { ButtonProps, ButtonType } from '../button/types'
import type { IconComponent } from '@hmfw/icons'

export type ModalWidth = number | string

/** AntD `okType` accepts the legacy `'danger'` shorthand in addition to ButtonType */
export type LegacyButtonType = ButtonType | 'danger'

/** Renderable content: plain text, number, a VNode, or a render function */
export type ModalContent = string | number | VNode | (() => VNode | string)

export type GetContainer = string | HTMLElement | (() => HTMLElement) | false

/** 细粒度控制 Modal 各部分的 class */
export interface ModalClassNames {
  header?: string
  body?: string
  footer?: string
  mask?: string
  wrapper?: string
  content?: string
}

/** 细粒度控制 Modal 各部分的 style */
export interface ModalStyles {
  header?: CSSProperties
  body?: CSSProperties
  footer?: CSSProperties
  mask?: CSSProperties
  wrapper?: CSSProperties
  content?: CSSProperties
}

export interface ModalProps {
  open?: boolean
  defaultOpen?: boolean
  title?: ModalContent
  width?: ModalWidth
  centered?: boolean
  closable?: boolean
  closeIcon?: IconComponent
  mask?: boolean
  maskClosable?: boolean
  keyboard?: boolean
  footer?: boolean | null
  okText?: string
  cancelText?: string
  okType?: LegacyButtonType
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  confirmLoading?: boolean
  loading?: boolean
  destroyOnClose?: boolean
  destroyOnHidden?: boolean
  forceRender?: boolean
  zIndex?: number
  getContainer?: GetContainer
  wrapClassName?: string
  rootClassName?: string
  focusTriggerAfterClose?: boolean
  bodyStyle?: CSSProperties
  maskStyle?: CSSProperties
  classNames?: ModalClassNames
  styles?: ModalStyles
  modalRender?: (node: VNode) => VNode
}

/** Type used by the static methods Modal.confirm / info / success / error / warning */
export interface ModalFuncProps {
  title?: ModalContent
  content?: ModalContent
  icon?: IconComponent | VNode | null
  type?: 'info' | 'success' | 'error' | 'warning' | 'confirm'
  okText?: string
  okType?: LegacyButtonType
  cancelText?: string
  okCancel?: boolean
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  centered?: boolean
  width?: ModalWidth
  mask?: boolean
  maskClosable?: boolean
  keyboard?: boolean
  closable?: boolean
  zIndex?: number
  className?: string
  wrapClassName?: string
  autoFocusButton?: null | 'ok' | 'cancel'
  getContainer?: GetContainer
  onOk?: (...args: any[]) => any
  onCancel?: (...args: any[]) => any
  afterClose?: () => void
}

export interface ModalFuncReturn {
  destroy: () => void
  update: (configUpdate: ModalFuncProps | ((prev: ModalFuncProps) => ModalFuncProps)) => void
}
