// 纯前端 QR Code 编码器（无外部依赖）。
// 实现 ISO/IEC 18004 标准算法，支持 version 1-10、纠错等级 L/M/Q/H。
// 容量与纠错分块数据对照 Nayuki qrcodegen（权威开源实现）逐一核实。

import type { QRCodeErrorLevel } from './types'

// --- Galois 域 GF(2^8) ---

const GF_EXP: number[] = new Array(512)
const GF_LOG: number[] = new Array(256)

;(() => {
  let x = 1
  for (let i = 0; i < 255; i++) {
    GF_EXP[i] = x
    GF_LOG[x] = i
    x <<= 1
    if (x & 0x100) x ^= 0x11d
  }
  for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255]
})()

function gfMul(x: number, y: number) {
  if (x === 0 || y === 0) return 0
  return GF_EXP[(GF_LOG[x] + GF_LOG[y]) % 255]
}

function gfPoly(keys: number[]) {
  let p = [1]
  for (let i = 0; i < keys.length; i++) {
    const q = [1, GF_EXP[i]]
    const r = new Array(p.length + 1).fill(0)
    for (let j = 0; j < p.length; j++) for (let k = 0; k < q.length; k++) r[j + k] ^= gfMul(p[j], q[k])
    p = r
  }
  return p
}

/** Reed-Solomon 编码：返回 msg 对应的 nsym 个纠错码字 */
function rsEncode(msg: number[], nsym: number) {
  const gen = gfPoly(Array.from({ length: nsym }, (_, i) => i))
  const out = [...msg, ...new Array(nsym).fill(0)]
  for (let i = 0; i < msg.length; i++) {
    const c = out[i]
    if (c !== 0) for (let j = 1; j < gen.length; j++) out[i + j] ^= gfMul(gen[j], c)
  }
  return out.slice(msg.length)
}

// --- 容量表 ---
// 每项为 [数据码字数, 每块纠错码字数, 块数]（数据已与 qrcodegen 全表核对）

const CAPACITY: Record<number, Record<QRCodeErrorLevel, [number, number, number]>> = {
  1: { L: [19, 7, 1], M: [16, 10, 1], Q: [13, 13, 1], H: [9, 17, 1] },
  2: { L: [34, 10, 1], M: [28, 16, 1], Q: [22, 22, 1], H: [16, 28, 1] },
  3: { L: [55, 15, 1], M: [44, 26, 1], Q: [34, 18, 2], H: [26, 22, 2] },
  4: { L: [80, 20, 1], M: [64, 18, 2], Q: [48, 26, 2], H: [36, 16, 4] },
  5: { L: [108, 26, 1], M: [86, 24, 2], Q: [62, 18, 4], H: [46, 22, 4] },
  6: { L: [136, 18, 2], M: [108, 16, 4], Q: [76, 24, 4], H: [60, 28, 4] },
  7: { L: [156, 20, 2], M: [124, 18, 4], Q: [88, 18, 6], H: [66, 26, 5] },
  8: { L: [194, 24, 2], M: [154, 22, 4], Q: [110, 22, 6], H: [86, 26, 6] },
  9: { L: [232, 30, 2], M: [182, 22, 5], Q: [132, 20, 8], H: [100, 24, 8] },
  10: { L: [274, 18, 4], M: [216, 26, 5], Q: [154, 24, 8], H: [122, 28, 8] },
}

const MAX_VERSION = 10

const EC_INDICATORS: Record<string, number> = { L: 1, M: 0, Q: 3, H: 2 }
const FORMAT_MASK = 0b101010000010010

// --- 数据编码 ---

/**
 * 将文本编码为字节模式 bit 流：
 * 4bit 模式指示符 + 字符计数（v1-9 用 8bit，v10 起 16bit）+ 数据 + 4bit 终止符
 */
function encodeData(text: string, version: number) {
  const bytes = new TextEncoder().encode(text)
  const bits: number[] = []
  const push = (v: number, n: number) => {
    for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1)
  }
  push(0b0100, 4)
  push(bytes.length, version <= 9 ? 8 : 16)
  bytes.forEach((b) => push(b, 8))
  push(0, 4)
  return bits
}

/** 选择能容纳文本的最小版本，超出 MAX_VERSION 容量返回 -1 */
function selectVersion(text: string, ecLevel: QRCodeErrorLevel): number {
  for (let version = 1; version <= MAX_VERSION; version++) {
    if (encodeData(text, version).length <= CAPACITY[version][ecLevel][0] * 8) return version
  }
  return -1
}

