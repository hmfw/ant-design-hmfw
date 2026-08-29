/**
 * 时间工具函数
 * TimePicker 与 DatePicker(showTime) 共享
 */
import { pad } from './date'

/**
 * 解析时间字符串为 {h, m, s} 对象
 * 支持 24 小时制（HH:mm:ss）与 12 小时制（hh:mm:ss a/A）
 * @param val - 时间字符串，如 "14:30:00" 或 "2:30:00 PM"
 * @returns 解析后的时分秒对象，24 小时制
 */
export function parseTime(val?: string) {
  if (!val) return { h: 0, m: 0, s: 0 }
  // 提取 AM/PM 标记（大小写不敏感）
  const lower = val.toLowerCase()
  const isPM = lower.includes('pm')
  const isAM = lower.includes('am')
  // 提取数字部分，按冒号分割为 [时, 分, 秒]
  const parts = val
    .replace(/[^\d:]/g, '')
    .split(':')
    .map((x) => Number(x))
  let h = parts[0] || 0
  const m = parts[1] || 0
  const s = parts[2] || 0
  // 12 小时制转换为 24 小时制
  if (isPM && h < 12) h += 12 // PM 下午：1 PM → 13, 11 PM → 23
  if (isAM && h === 12) h = 0 // AM 午夜：12 AM → 0
  return { h, m, s }
}

/**
 * 格式化时间为指定格式的字符串
 * @param h - 小时（24 小时制，0-23）
 * @param m - 分钟（0-59）
 * @param s - 秒（0-59）
 * @param fmt - 格式字符串，支持 Token：
 *   - HH/H: 24 小时制时（HH 补零，H 不补零）
 *   - hh/h: 12 小时制时（hh 补零，h 不补零，0 显示为 12）
 *   - mm/m: 分钟（mm 补零，m 不补零）
 *   - ss/s: 秒（ss 补零，s 不补零）
 *   - A/a: AM/PM 标记（A 大写，a 小写）
 * @returns 格式化后的时间字符串
 */
export function formatTime(h: number, m: number, s: number, fmt: string) {
  const isPM = h >= 12
  const h12 = h % 12 === 0 ? 12 : h % 12 // 24 小时制 → 12 小时制（0 → 12, 13 → 1）
  return fmt.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g, (token) => {
    switch (token) {
      case 'HH':
        return pad(h) // 24 小时制，补零：00-23
      case 'H':
        return String(h) // 24 小时制，不补零：0-23
      case 'hh':
        return pad(h12) // 12 小时制，补零：01-12
      case 'h':
        return String(h12) // 12 小时制，不补零：1-12
      case 'mm':
        return pad(m) // 分钟，补零：00-59
      case 'm':
        return String(m) // 分钟，不补零：0-59
      case 'ss':
        return pad(s) // 秒，补零：00-59
      case 's':
        return String(s) // 秒，不补零：0-59
      case 'A':
        return isPM ? 'PM' : 'AM' // AM/PM 大写
      case 'a':
        return isPM ? 'pm' : 'am' // am/pm 小写
      default:
        return token
    }
  })
}

/**
 * 判断格式字符串是否包含秒（ss/s）
 */
export function hasSeconds(fmt: string) {
  return /s/.test(fmt)
}

/**
 * 按步长生成时间选项列表（0 ~ max，步长 step）
 * @param max - 上界（不含）：小时传 24，分钟/秒传 60
 * @param step - 步长，未传或小于 1 时视为 1
 */
export function generateTimeOptions(max: number, step?: number): number[] {
  const s = step && step > 0 ? step : 1
  const list: number[] = []
  for (let i = 0; i < max; i += s) list.push(i)
  return list
}
