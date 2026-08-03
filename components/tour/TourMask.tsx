import { defineComponent, h, type PropType, type CSSProperties } from 'vue'
import { cls } from '../_utils'
import type { Rect } from './utils'

/** 四周 blocker 的公共属性：透明但接收命中测试，用于拦截高亮区域之外的交互 */
const BLOCKER_PROPS = { fill: 'transparent', 'pointer-events': 'auto' } as const

const tourMaskProps = {
  prefixCls: { type: String, required: true as const },
  maskId: { type: String, required: true as const },
  /** 高亮区域（已含 gap 外扩），为 null 表示无目标元素 —— 此时遮罩为整屏纯色 */
  hole: { type: Object as PropType<(Rect & { radius: number }) | null>, default: null },
  /** 遮罩填充色。默认走组件级 Token，便于整体换肤；`mask.color` 显式指定时覆盖它 */
  fill: { type: String, default: 'var(--hmfw-tour-mask-color)' },
  /** 视口尺寸，用于计算 blocker 矩形（SVG 属性不支持 calc()） */
  viewport: { type: Object as PropType<{ width: number; height: number }>, required: true as const },
  /** 为 true 时整层拦截交互，高亮元素也点不到 */
  disabledInteraction: { type: Boolean, default: false },
  maskStyle: { type: Object as PropType<CSSProperties | undefined>, default: undefined },
  maskClass: { type: String, default: undefined },
}

/**
 * 引导遮罩层。
 *
 * SVG `<mask>` 只负责**视觉**挖洞，不影响命中测试 —— 因此遮罩层本身设为
 * `pointer-events: none`，再用四块透明 blocker 矩形（上/左/下/右）拦截高亮区域之外的交互。
 * 这样高亮元素默认可点击，与 AntD `disabledInteraction: false` 的默认行为一致。
 */
export const TourMask = defineComponent({
  name: 'TourMask',
  props: tourMaskProps,
  setup(props) {
    return () => {
      const { prefixCls, maskId, hole, fill, viewport, disabledInteraction } = props

      return h(
        'div',
        {
          class: cls(`${prefixCls}-mask`, props.maskClass),
          style: {
            // 有高亮区域且未禁用交互时放行命中测试，交由 blocker 精确拦截
            pointerEvents: hole && !disabledInteraction ? 'none' : 'auto',
            ...props.maskStyle,
          },
        },
        [
          h('svg', { class: `${prefixCls}-mask-svg`, width: '100%', height: '100%' }, [
            h('defs', [
              h('mask', { id: maskId }, [
                h('rect', { x: 0, y: 0, width: '100%', height: '100%', fill: 'white' }),
                hole &&
                  h('rect', {
                    x: hole.left,
                    y: hole.top,
                    width: hole.width,
                    height: hole.height,
                    rx: hole.radius,
                    fill: 'black',
                  }),
              ]),
            ]),
            h('rect', { x: 0, y: 0, width: '100%', height: '100%', fill, mask: `url(#${maskId})` }),

            // 四周 blocker：仅在「有高亮区域且允许交互」时需要，用于把点击拦在高亮区域之外
            hole &&
              !disabledInteraction &&
              h('g', { class: `${prefixCls}-mask-blockers` }, [
                // 上
                h('rect', { ...BLOCKER_PROPS, x: 0, y: 0, width: '100%', height: Math.max(hole.top, 0) }),
                // 左
                h('rect', { ...BLOCKER_PROPS, x: 0, y: 0, width: Math.max(hole.left, 0), height: '100%' }),
                // 下
                h('rect', {
                  ...BLOCKER_PROPS,
                  x: 0,
                  y: hole.top + hole.height,
                  width: '100%',
                  height: Math.max(viewport.height - hole.top - hole.height, 0),
                }),
                // 右
                h('rect', {
                  ...BLOCKER_PROPS,
                  x: hole.left + hole.width,
                  y: 0,
                  width: Math.max(viewport.width - hole.left - hole.width, 0),
                  height: '100%',
                }),
              ]),
          ]),
        ],
      )
    }
  },
})

export default TourMask
