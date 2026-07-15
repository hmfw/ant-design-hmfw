import {
  defineComponent,
  ref,
  watch,
  computed,
  onBeforeUnmount,
  Teleport,
  Transition,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { CloseOutlined } from '@hmfw/icons'
import { Skeleton } from '../skeleton'
import type { ButtonProps } from '../button/types'
import type { IconComponent } from '@hmfw/icons'
import type { ModalContent, ModalWidth, LegacyButtonType, GetContainer, ModalClassNames, ModalStyles } from './types'

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

function trapFocus(el: HTMLElement, focusTriggerAfterClose: boolean): () => void {
  const prev = document.activeElement as HTMLElement | null
  const nodes = () => Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
  nodes()[0]?.focus()
  const handler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    const focusable = nodes()
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
  el.addEventListener('keydown', handler)
  return () => {
    el.removeEventListener('keydown', handler)
    if (focusTriggerAfterClose) prev?.focus()
  }
}

// Body scroll lock shared across all open modals (ref-counted)
let lockCount = 0
let cachedOverflow = ''
function lockScroll() {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    cachedOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}
function unlockScroll() {
  if (typeof document === 'undefined') return
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) document.body.style.overflow = cachedOverflow
}

function renderContent(
  content: ModalContent | undefined,
  slot?: () => VNode[] | undefined,
): VNode[] | VNode | string | number | undefined {
  if (slot) {
    const s = slot()
    if (s && s.length) return s
  }
  if (content == null || content === '') return undefined
  if (typeof content === 'function') return (content as () => VNode | string)()
  return content as VNode | string | number
}

