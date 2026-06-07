import { defineComponent, type PropType } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'

// 预设图片标识（与 AntD 的 PRESENTED_IMAGE_DEFAULT / PRESENTED_IMAGE_SIMPLE 对应）
export const PRESENTED_IMAGE_DEFAULT = 'default'
export const PRESENTED_IMAGE_SIMPLE = 'simple'

// 默认空状态插画
// 注意：图形配色不再写死，统一通过 CSS 变量驱动（见 style/index.css），
// 以便支持暗黑模式（媒体查询 / 主题类切换）。
// 同时移除固定的 width/height，改由容器高度 + svg { height: 100% } 控制，
// 这样 imageStyle 设置的宽高才能真正作用到默认插画上。
const DefaultEmptyImage = () => (
  <svg viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse class="hmfw-empty-img-shadow" cx="32" cy="33" rx="32" ry="7" />
      <g class="hmfw-empty-img-outline" fill-rule="nonzero">
        <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
        <path
          class="hmfw-empty-img-bg"
          d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
        />
      </g>
    </g>
  </svg>
)

// 简约空状态插画（对应 PRESENTED_IMAGE_SIMPLE）
const SimpleEmptyImage = () => (
  <svg viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <ellipse class="hmfw-empty-img-shadow" cx="32" cy="33" rx="32" ry="7" />
      <g class="hmfw-empty-img-outline" fill-rule="nonzero">
        <path d="M55 12.8 44.9 1.3Q44 0 42.9 0H21.1q-1.2 0-2 1.3L9 12.8V22h46z" />
        <path
          class="hmfw-empty-img-bg"
          d="M41.6 16c0-1.7 1-3 2.2-3H55v18.1c0 2.2-1.3 3.9-3 3.9H12c-1.7 0-3-1.7-3-3.9V13h11.2c1.2 0 2.2 1.3 2.2 3s1 2.9 2.2 2.9h14.8c1.2 0 2.2-1.4 2.2-3"
        />
      </g>
    </g>
  </svg>
)

export const Empty = defineComponent({
  name: 'Empty',
  props: {
    image: {
      type: [String, Boolean] as PropType<string | false>,
      default: undefined,
    },
    imageStyle: Object as PropType<Record<string, string>>,
    // 图片宽度，便于在不传整个 imageStyle 的情况下控制默认图片尺寸
    // 支持数字（按 px 处理）或带单位的字符串
    imageWidth: {
      type: [Number, String] as PropType<number | string>,
      default: undefined,
    },
    // 图片高度，同 imageWidth
    imageHeight: {
      type: [Number, String] as PropType<number | string>,
      default: undefined,
    },
    description: {
      type: [String, Boolean] as PropType<string | false>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('empty')
    const locale = useLocale()

    // 将数字尺寸归一化为带 px 的字符串
    const normalizeSize = (val: number | string | undefined): string | undefined => {
      if (val === undefined) return undefined
      return typeof val === 'number' ? `${val}px` : val
    }

    return () => {
      const showImage = props.image !== false
      const showDescription = props.description !== false
      const isSimple = props.image === PRESENTED_IMAGE_SIMPLE

      // 合并尺寸控制：imageWidth/imageHeight 作为便捷入口，
      // 与 imageStyle 合并，imageStyle 优先级更高
      const sizeStyle: Record<string, string> = {}
      const w = normalizeSize(props.imageWidth)
      const h = normalizeSize(props.imageHeight)
      if (w !== undefined) sizeStyle.width = w
      if (h !== undefined) sizeStyle.height = h
      const mergedImageStyle = { ...sizeStyle, ...props.imageStyle }

      let imageNode: unknown = null
      if (showImage) {
        if (slots.image) {
          // 自定义图片插槽
          imageNode = (
            <div class={`${prefixCls}-image`} style={mergedImageStyle}>
              {slots.image()}
            </div>
          )
        } else if (
          typeof props.image === 'string' &&
          props.image !== PRESENTED_IMAGE_SIMPLE &&
          props.image !== PRESENTED_IMAGE_DEFAULT
        ) {
          // 字符串 URL
          imageNode = (
            <div class={`${prefixCls}-image`} style={mergedImageStyle}>
              <img src={props.image} alt="empty" draggable={false} />
            </div>
          )
        } else {
          // 预设插画
          imageNode = (
            <div class={`${prefixCls}-image`} style={mergedImageStyle}>
              {isSimple ? <SimpleEmptyImage /> : <DefaultEmptyImage />}
            </div>
          )
        }
      }

      const descriptionNode = showDescription && (
        <div class={`${prefixCls}-description`}>
          {slots.description ? slots.description() : (props.description ?? locale.value.Empty.description)}
        </div>
      )

      const footerNode = slots.default && (
        <div class={`${prefixCls}-footer`}>{slots.default()}</div>
      )

      return (
        <div class={cls(prefixCls, { [`${prefixCls}-normal`]: isSimple })}>
          {imageNode}
          {descriptionNode}
          {footerNode}
        </div>
      )
    }
  },
})

// 挂载预设常量（与 AntD 对齐）
;(Empty as any).PRESENTED_IMAGE_DEFAULT = PRESENTED_IMAGE_DEFAULT
;(Empty as any).PRESENTED_IMAGE_SIMPLE = PRESENTED_IMAGE_SIMPLE
