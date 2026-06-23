# 更新日志

完整的更新日志请查看：

- **在线文档**: https://your-domain.com/guide/changelog
- **本地文档**: [docs/guide/changelog.md](./docs/guide/changelog.md)

---

## 最新版本

### [0.2.0] - 2026-06-23

#### ✨ 新特性

- **统一浮层系统** - 新增内部 `Trigger` 组件与 `computePosition` 定位引擎，支持 12 个弹出方位、溢出自动翻转、箭头对齐，作为所有浮层类组件的共享基座
- **Breadcrumb 下拉菜单增强** - 新增公开类型 `BreadcrumbMenu`、`BreadcrumbMenuItem`，支持 `title`/`path`、`dropdownProps` 透传与自定义 `dropdownIcon`
- **新增设计 Token** - `boxShadowPopoverArrow`，用于浮层箭头阴影

#### ♻️ 重构

- 10 个浮层组件统一迁移至 `Trigger` 系统：AutoComplete、Cascader、ColorPicker、DatePicker、Dropdown、RangePicker、Select、TimePicker、Tooltip、TreeSelect

#### 🧪 质量保障

- 单元测试增至 1925 个（1925 通过 + 2 跳过）

查看完整变更详情：[docs/guide/changelog.md](./docs/guide/changelog.md)

[0.2.0]: https://github.com/hmfw/ant-design-hmfw/releases/tag/v0.2.0
[0.1.0]: https://github.com/hmfw/ant-design-hmfw/releases/tag/v0.1.0
