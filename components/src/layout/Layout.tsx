import { defineComponent, computed, provide, inject, ref, onMounted, onUnmounted, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { LayoutBreakpoint } from './types'

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

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-has-sider`]: props.hasSider ?? siderCount.value > 0,
      }),
    )

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

const BREAKPOINTS: Record<LayoutBreakpoint, number> = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
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
      type: Boolean,
      default: undefined,
    },
  },
  emits: ['collapse', 'update:collapsed', 'breakpoint'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('layout')
    const siderPrefixCls = `${prefixCls}-sider`

    const context = inject<LayoutSiderContext | null>(LAYOUT_SIDER_KEY, null)
    onMounted(() => context?.addSider())
    onUnmounted(() => context?.removeSider())

    const internalCollapsed = ref(props.defaultCollapsed ?? false)

    const isCollapsed = computed(() =>
      props.collapsed !== undefined ? props.collapsed : internalCollapsed.value,
    )

    const toggle = () => {
      const next = !isCollapsed.value
      internalCollapsed.value = next
      emit('update:collapsed', next)
      emit('collapse', next, 'clickTrigger')
    }

    // Responsive breakpoint
    let mql: MediaQueryList | null = null
    const handleBreakpoint = (e: MediaQueryListEvent | MediaQueryList) => {
      const collapsed = !e.matches
      internalCollapsed.value = collapsed
      emit('breakpoint', collapsed)
      emit('collapse', collapsed, 'responsive')
    }

    onMounted(() => {
      if (props.breakpoint && typeof window !== 'undefined') {
        const bp = BREAKPOINTS[props.breakpoint]
        mql = window.matchMedia(`(min-width: ${bp}px)`)
        mql.addEventListener('change', handleBreakpoint)
        handleBreakpoint(mql)
      }
    })

    onUnmounted(() => {
      mql?.removeEventListener('change', handleBreakpoint)
    })

    const currentWidth = computed(() =>
      isCollapsed.value ? props.collapsedWidth : props.width,
    )

    const showTrigger = computed(() =>
      props.trigger !== undefined ? props.trigger : props.collapsible,
    )

    const isZeroWidth = computed(() => Number(props.collapsedWidth) === 0)

    const classes = computed(() =>
      cls(siderPrefixCls, `${siderPrefixCls}-${props.theme}`, {
        [`${siderPrefixCls}-collapsed`]: isCollapsed.value,
        [`${siderPrefixCls}-zero-width`]: isCollapsed.value && isZeroWidth.value,
      }),
    )

    return () => {
      const width = typeof currentWidth.value === 'number'
        ? `${currentWidth.value}px`
        : currentWidth.value

      const triggerNode = showTrigger.value && (
        <div class={`${siderPrefixCls}-trigger`} onClick={toggle} style={{ width }}>
          {slots.trigger ? (
            slots.trigger({ collapsed: isCollapsed.value })
          ) : (
            <span class={`${siderPrefixCls}-trigger-icon`}>
              {props.reverseArrow
                ? (isCollapsed.value ? '›' : '‹')
                : (isCollapsed.value ? '›' : '‹')}
            </span>
          )}
        </div>
      )

      return (
        <aside
          class={classes.value}
          style={{ flex: `0 0 ${width}`, maxWidth: width, minWidth: width, width }}
        >
          <div class={`${siderPrefixCls}-children`}>{slots.default?.()}</div>
          {triggerNode}
        </aside>
      )
    }
  },
})
