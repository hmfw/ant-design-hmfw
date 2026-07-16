import { defineComponent, computed, type PropType, type VNode, h } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CheckOutlined, CloseOutlined } from '@hmfw/icons'
import type {
  StepItem,
  StepStatus,
  IconRenderInfo,
  IconRenderType,
  StepsClassNames,
  StepsStyles,
  StepsProps,
} from './types'
import type { ComponentSize } from '../config-provider'

// 使用 satisfies 确保 props 定义与 StepsProps 接口严格一致
const stepsProps = {
  current: { type: Number, default: 0 },
  initial: { type: Number, default: 0 },
  items: { type: Array as PropType<StepItem[]>, default: () => [] },
  orientation: { type: String as PropType<'horizontal' | 'vertical'>, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  status: { type: String as PropType<StepStatus>, default: 'process' },
  type: { type: String as PropType<'default' | 'inline' | 'dot'>, default: 'default' },
  titlePlacement: { type: String as PropType<'horizontal' | 'vertical'>, default: undefined },
  variant: { type: String as PropType<'filled' | 'outlined'>, default: 'filled' },
  responsive: { type: Boolean, default: true },
  ellipsis: { type: Boolean, default: false },
  iconRender: { type: Function as PropType<IconRenderType>, default: undefined },
  classNames: { type: Object as PropType<StepsClassNames>, default: undefined },
  styles: { type: Object as PropType<StepsStyles>, default: undefined },
} satisfies Record<keyof StepsProps, any>

export const Steps = defineComponent({
  name: 'Steps',
  props: stepsProps,
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('steps')

    const isDot = computed(() => props.type === 'dot' || props.type === 'inline')
    const isInline = computed(() => props.type === 'inline')

    const mergedOrientation = computed(() => props.orientation || 'horizontal')

    /**
     * 合并 titlePlacement：
     * - dot 或 inline 模式：跟随 direction（垂直条 → 水平标签，水平条 → 垂直标签）
     * - 垂直方向：强制标签水平放置
     * - 其他情况：使用用户指定的 titlePlacement 或默认水平
     */
    const mergedTitlePlacement = computed(() => {
      if (isDot.value || mergedOrientation.value === 'vertical') {
        return mergedOrientation.value === 'vertical' ? 'horizontal' : 'vertical'
      }
      return props.titlePlacement || 'horizontal'
    })

    /**
     * 根据 index + initial 偏移量与 current 比较，确定步骤状态。
     * 优先使用 item 自身的 status，否则按顺序推断。
     */
    const getStepStatus = (index: number, item: StepItem): StepStatus => {
      if (item.status) return item.status
      const adjustedIndex = index + props.initial
      if (adjustedIndex < props.current) return 'finish'
      if (adjustedIndex === props.current) return props.status
      return 'wait'
    }

    /**
     * 渲染步骤图标：
     * 1. dot 模式或用户提供了自定义 icon → 渲染 dot/自定义 icon
     * 2. 非 dot 模式 → 根据状态渲染 ✓ / ✗ / 序号
     * 3. 如果传了 iconRender，调用自定义渲染函数
     */
    const renderIcon = (index: number, status: StepStatus, item: StepItem): VNode => {
      const itemIconCls = `${prefixCls}-item-icon`
      let iconContent: VNode

      // 1. dot 模式或自定义 icon
      if (isDot.value || item.icon) {
        iconContent = item.icon || h('span', { class: `${prefixCls}-icon-dot` })
      } else {
        // 2. 根据状态渲染默认图标
        switch (status) {
          case 'finish':
            iconContent = h(CheckOutlined, { class: cls('hmfw-icon', `${itemIconCls}-finish`) })
            break
          case 'error':
            iconContent = h(CloseOutlined, { class: cls('hmfw-icon', `${itemIconCls}-error`) })
            break
          default: {
            iconContent = h('span', { class: `${itemIconCls}-number` }, index + props.initial + 1)
          }
        }
      }

      let iconNode: VNode = iconContent

      // 3. 自定义 iconRender 回调
      if (props.iconRender) {
        const info: IconRenderInfo = {
          index,
          active: index + props.initial === props.current,
          item: { ...item, status },
        }
        iconNode = props.iconRender(iconNode, info)
      }

      return iconNode
    }

    /**
     * 处理步骤点击事件：
     * - 禁用项忽略点击
     * - 触发 item 级别的 onClick 回调（如果有）
     * - 若步骤不是当前步骤，emit 'change' 事件
     *
     * @todo 添加键盘无障碍支持（Enter/Space 触发点击、Tab 导航）
     */
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
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-label-${mergedTitlePlacement.value}`]: mergedTitlePlacement.value !== 'horizontal',
              [`${prefixCls}-dot`]: isDot.value,
              [`${prefixCls}-inline`]: isInline.value,
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
            const content = item.content

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
                <div class={cls(`${prefixCls}-item-header`, props.classNames?.header)} style={props.styles?.header}>
                  <div class={cls(`${prefixCls}-item-icon`, props.classNames?.icon)} style={props.styles?.icon}>
                    {icon}
                  </div>
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
                  <div class={cls(`${prefixCls}-item-tail`, props.classNames?.tail)} style={props.styles?.tail} />
                </div>
                <div class={cls(`${prefixCls}-item-content`, props.classNames?.content)} style={props.styles?.content}>
                  <div
                    class={cls(`${prefixCls}-item-icon`, `${prefixCls}-item-icon-placeholder`, props.classNames?.icon)}
                    style={props.styles?.icon}
                  />
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
            )
          })}
        </div>
      )
    }
  },
})
