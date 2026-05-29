import {
  defineComponent, ref, onMounted, onUnmounted, watch, type PropType, type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AnchorLinkItem } from './types'

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
    getCurrentAnchor: Function as PropType<() => string>,
    getContainer: Function as PropType<() => HTMLElement | Window>,
  },
  emits: ['change', 'click'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('anchor')
    const activeLink = ref('')
    const inkStyle = ref({ top: '0px', height: '0px', opacity: '0' })
    const wrapperRef = ref<HTMLDivElement>()
    let animFrame = 0

    const getScrollContainer = () => {
      return props.getContainer ? props.getContainer() : window
    }

    const getScrollTop = () => {
      const c = getScrollContainer()
      return c === window ? window.scrollY : (c as HTMLElement).scrollTop
    }

    const getAllLinks = (items: AnchorLinkItem[]): AnchorLinkItem[] => {
      return items.flatMap((item) => [item, ...getAllLinks(item.children ?? [])])
    }

    const updateInk = () => {
      if (!wrapperRef.value || props.direction === 'horizontal') return
      const el = wrapperRef.value.querySelector(`a[href="${activeLink.value}"]`) as HTMLElement
      if (!el) {
        inkStyle.value = { top: '0px', height: '0px', opacity: '0' }
        return
      }
      const wrapRect = wrapperRef.value.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      inkStyle.value = {
        top: `${rect.top - wrapRect.top}px`,
        height: `${rect.height}px`,
        opacity: '1',
      }
    }

    const handleScroll = () => {
      if (props.getCurrentAnchor) {
        const next = props.getCurrentAnchor()
        if (next !== activeLink.value) {
          activeLink.value = next
          emit('change', next)
          updateInk()
        }
        return
      }

      const scrollTop = getScrollTop()
      const offset = props.targetOffset ?? props.offsetTop ?? 0
      const links = getAllLinks(props.items ?? [])
      let current = ''

      for (const link of links) {
        const id = link.href.replace(/^#/, '')
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const top = rect.top + scrollTop - (getScrollContainer() === window ? 0 : (getScrollContainer() as HTMLElement).getBoundingClientRect().top)
        if (top <= scrollTop + offset + props.bounds) current = link.href
      }

      if (current !== activeLink.value) {
        activeLink.value = current
        emit('change', current)
        cancelAnimationFrame(animFrame)
        animFrame = requestAnimationFrame(updateInk)
      }
    }

    const handleClick = (e: MouseEvent, link: AnchorLinkItem) => {
      emit('click', e, link)
      if (props.replace) {
        e.preventDefault()
        const id = link.href.replace(/^#/, '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          activeLink.value = link.href
          emit('change', link.href)
          cancelAnimationFrame(animFrame)
          animFrame = requestAnimationFrame(updateInk)
        }
      }
    }

    onMounted(() => {
      const container = getScrollContainer()
      container.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      const container = getScrollContainer()
      container.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animFrame)
    })

    watch(() => props.items, () => { handleScroll() }, { deep: true })

    const renderLinks = (items: AnchorLinkItem[], depth = 0): VNode[] => {
      return items.map((item) => (
        <div key={item.key ?? item.href} class={`${prefixCls}-link`}>
          <a
            href={item.href}
            class={cls(`${prefixCls}-link-title`, {
              [`${prefixCls}-link-title-active`]: activeLink.value === item.href,
            })}
            style={{ paddingLeft: depth > 0 ? `${depth * 12}px` : undefined }}
            onClick={(e) => handleClick(e, item)}
          >
            {item.title}
          </a>
          {item.children?.length ? renderLinks(item.children, depth + 1) : null}
        </div>
      ))
    }

    return () => (
      <div
        ref={wrapperRef}
        class={cls(prefixCls, {
          [`${prefixCls}-affix`]: props.affix,
          [`${prefixCls}-horizontal`]: props.direction === 'horizontal',
        })}
      >
        {props.direction === 'vertical' && (
          <span class={`${prefixCls}-ink`}>
            <span
              class={`${prefixCls}-ink-ball`}
              style={inkStyle.value}
            />
          </span>
        )}
        <div class={`${prefixCls}-wrapper`}>
          {renderLinks(props.items ?? [])}
        </div>
      </div>
    )
  },
})