export const Modal = defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    title: {
      type: [String, Number, Object, Function] as PropType<ModalContent>,
      default: undefined,
    },
    width: { type: [Number, String] as PropType<ModalWidth>, default: 520 },
    centered: Boolean,
    closable: { type: Boolean, default: true },
    closeIcon: { type: Function as PropType<IconComponent>, default: undefined },
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    keyboard: { type: Boolean, default: true },
    footer: { type: [Boolean] as PropType<boolean | null>, default: true },
    okText: { type: String, default: undefined },
    cancelText: { type: String, default: undefined },
    okType: { type: String as PropType<LegacyButtonType>, default: 'primary' },
    okButtonProps: { type: Object as PropType<ButtonProps>, default: undefined },
    cancelButtonProps: { type: Object as PropType<ButtonProps>, default: undefined },
    confirmLoading: Boolean,
    loading: Boolean,
    destroyOnClose: Boolean,
    destroyOnHidden: { type: Boolean, default: undefined },
    forceRender: Boolean,
    zIndex: { type: Number, default: 1000 },
    getContainer: {
      type: [String, Object, Function, Boolean] as PropType<GetContainer>,
      default: undefined,
    },
    wrapClassName: { type: String, default: undefined },
    focusTriggerAfterClose: { type: Boolean, default: true },
    bodyStyle: { type: Object, default: undefined },
    maskStyle: { type: Object, default: undefined },
    classNames: { type: Object as PropType<ModalClassNames>, default: undefined },
    styles: { type: Object as PropType<ModalStyles>, default: undefined },
    modalRender: { type: Function as PropType<(node: VNode) => VNode>, default: undefined },
  },
  emits: ['update:open', 'ok', 'cancel', 'afterClose', 'afterOpenChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('modal')
    const locale = useLocale()
    const innerOpen = ref(props.defaultOpen ?? false)
    const dialogRef = ref<HTMLElement | null>(null)
    let cleanupTrap: (() => void) | null = null

    watch(
      () => props.open,
      (v) => {
        if (v !== undefined) innerOpen.value = v
      },
    )

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    watch(
      isOpen,
      async (v) => {
        if (v) {
          lockScroll()
          await Promise.resolve()
          if (dialogRef.value) cleanupTrap = trapFocus(dialogRef.value, props.focusTriggerAfterClose)
        } else {
          cleanupTrap?.()
          cleanupTrap = null
          unlockScroll()
        }
        // afterOpenChange fires once the transition would have settled; async so
        // fake-timer tests can intercept it too
        setTimeout(() => emit('afterOpenChange', v), 0)
      },
      { flush: 'post' },
    )

    onBeforeUnmount(() => {
      cleanupTrap?.()
      cleanupTrap = null
      if (isOpen.value) unlockScroll()
    })

    const close = (e?: Event) => {
      // confirmLoading must block close via mask / Esc / close button too
      if (props.confirmLoading) return
      if (props.open === undefined) innerOpen.value = false
      emit('update:open', false)
      emit('cancel', e)
    }

    const handleMaskClick = (e: MouseEvent) => {
      // only the mask itself, not bubbled clicks from the dialog
      if (e.target !== e.currentTarget) return
      if (props.mask && props.maskClosable) close(e)
    }

    const handleOk = (e: MouseEvent) => {
      emit('ok', e)
    }

    const onAfterLeave = () => {
      emit('afterClose')
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && props.keyboard && isOpen.value) close(e)
    }

    const renderFooter = () => {
      // footer === false / null: no footer at all
      if (props.footer === false || props.footer === null) return null
      if (slots.footer) {
        return (
          <div class={cls(`${prefixCls}-footer`, props.classNames?.footer)} style={props.styles?.footer}>
            {slots.footer()}
          </div>
        )
      }
      const isDangerOk = props.okType === 'danger'
      const okType = isDangerOk ? 'primary' : props.okType
      return (
        <div class={cls(`${prefixCls}-footer`, props.classNames?.footer)} style={props.styles?.footer}>
          <Button {...props.cancelButtonProps} onClick={(e: MouseEvent) => close(e)}>
            {props.cancelText ?? locale.value.Modal.cancelText}
          </Button>
          <Button
            type={okType as any}
            danger={isDangerOk || props.okButtonProps?.danger}
            loading={props.confirmLoading}
            {...props.okButtonProps}
            onClick={handleOk}
          >
            {props.okText ?? locale.value.Modal.okText}
          </Button>
        </div>
      )
    }

    const renderTitle = () => {
      const titleNode = renderContent(props.title, slots.title)
      if (titleNode == null || titleNode === '') return null
      return (
        <div class={cls(`${prefixCls}-header`, props.classNames?.header)} style={props.styles?.header}>
          <div id={`${prefixCls}-title`} class={`${prefixCls}-title`}>
            {titleNode}
          </div>
        </div>
      )
    }

    const renderBody = () => {
      if (props.loading) {
        return <Skeleton active title={false} paragraph={{ rows: 4 }} />
      }
      return slots.default?.()
    }

    return () => {
      const widthStyle = typeof props.width === 'number' ? `${props.width}px` : props.width
      const closeIconComp = props.closeIcon

      // 构建对话框内容节点
      const dialogContent = (
        <div
          ref={dialogRef}
          class={cls(prefixCls, props.classNames?.content)}
          style={{ width: widthStyle, ...props.styles?.content }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={props.title ? `${prefixCls}-title` : undefined}
          {...attrs}
        >
          <div class={`${prefixCls}-content`}>
            {props.closable && (
              <button class={`${prefixCls}-close`} onClick={(e: MouseEvent) => close(e)} aria-label="Close">
                <span class={`${prefixCls}-close-x`}>
                  {(() => {
                    const C = closeIconComp ?? CloseOutlined
                    return <C class="hmfw-icon" />
                  })()}
                </span>
              </button>
            )}
            {renderTitle()}
            <div
              class={cls(`${prefixCls}-body`, props.classNames?.body)}
              style={{ ...props.bodyStyle, ...props.styles?.body }}
            >
              {renderBody()}
            </div>
            {renderFooter()}
          </div>
        </div>
      )

      // 如果有 modalRender，应用自定义渲染
      const renderedDialog = props.modalRender ? props.modalRender(dialogContent) : dialogContent

      return (
        <Teleport to="body">
          <Transition name="hmfw-zoom" onAfterLeave={onAfterLeave}>
            {(isOpen.value || props.forceRender) && (
              <div
                class={cls(`${prefixCls}`, props.classNames?.root)}
                style={{ zIndex: props.zIndex }}
                onKeydown={handleKeydown}
              >
                {props.mask && (
                  <div
                    class={cls(`${prefixCls}-mask`, props.classNames?.mask)}
                    style={{ ...props.maskStyle, ...props.styles?.mask }}
                  />
                )}
                <div
                  class={cls(`${prefixCls}-wrap`, props.wrapClassName, props.classNames?.wrapper, {
                    [`${prefixCls}-centered`]: props.centered,
                  })}
                  style={props.styles?.wrapper}
                  onClick={handleMaskClick}
                >
                  {renderedDialog}
                </div>
              </div>
            )}
          </Transition>
        </Teleport>
      )
    }
  },
})
