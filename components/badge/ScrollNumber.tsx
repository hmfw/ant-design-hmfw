import { defineComponent, computed, ref, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'

/** 数字滚动动画时长（ms） */
const ANIMATION_DURATION = 300

/**
 * ScrollNumber 组件
 * 实现数字徽标的滚动动画效果
 */
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

    // 存储当前显示的字符串和上一个字符串（用于动画计算）
    const currentValue = ref(String(props.count))
    const previousValue = ref(String(props.count))
    const isAnimating = ref(false)

    /**
     * 监听 count 变化，触发滚动动画
     */
    watch(
      () => props.count,
      (newVal, oldVal) => {
        const newStr = String(newVal)
        const oldStr = String(oldVal)

        if (newStr !== oldStr) {
          previousValue.value = currentValue.value
          currentValue.value = newStr
          isAnimating.value = true

          // 动画结束后重置状态
          setTimeout(() => {
            isAnimating.value = false
          }, ANIMATION_DURATION)
        }
      },
    )

    /**
     * 将字符串拆分为单个字符（支持数字、符号如 '+', ','）
     */
    const displayChars = computed(() => currentValue.value.split(''))

    /**
     * 判断字符是否为数字（0-9）
     */
    const isDigit = (char: string): boolean => /^\d$/.test(char)

    /**
     * 获取上一个值中对应位置的数字
     * 用于计算动画的起始数字
     * @returns 数字 (0-9) 或 null（非数字或越界）
     */
    const getPreviousDigit = (index: number): number | null => {
      const prevChars = previousValue.value.split('')

      // 边界检查：索引越界或非数字返回 null
      if (index >= prevChars.length) return null

      const char = prevChars[index]
      if (!isDigit(char)) return null

      return parseInt(char, 10)
    }

    /**
     * 渲染单个数字字符的滚动动画
     */
    const renderDigit = (char: string, index: number) => {
      const currentNum = parseInt(char, 10)
      const prevNum = getPreviousDigit(index)

      // 判断是否需要动画：
      // 1. 正在动画中
      // 2. 上一个位置存在数字
      // 3. 数字发生了变化
      const shouldAnimate = isAnimating.value && prevNum !== null && prevNum !== currentNum

      if (shouldAnimate) {
        // 生成从 prevNum 到 currentNum 的数字序列
        // 向上滚动：prevNum < currentNum (例如 1 → 5: [1,2,3,4,5])
        // 向下滚动：prevNum > currentNum (例如 5 → 1: [5,4,3,2,1])
        const digits =
          prevNum! < currentNum
            ? Array.from({ length: currentNum - prevNum! + 1 }, (_, i) => prevNum! + i)
            : Array.from({ length: prevNum! - currentNum + 1 }, (_, i) => prevNum! - i)

        return (
          <span key={index} class={`${prefixCls}-symbol`}>
            <span
              class={`${prefixCls}-symbol-only ${prefixCls}-symbol-animate`}
              style={{
                // 滚动到最后一个数字（目标数字）
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
            <span class={`${prefixCls}-only-unit`}>{currentNum}</span>
          </span>
        </span>
      )
    }

    return () => (
      <span class={prefixCls} title={props.title}>
        {displayChars.value.map((char, index) => {
          // 数字字符：使用滚动动画
          if (isDigit(char)) {
            return renderDigit(char, index)
          }

          // 非数字字符（如 '+', ','）：直接显示
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