// --- 分块 RS 编码 + 交错 ---

/**
 * 数据码字分块做 RS 编码后交错排列。
 * 标准要求数据码字尽量均分到各块（短块在前），交错时跳过短块的补位字节。
 */
function buildCodewords(dataBytes: number[], ecLevel: QRCodeErrorLevel, version: number): number[] {
  const [dataCW, ecPerBlock, numBlocks] = CAPACITY[version][ecLevel]
  const rawCodewords = dataCW + ecPerBlock * numBlocks
  const shortBlockLen = Math.floor(rawCodewords / numBlocks)
  const numShortBlocks = numBlocks - (rawCodewords % numBlocks)

  const blocks: number[][] = []
  let k = 0
  for (let i = 0; i < numBlocks; i++) {
    const datLen = shortBlockLen - ecPerBlock + (i < numShortBlocks ? 0 : 1)
    const dat = dataBytes.slice(k, k + datLen)
    k += dat.length
    const ecc = rsEncode(dat, ecPerBlock)
    if (i < numShortBlocks) dat.push(0) // 短块补 0 占位，交错时跳过
    blocks.push([...dat, ...ecc])
  }

  const result: number[] = []
  for (let i = 0; i < blocks[0].length; i++) {
    for (let j = 0; j < blocks.length; j++) {
      if (i !== shortBlockLen - ecPerBlock || j >= numShortBlocks) result.push(blocks[j][i])
    }
  }
  return result
}

// --- 矩阵构建 ---

function makeMatrix(size: number) {
  return Array.from({ length: size }, () => new Array(size).fill(-1))
}

/** 7×7 定位图案 + 1 圈隔离区（共 9×9），中心坐标 (r, c) */
function setFinderPattern(m: number[][], r: number, c: number) {
  const size = m.length
  for (let dy = -4; dy <= 4; dy++)
    for (let dx = -4; dx <= 4; dx++) {
      // 距中心切比雪夫距离为 2、4 的环为浅色（隔离区与图案内环），其余为深色
      const dist = Math.max(Math.abs(dx), Math.abs(dy))
      const rr = r + dy
      const cc = c + dx
      if (rr >= 0 && rr < size && cc >= 0 && cc < size) {
        m[rr][cc] = dist !== 2 && dist !== 4 ? 1 : 0
      }
    }
}

/** 时序图案：第 6 行/列上黑白交替 */
function setTimingPatterns(m: number[][], size: number) {
  for (let i = 8; i < size - 8; i++) {
    m[6][i] = m[i][6] = i % 2 === 0 ? 1 : 0
  }
}

/** 5×5 校正图案 */
function setAlignmentPattern(m: number[][], r: number, c: number) {
  for (let i = -2; i <= 2; i++)
    for (let j = -2; j <= 2; j++) {
      m[r + i][c + j] = i === -2 || i === 2 || j === -2 || j === 2 || (i === 0 && j === 0) ? 1 : 0
    }
}

/** 各版本校正图案中心坐标（ISO 18004 附录 E） */
const ALIGN_POS: Record<number, number[]> = {
  1: [],
  2: [6, 18],
  3: [6, 22],
  4: [6, 26],
  5: [6, 30],
  6: [6, 34],
  7: [6, 22, 38],
  8: [6, 24, 42],
  9: [6, 26, 46],
  10: [6, 28, 50],
}

const MASK_PATTERNS = [
  (r: number, c: number) => (r + c) % 2 === 0,
  (r: number) => r % 2 === 0,
  (_: number, c: number) => c % 3 === 0,
  (r: number, c: number) => (r + c) % 3 === 0,
  (r: number, c: number) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r: number, c: number) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r: number, c: number) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r: number, c: number) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
]

/**
 * 对数据区应用/撤销掩码（XOR 两次即复原）。
 * 功能模块（定位/时序/校正图案、格式信息、暗模块）不参与掩码，
 * 由 reserved 矩阵（功能模块置位前记录）界定数据区。
 */
function applyMask(m: number[][], mask: number, reserved: boolean[][]) {
  const size = m.length
  const fn = MASK_PATTERNS[mask]
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (!reserved[r][c] && fn(r, c)) m[r][c] ^= 1
}

// --- 掩码罚分评估（ISO 18004 8.8.2，规则 N1-N4） ---

const PENALTY_N1 = 3
const PENALTY_N2 = 3
const PENALTY_N3 = 40
const PENALTY_N4 = 10

