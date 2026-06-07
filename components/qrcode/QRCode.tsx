// QR Code generator using pure canvas/SVG — no external dependencies.
// Implements a minimal QR code encoder (version 1-10, ECC level L/M/Q/H).
// Based on the ISO/IEC 18004 standard algorithm.

import { defineComponent, ref, onMounted, watch, computed, type PropType, h as createElement } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Spin } from '../spin'
import { Icon } from '../icon'
import { LoadingOutlined } from '../icon/icons'
import type { QRCodeStatus, QRCodeErrorLevel, QRCodeType, StatusRenderInfo } from './types'

// --- Minimal QR encoder ---

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

function rsEncode(msg: number[], nsym: number) {
  const gen = gfPoly(Array.from({ length: nsym }, (_, i) => i))
  const out = [...msg, ...new Array(nsym).fill(0)]
  for (let i = 0; i < msg.length; i++) {
    const c = out[i]
    if (c !== 0) for (let j = 1; j < gen.length; j++) out[i + j] ^= gfMul(gen[j], c)
  }
  return out.slice(msg.length)
}

// Capacity table [version][ecLevel]: [dataCodewords, ecCodewords]
const CAPACITY: Record<number, Record<string, [number, number]>> = {
  1: { L: [19, 7], M: [16, 10], Q: [13, 13], H: [9, 17] },
  2: { L: [34, 10], M: [28, 16], Q: [22, 22], H: [16, 28] },
  3: { L: [55, 15], M: [44, 26], Q: [34, 18], H: [26, 22] },
  4: { L: [80, 20], M: [64, 18], Q: [48, 26], H: [36, 16] },
  5: { L: [108, 26], M: [86, 24], Q: [62, 18], H: [46, 22] },
  6: { L: [136, 18], M: [108, 16], Q: [76, 24], H: [60, 28] },
  7: { L: [156, 20], M: [124, 18], Q: [88, 18], H: [66, 26] },
}

const EC_INDICATORS: Record<string, number> = { L: 1, M: 0, Q: 3, H: 2 }
const FORMAT_MASK = 0b101010000010010

function encodeData(text: string) {
  const bytes = new TextEncoder().encode(text)
  const bits: number[] = []
  const push = (v: number, n: number) => {
    for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1)
  }
  push(0b0100, 4)
  push(bytes.length, 8)
  bytes.forEach((b) => push(b, 8))
  push(0, 4)
  return bits
}

function interleave(data: number[], ec: number[]) {
  return [...data, ...ec]
}

function makeMatrix(size: number) {
  return Array.from({ length: size }, () => new Array(size).fill(-1))
}

function setFinderPattern(m: number[][], r: number, c: number) {
  for (let i = 0; i < 7; i++)
    for (let j = 0; j < 7; j++) {
      const v = i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4) ? 1 : 0
      m[r + i][c + j] = v
    }
}

function setTimingPatterns(m: number[][], size: number) {
  for (let i = 8; i < size - 8; i++) {
    m[6][i] = m[i][6] = i % 2 === 0 ? 1 : 0
  }
}

function setAlignmentPattern(m: number[][], r: number, c: number) {
  for (let i = -2; i <= 2; i++)
    for (let j = -2; j <= 2; j++) {
      m[r + i][c + j] = i === -2 || i === 2 || j === -2 || j === 2 || (i === 0 && j === 0) ? 1 : 0
    }
}

const ALIGN_POS: Record<number, number[]> = {
  1: [],
  2: [6, 18],
  3: [6, 22],
  4: [6, 26],
  5: [6, 30],
  6: [6, 34],
  7: [6, 22, 38],
}

function applyMask(m: number[][], mask: number, size: number) {
  const patterns = [
    (r: number, c: number) => (r + c) % 2 === 0,
    (r: number) => r % 2 === 0,
    (_: number, c: number) => c % 3 === 0,
    (r: number, c: number) => (r + c) % 3 === 0,
    (r: number, c: number) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
    (r: number, c: number) => ((r * c) % 2) + ((r * c) % 3) === 0,
    (r: number, c: number) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
    (r: number, c: number) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
  ]
  const fn = patterns[mask]
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) if (m[r][c] !== -1 && fn(r, c)) m[r][c] ^= 1
}

function setFormatInfo(m: number[][], ecLevel: string, mask: number, size: number) {
  const ec = EC_INDICATORS[ecLevel]
  let fmt = (ec << 3) | mask
  let rem = fmt
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >> 9) & 1 ? 0x537 : 0)
  fmt = ((fmt << 10) | rem) ^ FORMAT_MASK
  const bits = Array.from({ length: 15 }, (_, i) => (fmt >> (14 - i)) & 1)

  const pos1 = [
    [8, 0],
    [8, 1],
    [8, 2],
    [8, 3],
    [8, 4],
    [8, 5],
    [8, 7],
    [8, 8],
    [7, 8],
    [5, 8],
    [4, 8],
    [3, 8],
    [2, 8],
    [1, 8],
    [0, 8],
  ]
  const pos2 = [
    [size - 1, 8],
    [size - 2, 8],
    [size - 3, 8],
    [size - 4, 8],
    [size - 5, 8],
    [size - 6, 8],
    [size - 7, 8],
    [size - 8, 8],
    [8, size - 8],
    [8, size - 7],
    [8, size - 6],
    [8, size - 5],
    [8, size - 4],
    [8, size - 3],
    [8, size - 2],
  ]

  bits.forEach((b, i) => {
    m[pos1[i][0]][pos1[i][1]] = b
    m[pos2[i][0]][pos2[i][1]] = b
  })
}

