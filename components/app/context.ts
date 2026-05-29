import { inject, type InjectionKey } from 'vue'
import type { AppConfig } from './types'
import { message } from '../message'
import { notification } from '../notification'

const noop = () => {}

const defaultModal: AppConfig['modal'] = {
  confirm: noop,
  info: noop,
  success: noop,
  warning: noop,
  error: noop,
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
