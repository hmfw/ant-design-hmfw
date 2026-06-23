// Vitest 全局测试初始化

// jsdom 的 HTMLCanvasElement.getContext 是个抛 "Not implemented" 的桩
// （需安装 canvas 包才有真实实现）。QRCode 等组件在 canvas 模式下会调用它。
// 这里用最小桩覆盖，让绘制逻辑静默执行，消除测试中的 "Not implemented" 噪音。
if (typeof HTMLCanvasElement !== 'undefined') {
  const noop = () => {}
  const stubContext = {
    canvas: null,
    fillStyle: '',
    strokeStyle: '',
    fillRect: noop,
    clearRect: noop,
    strokeRect: noop,
    beginPath: noop,
    closePath: noop,
    moveTo: noop,
    lineTo: noop,
    arc: noop,
    rect: noop,
    fill: noop,
    stroke: noop,
    save: noop,
    restore: noop,
    translate: noop,
    scale: noop,
    rotate: noop,
    drawImage: noop,
    putImageData: noop,
    getImageData: () => ({ data: new Uint8ClampedArray(0), width: 0, height: 0 }),
    createImageData: () => ({ data: new Uint8ClampedArray(0), width: 0, height: 0 }),
    setTransform: noop,
    measureText: () => ({ width: 0 }),
    fillText: noop,
    strokeText: noop,
  }

  HTMLCanvasElement.prototype.getContext = function getContext() {
    return stubContext as unknown as CanvasRenderingContext2D
  } as HTMLCanvasElement['getContext']

  HTMLCanvasElement.prototype.toDataURL = function toDataURL() {
    return 'data:image/png;base64,'
  }
}