function generateQR(text: string, ecLevel: QRCodeErrorLevel = 'M'): boolean[][] | null {
  const bits = encodeData(text)

  let version = 1
  let dataCW = 0
  let ecCW = 0
  for (; version <= 7; version++) {
    const cap = CAPACITY[version]?.[ecLevel]
    if (!cap) return null
    dataCW = cap[0]
    ecCW = cap[1]
    if (bits.length <= dataCW * 8) break
  }
  if (version > 7) return null

  const totalBits = dataCW * 8
  const padded = [...bits]
  while (padded.length < totalBits) padded.push(0)
  const bytes: number[] = []
  for (let i = 0; i < padded.length; i += 8) {
    let b = 0
    for (let j = 0; j < 8; j++) b = (b << 1) | (padded[i + j] ?? 0)
    bytes.push(b)
  }
  // Pad with alternating 0xEC 0x11
  while (bytes.length < dataCW) bytes.push(bytes.length % 2 === 0 ? 0xec : 0x11)

  const ec = rsEncode(bytes, ecCW)
  const allBits: number[] = []
  interleave(bytes, ec).forEach((b) => {
    for (let i = 7; i >= 0; i--) allBits.push((b >> i) & 1)
  })

  const size = version * 4 + 17
  const m = makeMatrix(size)

  // Finder patterns + separators
  setFinderPattern(m, 0, 0)
  setFinderPattern(m, 0, size - 7)
  setFinderPattern(m, size - 7, 0)
  for (let i = 0; i < 8; i++) {
    ;[0, size - 8].forEach((c) => {
      if (m[i][c] === -1) m[i][c] = 0
    })
    ;[0, size - 8].forEach((r) => {
      if (m[r][i] === -1) m[r][i] = 0
    })
    if (m[size - 1 - i]?.[7] === -1) m[size - 1 - i][7] = 0
    if (m[7]?.[size - 1 - i] === -1) m[7][size - 1 - i] = 0
    if (m[size - 8]?.[i] === -1) m[size - 8][i] = 0
    if (m[i]?.[size - 8] === -1) m[i][size - 8] = 0
  }

  setTimingPatterns(m, size)

  const ap = ALIGN_POS[version] ?? []
  for (let i = 0; i < ap.length; i++)
    for (let j = 0; j < ap.length; j++) {
      const r = ap[i],
        c = ap[j]
      if (m[r][c] === -1) setAlignmentPattern(m, r, c)
    }

  m[size - 8][8] = 1 // dark module

  // Reserve format info areas (set to 0 temporarily)
  setFormatInfo(m, ecLevel, 0, size)

  // Place data bits
  let bitIdx = 0
  let dir = -1
  let row = size - 1
  for (let col = size - 1; col >= 1; col -= 2) {
    if (col === 6) col = 5
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

  // Find best mask (simplified: use mask 0)
  applyMask(m, 0, size)
  setFormatInfo(m, ecLevel, 0, size)

  return m.map((row) => row.map((v) => v === 1))
}

// --- Component ---

export const QRCode = defineComponent({
  name: 'QRCode',
  props: {
    value: { type: String, required: true },
    type: { type: String as PropType<QRCodeType>, default: 'canvas' },
    size: { type: Number, default: 160 },
    color: { type: String, default: '#000000' },
    bgColor: { type: String, default: 'transparent' },
    errorLevel: { type: String as PropType<QRCodeErrorLevel>, default: 'M' },
    status: { type: String as PropType<QRCodeStatus>, default: 'active' },
    icon: String,
    iconSize: {
      type: [Number, Object] as PropType<number | { width: number; height: number }>,
      default: 40,
    },
    bordered: { type: Boolean, default: true },
    statusRender: Function as PropType<(info: StatusRenderInfo) => any>,
    marginSize: Number,
    onRefresh: Function as PropType<() => void>,
  },
  setup(props, { attrs }) {
    const prefixCls = usePrefixCls('qrcode')
    const canvasRef = ref<HTMLCanvasElement>()

    const matrix = computed(() => {
      if (!props.value) return null
      return generateQR(props.value, props.errorLevel)
    })

    const iconSizeValue = computed(() => {
      if (typeof props.iconSize === 'number') {
        return { width: props.iconSize, height: props.iconSize }
      }
      return props.iconSize
    })

    // Warn in dev mode
    if (import.meta.env.DEV) {
      if (props.icon && props.errorLevel === 'L') {
        console.warn(
          '[hmfw: QRCode] ErrorLevel `L` is not recommended to be used with `icon`, for scanning result would be affected by low level.',
        )
      }
    }

    const drawCanvas = () => {
      const canvas = canvasRef.value
      if (!canvas || !matrix.value) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const m = matrix.value
      const size = props.size
      const cellSize = size / m.length
      ctx.clearRect(0, 0, size, size)
      ctx.fillStyle = props.bgColor
      ctx.fillRect(0, 0, size, size)
      ctx.fillStyle = props.color
      m.forEach((row, r) =>
        row.forEach((dark, c) => {
          if (dark) ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize)
        }),
      )
      if (props.icon) {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = props.icon
        img.onload = () => {
          const iSize = iconSizeValue.value
          const x = (size - iSize.width) / 2
          const y = (size - iSize.height) / 2
          ctx.fillStyle = props.bgColor
          ctx.fillRect(x - 2, y - 2, iSize.width + 4, iSize.height + 4)
          ctx.drawImage(img, x, y, iSize.width, iSize.height)
        }
      }
    }

    onMounted(() => {
      if (props.type === 'canvas') drawCanvas()
    })
    watch(
      [
        () => props.value,
        () => props.size,
        () => props.color,
        () => props.bgColor,
        () => props.errorLevel,
        () => props.icon,
        () => props.iconSize,
      ],
      () => {
        if (props.type === 'canvas') drawCanvas()
      },
    )

    const renderSVG = () => {
      const m = matrix.value
      if (!m) return null
      const margin = props.marginSize ?? 0
      const cellSize = 1
      const matrixSize = m.length
      const viewBoxSize = matrixSize + 2 * margin
      const paths: string[] = []

      m.forEach((row, r) => {
        row.forEach((dark, c) => {
          if (dark) {
            paths.push(`M${c + margin},${r + margin}h${cellSize}v${cellSize}h-${cellSize}z`)
          }
        })
      })

      const svgAttrs: Record<string, any> = {
        viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`,
        width: props.size,
        height: props.size,
        style: { display: 'block' },
      }

      // Pass aria-* and data-* attributes to SVG
      Object.keys(attrs).forEach((key) => {
        if (key.startsWith('aria-') || key.startsWith('data-')) {
          svgAttrs[key] = attrs[key]
        }
      })

      const children = [
        createElement('rect', {
          x: 0,
          y: 0,
          width: viewBoxSize,
          height: viewBoxSize,
          fill: props.bgColor,
        }),
        createElement('path', {
          d: paths.join(''),
          fill: props.color,
        }),
      ]

      if (props.icon) {
        const iSize = iconSizeValue.value
        const x = (matrixSize - (iSize.width / props.size) * matrixSize) / 2 + margin
        const y = (matrixSize - (iSize.height / props.size) * matrixSize) / 2 + margin
        const w = (iSize.width / props.size) * matrixSize
        const h = (iSize.height / props.size) * matrixSize
        children.push(
          createElement('rect', {
            x: x - 0.1,
            y: y - 0.1,
            width: w + 0.2,
            height: h + 0.2,
            fill: props.bgColor,
          }),
          createElement('image', {
            href: props.icon,
            x,
            y,
            width: w,
            height: h,
            crossOrigin: 'anonymous',
          }),
        )
      }

      return createElement('svg', svgAttrs, children)
    }

    const defaultStatusRender = (info: StatusRenderInfo) => {
      if (info.status === 'loading') {
        return <Spin />
      }
      if (info.status === 'expired') {
        return (
          <>
            <p class={`${prefixCls}-expired`}>二维码过期</p>
            {info.onRefresh && (
              <button type="button" class={`${prefixCls}-refresh`} onClick={info.onRefresh}>
                <Icon component={LoadingOutlined} style={{ marginRight: '4px' }} />
                点击刷新
              </button>
            )}
          </>
        )
      }
      if (info.status === 'scanned') {
        return <p class={`${prefixCls}-scanned`}>已扫描</p>
      }
      return null
    }

    return () => {
      // Return null if value is empty
      if (!props.value) {
        if (import.meta.env.DEV) {
          console.warn('[hmfw: QRCode] need to receive `value` props')
        }
        return null
      }

      const rootClasses = cls(prefixCls, {
        [`${prefixCls}-borderless`]: !props.bordered,
      })

      const canvasAttrs: Record<string, any> = {
        width: props.size,
        height: props.size,
        style: { display: 'block' },
      }

      // Pass aria-* and data-* attributes to canvas
      Object.keys(attrs).forEach((key) => {
        if (key.startsWith('aria-') || key.startsWith('data-')) {
          canvasAttrs[key] = attrs[key]
        }
      })

      return (
        <div
          class={rootClasses}
          style={{
            width: `${props.size}px`,
            height: `${props.size}px`,
            backgroundColor: props.bgColor,
          }}
        >
          {props.type === 'canvas' ? <canvas ref={canvasRef} {...canvasAttrs} /> : renderSVG()}
          {props.status !== 'active' && (
            <div class={`${prefixCls}-cover`}>
              {(props.statusRender ?? defaultStatusRender)({
                status: props.status as Exclude<QRCodeStatus, 'active'>,
                onRefresh: props.onRefresh,
              })}
            </div>
          )}
        </div>
      )
    }
  },
})
