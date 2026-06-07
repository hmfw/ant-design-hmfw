import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  Teleport,
  type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { hexToHsb, hsbToHex, isValidHex, type HSB } from './color-utils'
import type { ColorPickerProps, ColorFormat } from './types'

const DEFAULT_COLOR = '#1677ff'

export const ColorPicker = defineComponent({
  name: 'ColorPicker',
  props: {
    value: String,
    defaultValue: { type: String, default: DEFAULT_COLOR },
    format: { type: String as PropType<ColorFormat>, default: 'hex' },
    disabled: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    showText: Boolean,
    allowClear: Boolean,
    presets: {
      type: Array as PropType<Array<{ label: string; colors: string[] }>>,
      default: () => [],
    },
  },
  emits: ['update:value', 'change', 'clear', 'openChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('color-picker')
    const triggerRef = ref<HTMLElement | null>(null)
    const panelRef = ref<HTMLElement | null>(null)
    const open = ref(false)
    const panelPos = ref({ top: 0, left: 0 })

    const innerValue = ref(props.value ?? props.defaultValue ?? DEFAULT_COLOR)
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    const hsb = ref<HSB>(hexToHsb(isValidHex(innerValue.value) ? innerValue.value : DEFAULT_COLOR))
    const hexInput = ref(innerValue.value)

    watch(innerValue, (v) => {
      if (isValidHex(v)) {
        hsb.value = hexToHsb(v)
        hexInput.value = v
      }
    })

    function applyHsb(newHsb: HSB) {
      hsb.value = newHsb
      const hex = hsbToHex(newHsb)
      innerValue.value = hex
      hexInput.value = hex
      emit('update:value', hex)
      emit('change', hex)
    }

    // Saturation/Brightness picker drag
    const sbRef = ref<HTMLElement | null>(null)
    const draggingSB = ref(false)

    function getSBFromEvent(e: MouseEvent | TouchEvent) {
      if (!sbRef.value) return
      const rect = sbRef.value.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      const s = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      const b = Math.max(0, Math.min(100, (1 - (clientY - rect.top) / rect.height) * 100))
      applyHsb({ ...hsb.value, s: Math.round(s), b: Math.round(b) })
    }

    function onSBMouseDown(e: MouseEvent) {
      draggingSB.value = true
      getSBFromEvent(e)
    }

    function onSBMouseMove(e: MouseEvent) {
      if (draggingSB.value) getSBFromEvent(e)
    }
    function onSBMouseUp() {
      draggingSB.value = false
    }

    // Hue slider drag
    const hueRef = ref<HTMLElement | null>(null)
    const draggingHue = ref(false)

    function getHueFromEvent(e: MouseEvent) {
      if (!hueRef.value) return
      const rect = hueRef.value.getBoundingClientRect()
      const h = Math.max(0, Math.min(360, ((e.clientX - rect.left) / rect.width) * 360))
      applyHsb({ ...hsb.value, h: Math.round(h) })
    }

    function onHueMouseDown(e: MouseEvent) {
      draggingHue.value = true
      getHueFromEvent(e)
    }
    function onHueMouseMove(e: MouseEvent) {
      if (draggingHue.value) getHueFromEvent(e)
    }
    function onHueMouseUp() {
      draggingHue.value = false
    }

    onMounted(() => {
      document.addEventListener('mousemove', onSBMouseMove)
      document.addEventListener('mouseup', onSBMouseUp)
      document.addEventListener('mousemove', onHueMouseMove)
      document.addEventListener('mouseup', onHueMouseUp)
      document.addEventListener('mousedown', handleOutsideClick)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', onSBMouseMove)
      document.removeEventListener('mouseup', onSBMouseUp)
      document.removeEventListener('mousemove', onHueMouseMove)
      document.removeEventListener('mouseup', onHueMouseUp)
      document.removeEventListener('mousedown', handleOutsideClick)
    })

    function handleOutsideClick(e: MouseEvent) {
      if (!open.value) return
      if (triggerRef.value?.contains(e.target as Node) || panelRef.value?.contains(e.target as Node)) return
      open.value = false
      emit('openChange', false)
    }

    async function toggleOpen() {
      if (props.disabled) return
      open.value = !open.value
      emit('openChange', open.value)
      if (open.value) {
        await nextTick()
        updatePanelPos()
      }
    }

    function updatePanelPos() {
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      panelPos.value = {
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      }
    }

    const sbCursorStyle = computed(() => ({
      left: `${hsb.value.s}%`,
      top: `${100 - hsb.value.b}%`,
    }))

    const hueCursorStyle = computed(() => ({
      left: `${(hsb.value.h / 360) * 100}%`,
    }))

    const sbBgStyle = computed(() => ({
      background: `hsl(${hsb.value.h}, 100%, 50%)`,
    }))

    function onHexInput(e: Event) {
      const val = (e.target as HTMLInputElement).value
      hexInput.value = val
      if (isValidHex(val)) {
        innerValue.value = val
        hsb.value = hexToHsb(val)
        emit('update:value', val)
        emit('change', val)
      }
    }

    function clearColor() {
      innerValue.value = ''
      hexInput.value = ''
      emit('update:value', undefined)
      emit('clear')
    }

    return () => (
      <div
        class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-disabled`]: props.disabled,
        })}
      >
        <div
          ref={triggerRef}
          class={cls(`${prefixCls}-trigger`, { [`${prefixCls}-trigger-open`]: open.value })}
          onClick={toggleOpen}
          role="button"
          aria-haspopup="true"
          aria-expanded={open.value}
        >
          <div class={`${prefixCls}-color-block`} style={{ background: innerValue.value || 'transparent' }} />
          {props.showText && <span class={`${prefixCls}-text`}>{innerValue.value || '—'}</span>}
        </div>

        {open.value && (
          <Teleport to="body">
            <div
              ref={panelRef}
              class={`${prefixCls}-panel`}
              style={{
                position: 'absolute',
                top: `${panelPos.value.top}px`,
                left: `${panelPos.value.left}px`,
                zIndex: 1050,
              }}
            >
              {/* Saturation/Brightness picker */}
              <div ref={sbRef} class={`${prefixCls}-sb`} style={sbBgStyle.value} onMousedown={onSBMouseDown}>
                <div class={`${prefixCls}-sb-white`} />
                <div class={`${prefixCls}-sb-black`} />
                <div class={`${prefixCls}-sb-cursor`} style={sbCursorStyle.value} />
              </div>

              {/* Hue slider */}
              <div class={`${prefixCls}-sliders`}>
                <div ref={hueRef} class={`${prefixCls}-hue`} onMousedown={onHueMouseDown}>
                  <div class={`${prefixCls}-hue-cursor`} style={hueCursorStyle.value} />
                </div>
              </div>

              {/* Hex input */}
              <div class={`${prefixCls}-input-container`}>
                <div class={`${prefixCls}-preview`} style={{ background: innerValue.value }} />
                <input
                  class={`${prefixCls}-hex-input`}
                  value={hexInput.value}
                  onInput={onHexInput}
                  maxlength={7}
                  spellcheck={false}
                />
                <span class={`${prefixCls}-format-label`}>HEX</span>
              </div>

              {/* Presets */}
              {props.presets.length > 0 && (
                <div class={`${prefixCls}-presets`}>
                  {props.presets.map((group) => (
                    <div key={group.label} class={`${prefixCls}-preset-group`}>
                      <div class={`${prefixCls}-preset-label`}>{group.label}</div>
                      <div class={`${prefixCls}-preset-colors`}>
                        {group.colors.map((color) => (
                          <div
                            key={color}
                            class={cls(`${prefixCls}-preset-color`, {
                              [`${prefixCls}-preset-color-active`]: color === innerValue.value,
                            })}
                            style={{ background: color }}
                            onClick={() => {
                              innerValue.value = color
                              hexInput.value = color
                              if (isValidHex(color)) hsb.value = hexToHsb(color)
                              emit('update:value', color)
                              emit('change', color)
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {props.allowClear && (
                <div class={`${prefixCls}-clear-btn`} onClick={clearColor}>
                  清除
                </div>
              )}
            </div>
          </Teleport>
        )}
      </div>
    )
  },
})
