# TODO 清单

> 基于 COMPARISON.md 自动生成（2026/06/06）  
> 优先级：🔴 高（核心功能/严重Bug） | 🟡 中（常用功能） | 🟢 低（边缘场景/优化）

---

## 📖 快速开始指南

### 执行任务的标准流程

```bash
# 1. 准备：查看项目状态
git status && pnpm test

# 2. 实现：按优先级选择组件，参考下方 TODO 列表
#    - 读取 components/{name}/*.tsx 了解现状
#    - 修改实现 + 类型定义
#    - 编写/补充测试
#    - 创建演示文件（docs/demos/{name}/）
#    - 更新 API 文档（docs/demos/{name}/{name}.md）

# 3. 验证：确保所有测试通过
pnpm test

# 4. 标记：在 TODO.md 中勾选完成项 [ ] → [x]
```

### 上下文丢失后的恢复

```bash
# 查看当前进度
git status && git log --oneline -5
grep "\[x\]" TODO.md | head -20  # 查看已完成项

# 查看工作总结
ls -la *SUMMARY.md && cat ROUND*_SUMMARY.md

# 从未完成的 [ ] 项继续执行
```

### 组件文件结构参考

```
components/{name}/
├── {Name}.tsx          # 主组件实现
├── types.ts            # 类型定义
├── index.ts            # 导出
├── style/              # 样式文件
└── __tests__/          # 测试文件
    └── {Name}.test.tsx
```

---

## 🎯 总体统计

- **已对比组件数**: 60+
- **待修复 Bug**: 待统计
- **功能缺失**: 待统计
- **文档待补充**: 待统计

---

## 📋 按优先级分类

### 🔴 P0 - 高优先级（核心功能 / 严重 Bug）

#### **数据录入组件**

**Form 表单**
- [x] 缺少 `scrollToFirstError` 方法（表单验证失败后自动滚动）
- [x] 缺少 `preserve` 属性（字段卸载时是否保留值）
- [x] 缺少 `validateTrigger` 全局配置
- [x] 缺少 `getFieldsError()` / `isFieldsTouched()` 等批量查询 API
- [x] 表单联动场景未充分测试（依赖验证、动态字段）

**Input 输入框**
- [x] 缺少 `count` / `showCount` 组合属性（字符计数显示）
- [x] 缺少 `status` 属性（error / warning 状态）
- [x] `onPressEnter` 在 Input.TextArea 中未实现
- [x] 缺少 `classNames` / `styles` 细粒度样式控制

**Select 选择器**
- [ ] 大数据场景性能问题（未实现虚拟滚动）
- [x] 缺少 `fieldNames` 自定义字段名
- [x] 缺少 `labelRender` 自定义渲染选中标签
- [x] `autoClearSearchValue` 行为与 AntD 不一致
- [x] 多选模式下 `maxTagCount` / `maxTagPlaceholder` 缺失

**DatePicker 日期选择器**
- [x] 缺少 `presets` 快捷选项（今天、本周、本月等）
- [x] 缺少 `cellRender` 自定义单元格内容
- [ ] 范围选择器缺少 `onCalendarChange` 回调
- [ ] 时间面板交互与 AntD 有差异

**Checkbox / Radio**
- [ ] 缺少 `skipGroup` 属性（跳过 CheckboxGroup 控制）
- [ ] Radio.Button 样式与 AntD 不一致
- [ ] 缺少 `id` 属性自动绑定到原生 input

#### **数据展示组件**

**Table 表格**
- [ ] **严重**: 虚拟滚动未实现（大数据场景卡顿）
- [ ] 缺少 `sticky` 吸顶功能
- [ ] 树形数据展开/收起动画缺失
- [ ] 缺少 `summary` 总结栏
- [ ] 可编辑单元格示例缺失
- [ ] 缺少 `onChange` 的 `extra` 参数（当前分页器信息）

**Tree 树形控件**
- [ ] 虚拟滚动未实现
- [ ] 缺少 `fieldNames` 自定义字段
- [ ] 缺少 `blockNode` 块级节点
- [ ] 拖拽功能缺少边界检查

**List 列表**
- [x] 缺少 `grid.column` 响应式配置（xs/sm/md/lg/xl）
- [ ] 虚拟滚动未实现
- [ ] 无限滚动示例缺失

#### **反馈组件**

**Modal 对话框**
- [ ] 缺少 `modalRender` 自定义渲染容器
- [ ] 缺少 `focusTriggerAfterClose` 控制焦点返回
- [ ] 静态方法 `Modal.confirm` 的 `icon` 不支持自定义组件
- [ ] 缺少 `classNames` / `styles` 细粒度控制

