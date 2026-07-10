import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  provide,
  inject,
  type PropType,
  type CSSProperties,
  type InjectionKey,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import type { WatermarkFont } from './types'

/** 多行文本行间距（px） */
const FontGap = 3
const BaseSize = 2
const DEFAULT_GAP_X = 100
const DEFAULT_GAP_Y = 100
const WATERMARK_Z_INDEX_OFFSET = 1

interface WatermarkContext {
  add: (ele: HTMLElement) => void
  remove: (ele: HTMLElement) => void
}

const WatermarkContextKey: InjectionKey<WatermarkContext> = Symbol('WatermarkContext')

// 容器固定样式，被外部篡改后需要还原
const fixedStyle: Record<string, string> = {
  position: 'relative',
  overflow: 'hidden',
}

// 防止外部通过隐藏元素的方式隐藏水印
const emphasizedStyle: Record<string, string> = {
  visibility: 'visible !important',
}

function getPixelRatio() {
  return window.devicePixelRatio || 1
}

function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : val ? [val] : []
}

function getRotatePos(x: number, y: number, angle: number): [number, number] {
  const targetX = x * Math.cos(angle) - y * Math.sin(angle)
  const targetY = x * Math.sin(angle) + y * Math.cos(angle)
  return [targetX, targetY]
}

