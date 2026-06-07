import { defineComponent, computed, ref, watch, type PropType, Transition } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export const ScrollNumber = defineComponent({
  name: 'ScrollNumber',
  props: {
    count: {
      type: [Number, String] as PropType<number | string>,
      required: true,
    },
    title: String,
  },
  setup(props) {
    const prefixCls = usePrefixCls('scroll-number')

    // 存储当前显示的字符串和上一个字符串
    const currentValue = ref(String(props.count))
    const previousValue = ref(String(props.count))
    const isAnimating = ref(false)

    // 监听 count 变化
    watch(() => props.count, (newVal, oldVal) => {
      if (String(newVal) !== String(oldVal)) {
        previousValue.value = currentValue.value
        currentValue.value = String(newVal)
        isAnimating.value = true
        // 动画结束后重置状态
        setTimeout(() => {
          isAnimating.value = false
        }, 300)
      }
    })

    // 将字符串拆分为单个字符
    const displayChars = computed(() => {
      return currentValue.value.split('')
    })

    // 判断字符是否为数字
    const isDigit = (char: string) => /^\d$/.test(char)

    // 获取对应位置的上一个数字
    const getPreviousDigit = (index: number) => {
      const prevChars = previousValue.value.split('')
      if (index < prevChars.length && isDigit(prevChars[index])) {
        return parseInt(prevChars[index], 10)
      }
      return null
    }

    return () => (
      <span class={prefixCls} title={props.title}>
        {displayChars.value.map((char, index) => {
          // 如果是数字，使用滚动动画
          if (isDigit(char)) {
            const num = parseInt(char, 10)
            const prevNum = getPreviousDigit(index)
            const shouldAnimate = isAnimating.value && prevNum !== null && prevNum !== num

            // 如果需要动画，渲染从上一个数字到当前数字的序列
            if (shouldAnimate) {
              const digits = prevNum! < num
                ? Array.from({ length: num - prevNum! + 1 }, (_, i) => prevNum! + i)
                : Array.from({ length: prevNum! - num + 1 }, (_, i) => prevNum! - i)

              return (
                <span key={index} class={`${prefixCls}-symbol`}>
                  <span
                    class={`${prefixCls}-symbol-only ${prefixCls}-symbol-animate`}
                    style={{
                      transform: `translateY(-${(digits.length - 1) * 100}%)`,
                    }}
                  >
                    {digits.map((n, i) => (
                      <span key={i} class={`${prefixCls}-only-unit`}>
                        {n}
                      </span>
                    ))}
                  </span>
                </span>
              )
            }

            // 不需要动画，只渲染当前数字
            return (
              <span key={index} class={`${prefixCls}-symbol`}>
                <span class={`${prefixCls}-symbol-only`}>
                  <span class={`${prefixCls}-only-unit`}>{num}</span>
                </span>
              </span>
            )
          }
          // 非数字字符（如 '+', ','）直接显示
          return (
            <span key={index} class={`${prefixCls}-symbol`}>
              {char}
            </span>
          )
        })}
      </span>
    )
  },
})
