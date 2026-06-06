# 组件对比结果（ant-design-hmfw vs ant-design v6）

逐个组件从简单到复杂对比。每个组件记录：差异、未实现项、问题、优化点，以及处理结果。

> 本文件为索引页。详细记录已按分类拆分到 [`COMPARISON/`](./COMPARISON/) 目录。

---

## 📋 进度与路线图（恢复工作的入口）

**对比基准**：`/Users/hmfw/Downloads/ant-design-master`（React ant-design v6 源码）
**图标素材库**：`/Users/hmfw/Downloads/ant-design-icons-master`（SVG 源在 `packages/icons-svg/svg/{outlined,filled,twotone}/`，补图标时从这里取）

### 🔁 单组件工作流（每次一个，严格按序）

**0. 启动（`/clear` 后第一步，不可跳过）**
读取以下三处建立上下文，缺一不可：
- 本文件「待办路线图」→ 确认下一个组件名 `<name>` 与目标分类文件 `COMPARISON/0X-*.md`。
- 目标分类文件里**最近一个已完成条目**（如 Tooltip）→ 作为本次条目的**格式样板**，照抄其小节结构（差异表→改动文件→验证）。
- `components/<name>/` 现有源码 + `ant-design-master/components/<name>/` → 对比对象。

**1. 对比** API + 行为 + 样式，逐条列入「差异/问题表」（列：项 / 严重度 / 说明 / 处理）。先把「处理」列全填 `⏳ 待修`。

**2. 修复**：每修完一条，立刻把该行「处理」列改为 `✅ ...` 或 `⏭️ 跳过(原因)`。**表是唯一事实源——代码改了表必须同步改，禁止留 ❌ 与已修代码矛盾。**

**3. 更新测试 + 文档**：补 `__tests__`、更新 `docs/demos/<name>/`。
   - **缺图标时不要用 emoji/字符占位**。本库图标走「SVG → 脚本生成」：① 从图标素材库 `ant-design-icons-master/packages/icons-svg/svg/outlined/<name>.svg` 取对应 SVG（去掉 `class="icon"`，格式照抄 `components/icon/svg/home.svg`）→ ② 存入 `components/icon/svg/<kebab-name>.svg`（`-filled` 后缀出 `Filled` 组件，否则 `Outlined`）→ ③ 跑 `pnpm gen:icons` 自动生成 `icons.ts` → ④ 在 `components/icon/metadata.ts` 补该图标条目 → ⑤ 组件内用 `import { XxxOutlined } from '../icon'` 并以 `<XxxOutlined />` 渲染。注意 `icon` 回调要返回**渲染好的组件**，返回名字字符串会显示字面量文本。

**4. 验证（必须粘贴实测输出，禁止估算/百分比）**：
   - `npx vitest run components/<name>` → 记录「N 通过」
   - `pnpm typecheck` → 记录「通过 / 报错详情」
   - 全量回归（可选）→ 记录总通过数与增量
   - E2E（涉及交互/渲染/异步刷新的组件必做）：`pnpm dev` 起站 → `playwright-cli` 开 `/components/<name>` → 查 `console error` + DOM 计数/交互断言 → `close` 并停 dev server。jsdom 测不到的真实联动（如父子级联、异步 flush 后的 DOM 态）靠这步兜底；做完在条目「验证」里记实测结果，别再留「待补」。
   - 数字一律来自命令真实输出，不准写「约」「50+」「完成 75%」这类估算。

**5. 落盘**：把条目写入**对应分类文件**（就是步骤 0 找到的 `COMPARISON/0X-*.md`，**不新建目录/文件**），更新本文件的「已完成」行（如第 67 行）、「待办路线图」（如第 71 行）与「分类文件一览」状态（如第 86 行）。条目标题须带**全局连续编号**（`## N. 组件名 ✅ ...`，N 接上一个组件，跨分类文件连续不重置——如 05 止于 58，06 从 59 起）。**重要**：落盘完成后，**必须向用户展示所有改动并等待确认**，经用户同意后才能使用 `/git` 提交。

