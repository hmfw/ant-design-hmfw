import {
  defineComponent,
  computed,
  provide,
  inject,
  ref,
  onMounted,
  onUnmounted,
  type PropType,
  type VNode,
  type CSSProperties,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { LeftOutlined, RightOutlined, MinusOutlined } from '../icon/icons'
import type { LayoutBreakpoint, CollapseType } from './types'

const LAYOUT_SIDER_KEY = Symbol('layout-sider')

interface LayoutSiderContext {
  addSider: () => void
  removeSider: () => void
}

// Layout
export const Layout = defineComponent({
  name: 'Layout',
  props: {
    hasSider: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('layout')
    const siderCount = ref(0)

    provide<LayoutSiderContext>(LAYOUT_SIDER_KEY, {
      addSider: () => siderCount.value++,
      removeSider: () => siderCount.value--,
    })

    const classes = computed(() => {
      const hasSider = props.hasSider !== undefined ? props.hasSider : siderCount.value > 0
      return cls(prefixCls, {
        [`${prefixCls}-has-sider`]: hasSider,
      })
    })

    return () => <section class={classes.value}>{slots.default?.()}</section>
  },
})

// Header
export const Header = defineComponent({
  name: 'Header',
  setup(_, { slots }) {
    const prefixCls = usePrefixCls('layout')
    return () => <header class={`${prefixCls}-header`}>{slots.default?.()}</header>
  },
})

// Footer
export const Footer = defineComponent({
  name: 'Footer',
  setup(_, { slots }) {
    const prefixCls = usePrefixCls('layout')
    return () => <footer class={`${prefixCls}-footer`}>{slots.default?.()}</footer>
  },
})

// Content
export const Content = defineComponent({
  name: 'Content',
  setup(_, { slots }) {
    const prefixCls = usePrefixCls('layout')
    return () => <main class={`${prefixCls}-content`}>{slots.default?.()}</main>
  },
})

const BREAKPOINTS: Record<LayoutBreakpoint, string> = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px',
  xxxl: '1839.98px',
}

// Sider
export const Sider = defineComponent({
  name: 'Sider',
  props: {
    width: {
      type: [Number, String] as PropType<number | string>,
      default: 200,
    },
    collapsedWidth: {
      type: [Number, String] as PropType<number | string>,
      default: 80,
    },
    collapsed: {
      type: Boolean,
      default: undefined,
    },
    defaultCollapsed: Boolean,
    collapsible: Boolean,
    reverseArrow: Boolean,
    breakpoint: String as PropType<LayoutBreakpoint>,
    theme: {
      type: String as PropType<'light' | 'dark'>,
      default: 'dark',
    },
    trigger: {
      type: [Object, null] as PropType<VNode | null>,
      default: undefined,
    },
    zeroWidthTriggerStyle: Object as PropType<CSSProperties>,
    onCollapse: Function as PropType<(collapsed: boolean, type: CollapseType) => void>,
    onBreakpoint: Function as PropType<(broken: boolean) => void>,
  },
  emits: ['collapse', 'update:collapsed', 'breakpoint'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('layout')
    const siderPrefixCls = `${prefixCls}-sider`

    const context = inject<LayoutSiderContext | null>(LAYOUT_SIDER_KEY, null)
    onMounted(() => context?.addSider())
    onUnmounted(() => context?.removeSider())

    const internalCollapsed = ref(props.defaultCollapsed ?? false)
    const below = ref(false)

    const isCollapsed = computed(() => (props.collapsed !== undefined ? props.collapsed : internalCollapsed.value))

    const handleSetCollapsed = (value: boolean, type: CollapseType) => {
      if (props.collapsed === undefined) {
        internalCollapsed.value = value
      }
      emit('update:collapsed', value)
      emit('collapse', value, type)
      props.onCollapse?.(value, type)
    }

    const toggle = () => {
      handleSetCollapsed(!isCollapsed.value, 'clickTrigger')
    }

    // Responsive breakpoint
    let mql: MediaQueryList | null = null
    const handleBreakpoint = (e: MediaQueryListEvent | MediaQueryList) => {
      const broken = e.matches
      below.value = broken
      emit('breakpoint', broken)
      props.onBreakpoint?.(broken)

      if (isCollapsed.value !== broken) {
        handleSetCollapsed(broken, 'responsive')
      }
    }

    onMounted(() => {
      if (props.breakpoint && typeof window !== 'undefined') {
        const maxWidth = BREAKPOINTS[props.breakpoint]
        mql = window.matchMedia(`screen and (max-width: ${maxWidth})`)
        mql.addEventListener('change', handleBreakpoint)
        handleBreakpoint(mql)
      }
    })

    onUnmounted(() => {
      mql?.removeEventListener('change', handleBreakpoint)
    })

    const rawWidth = computed(() => (isCollapsed.value ? props.collapsedWidth : props.width))

    const isNumeric = (val: any) => !Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val))

    const siderWidth = computed(() => {
      const val = rawWidth.value
      return isNumeric(val) ? `${val}px` : String(val)
    })

    const isZeroWidth = computed(() => Number.parseFloat(String(props.collapsedWidth || 0)) === 0)

    const classes = computed(() =>
      cls(siderPrefixCls, `${siderPrefixCls}-${props.theme}`, {
        [`${siderPrefixCls}-collapsed`]: isCollapsed.value,
        [`${siderPrefixCls}-has-trigger`]: props.collapsible && props.trigger !== null && !isZeroWidth.value,
        [`${siderPrefixCls}-below`]: below.value,
        [`${siderPrefixCls}-zero-width`]: Number.parseFloat(siderWidth.value) === 0,
      }),
    )

    return () => {
      const width = siderWidth.value

      // Zero-width trigger (floating button when collapsedWidth === 0)
      const zeroWidthTrigger =
        isZeroWidth.value && isCollapsed.value ? (
          <span
            onClick={toggle}
            class={cls(
              `${siderPrefixCls}-zero-width-trigger`,
              `${siderPrefixCls}-zero-width-trigger-${props.reverseArrow ? 'right' : 'left'}`,
            )}
            style={props.zeroWidthTriggerStyle}
          >
            {props.trigger !== undefined ? props.trigger : <Icon component={MinusOutlined} />}
          </span>
        ) : null

      // Default trigger icons
      const defaultTrigger = () => {
        if (isCollapsed.value) {
          return props.reverseArrow ? <Icon component={LeftOutlined} /> : <Icon component={RightOutlined} />
        }
        return props.reverseArrow ? <Icon component={RightOutlined} /> : <Icon component={LeftOutlined} />
      }

      // Regular trigger (bottom bar)
      const triggerDom =
        props.trigger !== null
          ? zeroWidthTrigger || (
              <div class={`${siderPrefixCls}-trigger`} onClick={toggle} style={{ width }}>
                {props.trigger !== undefined ? props.trigger : defaultTrigger()}
              </div>
            )
          : null

      const divStyle: CSSProperties = {
        flex: `0 0 ${width}`,
        maxWidth: width,
        minWidth: width,
        width,
      }

      return (
        <aside class={classes.value} style={divStyle}>
          <div class={`${siderPrefixCls}-children`}>{slots.default?.()}</div>
          {props.collapsible || (below.value && zeroWidthTrigger) ? triggerDom : null}
        </aside>
      )
    }
  },
})
