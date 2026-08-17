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
  type CSSProperties,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import { renderContent } from '../_utils/renderContent'
import { useControlledState } from '../_utils/useControlledState'
import { CloseOutlined } from '@hmfw/icons'
import { Skeleton } from '../skeleton'
import { usePanelRef } from '../watermark'
import { useFocusTrap, useScrollLock, useOverlayKeyboard } from '../_utils/overlay'
import type { IconComponent } from '@hmfw/icons'
import { drawerManager } from './manager'
import type {
  DrawerProps,
  DrawerPlacement,
  DrawerSize,
  DrawerContent,
  DrawerGetContainer,
  DrawerClassNames,
  DrawerStyles,
} from './types'

let uid = 0

const DEFAULT_SIZE = 378
const LARGE_SIZE = 736

function toCssSize(v: number | string): string {
  return typeof v === 'number' ? `${v}px` : v
}

// 单一类型来源见 types.ts；此处用 satisfies 强制 key 集合与 DrawerProps 接口完全一致
const drawerProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  title: { type: [String, Number, Object, Function] as PropType<DrawerContent>, default: undefined },
  placement: { type: String as PropType<DrawerPlacement>, default: 'right' },
  size: { type: [String, Number] as PropType<DrawerSize>, default: undefined },
  width: { type: [Number, String], default: DEFAULT_SIZE },
  height: { type: [Number, String], default: DEFAULT_SIZE },
  closable: { type: Boolean, default: true },
  closeIcon: { type: Function as PropType<IconComponent>, default: undefined },
  maskClosable: { type: Boolean, default: true },
  mask: { type: Boolean, default: true },
  keyboard: { type: Boolean, default: true },
  loading: Boolean,
  zIndex: { type: Number, default: 1000 },
  destroyOnClose: Boolean,
  destroyOnHidden: { type: Boolean, default: undefined },
  forceRender: Boolean,
  focusTriggerAfterClose: { type: Boolean, default: true },
  getContainer: { type: [String, Object, Function, Boolean] as PropType<DrawerGetContainer>, default: undefined },
  classNames: { type: Object as PropType<DrawerClassNames>, default: undefined },
  styles: { type: Object as PropType<DrawerStyles>, default: undefined },
} satisfies Record<keyof DrawerProps, any>