function getStyleStr(style: Record<string, string | number>): string {
  return Object.keys(style)
    .map((key) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${style[key]};`)
    .join(' ')
}

function prepareCanvas(
  width: number,
  height: number,
  ratio = 1,
): [ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, realWidth: number, realHeight: number] {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const realWidth = width * ratio
  const realHeight = height * ratio
  canvas.setAttribute('width', `${realWidth}px`)
  canvas.setAttribute('height', `${realHeight}px`)
  ctx.save()
  return [ctx, canvas, realWidth, realHeight]
}

/**
 * 计算多行文本的行高（含行间距）
 * 优化：根据字体大小自动调节行间距，确保多行排列更紧凑、居中
 */
function getLineHeight(fontSize: number, ratio: number): number {
  // 行间距为字号的 0.3 倍，最小 FontGap
  const gap = Math.max(FontGap, Math.round(fontSize * 0.3))
  return fontSize * ratio + gap * ratio
}

function getClips(
  content: string | string[] | HTMLImageElement,
  rotate: number,
  ratio: number,
  width: number,
  height: number,
  font: Required<WatermarkFont>,
  gapX: number,
  gapY: number,
): [dataURL: string, finalWidth: number, finalHeight: number] {
  const [ctx, canvas, contentWidth, contentHeight] = prepareCanvas(width, height, ratio)

  if (content instanceof HTMLImageElement) {
    ctx.drawImage(content, 0, 0, contentWidth, contentHeight)
  } else {
    const { color, fontSize, fontStyle, fontWeight, fontFamily, textAlign } = font
    const mergedFontSize = Number(fontSize) * ratio
    const lineHeight = getLineHeight(Number(fontSize), ratio)

    ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${height}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textAlign = textAlign
    ctx.textBaseline = 'top'
    const contents = toArray(content)

    // 计算多行文本总高度，用于垂直居中
    const totalTextHeight = contents.length * mergedFontSize + (contents.length - 1) * (lineHeight - mergedFontSize)
    const startY = (contentHeight - totalTextHeight) / 2

    contents.forEach((item, index) => {
      const y = startY + index * lineHeight
      ctx.fillText(item ?? '', contentWidth / 2, y)
    })
  }

  const angle = (Math.PI / 180) * Number(rotate)
  const maxSize = Math.max(width, height)
  const [rCtx, rCanvas, realMaxSize] = prepareCanvas(maxSize, maxSize, ratio)

  rCtx.translate(realMaxSize / 2, realMaxSize / 2)
  rCtx.rotate(angle)
  if (contentWidth > 0 && contentHeight > 0) {
    rCtx.drawImage(canvas, -contentWidth / 2, -contentHeight / 2)
  }

  let left = 0
  let right = 0
  let top = 0
  let bottom = 0

  const halfWidth = contentWidth / 2
  const halfHeight = contentHeight / 2
  const points = [
    [0 - halfWidth, 0 - halfHeight],
    [0 + halfWidth, 0 - halfHeight],
    [0 + halfWidth, 0 + halfHeight],
    [0 - halfWidth, 0 + halfHeight],
  ]
  points.forEach(([x, y]) => {
    const [targetX, targetY] = getRotatePos(x, y, angle)
    left = Math.min(left, targetX)
    right = Math.max(right, targetX)
    top = Math.min(top, targetY)
    bottom = Math.max(bottom, targetY)
  })

  const cutLeft = left + realMaxSize / 2
  const cutTop = top + realMaxSize / 2
  const cutWidth = right - left
  const cutHeight = bottom - top

  const realGapX = gapX * ratio
  const realGapY = gapY * ratio
  const filledWidth = (cutWidth + realGapX) * BaseSize
  const filledHeight = cutHeight + realGapY

  const [fCtx, fCanvas] = prepareCanvas(filledWidth, filledHeight)

  const drawImg = (targetX = 0, targetY = 0) => {
    fCtx.drawImage(rCanvas, cutLeft, cutTop, cutWidth, cutHeight, targetX, targetY, cutWidth, cutHeight)
  }
  drawImg()
  drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2)
  drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2)

  return [fCanvas.toDataURL(), filledWidth / ratio, filledHeight / ratio]
}

export const Watermark = defineComponent({
  name: 'Watermark',
  inheritAttrs: false,
  props: {
    content: [String, Array] as PropType<string | string[]>,
    width: Number,
    height: Number,
    rotate: { type: Number, default: -22 },
    zIndex: Number,
    image: String,
    font: Object as PropType<WatermarkFont>,
    gap: {
      type: Array as unknown as PropType<[number, number]>,
      default: () => [DEFAULT_GAP_X, DEFAULT_GAP_Y],
    },
    offset: Array as unknown as PropType<[number, number]>,
    inherit: { type: Boolean, default: true },
    onRemove: Function as PropType<() => void>,
  },
  setup(props, { slots, attrs }) {
    const prefixCls = usePrefixCls('watermark')
    const containerRef = ref<HTMLDivElement>()
    // 每个目标容器对应一个水印节点（支持嵌套 Modal/Drawer 等场景）
    const watermarkMap = new Map<HTMLElement, HTMLDivElement>()
    const base64Url = ref('')
    const markWidthRef = ref(0)
    let rafId: number | null = null
    let rafLock = false
    // 标记组件是否正在卸载，避免卸载时触发 onRemove
    let isUnmounting = false

    // 嵌套子元素集合
    const subElements = ref(new Set<HTMLElement>())
    const observers = new Map<HTMLElement, MutationObserver>()

    const parentContext = inject(WatermarkContextKey, null)

    // gap / offset 通过 computed 保持响应性
    const gapX = computed(() => props.gap?.[0] ?? DEFAULT_GAP_X)
    const gapY = computed(() => props.gap?.[1] ?? DEFAULT_GAP_Y)
    const gapXCenter = computed(() => gapX.value / 2)
    const gapYCenter = computed(() => gapY.value / 2)
    const offsetLeft = computed(() => props.offset?.[0] ?? gapXCenter.value)
    const offsetTop = computed(() => props.offset?.[1] ?? gapYCenter.value)

    // 默认 zIndex 与 AntD 对齐：zIndexPopupBase(1000) - WATERMARK_Z_INDEX_OFFSET(1) = 999
    const mergedZIndex = computed(() => props.zIndex ?? 1000 - WATERMARK_Z_INDEX_OFFSET)

    const markStyle = computed(() => {
      const style: Record<string, string | number> = {
        zIndex: mergedZIndex.value,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundRepeat: 'repeat',
      }

      let positionLeft = offsetLeft.value - gapXCenter.value
      let positionTop = offsetTop.value - gapYCenter.value
      if (positionLeft > 0) {
        style.left = `${positionLeft}px`
        style.width = `calc(100% - ${positionLeft}px)`
        positionLeft = 0
      }
      if (positionTop > 0) {
        style.top = `${positionTop}px`
        style.height = `calc(100% - ${positionTop}px)`
        positionTop = 0
      }
      style.backgroundPosition = `${positionLeft}px ${positionTop}px`

      return style
    })

    // 所有需要渲染水印的目标容器
    const targetElements = computed<HTMLElement[]>(() => {
      const list: HTMLElement[] = containerRef.value ? [containerRef.value] : []
      return [...list, ...Array.from(subElements.value)]
    })

    const getMarkSize = (ctx: CanvasRenderingContext2D): [number, number] => {
      let defaultWidth = 120
      let defaultHeight = 64
      if (!props.image && ctx.measureText) {
        const fontSize = Number(props.font?.fontSize ?? 16)
        const fontFamily = props.font?.fontFamily ?? 'sans-serif'
        ctx.font = `${fontSize}px ${fontFamily}`
        const contents = toArray(props.content)
        const sizes = contents.map((item) => {
          const metrics = ctx.measureText(item!)
          return [metrics.width, metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent]
        })
        defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])))
        // 优化多行高度计算：使用 getLineHeight 以获取合适的行间距
        const lineHeight = getLineHeight(fontSize, 1)
        defaultHeight =
          Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
          (contents.length - 1) * (lineHeight - fontSize)
      }
      return [props.width ?? defaultWidth, props.height ?? defaultHeight]
    }

    const renderWatermark = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (ctx) {
        const ratio = getPixelRatio()
        const [markWidth, markHeight] = getMarkSize(ctx)

        const drawCanvas = (drawContent?: string | string[] | HTMLImageElement) => {
          const font: Required<WatermarkFont> = {
            color: props.font?.color ?? 'rgba(0, 0, 0, 0.15)',
            fontSize: Number(props.font?.fontSize ?? 16),
            fontStyle: props.font?.fontStyle ?? 'normal',
            fontWeight: props.font?.fontWeight ?? 'normal',
            fontFamily: props.font?.fontFamily ?? 'sans-serif',
            textAlign: props.font?.textAlign ?? 'center',
          }

          const [nextClips, clipWidth] = getClips(
            drawContent || props.content || '',
            props.rotate,
            ratio,
            markWidth,
            markHeight,
            font,
            gapX.value,
            gapY.value,
          )

          base64Url.value = nextClips
          markWidthRef.value = clipWidth
          // 直接渲染：即使 base64 不变（如被移除后重建）也要重新挂载
          renderAll()
        }

        if (props.image) {
          const img = new Image()
          img.onload = () => {
            drawCanvas(img)
          }
          img.onerror = () => {
            drawCanvas(props.content)
          }
          img.crossOrigin = 'anonymous'
          img.referrerPolicy = 'no-referrer'
          img.src = props.image
        } else {
          drawCanvas(props.content)
        }
      }
    }

    // raf 去抖：同一帧内多次触发只执行一次
    const syncWatermark = () => {
      if (rafLock) {
        return
      }
      rafLock = true
      renderWatermark()
      rafId = requestAnimationFrame(() => {
        rafLock = false
      })
    }

    // 向单个容器追加 / 更新水印节点
    const appendWatermark = (base64: string, width: number, container: HTMLElement) => {
      const exist = watermarkMap.get(container)
      if (!exist) {
        watermarkMap.set(container, document.createElement('div'))
      }
      const watermarkEle = watermarkMap.get(container)!

      watermarkEle.setAttribute(
        'style',
        getStyleStr({
          ...markStyle.value,
          backgroundImage: `url('${base64}')`,
          backgroundSize: `${Math.floor(width)}px`,
          ...emphasizedStyle,
        }),
      )
      // 防止浏览器「隐藏元素」功能隐藏水印
      watermarkEle.removeAttribute('class')
      watermarkEle.removeAttribute('hidden')

      if (watermarkEle.parentElement !== container) {
        if (exist) {
          props.onRemove?.()
        }
        container.append(watermarkEle)
      }
    }

    const removeWatermark = (container: HTMLElement) => {
      const watermarkEle = watermarkMap.get(container)
      if (watermarkEle && container.contains(watermarkEle)) {
        container.removeChild(watermarkEle)
      }
      watermarkMap.delete(container)
    }

    const isWatermarkEle = (ele: Node) => Array.from(watermarkMap.values()).includes(ele as HTMLDivElement)

    const renderAll = () => {
      if (base64Url.value && markWidthRef.value) {
        targetElements.value.forEach((holder) => {
          appendWatermark(base64Url.value, markWidthRef.value, holder)
        })
      }
    }

    watch(targetElements, renderAll)

    watch(
      () => [
        props.rotate,
        props.zIndex,
        props.width,
        props.height,
        props.image,
        props.content,
        props.font,
        props.gap,
        props.offset,
      ],
      () => {
        syncWatermark()
      },
      { deep: true },
    )

    // 增强防删除保护：监听水印 DOM 节点的 removal / attribute change，被删/被改时立刻重建
    const observeTarget = (target: HTMLElement) => {
      if (observers.has(target)) {
        return
      }
      const observer = new MutationObserver((mutations) => {
        // 组件卸载时不处理
        if (isUnmounting) return

        let needRerender = false
        for (const mutation of mutations) {
          // 检测水印节点被移除
          if (mutation.removedNodes.length) {
            if (Array.from(mutation.removedNodes).some(isWatermarkEle)) {
              needRerender = true
              break
            }
          }
          // 检测水印节点属性被篡改（style、class、hidden 等）
          if (mutation.type === 'attributes' && isWatermarkEle(mutation.target)) {
            needRerender = true
            break
          }
          // 检测容器固定样式被篡改
          if (mutation.target === target && mutation.attributeName === 'style' && target === containerRef.value) {
            Object.keys(fixedStyle).forEach((key) => {
              const oriValue = fixedStyle[key]
              const currentValue = (target.style as any)[key]
              if (oriValue && oriValue !== currentValue) {
                ;(target.style as any)[key] = oriValue
              }
            })
          }
        }
        if (needRerender) {
          syncWatermark()
        }
      })
      observer.observe(target, {
        childList: true,
        attributes: true,
        subtree: true,
        // 记录旧属性值，以便检测属性变化
        attributeOldValue: true,
      })
      observers.set(target, observer)
    }

    // 目标容器集合变化时，挂载/卸载对应的观察器
    watch(
      targetElements,
      (next, prev) => {
        const prevList = prev ?? []
        prevList.forEach((el) => {
          if (!next.includes(el)) {
            observers.get(el)?.disconnect()
            observers.delete(el)
          }
        })
        next.forEach(observeTarget)
      },
      { flush: 'post' },
    )

    onMounted(() => {
      if (containerRef.value) {
        renderWatermark()
        observeTarget(containerRef.value)
        renderAll()

        if (parentContext) {
          parentContext.add(containerRef.value)
        }
      }
    })

    onBeforeUnmount(() => {
      isUnmounting = true
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      observers.forEach((observer) => observer.disconnect())
      observers.clear()
      if (parentContext && containerRef.value) {
        parentContext.remove(containerRef.value)
      }
      Array.from(watermarkMap.keys()).forEach(removeWatermark)
    })

    const context: WatermarkContext = {
      add: (ele: HTMLElement) => {
        const clone = new Set(subElements.value)
        clone.add(ele)
        subElements.value = clone
      },
      remove: (ele: HTMLElement) => {
        removeWatermark(ele)
        const clone = new Set(subElements.value)
        clone.delete(ele)
        subElements.value = clone
      },
    }

    if (props.inherit) {
      provide(WatermarkContextKey, context)
    }

    return () => {
      const { class: attrClass, style: attrStyle, ...restAttrs } = attrs as Record<string, unknown>

      // inherit=true 时容器跟随父元素自适应尺寸
      const inheritStyle: Record<string, string> = props.inherit ? { width: '100%', height: '100%' } : {}

      return (
        <div
          {...restAttrs}
          ref={containerRef}
          class={[prefixCls, attrClass]}
          style={[{ ...fixedStyle, ...inheritStyle } as CSSProperties, attrStyle as CSSProperties]}
        >
          {slots.default?.()}
        </div>
      )
    }
  },
})
