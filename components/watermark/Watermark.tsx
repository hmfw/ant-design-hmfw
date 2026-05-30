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
  type InjectionKey,
  type Ref,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import type { WatermarkProps, WatermarkFont } from './types'

const FontGap = 3
const BaseSize = 2
const DEFAULT_GAP_X = 100
const DEFAULT_GAP_Y = 100

interface WatermarkContext {
  add: (ele: HTMLElement) => void
  remove: (ele: HTMLElement) => void
}

const WatermarkContextKey: InjectionKey<WatermarkContext> = Symbol('WatermarkContext')

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

function getClips(
  content: string | string[] | HTMLImageElement,
  rotate: number,
  ratio: number,
  width: number,
  height: number,
  font: Required<WatermarkFont>,
  gapX: number,
  gapY: number,
): [dataURL: string, finalWidth: number] {
  const [ctx, canvas, contentWidth, contentHeight] = prepareCanvas(width, height, ratio)

  if (content instanceof HTMLImageElement) {
    ctx.drawImage(content, 0, 0, contentWidth, contentHeight)
  } else {
    const { color, fontSize, fontStyle, fontWeight, fontFamily, textAlign } = font
    const mergedFontSize = Number(fontSize) * ratio

    ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${height}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textAlign = textAlign
    ctx.textBaseline = 'top'
    const contents = toArray(content)
    contents.forEach((item, index) => {
      ctx.fillText(item ?? '', contentWidth / 2, index * (mergedFontSize + FontGap * ratio))
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
    fCtx.drawImage(
      rCanvas,
      cutLeft,
      cutTop,
      cutWidth,
      cutHeight,
      targetX,
      targetY,
      cutWidth,
      cutHeight,
    )
  }
  drawImg()
  drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2)
  drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2)

  return [fCanvas.toDataURL(), filledWidth / ratio]
}

export const Watermark = defineComponent({
  name: 'Watermark',
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
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('watermark')
    const containerRef = ref<HTMLDivElement>()
    const watermarkRef = ref<HTMLDivElement>()
    const stopObserver = ref<(() => void) | null>(null)
    const base64Url = ref('')
    const markWidthRef = ref(0)

    const parentContext = inject(WatermarkContextKey, null)
    const subElements = ref(new Set<HTMLElement>())

    const [gapX, gapY] = props.gap
    const gapXCenter = gapX / 2
    const gapYCenter = gapY / 2
    const offsetLeft = props.offset?.[0] ?? gapXCenter
    const offsetTop = props.offset?.[1] ?? gapYCenter

    const mergedZIndex = computed(() => props.zIndex ?? 999)

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

      let positionLeft = offsetLeft - gapXCenter
      let positionTop = offsetTop - gapYCenter
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
          return [
            metrics.width,
            metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent,
          ]
        })
        defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])))
        defaultHeight =
          Math.ceil(Math.max(...sizes.map((size) => size[1]))) * contents.length +
          (contents.length - 1) * FontGap
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
            gapX,
            gapY,
          )

          base64Url.value = nextClips
          markWidthRef.value = clipWidth
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

    const appendWatermark = (base64: string, width: number) => {
      if (watermarkRef.value && containerRef.value) {
        watermarkRef.value.setAttribute(
          'style',
          Object.entries({
            ...markStyle.value,
            backgroundImage: `url('${base64}')`,
            backgroundSize: `${Math.floor(width)}px`,
          })
            .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}: ${v};`)
            .join(' '),
        )
        watermarkRef.value.removeAttribute('class')
      }
    }

    const destroyWatermark = () => {
      if (watermarkRef.value && containerRef.value) {
        containerRef.value.removeChild(watermarkRef.value)
        watermarkRef.value = undefined
      }
    }

    const isWatermarkEle = (ele: Node) => ele === watermarkRef.value

    watch([base64Url, markWidthRef], ([url, width]) => {
      if (url && width) {
        appendWatermark(url, width)
      }
    })

    watch(
      () => [
        props.rotate,
        props.width,
        props.height,
        props.image,
        props.content,
        props.font,
        props.gap,
        props.offset,
      ],
      () => {
        renderWatermark()
      },
      { deep: true },
    )

    onMounted(() => {
      if (containerRef.value) {
        const div = document.createElement('div')
        watermarkRef.value = div
        containerRef.value.appendChild(div)
        renderWatermark()

        if (parentContext) {
          parentContext.add(containerRef.value)
        }

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              const removed = Array.from(mutation.removedNodes).some(isWatermarkEle)
              if (removed && watermarkRef.value) {
                containerRef.value?.appendChild(watermarkRef.value)
                renderWatermark()
              }
            }
            if (mutation.type === 'attributes' && isWatermarkEle(mutation.target)) {
              renderWatermark()
            }
          })
        })

        observer.observe(containerRef.value, {
          childList: true,
          attributes: true,
          subtree: true,
        })

        stopObserver.value = () => observer.disconnect()
      }
    })

    onBeforeUnmount(() => {
      stopObserver.value?.()
      if (parentContext && containerRef.value) {
        parentContext.remove(containerRef.value)
      }
      destroyWatermark()
    })

    const context: WatermarkContext = {
      add: (ele: HTMLElement) => {
        subElements.value.add(ele)
      },
      remove: (ele: HTMLElement) => {
        subElements.value.delete(ele)
      },
    }

    if (props.inherit) {
      provide(WatermarkContextKey, context)
    }

    return () => (
      <div
        ref={containerRef}
        class={prefixCls}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {slots.default?.()}
      </div>
    )
  },
})

