import { inject, provide, type InjectionKey } from 'vue'
import type { AvatarSize, AvatarShape } from './types'

export interface AvatarContextValue {
  size?: AvatarSize
  shape?: AvatarShape
}

export const AVATAR_CONTEXT_KEY: InjectionKey<AvatarContextValue> = Symbol('AvatarContext')

export function provideAvatarContext(value: AvatarContextValue): void {
  provide(AVATAR_CONTEXT_KEY, value)
}

export function useAvatarContext(): AvatarContextValue {
  return inject(AVATAR_CONTEXT_KEY, {})
}
