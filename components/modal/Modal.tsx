import { defineComponent, ref, watch, computed, Teleport, Transition, type PropType, type VNode } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { renderContent } from '../_utils/renderContent'
import { useControlledState } from '../_utils/useControlledState'
import { Button } from '../button'
import { CloseOutlined } from '@hmfw/icons'
import { Skeleton } from '../skeleton'
import { usePanelRef } from '../watermark'
import { useFocusTrap, useScrollLock, useOverlayKeyboard } from '../_utils/overlay'
import type { ButtonProps } from '../button/types'
import type { IconComponent } from '@hmfw/icons'
import type { ModalContent, ModalWidth, LegacyButtonType, GetContainer, ModalClassNames, ModalStyles } from './types'

export const Modal = defineComponent({
  name: 'Modal',
  inheritAttrs: false,
  props: {
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    title: { type: [String, Number, Object, Function] as PropType<ModalContent>, default: undefined },
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
    getContainer: { type: [String, Object, Function, Boolean] as PropType<GetContainer>, default: undefined },
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
    const dialogRef = ref<HTMLElement | null>(null)

    // 受控/非受控状态管理
    const [innerOpen, setInnerOpen] = useControlledState(
      () => props.open,
      props.defaultOpen ?? false,
      (value) => emit('update:open', value),
    )

    const isOpen = computed(() => innerOpen.value)

    // 集成 Watermark Context - 使水印传导到 Modal
    const watermarkPanelRef = usePanelRef()
    const mergedDialogRef = (el: any) => {
      dialogRef.value = el as HTMLElement | null
      watermarkPanelRef(el as HTMLElement | null)
    }

    // afterOpenChange 触发
    watch(
      isOpen,
      (v) => {
        // afterOpenChange fires once the transition would have settled; async so
        // fake-timer tests can intercept it too
        setTimeout(() => emit('afterOpenChange', v), 0)
      },
      { flush: 'post' },
    )

    const close = (e?: Event) => {
      // confirmLoading must block close via mask / Esc / close button too
      if (props.confirmLoading) return
      setInnerOpen(false)
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

    // 使用公共 Hooks
    useScrollLock(isOpen)
    useFocusTrap(dialogRef, isOpen, props.focusTriggerAfterClose)
    useOverlayKeyboard(isOpen, {
      onClose: () => close(),
      keyboard: computed(() => props.keyboard),
    })

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
          ref={mergedDialogRef}
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

      const wrapCls = cls(`${prefixCls}-wrap`, props.wrapClassName, props.classNames?.wrapper, {
        [`${prefixCls}-centered`]: props.centered,
      })

      return (
        <Teleport to="body">
          <Transition name="hmfw-zoom" onAfterLeave={onAfterLeave}>
            {(isOpen.value || props.forceRender) && (
              <div class={cls(`${prefixCls}-root`, props.classNames?.root)} style={{ zIndex: props.zIndex }}>
                {props.mask && (
                  <div
                    class={cls(`${prefixCls}-mask`, props.classNames?.mask)}
                    style={{ ...props.maskStyle, ...props.styles?.mask }}
                  />
                )}
                <div class={wrapCls} style={props.styles?.wrapper} onClick={handleMaskClick}>
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