/** 维护最近 7 段连续同色运行长度（用于识别 1:1:3:1:1 定位图案特征） */
function penaltyAddHistory(currentRunLength: number, runHistory: number[], size: number) {
  if (runHistory[0] === 0) currentRunLength += size
  runHistory.pop()
  runHistory.unshift(currentRunLength)
}

/** 统计运行历史中 1:1:3:1:1 图案出现的次数（两侧各有 ≥4 单位空白时计分） */
function penaltyCountPatterns(runHistory: number[]) {
  const n = runHistory[1]
  const core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n
  return (
    (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) +
    (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0)
  )
}

/** 行/列扫描结束时的收尾处理：终止当前运行并补入边界空白 */
function penaltyTerminateAndCount(
  currentRunDark: boolean,
  currentRunLength: number,
  runHistory: number[],
  size: number,
) {
  if (currentRunDark) {
    penaltyAddHistory(currentRunLength, runHistory, size)
    currentRunLength = 0
  }
  currentRunLength += size
  penaltyAddHistory(currentRunLength, runHistory, size)
  return penaltyCountPatterns(runHistory)
}

/** 计算矩阵的罚分（数值越小越好） */
function getPenaltyScore(m: number[][]): number {
  const size = m.length
  let result = 0

  // N1：行/列方向 ≥5 个连续同色模块；N3：行/列中出现定位图案特征
  for (let axis = 0; axis < 2; axis++) {
    for (let a = 0; a < size; a++) {
      // 初始按浅色处理：行首边界视为浅色，首段浅色运行时与边界空白合并计数
      let runColor = 0
      let runLength = 0
      const runHistory = [0, 0, 0, 0, 0, 0, 0]
      for (let b = 0; b < size; b++) {
        const v = axis === 0 ? m[a][b] : m[b][a]
        if (v === runColor) {
          runLength++
          if (runLength === 5) result += PENALTY_N1
          else if (runLength > 5) result++
        } else {
          penaltyAddHistory(runLength, runHistory, size)
          if (runColor === 0) result += penaltyCountPatterns(runHistory) * PENALTY_N3
          runColor = v
          runLength = 1
        }
      }
      result += penaltyTerminateAndCount(runColor === 1, runLength, runHistory, size) * PENALTY_N3
    }
  }

  // N2：2×2 同色块
  for (let r = 0; r < size - 1; r++)
    for (let c = 0; c < size - 1; c++) {
      const color = m[r][c]
      if (color === m[r][c + 1] && color === m[r + 1][c] && color === m[r + 1][c + 1]) result += PENALTY_N2
    }

  // N4：明暗模块比例偏差（50% 最佳）
  let dark = 0
  for (const row of m) for (const v of row) if (v === 1) dark++
  const total = size * size
  const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1
  result += k * PENALTY_N4

  return result
}

/**
 * 写入版本信息（v7 及以上专属，18 位 BCH(18,6) 编码），两份拷贝。
 * 位于右上（x=size-11..size-9, y=0..5）与左下（x=0..5, y=size-11..size-9）。
 */
function setVersionInfo(m: number[][], version: number, size: number) {
  if (version < 7) return
  let rem = version
  for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >> 11) & 1 ? 0x1f25 : 0)
  const bits = (version << 12) | rem
  for (let i = 0; i < 18; i++) {
    const color = (bits >> i) & 1
    const a = size - 11 + (i % 3)
    const b = Math.floor(i / 3)
    m[b][a] = color
    m[a][b] = color
  }
}

/**
 * 写入格式信息（纠错指示符 + 掩码编号的 BCH 编码），两份拷贝。
 * 位序按 ISO 18004：LSB（bit0）先写入 (8, 0)，与主流实现一致。
 */
function setFormatInfo(m: number[][], ecLevel: string, mask: number, size: number) {
  const ec = EC_INDICATORS[ecLevel]
  const data = (ec << 3) | mask
  let rem = data
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >> 9) & 1 ? 0x537 : 0)
  const bits = ((data << 10) | rem) ^ FORMAT_MASK
  const getBit = (i: number) => (bits >> i) & 1

  // 第一份：绕左上定位图案（注意标准坐标为 (列, 行)，m 索引为 [行][列]）
  for (let i = 0; i <= 5; i++) m[i][8] = getBit(i)
  m[7][8] = getBit(6)
  m[8][8] = getBit(7)
  m[8][7] = getBit(8)
  for (let i = 9; i < 15; i++) m[8][14 - i] = getBit(i)

  // 第二份：右列向上 + 底行向左（(8, size-8) 为暗模块，不在此写入）
  for (let i = 0; i < 8; i++) m[8][size - 1 - i] = getBit(i)
  for (let i = 8; i < 15; i++) m[size - 15 + i][8] = getBit(i)
}

