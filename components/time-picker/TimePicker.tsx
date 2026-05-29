import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'


function pad(n: number) {
  return String(n).padStart(2, '0')
}

function parseTime(val: string | undefined) {
  if (!val) return { h: 0, m: 0, s: 0 }
  const parts = val.split(':').map(Number)
  return { h: parts[0] ?? 0, m: parts[1] ?? 0, s: parts[2] ?? 0 }
}

function formatTime(h: number, m: number, s: number, fmt = 'HH:mm:ss') {
  return fmt
    .replace('HH', pad(h))
    .replace('mm', pad(m))
    .replace('ss', pad(s))
    .replace('H', String(h))
    .replace('m', String(m))
    .replace('s', String(s))
}

function hasSeconds(fmt = 'HH:mm:ss') {
  return fmt.includes('s')
}

export const TimePicker = defineComponent({
  name: 'TimePicker',
  props: {
    value: String,
    defaultValue: String,
    format: { type: String, default: 'HH:mm:ss' },
    disabled: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    placeholder: { type: String, default: '请选择时间' },
    allowClear: { type: Boolean, default: true },
    hourStep: { type: Number, default: 1 },
    minuteStep: { type: Number, default: 1 },
    secondStep: { type: Number, default: 1 },
    disabledHours: Function as PropType<() => number[]>,
    disabledMinutes: Function as PropType<(h: number) => number[]>,
    disabledSeconds: Function as PropType<(h: number, m: number) => number[]>,
    showNow: { type: Boolean, default: true },
    use12Hours: Boolean,
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    open: { type: Boolean, default: undefined },
  },
  emits: ['update:value', 'change', 'openChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('time-picker')
    const parsed = parseTime(props.defaultValue ?? props.value)
    const innerH = ref(parsed.h)
    const innerM = ref(parsed.m)
    const innerS = ref(parsed.s)
    const innerOpen = ref(false)
    const triggerRef = ref<HTMLElement>()
    const panelRef = ref<HTMLElement>()

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    const displayValue = computed(() => {
      if (props.value) {
        const p = parseTime(props.value)
        return formatTime(p.h, p.m, p.s, props.format)
      }
      return innerOpen.value || innerH.value || innerM.value || innerS.value
        ? formatTime(innerH.value, innerM.value, innerS.value, props.format)
        : ''
    })

    const currentVal = computed(() => {
      if (props.value) {
        const p = parseTime(props.value)
        return { h: p.h, m: p.m, s: p.s }
      }
      return { h: innerH.value, m: innerM.value, s: innerS.value }
    })

    watch(() => props.value, (v) => {
      if (v) {
        const p = parseTime(v)
        innerH.value = p.h
        innerM.value = p.m
        innerS.value = p.s
      }
    })

    const panelPos = ref({ top: 0, left: 0 })

    const updatePos = () => {
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      panelPos.value = {
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      }
    }

    const open = () => {
      if (props.disabled) return
      updatePos()
      innerOpen.value = true
      emit('openChange', true)
    }

    const close = () => {
      innerOpen.value = false
      emit('openChange', false)
    }

    const confirmTime = () => {
      const str = formatTime(innerH.value, innerM.value, innerS.value, props.format)
      emit('update:value', str)
      emit('change', str)
      close()
    }

    const handleNow = () => {
      const now = new Date()
      innerH.value = now.getHours()
      innerM.value = now.getMinutes()
      innerS.value = now.getSeconds()
    }

    const clearValue = (e: MouseEvent) => {
      e.stopPropagation()
      innerH.value = 0
      innerM.value = 0
      innerS.value = 0
      emit('update:value', undefined)
      emit('change', undefined)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        !triggerRef.value?.contains(e.target as Node) &&
        !panelRef.value?.contains(e.target as Node)
      ) close()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

    const hours = computed(() => {
      const disabled = props.disabledHours?.() ?? []
      return Array.from({ length: props.use12Hours ? 12 : 24 }, (_, i) => i * (props.hourStep ?? 1))
        .filter((h) => !disabled.includes(h))
    })

    const minutes = computed(() => {
      const disabled = props.disabledMinutes?.(currentVal.value.h) ?? []
      return Array.from({ length: 60 }, (_, i) => i)
        .filter((m) => m % (props.minuteStep ?? 1) === 0 && !disabled.includes(m))
    })

    const seconds = computed(() => {
      const disabled = props.disabledSeconds?.(currentVal.value.h, currentVal.value.m) ?? []
      return Array.from({ length: 60 }, (_, i) => i)
        .filter((s) => s % (props.secondStep ?? 1) === 0 && !disabled.includes(s))
    })

    const showSec = computed(() => hasSeconds(props.format))

    const scrollToActive = (el: HTMLElement | null, value: number) => {
      if (!el) return
      const item = el.querySelector(`[data-value="${value}"]`) as HTMLElement
      if (item) item.scrollIntoView({ block: 'nearest' })
    }

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(prefixCls, `${prefixCls}-${props.size}`, {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          })}
          onClick={open}
        >
          <span class={`${prefixCls}-input`}>
            <input
              readonly
              placeholder={props.placeholder}
              value={displayValue.value}
              disabled={props.disabled}
              class={`${prefixCls}-input-inner`}
            />
            {props.allowClear && displayValue.value && !props.disabled && (
              <span class={`${prefixCls}-clear`} onClick={clearValue}>✕</span>
            )}
            <span class={`${prefixCls}-suffix`}>🕐</span>
          </span>
        </div>

        {isOpen.value && (
          <Teleport to="body">
            <div
              ref={panelRef}
              class={`${prefixCls}-panel-container`}
              style={{ position: 'absolute', top: `${panelPos.value.top}px`, left: `${panelPos.value.left}px`, zIndex: 1050 }}
            >
              <div class={`${prefixCls}-panel`}>
                <div class={`${prefixCls}-panel-inner`}>
                  {/* Hour column */}
                  <ul class={`${prefixCls}-panel-column`} ref={(el) => scrollToActive(el as HTMLElement, innerH.value)}>
                    {hours.value.map((h) => (
                      <li
                        key={h}
                        data-value={h}
                        class={cls(`${prefixCls}-panel-cell`, {
                          [`${prefixCls}-panel-cell-selected`]: innerH.value === h,
                        })}
                        onClick={() => { innerH.value = h }}
                      >
                        {pad(h)}
                      </li>
                    ))}
                  </ul>
                  {/* Minute column */}
                  <ul class={`${prefixCls}-panel-column`} ref={(el) => scrollToActive(el as HTMLElement, innerM.value)}>
                    {minutes.value.map((m) => (
                      <li
                        key={m}
                        data-value={m}
                        class={cls(`${prefixCls}-panel-cell`, {
                          [`${prefixCls}-panel-cell-selected`]: innerM.value === m,
                        })}
                        onClick={() => { innerM.value = m }}
                      >
                        {pad(m)}
                      </li>
                    ))}
                  </ul>
                  {/* Second column */}
                  {showSec.value && (
                    <ul class={`${prefixCls}-panel-column`} ref={(el) => scrollToActive(el as HTMLElement, innerS.value)}>
                      {seconds.value.map((s) => (
                        <li
                          key={s}
                          data-value={s}
                          class={cls(`${prefixCls}-panel-cell`, {
                            [`${prefixCls}-panel-cell-selected`]: innerS.value === s,
                          })}
                          onClick={() => { innerS.value = s }}
                        >
                          {pad(s)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div class={`${prefixCls}-panel-footer`}>
                  {props.showNow && (
                    <button class={`${prefixCls}-panel-footer-btn`} onClick={handleNow}>此刻</button>
                  )}
                  <button class={`${prefixCls}-panel-footer-btn ${prefixCls}-panel-footer-ok`} onClick={confirmTime}>确定</button>
                </div>
              </div>
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