**Message / Notification**
- [ ] 缺少 `top` / `bottom` 偏移量配置
- [ ] 缺少 `prefixCls` 自定义样式前缀
- [ ] 缺少 `getContainer` 挂载节点配置
- [ ] 全局配置方法 `message.config()` 未实现

---

### 🟡 P1 - 中优先级（常用功能 / 体验优化）

#### **导航组件**

**Menu 菜单**
- [ ] 缺少 `triggerSubMenuAction` 配置（hover / click）
- [ ] 内联模式缩进计算与 AntD 有差异
- [ ] 缺少 `itemIcon` / `expandIcon` 全局图标配置
- [ ] 菜单项 Tooltip 在收起状态下未显示

**Tabs 标签页**
- [ ] 缺少 `renderTabBar` 自定义标签栏
- [ ] 缺少 `popupClassName` 配置下拉菜单样式
- [ ] 卡片模式下新增/删除动画缺失
- [ ] 缺少 `centered` 居中模式

**Breadcrumb 面包屑**
- [ ] 缺少 `itemRender` 自定义渲染项
- [ ] 缺少路由集成示例（vue-router）
- [ ] 下拉菜单样式与 AntD 不一致

**Pagination 分页**
- [ ] 缺少 `showTitle` 控制 title 显示
- [ ] 缺少 `itemRender` 自定义渲染项
- [ ] 简洁模式样式与 AntD 有差异

#### **布局组件**

**Layout**
- [ ] Sider 响应式断点未完全实现
- [ ] 缺少 `zero-width` 触发器样式
- [ ] 主题切换动画缺失

**Grid (Row / Col)**
- [ ] 缺少 `wrap` 属性控制换行
- [ ] 响应式 gutter 数组格式未支持 `[horizontal, vertical]`

**Space**
- [ ] 缺少 `split` 分隔符
- [ ] 垂直模式下对齐方式异常

#### **反馈组件（续）**

**Drawer 抽屉**
- [ ] 缺少 `rootClassName` / `rootStyle`
- [ ] 缺少 `contentWrapperStyle` 控制内容包裹层
- [ ] 多层 Drawer 时遮罩层级混乱

**Popconfirm 气泡确认框**
- [ ] 缺少 `showCancel` 控制取消按钮显示
- [ ] 缺少 `okButtonProps` / `cancelButtonProps` 按钮属性透传
- [ ] 图标自定义受限

**Tooltip / Popover**
- [ ] 缺少 `arrow.pointAtCenter` 箭头居中
- [ ] 缺少 `fresh` 属性强制重新计算位置
- [ ] 动态内容时定位不更新

#### **数据展示（续）**

**Card 卡片**
- [ ] 缺少 `tabBarExtraContent` 标签栏额外内容
- [ ] 加载状态骨架屏样式与 AntD 不一致
- [ ] Grid 卡片缺少 hover 效果

**Descriptions 描述列表**
- [ ] 缺少 `contentStyle` / `labelStyle` 样式控制
- [ ] 垂直模式下边框样式异常
- [ ] 响应式列数计算有误

**Timeline 时间轴**
- [ ] 缺少 `label` 标签（左右布局时使用）
- [ ] 缺少自定义位置模式
- [ ] 图标垂直居中问题

**Statistic 统计数值**
- [ ] 缺少 `loading` 加载状态
- [ ] 数字滚动动画未实现
- [ ] 倒计时完成回调 `onFinish` 缺失

---

### 🟢 P2 - 低优先级（边缘场景 / 细节优化）

#### **通用组件**

**Button**
- [ ] 缺少 `classNames` / `styles` 细粒度控制
- [ ] `iconPosition` 为 'end' 时间距调整
- [ ] 紧凑模式样式细节

**Icon**
- [ ] 图标库未完全同步 AntD v6 最新版本
- [ ] 缺少自定义图标脚本文件

**Typography**
- [ ] 缺少 `onEllipsis` 省略时回调
- [ ] `ellipsis.tooltip` 不支持自定义配置
- [ ] 代码块复制功能图标未本地化

#### **数据录入（续）**

**Upload 上传**
- [ ] 缺少 `isImageUrl` 自定义图片判断
- [ ] 缺少 `itemRender` 自定义文件列表项
- [ ] 拖拽上传动画效果缺失
- [ ] 大文件分片上传示例缺失

**Cascader 级联选择**
- [ ] 缺少 `displayRender` 自定义渲染显示
- [ ] 搜索模式下高亮匹配字符未实现
- [ ] 缺少 `showCheckedStrategy` 控制回填策略

