import { createApp, h, ref, type App } from 'vue'
import { ConfirmDialog } from './ConfirmDialog'
import destroyFns from './destroyFns'
import type { ModalFuncProps, ModalFuncReturn } from './types'

type ConfigUpdate = ModalFuncProps | ((prev: ModalFuncProps) => ModalFuncProps)

/**
 * Imperatively render a confirm dialog. Mirrors AntD's `Modal.confirm(config)`:
 * returns `{ destroy, update }`. The dialog drives its own open state through a
 * shared ref so close → leave transition → unmount runs cleanly.
 */
export default function confirm(config: ModalFuncProps): ModalFuncReturn {
  const container = document.createDocumentFragment()
  const open = ref(true)
  let currentConfig: ModalFuncProps = { ...config }
  let app: App | null = null

  function destroy() {
    if (app) {
      app.unmount()
      app = null
    }
    const i = destroyFns.indexOf(close)
    if (i !== -1) destroyFns.splice(i, 1)
  }

  // Close starts the leave transition; afterClose (emitted by Modal) tears down
  function close() {
    open.value = false
    currentConfig.afterClose?.()
  }

  function render() {
    app?.unmount()
    app = createApp({
      setup() {
        return () =>
          h(ConfirmDialog, {
            config: currentConfig,
            open: open.value,
            onClose: close,
            onAfterClose: destroy,
          })
      },
    })
    app.mount(container as unknown as Element)
  }

  function update(configUpdate: ConfigUpdate) {
    currentConfig =
      typeof configUpdate === 'function'
        ? (configUpdate as (p: ModalFuncProps) => ModalFuncProps)(currentConfig)
        : { ...currentConfig, ...configUpdate }
  }

  render()
  destroyFns.push(close)

  return { destroy: close, update }
}

export const withInfo = (p: ModalFuncProps): ModalFuncProps => ({ ...p, type: 'info' })
export const withSuccess = (p: ModalFuncProps): ModalFuncProps => ({ ...p, type: 'success' })
export const withError = (p: ModalFuncProps): ModalFuncProps => ({ ...p, type: 'error' })
export const withWarn = (p: ModalFuncProps): ModalFuncProps => ({ ...p, type: 'warning' })
export const withConfirm = (p: ModalFuncProps): ModalFuncProps => ({ ...p, type: 'confirm' })
