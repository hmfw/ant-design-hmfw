import { inject, provide, type InjectionKey } from 'vue'
import type { ListContextValue } from './types'

export const ListContextKey: InjectionKey<ListContextValue> = Symbol('ListContext')

export function provideListContext(value: ListContextValue) {
  provide(ListContextKey, value)
}

export function useListContext() {
  return inject(ListContextKey, {})
}
