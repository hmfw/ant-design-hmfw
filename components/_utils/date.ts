/**
 * 日期工具函数
 * Calendar 、DatePicker 和 RangePicker 共享
 */

/**
 * 数字补零
 */
export function pad(n: number): string {
  return String(n).padStart(2, '0')
}

/**
 * 获取日期在年内所属周数（以周日为一周第一天，与 weekdays[0] 一致）
 * 第 1 周 = 包含 1 月 1 日的那一周（周日起始），与 parseWeek 互逆
 */
export function getWeekNumber(d: Date): number {
  const firstDayOfYear = new Date(d.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((d.getTime() - firstDayOfYear.getTime()) / 86400000)
  // 偏移 1 月 1 日的星期几（0=周日），使第 1 周从包含元旦的周日算起
  return Math.floor((dayOfYear + firstDayOfYear.getDay()) / 7) + 1
}

/**
 * 获取日期所在周的起始日（周日）
 */
export function weekStart(d: Date): Date {
  const day = d.getDay() // 0 = 周日
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() - day)
}

/**
 * 判断两个日期是否属于同一周
 */
export function isSameWeek(a: Date, b: Date): boolean {
  return isSameDay(weekStart(a), weekStart(b))
}

/**
 * 格式化日期为季度字符串（如 2026-Q3）
 */
export function formatQuarter(d: Date): string {
  return `${d.getFullYear()}-Q${Math.floor(d.getMonth() / 3) + 1}`
}

/**
 * 解析周字符串（如 '2026-35' / '2026-W35'）为该周起始日（周日）
 * 第 1 周 = 包含 1 月 1 日的那一周，与 getWeekNumber 互逆
 * @returns Date 对象或 null
 */
export function parseWeek(val: string): Date | null {
  // 兼容 '2026-21'（formatDate 输出格式）与 '2026-W21'
  const m = /^(\d{4})-?[wW]?(\d{1,2})$/.exec(val)
  if (!m) return null
  const year = Number(m[1])
  const week = Number(m[2])
  // 第 1 周起始 = 包含 1 月 1 日的那个周日（可能在上一年 12 月）
  // new Date(year, 0, N) 的 N 为从 1 月 1 日起算的天数，负数自动回退到上一年
  const jan1 = new Date(year, 0, 1)
  const d = new Date(year, 0, 1 - jan1.getDay() + (week - 1) * 7)
  return isNaN(d.getTime()) ? null : d
}

/**
 * 格式化日期
 * @param d 日期对象
 * @param fmt 格式字符串，支持 YYYY-MM-DD HH:mm:ss、YYYY-ww（年内周数）
 */
export function formatDate(d: Date, fmt = 'YYYY-MM-DD'): string {
  const tokens = {
    YYYY: d.getFullYear(),
    YY: String(d.getFullYear()).slice(-2),
    M: d.getMonth() + 1,
    MM: pad(d.getMonth() + 1),
    D: d.getDate(),
    DD: pad(d.getDate()),
    H: d.getHours(),
    HH: pad(d.getHours()),
    h: d.getHours() % 12 || 12,
    hh: pad(d.getHours() % 12 || 12),
    m: d.getMinutes(),
    mm: pad(d.getMinutes()),
    s: d.getSeconds(),
    ss: pad(d.getSeconds()),
    A: d.getHours() >= 12 ? 'PM' : 'AM',
    a: d.getHours() >= 12 ? 'pm' : 'am',
    ww: pad(getWeekNumber(d)),
    w: getWeekNumber(d),
  }

  // 按长度降序排列，避免'YYYY'被'YY'误匹配
  const keys = Object.keys(tokens).sort((a, b) => b.length - a.length)
  const pattern = new RegExp(keys.join('|'), 'g')

  return fmt.replace(pattern, (match) => {
    const val = tokens[match as keyof typeof tokens]
    return typeof val === 'number' ? String(val) : val
  })
}

/**
 * 解析日期字符串
 * @param val 日期字符串
 * @returns Date 对象或 null
 */
export function parseDate(val: string | Date | null | undefined): Date | null {
  // 1. 处理 null/undefined
  if (val == null) return null

  // 2. 处理 Date 对象（包括无效日期）
  if (val instanceof Date) {
    return isNaN(val.getTime()) ? null : val
  }

  // 3. 处理字符串
  const d = new Date(val)
  return isNaN(d.getTime()) ? null : d
}

/**
 * 判断两个日期是否为同一天
 */
export function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

/**
 * 判断两个日期是否为同一月
 */
export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

/**
 * 判断两个日期是否为同一年
 */
export function isSameYear(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear()
}

/**
 * 获取指定年月的天数
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

/**
 * 获取指定年月第一天是星期几（0-6）
 */
export function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

/**
 * 构建日历矩阵（6 周 × 7 天 = 42 个格子）
 *
 * 算法：
 * 1. 计算当月 1 号是星期几（firstDay），向前补齐上月末尾日期
 * 2. 填充当月所有日期（1 ~ daysInMonth）
 * 3. 向后补齐下月开头日期，凑满 42 格（6 行 7 列标准日历布局）
 *
 * @param year 年份
 * @param month 月份（0-11）
 * @returns 42 个日期对象，包含 date 和 inCurrentMonth 标记
 */
export function buildCalendar(year: number, month: number): Array<{ date: Date; inCurrentMonth: boolean }> {
  const days: Array<{ date: Date; inCurrentMonth: boolean }> = []
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonthDays = getDaysInMonth(year, month - 1)

  // 填充上月日期
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month - 1, prevMonthDays - i), inCurrentMonth: false })
  }

  // 填充当月日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), inCurrentMonth: true })
  }

  // 填充下月日期（补齐 42 格）
  const CALENDAR_GRID_SIZE = 42
  const remaining = CALENDAR_GRID_SIZE - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({ date: new Date(year, month + 1, i), inCurrentMonth: false })
  }

  return days
}
