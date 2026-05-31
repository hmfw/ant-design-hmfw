# 组件对比结果（ant-design-hmfw vs ant-design v6）

逐个组件从简单到复杂对比。每个组件记录：差异、未实现项、问题、优化点，以及处理结果。

> 本文件为索引页。详细记录已按分类拆分到 [`COMPARISON/`](./COMPARISON/) 目录。

---

## 📋 进度与路线图（恢复工作的入口）

**对比基准**：`/Users/hmfw/Downloads/ant-design-master`（React ant-design v6 源码）
**流程**（每次一个组件）：对比 API+行为+样式 → 记录差异 → 修复 → 更新测试+文档 → 验证（`npx vitest run components/<name>` + `pnpm typecheck`）→ 记入对应分类文件 → `/clear` 重置上下文 → 下一个。

> **关于 `/clear`**：每个组件的产出已完整落地到分类文件（差异表+改动文件+Bug 清单），下一个组件不需要前一个的对话上下文。例外：当下一个组件是前一个的特化或共用底层（如 Popconfirm 复用 Popover 的 wrapper 接口），保留上下文或改用 `/compact` 软压缩。

### ✅ 已完成（54 个，全量 1316 测试通过，修复 155 个真实 bug）

**基础/布局** → [`COMPARISON/01-basic-layout.md`](./COMPARISON/01-basic-layout.md)
Divider · Flex · Space(修2bug) · Typography · Tag · Badge(修1) · Alert(修1行为) · Avatar · Empty · Card · Result · Spin(修 delay 失效 bug)

**A 展示类** → [`COMPARISON/02-display.md`](./COMPARISON/02-display.md)
Skeleton(修5bug) · Progress · Timeline(修2bug) · Segmented(修3bug) · Rate · QRCode(修5bug) · Watermark(修3bug) · BackTop(修5bug) · FloatButton(修2bug) · Descriptions(修1bug)

**B 容器/导航** → [`COMPARISON/03-container-nav.md`](./COMPARISON/03-container-nav.md)
List(修5bug) · Collapse(修4bug) · Steps · Anchor · Breadcrumb(修1bug) · Pagination(修7bug) · Grid(修5bug) · Layout(修5bug) · Tabs(修4bug) · Menu(修4bug) · Dropdown(修4bug)

**C 表单控件** → [`COMPARISON/04-form.md`](./COMPARISON/04-form.md)
Button(修3bug) · Checkbox(修3bug) · Radio(修2bug) · Switch(修1bug)
Input(修12bug) · InputNumber(修1bug) · Slider(修1bug) · Select(修1bug) · Cascader(修4bug) · TreeSelect(修4bug) · AutoComplete(修1bug) · DatePicker(修1bug) · TimePicker(修4bug) · RangePicker(修3bug)
Upload(修10bug) · Form(修8bug)

**D 浮层/反馈** → [`COMPARISON/05-overlay-feedback.md`](./COMPARISON/05-overlay-feedback.md)
Tooltip(修4bug) · Popover(修5bug) · Popconfirm(修8bug) · Modal(修9bug) · Drawer(修6bug)

### ⏭️ 待办路线图（简单→复杂，按序进行）

- **D 浮层/反馈(剩余)**：message、notification、tour、image → 写入 [`COMPARISON/05-overlay-feedback.md`](./COMPARISON/05-overlay-feedback.md)
- **E 数据/复杂**：table、tree、transfer、carousel、color-picker → 写入 [`COMPARISON/06-data-complex.md`](./COMPARISON/06-data-complex.md)

**下一个执行**：D 浮层/反馈类（message 起，建议先 `/clear`）。恢复时对我说「继续」即可。

---

## 📁 分类文件一览

| # | 分类 | 文件 | 状态 |
| --- | --- | --- | --- |
| 1 | 基础/布局 | [01-basic-layout.md](./COMPARISON/01-basic-layout.md) | ✅ 12/12 |
| 2 | A 展示类 | [02-display.md](./COMPARISON/02-display.md) | ✅ 10/10 |
| 3 | B 容器/导航 | [03-container-nav.md](./COMPARISON/03-container-nav.md) | ✅ 11/11 |
| 4 | C 表单控件 | [04-form.md](./COMPARISON/04-form.md) | ✅ 16/16 |
| 5 | D 浮层/反馈 | [05-overlay-feedback.md](./COMPARISON/05-overlay-feedback.md) | 🚧 5/9（已完成 Tooltip · Popover · Popconfirm · Modal · Drawer） |
| 6 | E 数据/复杂 | [06-data-complex.md](./COMPARISON/06-data-complex.md) | ⏭️ 0/5 |
