import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'

export const Watermark = defineComponent({
  name: 'Watermark',
  props: {
    content: [String, Array] as PropType<string | string[]>,
    width: { type: Number, default: 120 },
    height: { type: Number, default: 64 },
    rotate: { type: Number, default: -22 },
    zIndex: { type: Number, default: 9 },
    image: String,
    font: Object as PropType<{
      color?: string
      fontSize?: number
      fontWeight?: string | number
      fontFamily?: string
      fontStyle?: string
    }>,
    gap: { type: Array as unknown as PropType<[number, number]>, default: () => [100, 100] },
    offset: Array as unknown as PropType<[number, number]>,
    inherit: { type: Boolean, default: true },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('watermark')

    const backgroundImage = computed(() => {
      const canvas = document.createElement('canvas')
      const ratio = window.devicePixelRatio || 1
      const [gapX, gapY] = props.gap
      const canvasWidth = (props.width + gapX) * ratio
      const canvasHeight = (props.height + gapY) * ratio
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      const ctx = canvas.getContext('2d')
      if (!ctx) return ''

      ctx.scale(ratio, ratio)
      ctx.translate(props.width / 2 + gapX / 2, props.height / 2 + gapY / 2)
      ctx.rotate((props.rotate * Math.PI) / 180)

      const font = props.font ?? {}
      ctx.font = `${font.fontStyle ?? 'normal'} ${font.fontWeight ?? 'normal'} ${font.fontSize ?? 14}px ${font.fontFamily ?? 'sans-serif'}`
      ctx.fillStyle = font.color ?? 'rgba(0, 0, 0, 0.15)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      if (props.image) {
        const img = new Image()
        img.src = props.image
        ctx.drawImage(img, -props.width / 2, -props.height / 2, props.width, props.height)
      } else {
        const lines = Array.isArray(props.content) ? props.content : [props.content ?? '']
        const lineHeight = (font.fontSize ?? 14) * 1.5
        const totalHeight = lines.length * lineHeight
        lines.forEach((line, i) => {
          ctx.fillText(line, 0, -totalHeight / 2 + i * lineHeight + lineHeight / 2)
        })
      }

      return `url(${canvas.toDataURL()})`
    })

    return () => (
      <div class={prefixCls} style={{ position: 'relative' }}>
        {slots.default?.()}
        <div
          class={`${prefixCls}-wrapper`}
          style={{
            backgroundImage: backgroundImage.value,
            backgroundSize: `${props.width + props.gap[0]}px ${props.height + props.gap[1]}px`,
            zIndex: props.zIndex,
          }}
        />
      </div>
    )
  },
})