export const Drawer = defineComponent({
  name: 'Drawer',
  inheritAttrs: false,
  props: drawerProps,
  emits: ['update:open', 'close', 'afterOpenChange'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('drawer')
    const ariaId = `${prefixCls}-title-${(uid += 1)}`
    const drawerRef = ref<HTMLElement | null>(null)

    // 受控/非受控状态管理
    const [innerOpen, setInnerOpen] = useControlledState(
      () => props.open,
      props.defaultOpen ?? false,
      (value) => emit('update:open', value),
    )

    const isOpen = computed(() => innerOpen.value)

    // 集成 Watermark Context - 使水印传导到 Drawer
    const watermarkPanelRef = usePanelRef()
    const mergedDrawerRef = (el: any) => {
      drawerRef.value = el as HTMLElement | null
      watermarkPanelRef(el as HTMLElement | null)
    }

    // 注册到全局 DrawerManager
    const drawerUid = drawerManager.register()

    // 计算动态 zIndex
    const computedZIndex = computed(() => drawerManager.getZIndex(drawerUid, props.zIndex))

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

    onBeforeUnmount(() => {
      drawerManager.unregister(drawerUid)
    })

    const close = (e?: Event) => {
      setInnerOpen(false)
      emit('close', e)
    }

    const handleMaskClick = (e: MouseEvent) => {
      if (props.mask && props.maskClosable) close(e)
    }

    // 使用公共 Hooks - 只在有 mask 时锁定滚动
    const shouldLockScroll = computed(() => isOpen.value && props.mask)
    useScrollLock(shouldLockScroll)
    useFocusTrap(drawerRef, isOpen, props.focusTriggerAfterClose)
    useOverlayKeyboard(isOpen, {
      onClose: () => close(),
      keyboard: computed(() => props.keyboard),
    })

    const isHorizontal = computed(() => props.placement === 'left' || props.placement === 'right')

    // Resolve the panel size: `size` preset/custom wins, else width/height by placement.
    const resolvedSize = computed<string>(() => {
      const { size } = props
      if (size === 'large') return `${LARGE_SIZE}px`
      if (size === 'default') return `${DEFAULT_SIZE}px`
      if (typeof size === 'number') return `${size}px`
      if (typeof size === 'string') {
        return /^\d+(\.\d+)?$/.test(size) ? `${size}px` : size
      }
      return toCssSize(isHorizontal.value ? props.width : props.height)
    })

    const sizeStyle = computed<CSSProperties>(() =>
      isHorizontal.value ? { width: resolvedSize.value } : { height: resolvedSize.value },
    )

    const getContainer = computed<string | HTMLElement>(() => {
      const c = props.getContainer
      if (c === false) return 'body' // false → render in place; Teleport disabled below
      if (typeof c === 'function') return c()
      if (typeof c === 'string') return c
      if (c instanceof HTMLElement) return c
      return 'body'
    })

    const renderCloseIcon = () => {
      if (!props.closable) return null
      const CloseIconComp = props.closeIcon ?? CloseOutlined
      return (
        <button type="button" class={`${prefixCls}-close`} onClick={(e: MouseEvent) => close(e)} aria-label="Close">
          <CloseIconComp class="hmfw-icon" />
        </button>
      )
    }

    const renderHeader = () => {
      const titleNode = renderContent(props.title, slots.title)
      const extraNode = slots.extra?.()
      const hasTitle = titleNode != null && titleNode !== ''
      // no header at all when nothing to show
      if (!hasTitle && !props.closable && !extraNode) return null
      const headerCls = cls(
        `${prefixCls}-header`,
        {
          [`${prefixCls}-header-close-only`]: props.closable && !hasTitle && !extraNode,
        },
        props.classNames?.header,
      )

      return (
        <div class={headerCls} style={props.styles?.header}>
          <div class={`${prefixCls}-header-title`}>
            {renderCloseIcon()}
            {hasTitle && (
              <div id={ariaId} class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
                {titleNode}
              </div>
            )}
          </div>
          {extraNode && (
            <div class={cls(`${prefixCls}-extra`, props.classNames?.extra)} style={props.styles?.extra}>
              {extraNode}
            </div>
          )}
        </div>
      )
    }

    const renderFooter = () => {
      const footerNode = slots.footer?.()
      if (!footerNode || (Array.isArray(footerNode) && !footerNode.length)) return null
      return (
        <div class={cls(`${prefixCls}-footer`, props.classNames?.footer)} style={props.styles?.footer}>
          {footerNode}
        </div>
      )
    }

    const renderBody = () => {
      if (props.loading) {
        return <Skeleton active title={false} paragraph={{ rows: 5 }} class={`${prefixCls}-body-skeleton`} />
      }
      // destroyOnHidden / destroyOnClose: unmount children while closed
      const destroy = props.destroyOnHidden ?? props.destroyOnClose
      if (destroy && !isOpen.value) return null
      return slots.default?.()
    }

    return () => {
      const hasTitle = renderContent(props.title, slots.title) != null
      // 根节点携带动态 zIndex（多层管理）+ 语义化 styles.root 覆盖
      const rootStyle: CSSProperties = { zIndex: computedZIndex.value, ...props.styles?.root }
      const teleportDisabled = props.getContainer === false

      const drawerCls = cls(
        `${prefixCls}`,
        {
          [`${prefixCls}-no-mask`]: !props.mask,
        },
        props.classNames?.root,
      )

      const contentCls = cls(
        `${prefixCls}-content-wrapper`,
        `${prefixCls}-${props.placement}`,
        props.classNames?.wrapper,
      )

      return (
        <Teleport to={getContainer.value} disabled={teleportDisabled}>
          <Transition name={`hmfw-drawer-${props.placement}`} appear>
            {(isOpen.value || props.forceRender) && (
              <div class={drawerCls} style={rootStyle}>
                {props.mask && (
                  <div
                    class={cls(`${prefixCls}-mask`, props.classNames?.mask)}
                    style={props.styles?.mask}
                    onClick={handleMaskClick}
                  />
                )}
                <div
                  ref={mergedDrawerRef}
                  class={contentCls}
                  style={{ ...sizeStyle.value, ...props.styles?.wrapper }}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={hasTitle ? ariaId : undefined}
                  {...attrs}
                >
                  <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
                    {renderHeader()}
                    <div class={cls(`${prefixCls}-body`, props.classNames?.body)} style={props.styles?.body}>
                      {renderBody()}
                    </div>
                    {renderFooter()}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </Teleport>
      )
    }
  },
})
