import { defineComponent, ref, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Button } from '../button'
import { DownOutlined } from '@hmfw/icons'
import { Dropdown } from './Dropdown'
import type { DropdownProps } from './types'
import type { ButtonType } from '../button/types'

export interface DropdownButtonProps extends DropdownProps {
  type?: ButtonType
  danger?: boolean
  loading?: boolean
  icon?: any
  onClick?: (e: MouseEvent) => void
  buttonsRender?: (buttons: [any, any]) => [any, any]
}

export const DropdownButton = defineComponent({
  name: 'DropdownButton',
  props: {
    type: { type: String as PropType<ButtonType>, default: 'default' },
    danger: Boolean,
    disabled: Boolean,
    loading: Boolean,
    icon: Object,
    onClick: Function as PropType<(e: MouseEvent) => void>,
    buttonsRender: Function as PropType<(buttons: [any, any]) => [any, any]>,
    // Dropdown props
    menu: Object as PropType<DropdownProps['menu']>,
    trigger: { type: [String, Array] as PropType<DropdownProps['trigger']>, default: 'hover' },
    placement: { type: String as PropType<DropdownProps['placement']>, default: 'bottomRight' },
    open: { type: Boolean, default: undefined },
    arrow: [Boolean, Object] as PropType<DropdownProps['arrow']>,
    overlayClassName: String,
    overlayStyle: Object,
    getPopupContainer: Function,
    mouseEnterDelay: Number,
    mouseLeaveDelay: Number,
    destroyPopupOnHide: Boolean,
    destroyOnHidden: { type: Boolean, default: undefined },
    /** 弹层最小宽度。true 匹配整个按钮组宽度，number 指定固定值，false 不限制 */
    matchWidth: { type: [Boolean, Number] as PropType<boolean | number>, default: true },
  },
  emits: ['update:open', 'openChange', 'click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('dropdown-button')
    const wrapperRef = ref<HTMLElement>()

    // matchWidth 为 true 时，匹配整个按钮组宽度（而非仅箭头按钮）
    const resolvedMatchWidth = computed(() => {
      if (typeof props.matchWidth === 'number') return props.matchWidth
      if (!props.matchWidth) return false
      return wrapperRef.value?.offsetWidth ?? true
    })

    const handleClick = (e: MouseEvent) => {
      emit('click', e)
      props.onClick?.(e)
    }

    return () => {
      const leftButton = (
        <Button
          type={props.type}
          danger={props.danger}
          disabled={props.disabled}
          loading={props.loading}
          onClick={handleClick}
          classNames={{ root: `${prefixCls}-left` }}
        >
          {slots.default?.()}
        </Button>
      )

      const iconNode = props.icon || <DownOutlined class="hmfw-icon" />
      const rightButton = (
        <Button
          type={props.type}
          danger={props.danger}
          disabled={props.disabled}
          classNames={{ root: `${prefixCls}-right` }}
        >
          {iconNode}
        </Button>
      )

      const [leftRendered, rightRendered] = props.buttonsRender
        ? props.buttonsRender([leftButton, rightButton])
        : [leftButton, rightButton]

      return (
        <div ref={wrapperRef} class={cls(prefixCls)}>
          {leftRendered}
          <Dropdown
            menu={props.menu}
            trigger={props.disabled ? [] : props.trigger}
            placement={props.placement}
            open={props.open}
            arrow={props.arrow}
            overlayClassName={props.overlayClassName}
            overlayStyle={props.overlayStyle}
            getPopupContainer={props.getPopupContainer as any}
            mouseEnterDelay={props.mouseEnterDelay}
            mouseLeaveDelay={props.mouseLeaveDelay}
            destroyPopupOnHide={props.destroyPopupOnHide}
            destroyOnHidden={props.destroyOnHidden}
            matchWidth={resolvedMatchWidth.value}
            onUpdate:open={(v) => emit('update:open', v)}
            onOpenChange={(v, info) => emit('openChange', v, info)}
          >
            {rightRendered}
          </Dropdown>
        </div>
      )
    }
  },
})