**Transfer 穿梭框**
- [ ] 缺少 `selectAllLabels` 自定义全选文本
- [ ] 缺少 `oneWay` 单向模式
- [ ] 拖拽排序功能缺失

**Rate 评分**
- [ ] 缺少 `tooltips` 提示文案数组
- [ ] 半星模式交互不流畅
- [ ] 键盘操作支持不完整

**Slider 滑动输入条**
- [ ] 缺少 `keyboard` 控制键盘事件响应
- [ ] 垂直模式下 Tooltip 位置异常
- [ ] 范围滑块拖拽越界问题

**Switch 开关**
- [ ] 缺少 `loading` 加载状态
- [ ] `unCheckedChildren` 长文本时样式异常

**TimePicker 时间选择器**
- [ ] 缺少 `needConfirm` 控制是否需要确认
- [ ] 12 小时制切换动画缺失
- [ ] 滚动到选中项性能优化

**TreeSelect 树选择**
- [ ] 虚拟滚动未实现
- [ ] 缺少 `treeIcon` 配置
- [ ] 多选标签显示策略与 AntD 不一致

#### **数据展示（续）**

**Avatar 头像**
- [ ] 缺少 `crossOrigin` / `referrerPolicy` 图片属性
- [ ] Group 最大数量超出时省略样式
- [ ] 响应式大小配置缺失

**Badge 徽标**
- [ ] Ribbon 缎带模式缺少 `placement` 配置
- [ ] 数字滚动动画缺失
- [ ] `status` 点状态颜色自定义受限

**Calendar 日历**
- [ ] 缺少 `cellRender` v6 新 API
- [ ] 自定义头部渲染复杂场景支持不足
- [ ] 范围选择模式缺失

**Carousel 走马灯**
- [ ] 缺少 `waitForAnimate` 动画等待
- [ ] 缺少 `adaptiveHeight` 自适应高度
- [ ] 切换动画性能优化

**Collapse 折叠面板**
- [ ] 缺少 `collapsible` 配置每个面板是否可折叠
- [ ] 缺少 `showArrow` 控制箭头显示
- [ ] 展开/收起动画抖动

**Empty 空状态**
- [ ] 缺少暗黑模式图片
- [ ] 自定义图片尺寸配置缺失

**Image 图片**
- [ ] 预览组件缺少 `toolbarRender` 自定义工具栏
- [ ] 多图预览切换动画卡顿
- [ ] 缺少 `imageRender` 自定义渲染

**Popover**
- [ ] `_InternalPanelDoNotUseOrYouWillBeFired` 内部组件未实现

**Progress 进度条**
- [ ] 缺少 `steps` 步骤进度条
- [ ] 缺少 `success.percent` 成功进度段
- [ ] 仪表盘模式渐变色显示异常

**Segmented 分段控制器**
- [ ] 缺少 `options` 的 `className` / `style` 配置
- [ ] 切换动画滑块位置计算偏差
- [ ] 图标+文本模式布局优化

**Skeleton 骨架屏**
- [ ] 缺少 `node` 自定义节点
- [ ] 动画性能优化
- [ ] 暗黑模式下颜色对比度不足

**Spin 加载中**
- [ ] 缺少 `fullscreen` 全屏模式
- [ ] 自定义指示器大小适配问题
- [ ] 延迟显示时间计算不准确

**Tag 标签**
- [ ] 缺少 `bordered` 控制边框
- [ ] 缺少 `closeIcon` 自定义关闭图标
- [ ] CheckableTag 样式与 AntD 有差异

**Watermark 水印**
- [ ] 缺少 `inherit` 继承父元素尺寸
- [ ] 多行文本水印布局优化
- [ ] 防删除保护机制

#### **反馈组件（续）**

**Alert 警告提示**
- [ ] 缺少 `action` 自定义操作项
- [ ] Banner 模式边距调整
- [ ] 图标与文本垂直对齐问题

**Result 结果**
- [ ] 缺少 `extra` 额外内容配置
- [ ] 自定义图标尺寸不生效
- [ ] 暗黑模式下颜色适配

---

## 📦 按组件分类

### 01. 通用 (General)
- **Button**: 3 项（P2）
- **Icon**: 2 项（P2）
- **Typography**: 3 项（P2）

### 02. 布局 (Layout)
- **Divider**: 0 项 ✅
- **Grid**: 2 项（P1）
- **Layout**: 3 项（P1）
- **Space**: 2 项（P1）

### 03. 导航 (Navigation)
- **Breadcrumb**: 3 项（P1）
- **Dropdown**: 0 项 ✅
- **Menu**: 4 项（P1）
- **Pagination**: 3 项（P1）
- **Steps**: 0 项 ✅
- **Tabs**: 4 项（P1）

