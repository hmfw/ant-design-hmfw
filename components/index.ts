import type { App as VueApp } from 'vue'

// Config
export { ConfigProvider, useConfig, usePrefixCls, useLocale } from './config-provider'
export type { ConfigProviderProps, ConfigContext } from './config-provider'

// Locale
export { zhCN, enUS } from './_locale'
export type { Locale } from './_locale'

// Theme
export { defaultSeedTokens, generateMapTokens } from './_theme'
export type { SeedTokens, MapTokens } from './_theme'

// Utils
export { cls, isClient, getScrollParent, getOffset, contains, on, once, KEYS } from './_utils'

// Components
export { Icon } from './icon'
export type { IconProps, IconComponent } from './icon'
export * from './icon/icons'

// Icon metadata and utilities
export { iconMetadata } from './icon/metadata'
export type { IconMetadata } from './icon/metadata'
export {
  searchIcons,
  getIconsByCategory,
  getAllCategories,
  getAllIcons,
} from './icon/utils'
export type { IconSearchResult } from './icon/utils'

export { Button } from './button'
export type { ButtonProps, ButtonType, ButtonSize, ButtonHTMLType } from './button'

export { Space } from './space'
export type { SpaceProps, SpaceSize, SpaceDirection, SpaceAlign } from './space'

export { Divider } from './divider'
export type { DividerProps, DividerType, DividerOrientation } from './divider'

export { Row, Col } from './grid'
export type { RowProps, ColProps, Gutter, Align, Justify, ColSpan, ColSize } from './grid'

export { Text, Title, Paragraph } from './typography'
export type { TextProps, TitleProps, ParagraphProps, TypographyType, TitleLevel } from './typography'

export { Layout, Header, Footer, Content, Sider } from './layout'
export type { LayoutProps, SiderProps, LayoutBreakpoint } from './layout'

export { Avatar, AvatarGroup } from './avatar'
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarShape } from './avatar'

export { Badge } from './badge'
export type { BadgeProps, BadgeStatus, BadgeSize } from './badge'

export { Tag, CheckableTag } from './tag'
export type { TagProps, CheckableTagProps, TagColor } from './tag'

export { Empty } from './empty'
export type { EmptyProps } from './empty'

export { Card, CardMeta } from './card'
export type { CardProps, CardMetaProps } from './card'

export { Input, InputPassword, TextArea, InputSearch } from './input'
export type { InputProps, TextAreaProps, InputSize, InputStatus } from './input'

export { Checkbox, CheckboxGroup } from './checkbox'
export type { CheckboxProps, CheckboxGroupProps, CheckboxValueType } from './checkbox'

export { Radio, RadioGroup } from './radio'
export type { RadioProps, RadioGroupProps, RadioValueType } from './radio'

export { Switch } from './switch'
export type { SwitchProps, SwitchSize } from './switch'

export { Spin } from './spin'
export type { SpinProps, SpinSize } from './spin'

export { Progress } from './progress'
export type { ProgressProps, ProgressType, ProgressStatus } from './progress'

export { Breadcrumb } from './breadcrumb'
export type { BreadcrumbProps, BreadcrumbItem } from './breadcrumb'

export { Pagination } from './pagination'
export type { PaginationProps, PaginationSize } from './pagination'

export { Tabs } from './tabs'
export type { TabsProps, TabItem, TabsType, TabsSize, TabsPosition } from './tabs'

export { Modal } from './modal'

export { Drawer } from './drawer'

export { message } from './message'
export type { MessageType } from './message'

export { Tooltip } from './tooltip'
export type { TooltipProps, TooltipPlacement, TooltipTrigger } from './tooltip'

export { Alert } from './alert'
export type { AlertProps, AlertType } from './alert'

export { notification } from './notification'
export type { NotificationConfig, NotificationPlacement, NotificationType } from './notification'

export { Select } from './select'
export type { SelectProps, SelectOption, SelectSize, SelectMode, SelectStatus } from './select'

export { Popover } from './popover'
export type { PopoverProps } from './popover'

export { InputNumber } from './input-number'

