import { defineComponent, ref, computed, watch, nextTick, type PropType, type VNodeChild } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { ClockCircleOutlined, CloseCircleFilled } from '@hmfw/icons'
import type { TimePickerProps, TimePickerClassNames, TimePickerStyles, DisabledTimeConfig } from './types'
import type { ComponentSize } from '../config-provider'

type Variant = 'outlined' | 'borderless' | 'filled' | 'underlined'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

/**
 * 解析时间字符串为 {h, m, s} 对象
 * 支持 24 小时制（HH:mm:ss）与 12 小时制（hh:mm:ss a/A）
 * @param val - 时间字符串，如 "14:30:00" 或 "2:30:00 PM"
 * @returns 解析后的时分秒对象，24 小时制
 */
function parseTime(val?: string) {
  if (!val) return { h: 0, m: 0, s: 0 }
  // 提取 AM/PM 标记（大小写不敏感）
  const lower = val.toLowerCase()
  const isPM = lower.includes('pm')
  const isAM = lower.includes('am')
  // 提取数字部分，按冒号分割为 [时, 分, 秒]
  const parts = val
    .replace(/[^\d:]/g, '')
    .split(':')
    .map((x) => Number(x))
  let h = parts[0] || 0
  const m = parts[1] || 0
  const s = parts[2] || 0
  // 12 小时制转换为 24 小时制
  if (isPM && h < 12) h += 12 // PM 下午：1 PM → 13, 11 PM → 23
  if (isAM && h === 12) h = 0 // AM 午夜：12 AM → 0
  return { h, m, s }
}

/**
 * 格式化时间为指定格式的字符串
 * @param h - 小时（24 小时制，0-23）
 * @param m - 分钟（0-59）
 * @param s - 秒（0-59）
 * @param fmt - 格式字符串，支持 Token：
 *   - HH/H: 24 小时制时（HH 补零，H 不补零）
 *   - hh/h: 12 小时制时（hh 补零，h 不补零，0 显示为 12）
 *   - mm/m: 分钟（mm 补零，m 不补零）
 *   - ss/s: 秒（ss 补零，s 不补零）
 *   - A/a: AM/PM 标记（A 大写，a 小写）
 * @returns 格式化后的时间字符串
 */
function formatTime(h: number, m: number, s: number, fmt: string) {
  const isPM = h >= 12
  const h12 = h % 12 === 0 ? 12 : h % 12 // 24 小时制 → 12 小时制（0 → 12, 13 → 1）
  return fmt.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g, (token) => {
    switch (token) {
      case 'HH':
        return pad(h) // 24 小时制，补零：00-23
      case 'H':
        return String(h) // 24 小时制，不补零：0-23
      case 'hh':
        return pad(h12) // 12 小时制，补零：01-12
      case 'h':
        return String(h12) // 12 小时制，不补零：1-12
      case 'mm':
        return pad(m) // 分钟，补零：00-59
      case 'm':
        return String(m) // 分钟，不补零：0-59
      case 'ss':
        return pad(s) // 秒，补零：00-59
      case 's':
        return String(s) // 秒，不补零：0-59
      case 'A':
        return isPM ? 'PM' : 'AM' // AM/PM 大写
      case 'a':
        return isPM ? 'pm' : 'am' // am/pm 小写
      default:
        return token
    }
  })
}

function hasSeconds(fmt: string) {
  return /s/.test(fmt)
}

const timePickerProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  format: { type: String, default: 'HH:mm:ss' },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  placeholder: { type: String, default: '请选择时间' },
  allowClear: { type: Boolean, default: true },
  hourStep: { type: Number, default: 1 },
  minuteStep: { type: Number, default: 1 },
  secondStep: { type: Number, default: 1 },
  disabledTime: { type: Function as PropType<() => DisabledTimeConfig>, default: undefined },
  hideDisabledOptions: { type: Boolean, default: false },
  showNow: { type: Boolean, default: true },
  use12Hours: { type: Boolean, default: false },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  open: { type: Boolean, default: undefined },
  needConfirm: { type: Boolean, default: true },
  changeOnScroll: { type: Boolean, default: false },
  renderExtraFooter: { type: Function as PropType<() => VNodeChild>, default: undefined },
  variant: { type: String as PropType<Variant>, default: 'outlined' },
  placement: { type: String as PropType<Placement>, default: 'bottomLeft' },
  classNames: { type: Object as PropType<TimePickerClassNames>, default: undefined },
  styles: { type: Object as PropType<TimePickerStyles>, default: undefined },
} satisfies Record<keyof TimePickerProps, any>

