/**
 * 判断值是否为纯对象
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  // 1. 基础类型检查
  if (typeof value !== 'object' || value === null) {
    return false
  }

  // 2. toString 标签检查
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false
  }

  // 3. 原型链检查
  const prototype = Object.getPrototypeOf(value)
  if (prototype === null) {
    return true // Object.create(null)
  }

  // 4. 确保原型是 Object.prototype
  return prototype === Object.prototype
}

/**
 * 判断值是否为数字
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value)
}

/**
 * 判断值是否为字符串
 */
export function isString(value: any): value is string {
  return typeof value === 'string'
}

/**
 * 判断值是否为函数
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

/**
 * 判断值是否为布尔值
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean'
}

/**
 * 判断值是否为 undefined
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined
}

/**
 * 判断值是否为 null
 */
export function isNull(value: any): value is null {
  return value === null
}

/**
 * 判断值是否为 null 或 undefined
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return value === null || value === undefined
}
