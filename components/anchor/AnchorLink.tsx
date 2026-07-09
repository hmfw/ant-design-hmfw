import { defineComponent, onMounted, onUnmounted, computed } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { useAnchorContext } from './context'

export interface AnchorLinkProps {
  href: string
  title: string
  target?: string
  replace?: boolean
  targetOffset?: number
}

export const AnchorLink = defineComponent({
  name: 'AnchorLink',
  props: {
    href: { type: String, required: true },
    title: { type: String, required: true },
    target: String,
    replace: Boolean,
    targetOffset: Number,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('anchor')
    const context = useAnchorContext()

    onMounted(() => {
      context?.registerLink(props.href, props.targetOffset)
    })

    onUnmounted(() => {
      context?.unregisterLink(props.href)
    })

    const handleClick = (e: MouseEvent) => {
      context?.onClick?.(e, { title: props.title, href: props.href })
      context?.scrollTo(props.href, props.targetOffset)

      // Support clicking on an anchor does not record history
      if (e.defaultPrevented) {
        return
      }

      const isExternalLink = props.href.startsWith('http://') || props.href.startsWith('https://')
      // Support external link
      if (isExternalLink) {
        const shouldReplace = props.replace ?? context?.replace.value
        if (shouldReplace) {
          e.preventDefault()
          window.location.replace(props.href)
        }
        return
      }

      // Handling internal anchor link
      e.preventDefault()
      const shouldReplace = props.replace ?? context?.replace.value
      const historyMethod = shouldReplace ? 'replaceState' : 'pushState'
      window.history[historyMethod](null, '', props.href)
    }

    const active = computed(() => context?.activeLink.value === props.href)

    const wrapperClass = computed(() =>
      cls(
        `${prefixCls}-link`,
        {
          [`${prefixCls}-link-active`]: active.value,
        },
        context?.classNames.value?.link,
        active.value ? context?.classNames.value?.linkActive : undefined,
      ),
    )

    const titleClass = computed(() =>
      cls(
        `${prefixCls}-link-title`,
        {
          [`${prefixCls}-link-title-active`]: active.value,
        },
        context?.classNames.value?.title,
        active.value ? context?.classNames.value?.titleActive : undefined,
      ),
    )

    const wrapperStyle = computed(() => ({
      ...context?.styles.value?.link,
      ...(active.value ? context?.styles.value?.linkActive : {}),
    }))

    const titleStyle = computed(() => ({
      ...context?.styles.value?.title,
      ...(active.value ? context?.styles.value?.titleActive : {}),
    }))

    return () => (
      <div class={wrapperClass.value} style={wrapperStyle.value}>
        <a
          class={titleClass.value}
          style={titleStyle.value}
          href={props.href}
          title={props.title}
          target={props.target}
          onClick={handleClick}
        >
          {props.title}
        </a>
        {context?.direction.value !== 'horizontal' ? slots.default?.() : null}
      </div>
    )
  },
})
