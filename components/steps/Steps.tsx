import { defineComponent, computed, type PropType, type VNode, h } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { CheckOutlined, CloseOutlined } from '../icon/icons'
import type { StepItem, StepStatus, IconRenderInfo } from './types'
import { ProgressIcon } from './ProgressIcon'
import { PanelArrow } from './PanelArrow'

export const Steps = defineComponent({
  name: 'Steps',
  props: {
    current: { type: Number, default: 0 },
    initial: { type: Number, default: 0 },
    items: { type: Array as PropType<StepItem[]>, default: () => [] },
    direction: { type: String as PropType<'horizontal' | 'vertical'> },
    orientation: { type: String as PropType<'horizontal' | 'vertical'> },
    size: { type: String as PropType<'default' | 'small'>, default: 'default' },
    status: { type: String as PropType<StepStatus>, default: 'process' },
    type: {
      type: String as PropType<'default' | 'navigation' | 'inline' | 'panel' | 'dot'>,
      default: 'default',
    },
    labelPlacement: { type: String as PropType<'horizontal' | 'vertical'> },
    titlePlacement: { type: String as PropType<'horizontal' | 'vertical'> },
    progressDot: {
      type: [Boolean, Function] as PropType<boolean | ((iconDot: VNode, info: IconRenderInfo) => VNode)>,
    },
    variant: { type: String as PropType<'filled' | 'outlined'>, default: 'filled' },
    percent: Number,
    responsive: { type: Boolean, default: true },
    ellipsis: Boolean,
    offset: { type: Number, default: 0 },
    iconRender: Function as PropType<(oriNode: VNode, info: IconRenderInfo) => VNode>,
    classNames: Object as PropType<import('./types').StepsClassNames>,
    styles: Object as PropType<import('./types').StepsStyles>,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('steps')

    // Merge type from progressDot
    const mergedType = computed(() => {
      if (props.type && props.type !== 'default') {
        return props.type
      }
      if (props.progressDot) {
        return 'dot'
      }
      return props.type
    })

    const isDot = computed(() => mergedType.value === 'dot' || mergedType.value === 'inline')
    const isInline = computed(() => mergedType.value === 'inline')

    // Merge orientation
    const mergedOrientation = computed(() => {
      const nextOrientation = props.orientation || props.direction
      if (mergedType.value === 'panel') {
        return 'horizontal'
      }
      return nextOrientation === 'vertical' ? 'vertical' : 'horizontal'
    })

    // Merge titlePlacement
    const mergedTitlePlacement = computed(() => {
      if (isDot.value || mergedOrientation.value === 'vertical') {
        return mergedOrientation.value === 'vertical' ? 'horizontal' : 'vertical'
      }
      if (props.type === 'navigation') {
        return 'horizontal'
      }
      return props.titlePlacement || props.labelPlacement || 'horizontal'
    })

    // Merge percent (inline type doesn't show percent)
    const mergedPercent = computed(() => (isInline.value ? undefined : props.percent))

    const getStepStatus = (index: number, item: StepItem): StepStatus => {
      if (item.status) return item.status
      const adjustedIndex = index + props.initial
      if (adjustedIndex < props.current) return 'finish'
      if (adjustedIndex === props.current) return props.status
      return 'wait'
    }

    const renderIcon = (index: number, status: StepStatus, item: StepItem): VNode => {
      const itemIconCls = `${prefixCls}-item-icon`
      let iconContent: VNode | null = null

      if (isDot.value || item.icon) {
        iconContent = item.icon || h('span', { class: `${prefixCls}-icon-dot` })
      } else {
        switch (status) {
          case 'finish':
            iconContent = h(Icon, { component: CheckOutlined, class: `${itemIconCls}-finish` })
            break
          case 'error':
            iconContent = h(Icon, { component: CloseOutlined, class: `${itemIconCls}-error` })
            break
          default: {
            const numContent = h('span', { class: `${itemIconCls}-number` }, index + props.initial + 1)

            if (status === 'process' && mergedPercent.value !== undefined) {
              iconContent = h(ProgressIcon, { prefixCls, percent: mergedPercent.value }, { default: () => numContent })
            } else {
              iconContent = numContent
            }
          }
        }
      }

      let iconNode: VNode = iconContent

      // Custom iconRender
      if (props.iconRender) {
        const info: IconRenderInfo = {
          index,
          active: index + props.initial === props.current,
          item: { ...item, status },
        }
        iconNode = props.iconRender(iconNode, info)
      } else if (typeof props.progressDot === 'function') {
        const info: IconRenderInfo = {
          index,
          active: index + props.initial === props.current,
          item: { ...item, status },
        }
        iconNode = props.progressDot(iconNode, info)
      }

      return iconNode
    }

    const handleStepClick = (index: number, item: StepItem, e: MouseEvent) => {
      if (item.disabled) return
      if (item.onClick) {
        item.onClick(e)
      }
      const adjustedIndex = index + props.initial
      if (adjustedIndex !== props.current) {
        emit('change', adjustedIndex)
      }
    }

    return () => {
      const items = props.items ?? []

      return (
        <div
          class={cls(
            prefixCls,
            `${prefixCls}-${mergedOrientation.value}`,
            `${prefixCls}-${props.variant}`,
            {
              [`${prefixCls}-${props.size}`]: props.size !== 'default',
              [`${prefixCls}-label-${mergedTitlePlacement.value}`]: mergedTitlePlacement.value !== 'horizontal',
              [`${prefixCls}-dot`]: isDot.value,
              [`${prefixCls}-navigation`]: props.type === 'navigation',
              [`${prefixCls}-inline`]: isInline.value,
              [`${prefixCls}-panel`]: mergedType.value === 'panel',
              [`${prefixCls}-with-progress`]: mergedPercent.value !== undefined,
              [`${prefixCls}-ellipsis`]: props.ellipsis,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
          role="list"
          aria-label="步骤条"
        >
          {items.map((item, index) => {
            const status = getStepStatus(index, item)
            const icon = renderIcon(index, status, item)
            const isClickable = !item.disabled
            const content = item.content || item.description

            return (
              <div
                key={index}
                class={cls(
                  `${prefixCls}-item`,
                  `${prefixCls}-item-${status}`,
                  {
                    [`${prefixCls}-item-disabled`]: item.disabled,
                    [`${prefixCls}-item-active`]: index + props.initial === props.current,
                  },
                  props.classNames?.item,
                )}
                style={props.styles?.item}
                role="listitem"
                aria-current={index + props.initial === props.current ? 'step' : undefined}
                aria-disabled={item.disabled || undefined}
                onClick={(e) => isClickable && handleStepClick(index, item, e)}
              >
                <div
                  class={cls(`${prefixCls}-item-container`, props.classNames?.container)}
                  style={props.styles?.container}
                >
                  <div class={cls(`${prefixCls}-item-tail`, props.classNames?.tail)} style={props.styles?.tail} />
                  <div class={cls(`${prefixCls}-item-icon`, props.classNames?.icon)} style={props.styles?.icon}>
                    {icon}
                  </div>
                  <div
                    class={cls(`${prefixCls}-item-content`, props.classNames?.content)}
                    style={props.styles?.content}
                  >
                    <div class={cls(`${prefixCls}-item-title`, props.classNames?.title)} style={props.styles?.title}>
                      {item.title}
                      {item.subTitle && (
                        <span
                          class={cls(`${prefixCls}-item-subtitle`, props.classNames?.subtitle)}
                          style={props.styles?.subtitle}
                        >
                          {item.subTitle}
                        </span>
                      )}
                    </div>
                    {content && (
                      <div
                        class={cls(`${prefixCls}-item-description`, props.classNames?.description)}
                        style={props.styles?.description}
                      >
                        {content}
                      </div>
                    )}
                  </div>
                </div>
                {mergedType.value === 'panel' && <PanelArrow prefixCls={prefixCls} />}
              </div>
            )
          })}
        </div>
      )
    }
  },
})