export const TimePicker = defineComponent({
  name: 'TimePicker',
  props: timePickerProps,
  emits: ['update:value', 'change', 'openChange', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('time-picker')
    const parsed = parseTime(props.defaultValue ?? props.value)

    // 已确认值（提交后的值）
    const innerH = ref(parsed.h)
    const innerM = ref(parsed.m)
    const innerS = ref(parsed.s)

    // 临时选中值（点击列表项时的临时态，仅在 needConfirm=true 时使用）
    const stagedH = ref(parsed.h)
    const stagedM = ref(parsed.m)
    const stagedS = ref(parsed.s)

    const innerOpen = ref(false)
    const panelRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()
    const hasValue = ref(!!props.defaultValue || !!props.value)

    // 列容器 ref（用于性能优化的 transform 滚动）
    const hourColRef = ref<HTMLElement>()
    const minuteColRef = ref<HTMLElement>()
    const secondColRef = ref<HTMLElement>()
    const periodColRef = ref<HTMLElement>()

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const displayValue = computed(() => {
      if (props.value !== undefined) {
        if (!props.value) return ''
        const p = parseTime(props.value)
        return formatTime(p.h, p.m, p.s, props.format)
      }
      if (!hasValue.value) return ''
      return formatTime(innerH.value, innerM.value, innerS.value, props.format)
    })

    // 当前显示的值（面板内部显示的值）
    const currentVal = computed(() => {
      // needConfirm=true 时，面板内始终显示临时态（staged）
      if (props.needConfirm) {
        return { h: stagedH.value, m: stagedM.value, s: stagedS.value }
      }
      // needConfirm=false 时，使用已确认的值
      if (props.value !== undefined) {
        const p = parseTime(props.value)
        return { h: p.h, m: p.m, s: p.s }
      }
      return { h: innerH.value, m: innerM.value, s: innerS.value }
    })

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) {
          if (!v) {
            innerH.value = 0
            innerM.value = 0
            innerS.value = 0
            stagedH.value = 0
            stagedM.value = 0
            stagedS.value = 0
            hasValue.value = false
          } else {
            const p = parseTime(v)
            innerH.value = p.h
            innerM.value = p.m
            innerS.value = p.s
            stagedH.value = p.h
            stagedM.value = p.m
            stagedS.value = p.s
            hasValue.value = true
          }
        }
      },
    )

    const open = () => {
      if (props.disabled) return
      // 打开面板时，将 staged 同步为当前已确认值
      if (props.needConfirm) {
        stagedH.value = innerH.value
        stagedM.value = innerM.value
        stagedS.value = innerS.value
      }
      innerOpen.value = true
      emit('openChange', true)
    }

    const close = () => {
      // needConfirm=true 时，关闭面板会丢弃未确认的 staged 值
      if (props.needConfirm) {
        stagedH.value = innerH.value
        stagedM.value = innerM.value
        stagedS.value = innerS.value
      }
      lastScrolledValue.value = {}
      innerOpen.value = false
      emit('openChange', false)
    }

    const confirmTime = () => {
      // 将临时值提交到已确认值
      if (props.needConfirm) {
        innerH.value = stagedH.value
        innerM.value = stagedM.value
        innerS.value = stagedS.value
      }
      const str = formatTime(innerH.value, innerM.value, innerS.value, props.format)
      hasValue.value = true
      emit('update:value', str)
      emit('change', str, str)
      close()
    }

    const handleNow = () => {
      const now = new Date()
      if (props.needConfirm) {
        stagedH.value = now.getHours()
        stagedM.value = now.getMinutes()
        stagedS.value = now.getSeconds()
      } else {
        innerH.value = now.getHours()
        innerM.value = now.getMinutes()
        innerS.value = now.getSeconds()
      }
      if (!props.needConfirm) confirmTime()
    }

    const clearValue = (e: MouseEvent) => {
      e.stopPropagation()
      innerH.value = 0
      innerM.value = 0
      innerS.value = 0
      stagedH.value = 0
      stagedM.value = 0
      stagedS.value = 0
      hasValue.value = false
      emit('update:value', undefined)
      emit('change', undefined, '')
    }

    const disabledConfig = computed(() => props.disabledTime?.() ?? {})

    const hours = computed(() => {
      const disabled = disabledConfig.value.disabledHours?.() ?? []
      const max = props.use12Hours ? 12 : 24
      const list: number[] = []
      for (let i = 0; i < max; i += props.hourStep) {
        if (!props.hideDisabledOptions || !disabled.includes(i)) {
          list.push(i)
        }
      }
      return list.map((h) => ({ value: h, disabled: disabled.includes(h) }))
    })

    const minutes = computed(() => {
      const disabled = disabledConfig.value.disabledMinutes?.(currentVal.value.h) ?? []
      const list: number[] = []
      for (let i = 0; i < 60; i += props.minuteStep) {
        if (!props.hideDisabledOptions || !disabled.includes(i)) {
          list.push(i)
        }
      }
      return list.map((m) => ({ value: m, disabled: disabled.includes(m) }))
    })

    const seconds = computed(() => {
      const disabled = disabledConfig.value.disabledSeconds?.(currentVal.value.h, currentVal.value.m) ?? []
      const list: number[] = []
      for (let i = 0; i < 60; i += props.secondStep) {
        if (!props.hideDisabledOptions || !disabled.includes(i)) {
          list.push(i)
        }
      }
      return list.map((s) => ({ value: s, disabled: disabled.includes(s) }))
    })

    const periods = computed(() => [
      { value: 'AM', disabled: false },
      { value: 'PM', disabled: false },
    ])

    const currentPeriod = computed(() => (currentVal.value.h >= 12 ? 'PM' : 'AM'))

    const showSec = computed(() => hasSeconds(props.format))

    // 性能优化：滚动列到指定值，使用 RAF 节流 + 缓存避免重复滚动
    const scrollRafIds = ref<Record<string, number>>({})
    const lastScrolledValue = ref<Record<string, number | string>>({})

    /**
     * 将时间列滚动到指定值的位置（使目标单元格可见）
     * 性能优化：RAF 节流 + 值缓存避免密集重复滚动
     * @param colRef - 列容器的 DOM 元素
     * @param value - 目标值（小时/分钟/秒数值或 AM/PM 字符串）
     * @param cacheKey - 缓存键（'h'/'m'/'s'/'p'），每列独立缓存
     * @param immediate - true=立即跳转（无动画），用于面板首次打开；false=平滑滚动
     */
    const scrollColumnToValue = (
      colRef: HTMLElement | undefined,
      value: number | string,
      cacheKey: 'h' | 'm' | 's' | 'p',
      immediate = false, // 是否立即滚动（无动画）
    ) => {
      if (!colRef) return
      // 缓存检查：避免相同值重复滚动（immediate 模式跳过缓存，确保面板打开时必滚动）
      if (!immediate && lastScrolledValue.value[cacheKey] === value) return
      lastScrolledValue.value[cacheKey] = value

      const doScroll = () => {
        const item = colRef.querySelector(`[data-value="${value}"]`) as HTMLElement
        if (item) {
          // 将选中项滚动到容器顶部
          const targetScrollTop = item.offsetTop

          // 使用 scrollTo 实现平滑滚动，仅在容器内滚动，不影响页面
          // 降级处理：JSDOM 环境不支持 scrollTo，使用 scrollTop
          if (immediate) {
            // 立即滚动，无动画，直接设置 scrollTop
            colRef.scrollTop = targetScrollTop
          } else if (typeof colRef.scrollTo === 'function') {
            colRef.scrollTo({
              top: targetScrollTop,
              behavior: 'smooth',
            })
          } else {
            colRef.scrollTop = targetScrollTop
          }
        }
      }

      if (immediate) {
        // 立即模式：同步执行，不使用 RAF
        doScroll()
      } else {
        // 平滑模式：使用 RAF 节流（每列独立的 RAF ID，避免多列滚动相互干扰）
        if (scrollRafIds.value[cacheKey]) {
          cancelAnimationFrame(scrollRafIds.value[cacheKey])
        }
        scrollRafIds.value[cacheKey] = requestAnimationFrame(() => {
          doScroll()
          delete scrollRafIds.value[cacheKey]
        })
      }
    }

    // 值变化时滚动（仅在面板打开时，带平滑动画）
    watch(
      () => [currentVal.value.h, currentVal.value.m, currentVal.value.s, currentPeriod.value],
      () => {
        if (isOpen.value) {
          nextTick(() => {
            const h = props.use12Hours ? currentVal.value.h % 12 || 12 : currentVal.value.h
            scrollColumnToValue(hourColRef.value, h, 'h', false)
            scrollColumnToValue(minuteColRef.value, currentVal.value.m, 'm', false)
            if (showSec.value) {
              scrollColumnToValue(secondColRef.value, currentVal.value.s, 's', false)
            }
            if (props.use12Hours) {
              scrollColumnToValue(periodColRef.value, currentPeriod.value, 'p', false)
            }
          })
        }
      },
    )

    const handleHourClick = (h: number, disabled: boolean) => {
      if (disabled) return
      if (props.needConfirm) {
        stagedH.value = h
      } else {
        innerH.value = h
        if (props.changeOnScroll) confirmTime()
      }
    }

    const handleMinuteClick = (m: number, disabled: boolean) => {
      if (disabled) return
      if (props.needConfirm) {
        stagedM.value = m
      } else {
        innerM.value = m
        if (props.changeOnScroll) confirmTime()
      }
    }

    const handleSecondClick = (s: number, disabled: boolean) => {
      if (disabled) return
      if (props.needConfirm) {
        stagedS.value = s
      } else {
        innerS.value = s
        if (props.changeOnScroll) confirmTime()
      }
    }

    const handlePeriodClick = (period: string) => {
      const isPM = period === 'PM'
      const currentH = props.needConfirm ? stagedH.value : innerH.value
      const currentIsPM = currentH >= 12
      if (isPM !== currentIsPM) {
        const newH = isPM ? currentH + 12 : currentH - 12
        if (props.needConfirm) {
          stagedH.value = newH
        } else {
          innerH.value = newH
          if (props.changeOnScroll) confirmTime()
        }
      }
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    const renderColumn = <T extends number | string>(config: {
      items: { value: T; disabled: boolean }[]
      colRef: typeof hourColRef | typeof minuteColRef | typeof secondColRef | typeof periodColRef
      isSelected: (value: T) => boolean
      onClick: (value: T, disabled: boolean) => void
      formatValue?: (value: T) => string
      selectedValue: T // 当前选中值，用于计算初始滚动位置
    }) => {
      const {
        items,
        colRef,
        isSelected,
        onClick,
        formatValue = (v) => (typeof v === 'number' ? pad(v) : String(v)),
        selectedValue,
      } = config
      return (
        <ul
          class={cls(`${prefixCls}-panel-column`, props.classNames?.column)}
          style={props.styles?.column}
          ref={(el) => {
            const element = el as HTMLElement
            const isFirstMount = !colRef.value && element
            colRef.value = element
            // 只在首次挂载时设置初始滚动位置
            if (isFirstMount && isOpen.value) {
              nextTick(() => {
                const selectedItem = element.querySelector(`[data-value="${selectedValue}"]`) as HTMLElement
                if (selectedItem) {
                  element.scrollTop = selectedItem.offsetTop
                }
              })
            }
          }}
        >
          {items.map(({ value, disabled }) => (
            <li
              key={value}
              data-value={value}
              class={cls(
                `${prefixCls}-panel-cell`,
                {
                  [`${prefixCls}-panel-cell-selected`]: isSelected(value),
                  [`${prefixCls}-panel-cell-disabled`]: disabled,
                },
                props.classNames?.cell,
              )}
              style={props.styles?.cell}
              onClick={() => onClick(value, disabled)}
            >
              {formatValue(value)}
            </li>
          ))}
        </ul>
      )
    }

    const renderPanel = () => (
      <div ref={panelRef} class={cls(`${prefixCls}-popup`, props.classNames?.popup)} style={props.styles?.popup}>
        <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
          <div class={cls(`${prefixCls}-panel-inner`, props.classNames?.panelInner)} style={props.styles?.panelInner}>
            {renderColumn({
              items: hours.value,
              colRef: hourColRef,
              isSelected: (h) => (props.use12Hours ? (currentVal.value.h % 12 || 12) === h : currentVal.value.h === h),
              onClick: handleHourClick,
              selectedValue: props.use12Hours ? currentVal.value.h % 12 || 12 : currentVal.value.h,
            })}
            {renderColumn({
              items: minutes.value,
              colRef: minuteColRef,
              isSelected: (m) => currentVal.value.m === m,
              onClick: handleMinuteClick,
              selectedValue: currentVal.value.m,
            })}
            {showSec.value &&
              renderColumn({
                items: seconds.value,
                colRef: secondColRef,
                isSelected: (s) => currentVal.value.s === s,
                onClick: handleSecondClick,
                selectedValue: currentVal.value.s,
              })}
            {props.use12Hours &&
              renderColumn({
                items: periods.value,
                colRef: periodColRef,
                isSelected: (period) => currentPeriod.value === period,
                onClick: handlePeriodClick,
                selectedValue: currentPeriod.value,
              })}
          </div>
          <div class={cls(`${prefixCls}-panel-footer`, props.classNames?.footer)} style={props.styles?.footer}>
            <div
              class={cls(`${prefixCls}-panel-footer-extra`, props.classNames?.footerExtra)}
              style={props.styles?.footerExtra}
            >
              {props.renderExtraFooter?.()}
            </div>
            <div
              class={cls(`${prefixCls}-panel-footer-actions`, props.classNames?.footerActions)}
              style={props.styles?.footerActions}
            >
              {props.showNow && (
                <button
                  class={cls(`${prefixCls}-panel-footer-btn`, props.classNames?.now)}
                  style={props.styles?.now}
                  onClick={handleNow}
                >
                  此刻
                </button>
              )}
              {props.needConfirm && (
                <button
                  class={cls(`${prefixCls}-panel-footer-btn`, `${prefixCls}-panel-footer-ok`, props.classNames?.ok)}
                  style={props.styles?.ok}
                  onClick={confirmTime}
                >
                  确定
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={props.placement}
        disabled={props.disabled}
        destroyOnHidden
        triggerClass={cls(
          prefixCls,
          `${prefixCls}-${props.size}`,
          `${prefixCls}-${props.variant}`,
          {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          },
          props.classNames?.root,
        )}
        triggerStyle={props.styles?.root}
        popupClass={cls(`${prefixCls}-popup`, props.classNames?.popup)}
        popupStyle={props.styles?.popup}
        onOpenChange={(v: boolean) => {
          if (v) open()
          else close()
        }}
      >
        {{
          default: () => (
            <span class={cls(`${prefixCls}-input`, props.classNames?.input)} style={props.styles?.input}>
              <input
                ref={inputRef}
                readonly
                placeholder={props.placeholder}
                value={displayValue.value}
                disabled={props.disabled}
                class={`${prefixCls}-input-inner`}
                onFocus={() => emit('focus')}
                onBlur={() => emit('blur')}
              />
              {props.allowClear && displayValue.value && !props.disabled && (
                <span
                  class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
                  style={props.styles?.clear}
                  onClick={clearValue}
                >
                  <CloseCircleFilled />
                </span>
              )}
              <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                <ClockCircleOutlined />
              </span>
            </span>
          ),
          popup: ({ placement: _placement }: { placement: Placement }) => renderPanel(),
        }}
      </Trigger>
    )
  },
})
