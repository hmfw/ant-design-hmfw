import { defineComponent, ref, computed, h, type PropType, type VNode } from 'vue'
import { Tooltip } from '../tooltip'
import { Button } from '../button'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import type { ButtonProps } from '../button/types'
import type { TooltipPlacement, TooltipTrigger, TooltipArrow } from '../tooltip/types'
import type {
  PopconfirmContent,
  PopconfirmOkType,
  PopconfirmClassNames,
  PopconfirmStyles,
  PopconfirmProps,
} from './types'

/**
 * Popconfirm delegates to Tooltip directly (skipping Popover) because we want
 * full control over the popup body layout — icon + title/description + buttons —
 * rather than Popover's title/content split. We use Tooltip's `customPrefixCls`
 * wrapper interface so the popup root carries `.hmfw-popconfirm` classes.
 */

const popconfirmProps = {
  title: { type: [String, Number, Object, Function] as PropType<PopconfirmContent>, default: undefined },
  description: { type: [String, Number, Object, Function] as PropType<PopconfirmContent>, default: undefined },
  icon: { type: [String, Number, Object, Function] as PropType<PopconfirmContent>, default: '⚠' },
  okText: { type: String, default: undefined },
  cancelText: { type: String, default: undefined },
  okType: { type: String as PropType<PopconfirmOkType>, default: 'primary' },
  okButtonProps: { type: Object as PropType<ButtonProps>, default: undefined },
  cancelButtonProps: { type: Object as PropType<ButtonProps>, default: undefined },
  showCancel: { type: Boolean, default: true },
  trigger: {
    type: [String, Array] as PropType<TooltipTrigger | TooltipTrigger[]>,
    default: 'click',
  },
  placement: { type: String as PropType<TooltipPlacement>, default: 'top' },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  arrow: { type: [Boolean, Object] as PropType<TooltipArrow>, default: true },
  mouseEnterDelay: { type: Number, default: 0.1 },
  mouseLeaveDelay: { type: Number, default: 0.1 },
  autoAdjustOverflow: { type: Boolean, default: true },
  zIndex: { type: Number, default: undefined },
  destroyOnHidden: { type: Boolean, default: false },
  getPopupContainer: { type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>, default: undefined },
  overlayStyle: { type: Object as PropType<Record<string, string>>, default: undefined },
  overlayInnerStyle: { type: Object as PropType<Record<string, string>>, default: undefined },
  classNames: { type: Object as PropType<PopconfirmClassNames>, default: undefined },
  styles: { type: Object as PropType<PopconfirmStyles>, default: undefined },
} satisfies Record<keyof PopconfirmProps, any>