/**
 * 生成二维码矩阵。
 * @returns 布尔矩阵（true = 深色模块）；文本为空或超出 v10 容量时返回 null
 */
export function generateQR(text: string, ecLevel: QRCodeErrorLevel = 'M'): boolean[][] | null {
  if (!text) return null

  const version = selectVersion(text, ecLevel)
  if (version === -1) return null

  const dataCW = CAPACITY[version][ecLevel][0]

  // 1. 数据编码（含终止符），超出容量的部分截断（终止符可短于 4bit）
  let bits = encodeData(text, version)
  if (bits.length > dataCW * 8) bits = bits.slice(0, dataCW * 8)
  // 2. 补 0 至字节边界
  while (bits.length % 8 !== 0) bits.push(0)
  const dataBytes: number[] = []
  for (let i = 0; i < bits.length; i += 8) {
    let b = 0
    for (let j = 0; j < 8; j++) b = (b << 1) | (bits[i + j] ?? 0)
    dataBytes.push(b)
  }
  // 3. 剩余码字用 0xEC 0x11 交替填充（标准 pad codeword，恒从 0xEC 起）
  let padIndex = 0
  while (dataBytes.length < dataCW) dataBytes.push(padIndex++ % 2 === 0 ? 0xec : 0x11)

  // 4. 分块 RS 编码 + 交错 → 最终码字 bit 流
  const codewords = buildCodewords(dataBytes, ecLevel, version)
  const allBits: number[] = []
  codewords.forEach((b) => {
    for (let i = 7; i >= 0; i--) allBits.push((b >> i) & 1)
  })

  const size = version * 4 + 17
  const m = makeMatrix(size)

  // 定位图案（含隔离区，共 9×9）
  setFinderPattern(m, 3, 3)
  setFinderPattern(m, 3, size - 4)
  setFinderPattern(m, size - 4, 3)

  setTimingPatterns(m, size)

  // 校正图案：仅跳过与三个定位图案重叠的角落组合；
  // 中心落在时序图案上的组合（如 v7 的 (6,22)/(22,6)）仍绘制，与主流实现一致
  const ap = ALIGN_POS[version] ?? []
  for (let i = 0; i < ap.length; i++)
    for (let j = 0; j < ap.length; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0 && j === ap.length - 1) continue
      if (i === ap.length - 1 && j === 0) continue
      setAlignmentPattern(m, ap[i], ap[j])
    }

  m[size - 8][8] = 1 // 暗模块（dark module）

  // 预写格式信息与版本信息占位（数据放置跳过已占用区域）
  setFormatInfo(m, ecLevel, 0, size)
  setVersionInfo(m, version, size)

  // 功能模块全部就位后记录占用区：掩码只作用于数据区
  const reserved = m.map((row) => row.map((v) => v !== -1))

  // 放置数据位：自右下起双列蛇形向上
  let bitIdx = 0
  let dir = -1
  let row = size - 1
  for (let col = size - 1; col >= 1; col -= 2) {
    if (col === 6) col = 5 // 跳过垂直时序图案列
    for (let cnt = 0; cnt < size; cnt++) {
      const r = dir === -1 ? row - cnt : cnt
      ;[col, col - 1].forEach((c) => {
        if (m[r]?.[c] === -1) {
          m[r][c] = allBits[bitIdx++] ?? 0
        }
      })
    }
    dir = -dir
    row = dir === -1 ? size - 1 : 0
  }

  // 对 8 种掩码逐一评估罚分，选择最优者（罚分越低越利于扫码识别）
  let bestMask = 0
  let minPenalty = Infinity
  for (let i = 0; i < 8; i++) {
    applyMask(m, i, reserved)
    setFormatInfo(m, ecLevel, i, size)
    const penalty = getPenaltyScore(m)
    applyMask(m, i, reserved) // 撤销掩码
    if (penalty < minPenalty) {
      minPenalty = penalty
      bestMask = i
    }
  }
  applyMask(m, bestMask, reserved)
  setFormatInfo(m, ecLevel, bestMask, size)

  return m.map((row) => row.map((v) => v === 1))
}
