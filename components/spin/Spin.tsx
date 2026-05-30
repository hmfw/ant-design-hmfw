import { defineComponent, ref, watch, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SpinSize } from './types'

export const Spin = defineComponent({
  name: 'Spin',
  props: {
    spinning: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<SpinSize>,
      default: 'default',
    },
    tip: String,
    // description 为 tip 的新名（与 AntD v6 对齐）
    description: String,
    delay: {
      type: Number,
      default: 0,
    },
    fullscreen: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('spin')

    // delay：spinning 置 true 后延迟 delay ms 才真正显示，避免闪烁
    const active = ref(props.spinning && !props.delay)
    let timer: ReturnType<typeof setTimeout> | null = null

    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }

    watch(
      () => props.spinning,
      (val) => {
        clearTimer()
        if (val) {
          if (props.delay > 0) {
            timer = setTimeout(() => {
              active.value = true
            }, props.delay)
          } else {
            active.value = true
          }
        } else {
          active.value = false
        }
      },
    )

    onBeforeUnmount(clearTimer)

    const renderIndicator = () => {
      if (slots.indicator) {
        return <span class={`${prefixCls}-dot`}>{slots.indicator()}</span>
      }
      return (
        <span class={`${prefixCls}-dot`}>
          {[0, 1, 2, 3].map((i) => (
            <i key={i} class={`${prefixCls}-dot-item`} />
          ))}
        </span>
      )
    }

    const renderSpin = () => {
      const desc = props.description ?? props.tip
      return (
        <span
          class={cls(prefixCls, {
            [`${prefixCls}-sm`]: props.size === 'small',
            [`${prefixCls}-lg`]: props.size === 'large',
            [`${prefixCls}-spinning`]: active.value,
          })}
          aria-live="polite"
          aria-busy={active.value}
        >
          {renderIndicator()}
          {desc && <div class={`${prefixCls}-text`}>{desc}</div>}
        </span>
      )
    }

    return () => {
      // fullscreen 模式：覆盖整个视口
      if (props.fullscreen) {
        return (
          <div
            class={cls(`${prefixCls}-fullscreen`, {
              [`${prefixCls}-fullscreen-show`]: active.value,
            })}
          >
            {renderSpin()}
          </div>
        )
      }

      if (!slots.default) return renderSpin()

      return (
        <div class={cls(`${prefixCls}-nested-loading`)}>
          {active.value && (
            <div class={`${prefixCls}-container`}>{renderSpin()}</div>
          )}
          <div class={cls(`${prefixCls}-blur-container`, { [`${prefixCls}-blur`]: active.value })}>
            {slots.default()}
          </div>
        </div>
      )
    }
  },
})
