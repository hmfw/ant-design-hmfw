import { inject, type InjectionKey } from 'vue'
import type { AppConfig } from './types'
import type { ModalFuncReturn } from '../modal/types'
import { message } from '../message'
import { notification } from '../notification'

const noopModalFunc = (): ModalFuncReturn => ({
  destroy: () => {},
  update: () => {},
})

const defaultModal: AppConfig['modal'] = {
  confirm: noopModalFunc,
  info: noopModalFunc,
  success: noopModalFunc,
  warning: noopModalFunc,
  error: noopModalFunc,
}

export const APP_KEY: InjectionKey<AppConfig> = Symbol('App')

export const defaultAppConfig: AppConfig = {
  message,
  notification,
  modal: defaultModal,
}

export function useApp(): AppConfig {
  return inject(APP_KEY, defaultAppConfig)
}
