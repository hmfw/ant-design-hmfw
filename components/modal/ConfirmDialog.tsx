import { defineComponent, computed, ref, isVNode, type PropType, type VNode } from 'vue'
import { Modal } from './Modal'
import { Button } from '../button'
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@hmfw/icons'
import { useLocale } from '../config-provider'
import { cls } from '../_utils'
import type { IconComponent } from '@hmfw/icons'
import type { ModalFuncProps, ModalContent } from './types'

const ICON_MAP: Record<string, IconComponent> = {
  info: InfoCircleFilled,
  success: CheckCircleFilled,
  error: CloseCircleFilled,
  warning: ExclamationCircleFilled,
  confirm: ExclamationCircleFilled,
}

function renderNode(content: ModalContent | IconComponent | undefined): VNode | string | number | undefined {
  if (content == null || content === '') return undefined
  if (typeof content === 'function') return (content as () => VNode | string)()
  return content as VNode | string | number
}

export const ConfirmDialog = defineComponent({
  name: 'ConfirmDialog',
  props: {
    config: { type: Object as PropType<ModalFuncProps>, required: true },
    open: { type: Boolean, default: true },
  },
  emits: ['close', 'afterClose'],
  setup(props, { emit }) {
    const locale = useLocale()
    const confirmLoading = ref(false)

    const cfg = computed(() => props.config)
    const type = computed(() => cfg.value.type ?? 'confirm')
    // okCancel defaults to true only for confirm; info/success/error/warning show just OK
    const okCancel = computed(() => cfg.value.okCancel ?? type.value === 'confirm')

    const mergedIcon = computed<IconComponent | VNode | null>(() => {
      if (cfg.value.icon === null) return null
      if (cfg.value.icon && (isVNode(cfg.value.icon) || typeof cfg.value.icon !== 'function')) {
        return cfg.value.icon as VNode
      }
      return (cfg.value.icon as IconComponent) ?? ICON_MAP[type.value]
    })

    const okText = computed(
      () => cfg.value.okText ?? (okCancel.value ? locale.value.Modal.okText : locale.value.Modal.justOkText),
    )
    const cancelText = computed(() => cfg.value.cancelText ?? locale.value.Modal.cancelText)

    const handleOk = async (e: MouseEvent) => {
      const ret = cfg.value.onOk?.(e)
      // Promise-returning onOk → keep OK button loading until it settles
      if (ret && typeof (ret as Promise<unknown>).then === 'function') {
        confirmLoading.value = true
        try {
          await ret
          emit('close')
        } catch {
          // keep dialog open on rejection (parity with AntD)
        } finally {
          confirmLoading.value = false
        }
      } else {
        emit('close')
      }
    }

    const handleCancel = (e?: MouseEvent) => {
      cfg.value.onCancel?.(e)
      emit('close')
    }

    // CONFIRM_RENDER
    return () => {
      const c = cfg.value
      const confirmPrefixCls = 'hmfw-modal-confirm'
      const iconComp = mergedIcon.value
      const titleNode = renderNode(c.title)
      const isDangerOk = c.okType === 'danger'

      const okBtn = (
        <Button
          type={(isDangerOk ? 'primary' : (c.okType ?? 'primary')) as any}
          danger={isDangerOk || c.okButtonProps?.danger}
          loading={confirmLoading.value}
          {...c.okButtonProps}
          onClick={handleOk}
        >
          {okText.value}
        </Button>
      )
      const cancelBtn = okCancel.value ? (
        <Button {...c.cancelButtonProps} onClick={handleCancel}>
          {cancelText.value}
        </Button>
      ) : null

      return (
        <Modal
          open={props.open}
          title={null as any}
          footer={null}
          closable={c.closable ?? false}
          maskClosable={c.maskClosable ?? false}
          keyboard={c.keyboard ?? true}
          mask={c.mask ?? true}
          centered={c.centered}
          width={c.width ?? 416}
          zIndex={c.zIndex}
          wrapClassName={c.wrapClassName}
          classNames={{ root: c.className }}
          getContainer={c.getContainer}
          onCancel={(e: MouseEvent) => handleCancel(e)}
          onAfterClose={() => emit('afterClose')}
        >
          <div class={cls(confirmPrefixCls, `${confirmPrefixCls}-${type.value}`)}>
            <div
              class={cls(`${confirmPrefixCls}-body`, {
                [`${confirmPrefixCls}-no-icon`]: !iconComp,
              })}
            >
              {iconComp && (
                <span class={`${confirmPrefixCls}-icon`}>
                  {isVNode(iconComp)
                    ? iconComp
                    : (() => {
                        const C = iconComp as IconComponent
                        return <C class="hmfw-icon" />
                      })()}
                </span>
              )}
              <div class={`${confirmPrefixCls}-paragraph`}>
                {titleNode != null && <span class={`${confirmPrefixCls}-title`}>{titleNode}</span>}
                <div class={`${confirmPrefixCls}-content`}>{renderNode(c.content)}</div>
              </div>
            </div>
            <div class={`${confirmPrefixCls}-btns`}>
              {cancelBtn}
              {okBtn}
            </div>
          </div>
        </Modal>
      )
    }
  },
})
