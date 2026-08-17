import { ref } from 'vue'

/**
 * 管理多个元素引用
 */
export default function useRefs() {
  const refsMap = ref<Map<string | number, HTMLDivElement | null>>(new Map())

  const setRef = (key: string | number, element: HTMLDivElement | null) => {
    refsMap.value.set(key, element)
  }

  const getRef = (key: string | number) => {
    return refsMap.value.get(key)
  }

  return [setRef, getRef] as const
}