export const Popconfirm = defineComponent({
  name: 'Popconfirm',
  inheritAttrs: false,
  props: popconfirmProps,
  emits: ['update:open', 'openChange', 'afterOpenChange', 'confirm', 'cancel'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('popconfirm')
    const locale = useLocale()

    const innerOpen = ref(props.defaultOpen ?? false)
    const isControlled = computed(() => props.open !== undefined)
    const visibleOpen = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    const setOpen = (v: boolean) => {
      if (props.disabled && v) return
      if (!isControlled.value) innerOpen.value = v
      emit('update:open', v)
      emit('openChange', v)
    }

    /**
     * Resolve render-fn / VNode / string content. The slot takes precedence
     * over the prop (so consumers can swap a default-string prop with rich VNodes).
     */
    const resolveNode = (value: PopconfirmContent | undefined, slot: (() => VNode[] | undefined) | undefined) => {
      if (slot) return slot()
      if (typeof value === 'function') return (value as () => VNode | string | number)()
      if (value !== undefined && value !== null && value !== '') return value
      return undefined
    }

    const handleConfirm = (e: MouseEvent) => {
      emit('confirm', e)
      setOpen(false)
    }

    const handleCancel = (e: MouseEvent) => {
      emit('cancel', e)
      setOpen(false)
    }

    /** Whether anything is renderable in the popup; matches AntD `noTitle` skip. */
    const hasOverlay = computed(() => {
      const t = props.title
      const d = props.description
      return (
        (t !== undefined && t !== null && t !== '') ||
        (d !== undefined && d !== null && d !== '') ||
        !!slots.title ||
        !!slots.description
      )
    })

    return () => {
      const titleNode = resolveNode(props.title, slots.title)
      const descriptionNode = resolveNode(props.description, slots.description)
      const iconNode = resolveNode(props.icon, slots.icon)

      const cancelLabel = props.cancelText ?? locale.value.Modal.cancelText
      const okLabel = props.okText ?? locale.value.Modal.okText

      // AntD `okType: 'danger'` is a legacy shorthand for `primary` + `danger`.
      const isDangerOk = props.okType === 'danger'
      const okButtonType = isDangerOk ? 'primary' : props.okType

      // Build the Popconfirm overlay body. Tooltip wraps the title slot output
      // in its own `-inner` div (which becomes `.hmfw-popconfirm-inner` via
      // customPrefixCls), so we return the children as an array directly —
      // the outer `-inner` styles (background/padding/shadow) come from
      // Tooltip's wrapper.
      const overlayChildren: VNode[] = [
        h('div', { class: cls(`${prefixCls}-message`, props.classNames?.message), style: props.styles?.message }, [
          iconNode &&
            h(
              'span',
              { class: cls(`${prefixCls}-message-icon`, props.classNames?.icon), style: props.styles?.icon },
              iconNode as VNode,
            ),
          h(
            'div',
            { class: cls(`${prefixCls}-message-title`, props.classNames?.title), style: props.styles?.title },
            titleNode as VNode,
          ),
        ]),
      ]
      if (descriptionNode) {
        overlayChildren.push(
          h(
            'div',
            { class: cls(`${prefixCls}-description`, props.classNames?.description), style: props.styles?.description },
            descriptionNode as VNode,
          ),
        )
      }
      overlayChildren.push(
        h('div', { class: cls(`${prefixCls}-buttons`, props.classNames?.buttons), style: props.styles?.buttons }, [
          props.showCancel &&
            h(
              Button,
              {
                size: 'small',
                ...props.cancelButtonProps,
                classNames: {
                  ...props.cancelButtonProps?.classNames,
                  root: cls(props.cancelButtonProps?.classNames?.root, props.classNames?.cancelBtn),
                },
                styles: {
                  ...props.cancelButtonProps?.styles,
                  root: { ...props.cancelButtonProps?.styles?.root, ...props.styles?.cancelBtn },
                },
                onClick: handleCancel,
              },
              { default: () => cancelLabel },
            ),
          h(
            Button,
            {
              size: 'small',
              type: okButtonType,
              danger: isDangerOk,
              ...props.okButtonProps,
              classNames: {
                ...props.okButtonProps?.classNames,
                root: cls(props.okButtonProps?.classNames?.root, props.classNames?.okBtn),
              },
              styles: {
                ...props.okButtonProps?.styles,
                root: { ...props.okButtonProps?.styles?.root, ...props.styles?.okBtn },
              },
              onClick: handleConfirm,
            },
            { default: () => okLabel },
          ),
        ]),
      )

      return h(
        Tooltip,
        {
          ...attrs,
          // Swap Tooltip's prefix so the popup root + arrow + inner wrapper
          // all carry `.hmfw-popconfirm` classes (so the existing CSS applies).
          customPrefixCls: prefixCls,
          arrow: props.arrow,
          placement: props.placement,
          trigger: props.trigger,
          open: visibleOpen.value,
          defaultOpen: props.defaultOpen,
          mouseEnterDelay: props.mouseEnterDelay,
          mouseLeaveDelay: props.mouseLeaveDelay,
          disabled: props.disabled,
          autoAdjustOverflow: props.autoAdjustOverflow,
          zIndex: props.zIndex,
          destroyOnHidden: props.destroyOnHidden,
          getPopupContainer: props.getPopupContainer,
          popupStyle: props.overlayStyle,
          'onUpdate:open': (v: boolean) => setOpen(v),
          onAfterOpenChange: (v: boolean) => emit('afterOpenChange', v),
        },
        // Only mount the title slot when overlay exists AND not disabled, so
        // Tooltip's noTitle guard prevents rendering an empty (or unwanted)
        // popup. The slot returns an array, which Tooltip renders inside its
        // `-inner` wrapper.
        hasOverlay.value && !props.disabled
          ? {
              default: () => slots.default?.(),
              title: () => overlayChildren,
            }
          : { default: () => slots.default?.() },
      )
    }
  },
})
