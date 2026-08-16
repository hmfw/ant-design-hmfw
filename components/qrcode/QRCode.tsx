// 二维码组件：canvas / SVG 两种渲染方式，无外部依赖的纯前端编码器（见 encoder.ts）

import { defineComponent, ref, onMounted, watch, computed, getCurrentInstance, type PropType, h } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { Spin } from '../spin'
import { ReloadOutlined } from '@hmfw/icons'
import { generateQR } from './encoder'
import type {
  QRCodeStatus,
  QRCodeErrorLevel,
  QRCodeType,
  StatusRenderInfo,
  QRCodeClassNames,
  QRCodeStyles,
  QRCodeProps,
} from './types'

/** 判断颜色是否完全透明（`transparent` 或 alpha=0 的 rgba 写法） */
function isTransparentColor(color: string) {
  if (!color || color === 'transparent') return true
  const match = color.match(/^rgba?\(([^)]+)\)$/)
  if (match) {
    const alpha = parseFloat(match[1].split(',')[3] ?? '1')
    return alpha === 0
  }
  return false
}

const qrcodeProps = {
  value: { type: String, required: true },
  type: { type: String as PropType<QRCodeType>, default: 'canvas' },
  size: { type: Number, default: 160 },
  color: { type: String, default: '#000000' },
  bgColor: { type: String, default: 'transparent' },
  errorLevel: { type: String as PropType<QRCodeErrorLevel>, default: 'M' },
  status: { type: String as PropType<QRCodeStatus>, default: 'active' },
  icon: { type: String, default: undefined },
  iconSize: {
    type: [Number, Object] as PropType<number | { width: number; height: number }>,
    default: 40,
  },
  bordered: { type: Boolean, default: true },
  statusRender: { type: Function as PropType<QRCodeProps['statusRender']>, default: undefined },
  marginSize: { type: Number, default: undefined },
  classNames: { type: Object as PropType<QRCodeClassNames>, default: undefined },
  styles: { type: Object as PropType<QRCodeStyles>, default: undefined },
} satisfies Record<keyof QRCodeProps, any>

