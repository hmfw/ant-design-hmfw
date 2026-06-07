import { Modal as OriginModal } from './Modal'
import confirm, { withInfo, withSuccess, withError, withWarn, withConfirm } from './confirm'
import destroyFns from './destroyFns'
import type { ModalFuncProps, ModalFuncReturn } from './types'

type ModalStaticFn = (props: ModalFuncProps) => ModalFuncReturn

type ModalType = typeof OriginModal & {
  info: ModalStaticFn
  success: ModalStaticFn
  error: ModalStaticFn
  warning: ModalStaticFn
  /** @deprecated use `warning` */
  warn: ModalStaticFn
  confirm: ModalStaticFn
  destroyAll: () => void
}

const Modal = OriginModal as ModalType

Modal.info = (props) => confirm(withInfo(props))
Modal.success = (props) => confirm(withSuccess(props))
Modal.error = (props) => confirm(withError(props))
Modal.warning = (props) => confirm(withWarn(props))
Modal.warn = (props) => confirm(withWarn(props))
Modal.confirm = (props) => confirm(withConfirm(props))

Modal.destroyAll = () => {
  while (destroyFns.length) {
    const close = destroyFns.pop()
    close?.()
  }
}

export { Modal }
export type { ModalProps, ModalFuncProps, ModalFuncReturn, ModalContent, ModalWidth, LegacyButtonType } from './types'
