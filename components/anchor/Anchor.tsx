import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onUnmounted,
  watch,
  nextTick,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AnchorLinkItem } from './types'
import { provideAnchorContext } from './context'
import { AnchorLink } from './AnchorLink'

export const Anchor = defineComponent({
  name: 'Anchor',
  props: {
    items: { type: Array as PropType<AnchorLinkItem[]>, default: () => [] },
    affix: { type: Boolean, default: true },
    offsetTop: { type: Number, default: 0 },
    bounds: { type: Number, default: 5 },
    targetOffset: Number,
    direction: { type: String as PropType<'vertical' | 'horizontal'>, default: 'vertical' },
    replace: Boolean,
    getCurrentAnchor: Function as PropType<(activeLink: string) => string>,
    getContainer: Function as PropType<() => HTMLElement | Window>,
  },
  emits: ['change', 'click'],
  setup(props, { emit, slots }) {
    const prefixCls = usePrefixCls('anchor')
    const activeLink = ref<string | null>(null)
    const links = ref<string[]>([])
    const linkTargetOffsets = ref<Record<string, number>>({})
    const wrapperRef = ref<HTMLDivElement>()
    const inkRef = ref<HTMLSpanElement>()
    const animating = ref(false)
    let scrollTimer: number | null = null

    const getScrollContainer = () => {
      return props.getContainer ? props.getContainer() : window
    }

    const getScroll = (container: HTMLElement | Window): number => {
      return container === window ? window.scrollY : (container as HTMLElement).scrollTop
    }

    const getOffsetTop = (element: HTMLElement, container: HTMLElement | Window): number => {
      if (!element.getClientRects().length) {
        return 0
      }

      const rect = element.getBoundingClientRect()

      if (rect.width || rect.height) {
        if (container === window) {
          return rect.top - element.ownerDocument.documentElement.clientTop
        }
        return rect.top - (container as HTMLElement).getBoundingClientRect().top
      }

      return rect.top
    }

    const registerLink = (link: string, targetOffset?: number) => {
      if (!links.value.includes(link)) {
        links.value = [...links.value, link]
      }
      if (targetOffset !== undefined) {
        linkTargetOffsets.value[link] = targetOffset
      }
    }

    const unregisterLink = (link: string) => {
      links.value = links.value.filter((l) => l !== link)
      delete linkTargetOffsets.value[link]
    }

    const updateInk = () => {
      if (!wrapperRef.value || !inkRef.value) return

      const linkNode = wrapperRef.value.querySelector<HTMLElement>(
        `.${prefixCls}-link-title-active`
      )

      if (linkNode) {
        const { style: inkStyle } = inkRef.value
        const horizontalAnchor = props.direction === 'horizontal'

        inkStyle.top = horizontalAnchor ? '' : `${linkNode.offsetTop + linkNode.clientHeight / 2}px`
        inkStyle.height = horizontalAnchor ? '' : `${linkNode.clientHeight}px`
        inkStyle.left = horizontalAnchor ? `${linkNode.offsetLeft}px` : ''
        inkStyle.width = horizontalAnchor ? `${linkNode.clientWidth}px` : ''

        if (horizontalAnchor) {
          linkNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
        }
      }
    }

    const getInternalCurrentAnchor = (
      _links: string[],
      _offsetTop: number,
      _bounds: number
    ): string => {
      interface Section {
        link: string
        top: number
      }

      const linkSections: Section[] = []
      const container = getScrollContainer()

      _links.forEach((link) => {
        const match = /#([\S ]+)$/.exec(link)
        if (!match) return

        const target = document.getElementById(match[1])
        if (target) {
          const linkOffsetTop = linkTargetOffsets.value[link] ?? _offsetTop
          const top = getOffsetTop(target, container)
          if (top <= linkOffsetTop + _bounds) {
            linkSections.push({ link, top })
          }
        }
      })

      if (linkSections.length) {
        const maxSection = linkSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev))
        return maxSection.link
      }
      return ''
    }

    const setCurrentActiveLink = (link: string) => {
      if (activeLink.value === link) {
        return
      }

      const newLink = props.getCurrentAnchor ? props.getCurrentAnchor(link) : link
      activeLink.value = newLink

      // onChange should respect the original link
      emit('change', link)
    }

    const handleScroll = () => {
      if (animating.value) {
        return
      }

      const currentActiveLink = getInternalCurrentAnchor(
        links.value,
        props.targetOffset ?? props.offsetTop ?? 0,
        props.bounds
      )

      setCurrentActiveLink(currentActiveLink)
    }

    const scrollTo = (link: string, targetOffsetParam?: number) => {
      const previousActiveLink = activeLink.value
      setCurrentActiveLink(link)

      const match = /#([\S ]+)$/.exec(link)
      if (!match) return

      const targetElement = document.getElementById(match[1])
      if (!targetElement) return

      if (animating.value && previousActiveLink === link) {
        return
      }

      const container = getScrollContainer()
      const scrollTop = getScroll(container)
      const eleOffsetTop = getOffsetTop(targetElement, container)
      let y = scrollTop + eleOffsetTop
      const finalTargetOffset = targetOffsetParam ?? props.targetOffset ?? props.offsetTop ?? 0
      y -= finalTargetOffset

      animating.value = true

      // Simple scroll animation
      const startTime = Date.now()
      const duration = 450

      const scroll = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress

        const currentY = scrollTop + (y - scrollTop) * easeInOut

        if (container === window) {
          window.scrollTo(0, currentY)
        } else {
          (container as HTMLElement).scrollTop = currentY
        }

        if (progress < 1) {
          scrollTimer = requestAnimationFrame(scroll)
        } else {
          animating.value = false
        }
      }

      scroll()
    }

    const handleClick = (e: MouseEvent, link: { title: string; href: string }) => {
      emit('click', e, link)
    }

    // Provide context for AnchorLink children
    provideAnchorContext({
      registerLink,
      unregisterLink,
      activeLink: activeLink.value,
      scrollTo,
      onClick: handleClick,
      direction: props.direction,
      replace: props.replace,
    })

    onMounted(() => {
      const container = getScrollContainer()
      container.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      const container = getScrollContainer()
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimer !== null) {
        cancelAnimationFrame(scrollTimer)
      }
    })

    watch(() => props.items, () => {
      handleScroll()
    }, { deep: true })

    watch(() => links.value, () => {
      handleScroll()
    })

    watch(() => activeLink.value, () => {
      nextTick(() => {
        updateInk()
      })
    })

    watch(() => props.getCurrentAnchor, () => {
      if (props.getCurrentAnchor && activeLink.value) {
        setCurrentActiveLink(props.getCurrentAnchor(activeLink.value))
      }
    })

    watch(() => props.direction, () => {
      nextTick(() => {
        updateInk()
      })
    })

    const renderLinks = (items: AnchorLinkItem[]): VNode[] => {
      return items.map((item) => (
        <AnchorLink
          key={item.key ?? item.href}
          href={item.href}
          title={item.title}
          target={item.target}
          targetOffset={item.targetOffset}
        >
          {props.direction === 'vertical' && item.children?.length
            ? renderLinks(item.children)
            : null}
        </AnchorLink>
      ))
    }

    const wrapperClass = computed(() =>
      cls(`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-horizontal`]: props.direction === 'horizontal',
      })
    )

    const anchorClass = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-fixed`]: !props.affix,
      })
    )

    const inkClass = computed(() =>
      cls(`${prefixCls}-ink`, {
        [`${prefixCls}-ink-visible`]: !!activeLink.value,
      }),
    )

    const wrapperStyle = computed(() => ({
      maxHeight: props.offsetTop ? `calc(100vh - ${props.offsetTop}px)` : '100vh',
    }))

    return () => (
      <div ref={wrapperRef} class={wrapperClass.value} style={wrapperStyle.value}>
        <div class={anchorClass.value}>
          <span class={inkClass.value} ref={inkRef} />
          {props.items?.length ? renderLinks(props.items) : slots.default?.()}
        </div>
      </div>
    )
  },
})
