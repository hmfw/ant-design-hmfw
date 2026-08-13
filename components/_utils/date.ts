/**
 * 日期工具函数
 * DatePicker 和 RangePicker 共享
 */

/**
 * 数字补零
 */
export function pad(n: number): string {
  return String(n).padStart(2, '0')
}

/**
 * 格式化日期
 * @param d 日期对象
 * @param fmt 格式字符串，支持 YYYY-MM-DD HH:mm:ss
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
export function parseDate(val: string | null | undefined): Date | null {
  if (!val) return null
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
 * 构建日历数据（42格，6周）
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
