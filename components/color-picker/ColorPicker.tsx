import { defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { hexToHsb, hsbToHex, isValidHex, type HSB } from './color-utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { ColorFormat, ColorPickerClassNames, ColorPickerStyles } from './types'

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
    classNames: Object as PropType<ColorPickerClassNames>,
    styles: Object as PropType<ColorPickerStyles>,
  },
  emits: ['update:value', 'change', 'clear', 'openChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('color-picker')
    const panelRef = ref<HTMLElement | null>(null)
    const open = ref(false)

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
    })
    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', onSBMouseMove)
      document.removeEventListener('mouseup', onSBMouseUp)
      document.removeEventListener('mousemove', onHueMouseMove)
      document.removeEventListener('mouseup', onHueMouseUp)
    })

    function toggleOpen() {
      if (props.disabled) return
      open.value = !open.value
      emit('openChange', open.value)
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

    const renderPanel = () => (
      <div ref={panelRef} class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        {/* Saturation/Brightness picker */}
        <div
          ref={sbRef}
          class={cls(`${prefixCls}-sb`, props.classNames?.saturation)}
          style={{ ...sbBgStyle.value, ...props.styles?.saturation }}
          onMousedown={onSBMouseDown}
        >
          <div class={`${prefixCls}-sb-white`} />
          <div class={`${prefixCls}-sb-black`} />
          <div
            class={cls(`${prefixCls}-sb-cursor`, props.classNames?.saturationCursor)}
            style={{ ...sbCursorStyle.value, ...props.styles?.saturationCursor }}
          />
        </div>

        {/* Hue slider */}
        <div class={`${prefixCls}-sliders`}>
          <div
            ref={hueRef}
            class={cls(`${prefixCls}-hue`, props.classNames?.hueSlider)}
            style={props.styles?.hueSlider}
            onMousedown={onHueMouseDown}
          >
            <div
              class={cls(`${prefixCls}-hue-cursor`, props.classNames?.hueCursor)}
              style={{ ...hueCursorStyle.value, ...props.styles?.hueCursor }}
            />
          </div>
        </div>

        {/* Hex input */}
        <div
          class={cls(`${prefixCls}-input-container`, props.classNames?.inputContainer)}
          style={props.styles?.inputContainer}
        >
          <div
            class={cls(`${prefixCls}-preview`, props.classNames?.preview)}
            style={{ background: innerValue.value, ...props.styles?.preview }}
          />
          <input
            class={cls(`${prefixCls}-hex-input`, props.classNames?.hexInput)}
            style={props.styles?.hexInput}
            value={hexInput.value}
            onInput={onHexInput}
            maxlength={7}
            spellcheck={false}
          />
          <span
            class={cls(`${prefixCls}-format-label`, props.classNames?.formatLabel)}
            style={props.styles?.formatLabel}
          >
            HEX
          </span>
        </div>

        {/* Presets */}
        {props.presets.length > 0 && (
          <div class={cls(`${prefixCls}-presets`, props.classNames?.presets)} style={props.styles?.presets}>
            {props.presets.map((group) => (
              <div
                key={group.label}
                class={cls(`${prefixCls}-preset-group`, props.classNames?.presetGroup)}
                style={props.styles?.presetGroup}
              >
                <div
                  class={cls(`${prefixCls}-preset-label`, props.classNames?.presetLabel)}
                  style={props.styles?.presetLabel}
                >
                  {group.label}
                </div>
                <div
                  class={cls(`${prefixCls}-preset-colors`, props.classNames?.presetColors)}
                  style={props.styles?.presetColors}
                >
                  {group.colors.map((color) => (
                    <div
                      key={color}
                      class={cls(
                        `${prefixCls}-preset-color`,
                        {
                          [`${prefixCls}-preset-color-active`]: color === innerValue.value,
                        },
                        props.classNames?.presetColor,
                      )}
                      style={{ background: color, ...props.styles?.presetColor }}
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
          <div
            class={cls(`${prefixCls}-clear-btn`, props.classNames?.clearBtn)}
            style={props.styles?.clearBtn}
            onClick={clearColor}
          >
            清除
          </div>
        )}
      </div>
    )

    return () => (
      <Trigger
        open={open.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={props.disabled}
        destroyOnHidden
        triggerClass={cls(
          prefixCls,
          `${prefixCls}-${props.size}`,
          {
            [`${prefixCls}-disabled`]: props.disabled,
          },
          props.classNames?.root,
        )}
        triggerStyle={props.styles?.root}
        popupClass={cls(`${prefixCls}-panel`, props.classNames?.panel)}
        popupStyle={props.styles?.panel}
        onOpenChange={(v: boolean) => {
          open.value = v
          emit('openChange', v)
        }}
      >
        {{
          default: () => (
            <div
              class={cls(
                `${prefixCls}-trigger`,
                { [`${prefixCls}-trigger-open`]: open.value },
                props.classNames?.trigger,
              )}
              style={props.styles?.trigger}
              role="button"
              aria-haspopup="true"
              aria-expanded={open.value}
            >
              <div
                class={cls(`${prefixCls}-color-block`, props.classNames?.colorBlock)}
                style={{ background: innerValue.value || 'transparent', ...props.styles?.colorBlock }}
              />
              {props.showText && (
                <span class={cls(`${prefixCls}-text`, props.classNames?.text)} style={props.styles?.text}>
                  {innerValue.value || '—'}
                </span>
              )}
            </div>
          ),
          popup: ({ placement }: { placement: Placement }) => renderPanel(),
        }}
      </Trigger>
    )
  },
})
