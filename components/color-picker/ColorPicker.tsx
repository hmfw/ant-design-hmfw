import { defineComponent, ref, computed, watch, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { hexToHsb, hsbToHex, isValidHex, type HSB } from './color-utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { ColorFormat, ColorPickerProps, ColorPickerClassNames, ColorPickerStyles } from './types'
import type { ComponentSize } from '../config-provider'

const DEFAULT_COLOR = '#1677ff'

/** 提取 props 对象，satisfies 确保 key 集合与 ColorPickerProps 接口完全一致 */
const colorPickerProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: DEFAULT_COLOR },
  /** 当前仅支持 'hex' 格式；rgb/hsb 为预留枚举，面板暂不渲染对应输入框 */
  format: { type: String as PropType<ColorFormat>, default: 'hex' },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  showText: { type: Boolean, default: false },
  allowClear: { type: Boolean, default: false },
  presets: { type: Array as PropType<Array<{ label: string; colors: string[] }>>, default: () => [] },
  classNames: { type: Object as PropType<ColorPickerClassNames>, default: undefined },
  styles: { type: Object as PropType<ColorPickerStyles>, default: undefined },
} satisfies Record<keyof ColorPickerProps, any>

export const ColorPicker = defineComponent({
  name: 'ColorPicker',
  props: colorPickerProps,
  emits: ['update:value', 'change', 'clear', 'openChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('color-picker')
    const open = ref(false)

    // 内部颜色状态（受控/非受控合并）
    const innerValue = ref(props.value ?? props.defaultValue ?? DEFAULT_COLOR)
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    const hsb = ref<HSB>(hexToHsb(isValidHex(innerValue.value) ? innerValue.value : DEFAULT_COLOR))
    const hexInput = ref(innerValue.value)

    // 分离显示用色相：s=0 时不更新，避免灰色区色相归零导致再拖时颜色跳变
    const hueDisplay = ref(hsb.value.h)

    watch(innerValue, (v) => {
      if (isValidHex(v)) {
        const newHsb = hexToHsb(v)
        hsb.value = newHsb
        if (newHsb.s > 0) hueDisplay.value = newHsb.h
        hexInput.value = v
      }
    })

    function applyHsb(newHsb: HSB) {
      hsb.value = newHsb
      if (newHsb.s > 0) hueDisplay.value = newHsb.h
      const hex = hsbToHex(newHsb)
      innerValue.value = hex
      hexInput.value = hex
      emit('update:value', hex)
      emit('change', hex)
    }

    // ─── Saturation/Brightness picker ───────────────────────────────────────
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

    function onSBMouseMove(e: MouseEvent) {
      if (draggingSB.value) getSBFromEvent(e)
    }
    function onSBMouseUp() {
      draggingSB.value = false
      document.removeEventListener('mousemove', onSBMouseMove)
      document.removeEventListener('mouseup', onSBMouseUp)
    }
    function onSBMouseDown(e: MouseEvent) {
      draggingSB.value = true
      getSBFromEvent(e)
      // 按需注册，mouseup 后立即移除，避免多实例堆积全局监听器
      document.addEventListener('mousemove', onSBMouseMove)
      document.addEventListener('mouseup', onSBMouseUp)
    }

    // ─── Hue slider ─────────────────────────────────────────────────────────
    const hueRef = ref<HTMLElement | null>(null)
    const draggingHue = ref(false)

    function getHueFromEvent(e: MouseEvent | TouchEvent) {
      if (!hueRef.value) return
      const rect = hueRef.value.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const h = Math.max(0, Math.min(360, ((clientX - rect.left) / rect.width) * 360))
      applyHsb({ ...hsb.value, h: Math.round(h) })
    }

    function onHueMouseMove(e: MouseEvent) {
      if (draggingHue.value) getHueFromEvent(e)
    }
    function onHueMouseUp() {
      draggingHue.value = false
      document.removeEventListener('mousemove', onHueMouseMove)
      document.removeEventListener('mouseup', onHueMouseUp)
    }
    function onHueMouseDown(e: MouseEvent) {
      draggingHue.value = true
      getHueFromEvent(e)
      document.addEventListener('mousemove', onHueMouseMove)
      document.addEventListener('mouseup', onHueMouseUp)
    }
    // Touch 支持（与 SB picker 对齐）
    function onHueTouchStart(e: TouchEvent) {
      draggingHue.value = true
      getHueFromEvent(e)
    }
    function onHueTouchMove(e: TouchEvent) {
      if (draggingHue.value) getHueFromEvent(e)
    }
    function onHueTouchEnd() {
      draggingHue.value = false
    }

    // 兜底：拖拽进行中被卸载时，mouseup 不会触发，需主动摘除全局监听器
    onBeforeUnmount(() => {
      document.removeEventListener('mousemove', onSBMouseMove)
      document.removeEventListener('mouseup', onSBMouseUp)
      document.removeEventListener('mousemove', onHueMouseMove)
      document.removeEventListener('mouseup', onHueMouseUp)
    })

    // ─── 光标位置计算 ────────────────────────────────────────────────────────
    const sbCursorStyle = computed(() => ({
      left: `${hsb.value.s}%`,
      top: `${100 - hsb.value.b}%`,
    }))

    const hueCursorStyle = computed(() => ({
      left: `${(hueDisplay.value / 360) * 100}%`,
    }))

    const sbBgStyle = computed(() => ({
      background: `hsl(${hueDisplay.value}, 100%, 50%)`,
    }))

    // ─── HEX 输入 ────────────────────────────────────────────────────────────
    function onHexInput(e: Event) {
      const val = (e.target as HTMLInputElement).value
      hexInput.value = val
      if (isValidHex(val)) {
        innerValue.value = val
        const newHsb = hexToHsb(val)
        hsb.value = newHsb
        if (newHsb.s > 0) hueDisplay.value = newHsb.h
        emit('update:value', val)
        emit('change', val)
      }
    }

    // ─── 清除颜色 ────────────────────────────────────────────────────────────
    function clearColor() {
      innerValue.value = ''
      hexInput.value = ''
      // 重置 hsb 到中性白色，避免清除后再拖拽时跳回旧颜色
      hsb.value = { h: 0, s: 0, b: 100 }
      hueDisplay.value = 0
      emit('update:value', undefined)
      emit('clear')
    }

    function onClearKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        clearColor()
      }
    }

    // ─── 面板渲染 ────────────────────────────────────────────────────────────
    const renderPanel = () => (
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        {/* 饱和度/亮度选择区 */}
        <div
          ref={sbRef}
          class={cls(`${prefixCls}-sb`, props.classNames?.saturation)}
          style={{ ...sbBgStyle.value, ...props.styles?.saturation }}
          onMousedown={onSBMouseDown}
          onTouchstart={getSBFromEvent as any}
          onTouchmove={getSBFromEvent as any}
        >
          {/* 白/黑渐变固定绘制，属 HSV 色彩空间本身，不参与主题 token */}
          <div class={`${prefixCls}-sb-white`} />
          <div class={`${prefixCls}-sb-black`} />
          <div
            class={cls(`${prefixCls}-sb-cursor`, props.classNames?.saturationCursor)}
            style={{ ...sbCursorStyle.value, ...props.styles?.saturationCursor }}
          />
        </div>

        {/* 色相滑块 */}
        <div class={`${prefixCls}-sliders`}>
          <div
            ref={hueRef}
            class={cls(`${prefixCls}-hue`, props.classNames?.hueSlider)}
            style={props.styles?.hueSlider}
            onMousedown={onHueMouseDown}
            onTouchstart={onHueTouchStart}
            onTouchmove={onHueTouchMove}
            onTouchend={onHueTouchEnd}
          >
            <div
              class={cls(`${prefixCls}-hue-cursor`, props.classNames?.hueCursor)}
              style={{ ...hueCursorStyle.value, ...props.styles?.hueCursor }}
            />
          </div>
        </div>

        {/* HEX 输入区 */}
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
            {/* 标签反映输入框真实接受的格式；面板目前只实现 HEX 输入 */}
            HEX
          </span>
        </div>

        {/* 预设颜色 */}
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
                        { [`${prefixCls}-preset-color-active`]: color === innerValue.value },
                        props.classNames?.presetColor,
                      )}
                      style={{ background: color, ...props.styles?.presetColor }}
                      onClick={() => {
                        innerValue.value = color
                        hexInput.value = color
                        if (isValidHex(color)) {
                          const newHsb = hexToHsb(color)
                          hsb.value = newHsb
                          if (newHsb.s > 0) hueDisplay.value = newHsb.h
                        }
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
            role="button"
            aria-label="清除颜色"
            tabindex={0}
            onClick={clearColor}
            onKeydown={onClearKeyDown}
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
        onOpenChange={(v: boolean) => {
          open.value = v
          emit('openChange', v)
        }}
      >
        {{
          default: () => (
            <div
              class={cls(
                prefixCls,
                `${prefixCls}-${props.size}`,
                { [`${prefixCls}-disabled`]: props.disabled },
                props.classNames?.root,
              )}
              style={props.styles?.root}
            >
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
                aria-disabled={props.disabled || undefined}
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
            </div>
          ),
          popup: () => renderPanel(),
        }}
      </Trigger>
    )
  },
})
