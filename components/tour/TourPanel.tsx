import { defineComponent, h, type PropType, type VNode } from 'vue'
import { cls } from '../_utils/cls'
import { Button } from '../button'
import type { Locale } from '../_locale/types'
import type { TourClassNames, TourStep, TourStyles, TourProps } from './types'
import { isRenderable, omitButtonProps, renderContent } from './utils'

const tourPanelProps = {
  prefixCls: { type: String, required: true as const },
  step: { type: Object as PropType<TourStep>, required: true as const },
  current: { type: Number, required: true as const },
  total: { type: Number, required: true as const },
  /** 合并后的类型（步骤级优先于 Tour 级） */
  isPrimary: { type: Boolean, default: false },
  /** 已解析的关闭图标，`null` 表示不渲染关闭按钮 */
  closeIcon: { type: [Object, String, Number] as PropType<VNode | string | number | null>, default: null },
  indicatorsRender: { type: Function as PropType<TourProps['indicatorsRender']>, default: undefined },
  locale: { type: Object as PropType<Locale>, required: true as const },
  /** 无障碍关联用的 id 前缀，供 aria-labelledby / aria-describedby 引用 */
  idPrefix: { type: String, required: true as const },
  panelClassNames: { type: Object as PropType<TourClassNames | undefined>, default: undefined },
  panelStyles: { type: Object as PropType<TourStyles | undefined>, default: undefined },
}

/**
 * 引导卡片内容面板：关闭按钮 / 封面 / 标题 / 描述 / 底部（指示器 + 操作按钮）。
 *
 * 只负责内容渲染，定位、遮罩、状态编排都在 `Tour.tsx`。
 */
export const TourPanel = defineComponent({
  name: 'TourPanel',
  props: tourPanelProps,
  emits: ['close', 'prev', 'next', 'goTo'],
  setup(props, { emit }) {
    return () => {
      const { prefixCls, step, current, total, isPrimary, locale, idPrefix } = props
      const classNames = props.panelClassNames
      const styles = props.panelStyles
      const isLast = current === total - 1

      return h(
        'div',
        {
          class: cls(`${prefixCls}-popover-inner`, classNames?.popoverInner),
          style: styles?.popoverInner,
        },
        [
          // 关闭按钮
          props.closeIcon !== null &&
            h(
              'button',
              {
                type: 'button',
                class: cls(`${prefixCls}-close`, classNames?.close),
                style: styles?.close,
                onClick: () => emit('close'),
                'aria-label': locale.common.close,
              },
              [props.closeIcon],
            ),

          // 封面：字符串按图片 src 处理，其余按可渲染内容
          isRenderable(step.cover) &&
            h('div', { class: cls(`${prefixCls}-cover`, classNames?.cover), style: styles?.cover }, [
              typeof step.cover === 'string' ? h('img', { src: step.cover, alt: '' }) : renderContent(step.cover),
            ]),

          // 标题
          isRenderable(step.title) &&
            h(
              'div',
              {
                id: `${idPrefix}-title`,
                class: cls(`${prefixCls}-title`, classNames?.title),
                style: styles?.title,
              },
              [renderContent(step.title)],
            ),

          // 描述
          isRenderable(step.description) &&
            h(
              'div',
              {
                id: `${idPrefix}-description`,
                class: cls(`${prefixCls}-description`, classNames?.description),
                style: styles?.description,
              },
              [renderContent(step.description)],
            ),

          // 底部
          h('div', { class: cls(`${prefixCls}-footer`, classNames?.footer), style: styles?.footer }, [
            total > 1 &&
              h(
                'div',
                {
                  class: cls(`${prefixCls}-indicators`, classNames?.indicators),
                  style: styles?.indicators,
                },
                [
                  props.indicatorsRender
                    ? props.indicatorsRender(current, total)
                    : Array.from({ length: total }, (_, i) =>
                        // 用 button 而非 span：指示器可点击跳步，需要可聚焦与键盘可达
                        h('button', {
                          key: i,
                          type: 'button',
                          class: cls(
                            `${prefixCls}-indicator`,
                            { [`${prefixCls}-indicator-active`]: i === current },
                            classNames?.indicator,
                          ),
                          style: styles?.indicator,
                          'aria-label': `${i + 1} / ${total}`,
                          'aria-current': i === current ? 'step' : undefined,
                          onClick: () => emit('goTo', i),
                        }),
                      ),
                ],
              ),

            h('div', { class: cls(`${prefixCls}-buttons`, classNames?.buttons), style: styles?.buttons }, [
              current > 0 &&
                h(
                  Button,
                  {
                    size: 'small',
                    type: 'default',
                    ghost: isPrimary,
                    class: cls(`${prefixCls}-prev-btn`, classNames?.prevBtn),
                    style: styles?.prevBtn,
                    onClick: () => {
                      step.prevButtonProps?.onClick?.()
                      emit('prev')
                    },
                    // 排除 children/onClick：前者由插槽渲染，后者已包裹处理，
                    // 透传到 DOM <button> 会触发 Vue 设置只读 children 属性的告警
                    ...omitButtonProps(step.prevButtonProps),
                  },
                  { default: () => step.prevButtonProps?.children ?? locale.Tour.previous },
                ),
              h(
                Button,
                {
                  size: 'small',
                  // primary 类型卡片底色已是主题色，主按钮改用 default + ghost 保证对比度
                  type: isPrimary ? 'default' : 'primary',
                  ghost: isPrimary,
                  class: cls(`${prefixCls}-next-btn`, classNames?.nextBtn),
                  style: styles?.nextBtn,
                  onClick: () => {
                    step.nextButtonProps?.onClick?.()
                    emit('next')
                  },
                  ...omitButtonProps(step.nextButtonProps),
                },
                {
                  default: () => step.nextButtonProps?.children ?? (isLast ? locale.Tour.finish : locale.Tour.next),
                },
              ),
            ]),
          ]),
        ],
      )
    }
  },
})

export default TourPanel