export const QRCode = defineComponent({
  name: 'QRCode',
  props: qrcodeProps,
  emits: ['refresh'],
  setup(props, { attrs, emit }) {
    const prefixCls = usePrefixCls('qrcode')
    const locale = useLocale()
    const canvasRef = ref<HTMLCanvasElement>()

    const matrix = computed(() => {
      if (!props.value) return null
      const m = generateQR(props.value, props.errorLevel)
      if (!m && import.meta.env.DEV) {
        console.warn('[hmfw: QRCode] `value` 超出最大编码容量（version 10），无法生成二维码')
      }
      return m
    })

    const iconSizeValue = computed(() => {
      if (typeof props.iconSize === 'number') {
        return { width: props.iconSize, height: props.iconSize }
      }
      return props.iconSize
    })

    // Warn in dev mode
    if (import.meta.env.DEV) {
      if (props.icon && props.errorLevel === 'L') {
        console.warn(
          '[hmfw: QRCode] ErrorLevel `L` is not recommended to be used with `icon`, for scanning result would be affected by low level.',
        )
      }
    }

    const drawCanvas = () => {
      const canvas = canvasRef.value
      if (!canvas || !matrix.value) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const m = matrix.value
      const size = Math.max(1, props.size)
      // 留白（安静区）：marginSize 以模块数为单位，canvas/SVG 两种渲染均生效
      const margin = props.marginSize ?? 0
      const cellSize = size / (m.length + 2 * margin)
      ctx.clearRect(0, 0, size, size)
      ctx.fillStyle = props.bgColor
      ctx.fillRect(0, 0, size, size)
      ctx.fillStyle = props.color
      m.forEach((row, r) =>
        row.forEach((dark, c) => {
          if (dark) ctx.fillRect((c + margin) * cellSize, (r + margin) * cellSize, cellSize, cellSize)
        }),
      )
      if (props.icon) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = props.icon
        img.onload = () => {
          const iSize = iconSizeValue.value
          const x = (size - iSize.width) / 2
          const y = (size - iSize.height) / 2
          // 挖白背景：bgColor 完全透明时退化白色，否则二维码点会透过图标
          ctx.fillStyle = isTransparentColor(props.bgColor) ? '#ffffff' : props.bgColor
          ctx.fillRect(x - 2, y - 2, iSize.width + 4, iSize.height + 4)
          ctx.drawImage(img, x, y, iSize.width, iSize.height)
        }
      }
    }

    onMounted(() => {
      if (props.type === 'canvas') drawCanvas()
    })
    // flush: 'post'：canvas 元素挂载后才绘制（含 type 从 svg 切回 canvas 的场景）
    watch(
      [
        () => props.value,
        () => props.size,
        () => props.color,
        () => props.bgColor,
        () => props.errorLevel,
        () => props.icon,
        () => props.iconSize,
        () => props.marginSize,
        () => props.type,
      ],
      () => {
        if (props.type === 'canvas') drawCanvas()
      },
      { flush: 'post' },
    )

    const renderSVG = () => {
      const m = matrix.value
      if (!m) return null
      const margin = props.marginSize ?? 0
      const cellSize = 1
      const matrixSize = m.length
      const viewBoxSize = matrixSize + 2 * margin
      const paths: string[] = []

      m.forEach((row, r) => {
        row.forEach((dark, c) => {
          if (dark) {
            paths.push(`M${c + margin},${r + margin}h${cellSize}v${cellSize}h-${cellSize}z`)
          }
        })
      })

      const svgAttrs: Record<string, any> = {
        viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
        width: props.size,
        height: props.size,
        style: { display: 'block' },
      }

      // Pass aria-* and data-* attributes to SVG
      Object.keys(attrs).forEach((key) => {
        if (key.startsWith('aria-') || key.startsWith('data-')) {
          svgAttrs[key] = attrs[key]
        }
      })

      const children = [
        h('rect', {
          x: 0,
          y: 0,
          width: viewBoxSize,
          height: viewBoxSize,
          fill: props.bgColor,
        }),
        h('path', {
          d: paths.join(''),
          fill: props.color,
        }),
      ]

      if (props.icon) {
        const iSize = iconSizeValue.value
        const x = (matrixSize - (iSize.width / props.size) * matrixSize) / 2 + margin
        const y = (matrixSize - (iSize.height / props.size) * matrixSize) / 2 + margin
        const imgW = (iSize.width / props.size) * matrixSize
        const imgH = (iSize.height / props.size) * matrixSize
        children.push(
          h('rect', {
            x: x - 0.1,
            y: y - 0.1,
            width: imgW + 0.2,
            height: imgH + 0.2,
            // 挖白背景：bgColor 完全透明时退化白色，否则二维码点会透过图标
            fill: isTransparentColor(props.bgColor) ? '#ffffff' : props.bgColor,
          }),
          h('image', {
            href: props.icon,
            x,
            y,
            width: imgW,
            height: imgH,
            crossOrigin: 'anonymous',
          }),
        )
      }

      return h('svg', svgAttrs, children)
    }

    const defaultStatusRender = (info: StatusRenderInfo) => {
      if (info.status === 'loading') {
        return <Spin />
      }
      if (info.status === 'expired') {
        return (
          <>
            <p class={`${prefixCls}-expired`}>{info.locale.expired}</p>
            {info.onRefresh && (
              <button type="button" class={`${prefixCls}-refresh`} onClick={info.onRefresh}>
                <ReloadOutlined class="hmfw-icon" style={{ marginRight: '4px' }} />
                {info.locale.refresh}
              </button>
            )}
          </>
        )
      }
      if (info.status === 'scanned') {
        return <p class={`${prefixCls}-scanned`}>{info.locale.scanned}</p>
      }
      return null
    }

    return () => {
      // Return null if value is empty
      if (!props.value) {
        if (import.meta.env.DEV) {
          console.warn('[hmfw: QRCode] need to receive `value` props')
        }
        return null
      }

      // 检测父组件是否监听了 refresh 事件：未监听时不渲染刷新按钮（对齐 AntD）
      const instance = getCurrentInstance()
      const hasRefreshListener = !!instance?.vnode.props?.onRefresh

      const rootClasses = cls(
        prefixCls,
        {
          [`${prefixCls}-borderless`]: !props.bordered,
        },
        props.classNames?.root,
      )

      const canvasAttrs: Record<string, any> = {
        width: props.size,
        height: props.size,
        style: { display: 'block' },
      }

      // Pass aria-* and data-* attributes to canvas
      Object.keys(attrs).forEach((key) => {
        if (key.startsWith('aria-') || key.startsWith('data-')) {
          canvasAttrs[key] = attrs[key]
        }
      })

      return (
        <div
          class={rootClasses}
          style={{
            width: `${props.size}px`,
            height: `${props.size}px`,
            backgroundColor: props.bgColor,
            ...props.styles?.root,
          }}
        >
          {props.type === 'canvas' ? <canvas ref={canvasRef} {...canvasAttrs} /> : renderSVG()}
          {props.status !== 'active' && (
            <div class={cls(`${prefixCls}-cover`, props.classNames?.cover)} style={props.styles?.cover}>
              {(props.statusRender ?? defaultStatusRender)({
                status: props.status as Exclude<QRCodeStatus, 'active'>,
                locale: locale.value.QRCode,
                onRefresh: hasRefreshListener ? () => emit('refresh') : undefined,
              })}
            </div>
          )}
        </div>
      )
    }
  },
})
