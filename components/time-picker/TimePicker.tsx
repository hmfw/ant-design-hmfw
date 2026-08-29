import { defineComponent, ref, computed, watch, type PropType, type VNodeChild } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { parseTime, formatTime, hasSeconds, generateTimeOptions } from '../_utils/time'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { TimeColumn } from '../_internal/time-column'
import { PickerInput, type PickerVariant } from '../_internal/picker-input'
import { ClockCircleOutlined } from '@hmfw/icons'
import type { TimePickerProps, TimePickerClassNames, TimePickerStyles, DisabledTimeConfig } from './types'
import type { ComponentSize } from '../config-provider'

const timePickerProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  format: { type: String, default: 'HH:mm:ss' },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  // 缺省文案来自语言包，故不写字面量默认值
  placeholder: { type: String, default: undefined },
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
  variant: { type: String as PropType<PickerVariant>, default: 'outlined' },
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

    const locale = useLocale()
    const mergedPlaceholder = computed(() => props.placeholder ?? locale.value.TimePicker.placeholder)
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
    // PickerInput 实例（暴露内置输入框，供 focus/blur 方法使用）
    const pickerInputRef = ref<{ input?: HTMLInputElement }>()
    const hasValue = ref(!!props.defaultValue || !!props.value)

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

    const handleClear = (e: MouseEvent) => {
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
      return generateTimeOptions(max, props.hourStep)
        .filter((h) => !props.hideDisabledOptions || !disabled.includes(h))
        .map((h) => ({ value: h, disabled: disabled.includes(h) }))
    })

    const minutes = computed(() => {
      const disabled = disabledConfig.value.disabledMinutes?.(currentVal.value.h) ?? []
      return generateTimeOptions(60, props.minuteStep)
        .filter((m) => !props.hideDisabledOptions || !disabled.includes(m))
        .map((m) => ({ value: m, disabled: disabled.includes(m) }))
    })

    const seconds = computed(() => {
      const disabled = disabledConfig.value.disabledSeconds?.(currentVal.value.h, currentVal.value.m) ?? []
      return generateTimeOptions(60, props.secondStep)
        .filter((s) => !props.hideDisabledOptions || !disabled.includes(s))
        .map((s) => ({ value: s, disabled: disabled.includes(s) }))
    })

    const periods = computed(() => [
      { value: 'AM', disabled: false },
      { value: 'PM', disabled: false },
    ])

    const currentPeriod = computed(() => (currentVal.value.h >= 12 ? 'PM' : 'AM'))

    const showSec = computed(() => hasSeconds(props.format))

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
      focus: () => pickerInputRef.value?.input?.focus(),
      blur: () => pickerInputRef.value?.input?.blur(),
    })

    const renderColumn = (config: {
      items: { value: number | string; disabled: boolean }[]
      isSelected: (value: number | string) => boolean
      onClick: (value: number | string, disabled: boolean) => void
      selectedValue: number | string // 当前选中值，用于计算初始滚动位置
    }) => {
      const { items, isSelected, onClick, selectedValue } = config
      return (
        <TimeColumn
          colClass={cls(`${prefixCls}-panel-column`, props.classNames?.column)}
          cellClass={cls(`${prefixCls}-panel-cell`, props.classNames?.cell)}
          style={props.styles?.column}
          cellStyle={props.styles?.cell}
          items={items}
          selectedValue={selectedValue}
          isSelected={isSelected}
          onSelect={onClick}
          active={isOpen.value}
        />
      )
    }

    const renderPopup = () => (
      <div ref={panelRef} class={cls(`${prefixCls}-popup`, props.classNames?.popup)} style={props.styles?.popup}>
        <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
          <div class={cls(`${prefixCls}-panel-inner`, props.classNames?.panelInner)} style={props.styles?.panelInner}>
            {renderColumn({
              items: hours.value,
              isSelected: (h: number | string) =>
                props.use12Hours ? (currentVal.value.h % 12 || 12) === h : currentVal.value.h === h,
              onClick: (h: number | string, disabled: boolean) => handleHourClick(h as number, disabled),
              selectedValue: props.use12Hours ? currentVal.value.h % 12 || 12 : currentVal.value.h,
            })}
            {renderColumn({
              items: minutes.value,
              isSelected: (m: number | string) => currentVal.value.m === m,
              onClick: (m: number | string, disabled: boolean) => handleMinuteClick(m as number, disabled),
              selectedValue: currentVal.value.m,
            })}
            {showSec.value &&
              renderColumn({
                items: seconds.value,
                isSelected: (s: number | string) => currentVal.value.s === s,
                onClick: (s: number | string, disabled: boolean) => handleSecondClick(s as number, disabled),
                selectedValue: currentVal.value.s,
              })}
            {props.use12Hours &&
              renderColumn({
                items: periods.value,
                isSelected: (period: number | string) => currentPeriod.value === period,
                onClick: (period: number | string) => handlePeriodClick(period as string),
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
                  {locale.value.TimePicker.now}
                </button>
              )}
              {props.needConfirm && (
                <button
                  class={cls(`${prefixCls}-panel-footer-btn`, `${prefixCls}-panel-footer-ok`, props.classNames?.ok)}
                  style={props.styles?.ok}
                  onClick={confirmTime}
                >
                  {locale.value.TimePicker.ok}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )

    const renderInput = () => (
      <PickerInput
        ref={pickerInputRef}
        size={props.size}
        status={props.status}
        variant={props.variant}
        disabled={props.disabled}
        open={isOpen.value}
        hasValue={!!displayValue.value}
        allowClear={props.allowClear}
        value={displayValue.value}
        placeholder={mergedPlaceholder.value}
        onFocus={() => emit('focus')}
        onBlur={() => emit('blur')}
        classNames={{
          root: cls(prefixCls, props.classNames?.root),
          input: cls(`${prefixCls}-input-inner`, props.classNames?.input),
          clear: props.classNames?.clear,
          suffix: props.classNames?.suffix,
        }}
        styles={{
          root: props.styles?.root,
          input: props.styles?.input,
          clear: props.styles?.clear,
          suffix: props.styles?.suffix,
        }}
        onClear={handleClear}
      >
        {{
          suffix: () => <ClockCircleOutlined />,
        }}
      </PickerInput>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={props.placement}
        disabled={props.disabled}
        destroyOnHidden
        popupClass={cls(`${prefixCls}-popup`, props.classNames?.popup)}
        popupStyle={props.styles?.popup}
        onOpenChange={(v: boolean) => {
          if (v) open()
          else close()
        }}
      >
        {{
          default: renderInput,
          popup: renderPopup,
        }}
      </Trigger>
    )
  },
})