**6. 收尾自检（Definition of Done，全勾才能 `/clear`）**：
   - [ ] 差异表无 ❌ 与已修代码矛盾的行
   - [ ] 验证小节是实测数字，非估算；交互型组件已做 E2E 并记录结果（非「待补」）
   - [ ] 条目落在正确的 `COMPARISON/0X-*.md`，未新建文件
   - [ ] 本文件「下一个执行」已指向下一个组件
   - [ ] 无残留临时文件（如误建的 `docs/comparison/`、`/tmp/*.log`、`/tmp/*.png`）

> **关于 `/clear`**：产出全部落在分类文件，下一个组件不需要前一个的对话上下文。**但隐性约定（文件路径、条目格式、验证标准）只存在于步骤 0 读取的样板里——所以 `/clear` 后必须先做步骤 0 再动手，否则就会"靠猜路径、靠估数字"。** 例外：下一个组件是前一个的特化或共用底层（如 Popconfirm 复用 Popover wrapper），保留上下文或用 `/compact` 软压缩。

### ✅ 已完成（65 个，全量 1540 测试通过 + 2 skipped，修复 266 个真实 bug）

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
Tooltip(修4bug) · Popover(修5bug) · Popconfirm(修8bug) · Modal(修9bug) · Drawer(修6bug) · Message(修2bug) · Notification(修2bug) · Tour(修2bug) · Image(修8bug)

**E 数据/复杂** → [`COMPARISON/06-data-complex.md`](./COMPARISON/06-data-complex.md)
Table(修13差异/Bug，测试 11→24) · Tree(修/补22项，测试 11→40) · Transfer(修20差异/Bug，测试 10→29) · Carousel(修12差异/Bug，测试 11→27) · ColorPicker(已对比，待修复28项)

**F 反馈** → [`COMPARISON/07-feedback.md`](./COMPARISON/07-feedback.md)
Progress(修9bug/补12差异，测试 23→44) · Popover(对齐默认主题盒模型+语义化 classNames/styles，测试 22→29) · Result(修2bug，测试 11→15) · Spin(修1bug/补 percent，测试 11→18) · Skeleton(修1bug，测试 39→46) · Alert(修3bug，测试 17→32) · Watermark(修5bug，测试 11→20)

### ⏭️ 待办路线图（简单→复杂，按序进行）

- **F 反馈**：~~Progress~~ → ~~Popover~~ → ~~Result~~ → ~~Spin~~ → ~~Skeleton~~ → ~~Alert~~ → ~~Watermark~~ ✅ 全部完成

**下一个执行**：F 反馈类已全部完成（7/7）。全量 1540 测试通过 + 2 skipped。后续如有新分类再规划。

---

## 📁 分类文件一览

| # | 分类 | 文件 | 状态 |
| --- | --- | --- | --- |
| 1 | 基础/布局 | [01-basic-layout.md](./COMPARISON/01-basic-layout.md) | ✅ 12/12 |
| 2 | A 展示类 | [02-display.md](./COMPARISON/02-display.md) | ✅ 10/10 |
| 3 | B 容器/导航 | [03-container-nav.md](./COMPARISON/03-container-nav.md) | ✅ 11/11 |
| 4 | C 表单控件 | [04-form.md](./COMPARISON/04-form.md) | ✅ 16/16 |
| 5 | D 浮层/反馈 | [05-overlay-feedback.md](./COMPARISON/05-overlay-feedback.md) | ✅ 9/9（已完成 Tooltip · Popover · Popconfirm · Modal · Drawer · Message · Notification · Tour · Image） |
| 6 | E 数据/复杂 | [06-data-complex.md](./COMPARISON/06-data-complex.md) | ✅ 5/5（已完成 Table · Tree · Transfer · Carousel · ColorPicker） |
| 7 | F 反馈 | [07-feedback.md](./COMPARISON/07-feedback.md) | ✅ 7/7（已完成 Progress · Popover · Result · Spin · Skeleton · Alert · Watermark） |