export { Collapse, CollapsePanel } from './collapse'
export type { CollapseItem } from './collapse'

export { Descriptions } from './descriptions'
export type { DescriptionsItem } from './descriptions'

export { Steps } from './steps'
export type { StepItem, StepStatus } from './steps'

export { Result } from './result'
export type { ResultStatus } from './result'

export { Skeleton, SkeletonButton, SkeletonInput } from './skeleton'
export type { SkeletonAvatarProps, SkeletonTitleProps, SkeletonParagraphProps } from './skeleton'

export { Rate } from './rate'

export { Slider } from './slider'

export { Timeline } from './timeline'
export type { TimelineItem } from './timeline'

export { List, ListItem, ListItemMeta } from './list'

export { Dropdown } from './dropdown'
export type { DropdownItem } from './dropdown'

export { Popconfirm } from './popconfirm'

export { Segmented } from './segmented'
export type { SegmentedOption } from './segmented'

export { Table } from './table'
export type { TableColumn, TableProps } from './table'

export { Menu } from './menu'
export type { MenuItem } from './menu'

export { Form, FormItem, useForm } from './form'
export type { FormProps, FormItemProps, FormRule } from './form'

export { Watermark } from './watermark'

export { BackTop } from './back-top'

export { FloatButton, FloatButtonGroup } from './float-button'

export { QRCode } from './qrcode'
export type { QRCodeProps, QRCodeStatus, QRCodeErrorLevel } from './qrcode'

export { Anchor } from './anchor'
export type { AnchorProps, AnchorLinkItem } from './anchor'

export { Tree } from './tree'
export type { TreeProps, TreeDataNode, TreeExpandedKeys, TreeSelectedKeys, TreeCheckedKeys } from './tree'

export { TimePicker } from './time-picker'
export type { TimePickerProps, TimePickerValue } from './time-picker'

export { DatePicker } from './date-picker'
export type { DatePickerProps, DatePickerMode, DatePickerValue, RangePickerValue } from './date-picker'

export { Upload } from './upload'
export type { UploadProps, UploadFile, UploadListType, CustomRequestOptions } from './upload'

export { Flex } from './flex'
export type { FlexProps, FlexAlign, FlexJustify, FlexWrap, FlexGap, FlexDirection } from './flex'

export { AutoComplete } from './auto-complete'
export type { AutoCompleteProps, AutoCompleteOption } from './auto-complete'

export { Cascader } from './cascader'
export type { CascaderProps, CascaderOption, CascaderValue, CascaderExpandTrigger } from './cascader'

// App
export { App, useApp } from './app'
export type { AppConfig } from './app'

// Install function for Vue.use()
import { ConfigProvider } from './config-provider'
import { Icon } from './icon'
import { Button } from './button'
import { Space } from './space'
import { Divider } from './divider'
import { Row, Col } from './grid'
import { Text, Title, Paragraph } from './typography'
import { Layout, Header, Footer, Content, Sider } from './layout'
import { Avatar, AvatarGroup } from './avatar'
import { Badge } from './badge'
import { Tag, CheckableTag } from './tag'
import { Empty } from './empty'
import { Card, CardMeta } from './card'
import { Input, InputPassword, TextArea, InputSearch } from './input'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup } from './radio'
import { Switch } from './switch'
import { Spin } from './spin'
import { Progress } from './progress'
import { Breadcrumb } from './breadcrumb'
import { Pagination } from './pagination'
import { Tabs } from './tabs'
import { Modal } from './modal'
import { Drawer } from './drawer'
import { App as AppComponent } from './app'

const components = [ConfigProvider, AppComponent, Icon, Button, Space, Divider, Row, Col, Text, Title, Paragraph, Layout, Header, Footer, Content, Sider, Avatar, AvatarGroup, Badge, Tag, CheckableTag, Empty, Card, CardMeta, Input, InputPassword, TextArea, InputSearch, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Spin, Progress, Breadcrumb, Pagination, Tabs, Modal, Drawer]

export function install(app: VueApp): void {
  components.forEach((component) => {
    app.component(component.name!, component)
  })
}

export default { install }
