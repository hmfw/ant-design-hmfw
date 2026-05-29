# E2E 手动测试指南

使用 `playwright-cli` 对文档站进行交互式验证。

## 准备

```bash
# 启动文档站
pnpm dev
# 访问 http://localhost:5173

# 打开浏览器（新终端）
playwright-cli open http://localhost:5173
```

---

## 弹层定位类（最重要）

这类组件依赖真实 DOM 布局，jsdom 无法覆盖。

### Select — 下拉定位

```bash
playwright-cli open http://localhost:5173/components/select
```

验证：
- 点击 Select 触发器，下拉菜单出现在触发器正下方
- 选中一项后下拉关闭，选中值显示在触发器内
- 点击页面空白处，下拉关闭
- 截图：`playwright-cli screenshot --filename=/tmp/select.png`

### DatePicker — 日历定位

```bash
playwright-cli open http://localhost:5173/components/date-picker
```

验证：
- 点击输入框，日历面板出现在输入框下方
- 点击某一天，面板关闭，输入框显示日期
- 点击 `«` `‹` 导航按钮，月份/年份切换
- 悬停清除按钮，点击后值清空

### RangePicker — 双日历

```bash
playwright-cli open http://localhost:5173/components/range-picker
```

验证：
- 点击输入框，出现两个并排日历
- 左右面板显示相邻月份
- 点击开始日期后，悬停其他日期有范围高亮
- 点击结束日期后，两个输入框都有值

### Tooltip — 气泡定位

```bash
playwright-cli open http://localhost:5173/components/tooltip
```

验证：
- 悬停触发器，气泡出现在正确方向（top/bottom/left/right）
- 气泡有 `role="tooltip"` 属性
- 鼠标离开后气泡消失
- 截图对比 12 个方向：`playwright-cli screenshot --filename=/tmp/tooltip.png`

---

## 交互类

### Modal

```bash
playwright-cli open http://localhost:5173/components/modal
```

验证：
- 点击按钮，Modal 出现，背景遮罩存在
- 点击取消/关闭按钮，Modal 消失
- 点击遮罩，Modal 消失
- Modal 有 `role="dialog"` 和 `aria-modal="true"`
- 打开时焦点移入 Modal，关闭后焦点回到触发按钮

### Drawer

```bash
playwright-cli open http://localhost:5173/components/drawer
```

验证：
- 四个方向（上/下/左/右）的抽屉都能正常打开关闭
- 点击遮罩关闭

### ColorPicker

```bash
playwright-cli open http://localhost:5173/components/color-picker
```

验证：
- 点击色块，面板出现
- 拖动饱和度/亮度区域，颜色实时变化
- 拖动色相滑块，颜色变化
- 在 HEX 输入框输入 `#ff0000`，色块变红
- 点击预设颜色，色块更新

---

## ARIA 验证

```bash
playwright-cli open http://localhost:5173/components/tabs
playwright-cli console error
```

在控制台检查：

```js
// Tabs
document.querySelectorAll('[role="tablist"]').length  // 应 > 0
document.querySelectorAll('[role="tab"]').length       // 应 > 0
document.querySelector('[aria-selected="true"]')       // 应存在

// Progress
document.querySelector('[role="progressbar"]').getAttribute('aria-valuenow')

// Tree
document.querySelectorAll('[role="treeitem"]').length

// Pagination
document.querySelector('[role="navigation"]')
document.querySelector('[aria-current="page"]')
```

---

## 控制台错误检查

每个页面验证后运行：

```bash
playwright-cli console error
```

确认无 Vue 警告或 JS 错误。

---

## 截图对比

```bash
# 批量截图关键组件
for component in button select modal date-picker tree table form; do
  playwright-cli screenshot \
    --url http://localhost:5173/components/$component \
    --filename /tmp/screenshot-$component.png
done
```

---

## 关闭

```bash
playwright-cli close
```