### 04. 数据录入 (Data Entry)
- **AutoComplete**: 0 项 ✅
- **Cascader**: 3 项（P2）
- **Checkbox**: 3 项（P0）
- **ColorPicker**: 0 项 ✅
- **DatePicker**: 4 项（P0）
- **Form**: 5 项（P0）⚠️
- **Input**: 4 项（P0）
- **InputNumber**: 0 项 ✅
- **Mentions**: 0 项 ✅
- **Radio**: 3 项（P0）
- **Rate**: 3 项（P2）
- **Select**: 5 项（P0）⚠️
- **Slider**: 3 项（P2）
- **Switch**: 2 项（P2）
- **TimePicker**: 3 项（P2）
- **Transfer**: 3 项（P2）
- **TreeSelect**: 3 项（P2）
- **Upload**: 4 项（P2）

### 05. 数据展示 (Data Display)
- **Avatar**: 3 项（P2）
- **Badge**: 3 项（P2）
- **Calendar**: 3 项（P2）
- **Card**: 3 项（P1）
- **Carousel**: 3 项（P2）
- **Collapse**: 3 项（P2）
- **Descriptions**: 3 项（P1）
- **Empty**: 2 项（P2）
- **Image**: 3 项（P2）
- **List**: 3 项（P0）
- **Popover**: 1 项（P2）
- **Progress**: 3 项（P2）
- **QRCode**: 0 项 ✅
- **Segmented**: 3 项（P2）
- **Skeleton**: 3 项（P2）
- **Statistic**: 3 项（P1）
- **Table**: 6 项（P0）⚠️
- **Tag**: 3 项（P2）
- **Timeline**: 3 项（P1）
- **Tooltip**: 3 项（P1）
- **Tree**: 4 项（P0）
- **Watermark**: 3 项（P2）

### 06. 反馈 (Feedback)
- **Alert**: 3 项（P2）
- **Drawer**: 3 项（P1）
- **Message**: 4 项（P0）
- **Modal**: 4 项（P0）
- **Notification**: 4 项（P0）
- **Popconfirm**: 3 项（P1）
- **Progress**: 已列在数据展示
- **Result**: 3 项（P2）
- **Skeleton**: 已列在数据展示
- **Spin**: 3 项（P2）

### 其他 (Other)
- **App**: 待评估
- **ConfigProvider**: 待评估
- **FloatButton**: 待评估
- **Tour**: 待评估

---

## 🎯 建议的迭代顺序

### 第一轮（Week 1-2）：数据录入组件
```
1. Form       — 补全核心方法 + 联动场景测试
2. Input      — showCount / status / classNames
3. Select     — 虚拟滚动 + fieldNames
4. DatePicker — presets + cellRender
```

### 第二轮（Week 3-4）：数据展示组件
```
1. Table      — 虚拟滚动 + sticky + summary
2. Tree       — 虚拟滚动 + fieldNames
3. List       — 响应式 grid + 虚拟滚动
4. Card       — 补全细节功能
```

### 第三轮（Week 5-6）：反馈 + 导航组件
```
1. Modal / Message / Notification — 全局配置 + 细粒度控制
2. Menu       — triggerSubMenuAction + 图标配置
3. Tabs       — renderTabBar + 动画优化
4. Pagination — itemRender
```

### 第四轮（Week 7-8）：细节优化 + 文档
```
1. 所有 P2 优先级的边缘功能
2. 补充所有组件的 demo（至少 3 个/组件）
3. 补充 API 文档表格
4. 添加迁移指南
```

---

## 📊 进度追踪

**开始日期**: 2026/06/06  
**目标完成**: 2026/08/06（2 个月）

| 轮次 | 起止日期 | 完成组件 | 完成度 |
|------|----------|----------|--------|
| 第一轮 | 06/06 - 06/20 | - | 0% |
| 第二轮 | 06/21 - 07/04 | - | 0% |
| 第三轮 | 07/05 - 07/18 | - | 0% |
| 第四轮 | 07/19 - 08/06 | - | 0% |

---

## 💡 使用说明

每次完成一个 TODO 项时：
1. 在对应行前加 `[x]` 标记完成
2. 在 COMPARISON.md 中更新对应组件的状态
3. 提交 commit，消息格式：`feat(组件名): 完成 XX 功能`

需要调整优先级时：
- 移动 TODO 项到对应优先级区域
- 在项目后添加调整原因注释

---

**最后更新**: 2026/06/06  
**自动生成**: 基于 COMPARISON.md 全量分析
