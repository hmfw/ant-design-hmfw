import type { App as VueApp } from 'vue'

// Config
export { ConfigProvider, useConfig, usePrefixCls, useLocale } from './config-provider'
export type { ConfigProviderProps, ConfigContext, ComponentSize } from './config-provider'

// Locale
export { zhCN, enUS } from './_locale'
export type { Locale } from './_locale'

// Theme
export { defaultSeedTokens, generateMapTokens } from './_theme'
export type { SeedTokens, MapTokens } from './_theme'

// Utils
export { cls, isClient, getScrollParent, getOffset, contains, on, once, KEYS } from './_utils'

// Components
export { Button } from './button'
export type { ButtonProps, ButtonType, ButtonSize, ButtonHTMLType, ButtonShape, LoadingConfig } from './button'

export { Space } from './space'
export type { SpaceProps, SpaceSize, SpaceDirection, SpaceAlign } from './space'

export { Divider } from './divider'
export type { DividerProps, DividerType, DividerOrientation } from './divider'

export { Row, Col } from './grid'
export type { RowProps, ColProps, Gutter, Align, Justify, ColSpan, ColSize } from './grid'

export { Text, Title, Paragraph, Link } from './typography'
export type {
  TextProps,
  TitleProps,
  ParagraphProps,
  LinkProps,
  TypographyType,
  TitleLevel,
  CopyableConfig,
  TextClassNames,
  TextStyles,
  TitleClassNames,
  TitleStyles,
  ParagraphClassNames,
  ParagraphStyles,
  LinkClassNames,
  LinkStyles,
} from './typography'

export { Layout, Header, Footer, Content, Sider } from './layout'
export type { LayoutProps, SiderProps, LayoutBreakpoint, CollapseType } from './layout'

export { Avatar, AvatarGroup } from './avatar'
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarShape } from './avatar'

export { Badge, Ribbon } from './badge'
export type { BadgeProps, BadgeStatus, RibbonProps, RibbonPlacement } from './badge'

export { Tag, CheckableTag } from './tag'
export type { TagProps, CheckableTagProps, TagColor } from './tag'

export { Empty, PRESENTED_IMAGE_DEFAULT, PRESENTED_IMAGE_SIMPLE } from './empty'
export type { EmptyProps } from './empty'

export { Card, CardGrid, CardMeta } from './card'
export type { CardProps, CardMetaProps, CardGridProps, CardVariant } from './card'

export { Input, InputPassword, TextArea, InputSearch } from './input'
export type { InputProps, TextAreaProps, InputSize, InputStatus } from './input'

export { Checkbox, CheckboxGroup } from './checkbox'
export type {
  CheckboxProps,
  CheckboxGroupProps,
  CheckboxValueType,
  CheckboxChangeEvent,
  CheckboxChangeEventTarget,
  CheckboxOptionType,
} from './checkbox'

export { Radio, RadioGroup, RadioButton } from './radio'
export type { RadioProps, RadioGroupProps, RadioValueType, RadioChangeEvent } from './radio'

export { Switch } from './switch'
export type { SwitchProps, SwitchClassNames, SwitchStyles } from './switch'

export { Spin } from './spin'
export type { SpinProps } from './spin'

export { Progress } from './progress'
export type { ProgressProps, ProgressType, ProgressStatus } from './progress'

export { Breadcrumb } from './breadcrumb'
export type {
  BreadcrumbProps,
  BreadcrumbItemType as BreadcrumbItem,
  BreadcrumbClassNames,
  BreadcrumbStyles,
  BreadcrumbItemRender,
} from './breadcrumb'

export { Pagination } from './pagination'
export type { PaginationProps, PaginationClassNames, PaginationStyles } from './pagination'

export { Tabs } from './tabs'
export type { TabsProps, TabItem, TabsType, TabsSize, TabsPosition } from './tabs'

export { Modal } from './modal'

export { Mentions } from './mentions'
export type {
  MentionOption,
  MentionProps,
  MentionInstance,
  MentionSemanticClassNames,
  MentionSemanticStyles,
} from './mentions'

export { Drawer } from './drawer'
export type { DrawerPlacement, DrawerSize, DrawerContent, DrawerGetContainer } from './drawer'

export { message } from './message'
export type {
  MessageType,
  MessageApi,
  MessageInstance,
  MessageContent,
  ArgsProps as MessageArgsProps,
  ConfigOptions as MessageConfigOptions,
  JointContent as MessageJointContent,
  NoticeType as MessageNoticeType,
  TypeOpen as MessageTypeOpen,
} from './message'

export { Tooltip } from './tooltip'
export type {
  TooltipProps,
  TooltipPlacement,
  TooltipTrigger,
  TooltipArrow,
  TooltipTitle,
  TooltipClassNames,
  TooltipStyles,
} from './tooltip'

export { Alert } from './alert'
export type { AlertProps, AlertType, AlertVariant } from './alert'

export { notification } from './notification'
export type {
  NotificationPlacement,
  NotificationType,
  NotificationContent,
  ArgsProps as NotificationArgsProps,
  ConfigOptions as NotificationConfigOptions,
  NotificationInstance,
} from './notification'

export { Select } from './select'
export type { SelectProps, SelectOption, SelectSize, SelectMode, SelectStatus } from './select'

export { Popover, PopoverPurePanel } from './popover'
export type { PopoverProps, PopoverContent } from './popover'

export { InputNumber } from './input-number'
export type { InputNumberClassNames, InputNumberStyles } from './input-number'

export { Collapse, CollapsePanel } from './collapse'
export type {
  CollapseItem,
  CollapsibleType,
  CollapsePanelProps,
  ExpandIconProps,
  CollapseClassNames,
  CollapseStyles,
} from './collapse'

export { Descriptions, DescriptionsItem } from './descriptions'
export type {
  DescriptionsProps,
  DescriptionsItemProps,
  DescriptionsClassNames,
  DescriptionsStyles,
} from './descriptions'

export { Steps } from './steps'
export type {
  StepItem,
  StepStatus,
  StepsProps,
  IconRenderType,
  IconRenderInfo,
  StepsClassNames,
  StepsStyles,
} from './steps'

export { Result } from './result'
export type { ResultStatus, ResultClassNames, ResultStyles } from './result'

export { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage, SkeletonNode } from './skeleton'
export type {
  SkeletonAvatarProps,
  SkeletonTitleProps,
  SkeletonParagraphProps,
  SkeletonClassNames,
  SkeletonStyles,
  SkeletonButtonClassNames,
  SkeletonButtonStyles,
  SkeletonInputClassNames,
  SkeletonInputStyles,
  SkeletonAvatarClassNames,
  SkeletonAvatarStyles,
  SkeletonImageClassNames,
  SkeletonImageStyles,
  SkeletonNodeClassNames,
  SkeletonNodeStyles,
} from './skeleton'

export { Rate } from './rate'
export type { RateProps, RateCharacterRenderContext, RateClassNames, RateStyles } from './rate'

export { Slider } from './slider'
export type { SliderProps, SliderMarks, SliderTooltipProps, SliderClassNames, SliderStyles } from './slider'

export { Timeline, TimelineItem } from './timeline'
export type {
  TimelineProps,
  TimelineItemProps,
  TimelineMode,
  TimelineOrientation,
  TimelineVariant,
  TimelineItemPlacement,
  TimelineItemColor,
  TimelineClassNames,
  TimelineStyles,
} from './timeline'

export { List, ListItem, ListItemMeta } from './list'
export type {
  ListProps,
  ListItemProps,
  ListItemMetaProps,
  ListGridType,
  PaginationConfig,
  ListClassNames,
  ListStyles,
  ListItemClassNames,
  ListItemStyles,
  ListItemMetaClassNames,
  ListItemMetaStyles,
} from './list'

export { Dropdown } from './dropdown'
export type { DropdownProps } from './dropdown'

export { Popconfirm } from './popconfirm'
export type {
  PopconfirmProps,
  PopconfirmContent,
  PopconfirmOkType,
  PopconfirmClassNames,
  PopconfirmStyles,
} from './popconfirm'

export { Segmented } from './segmented'
export type {
  SegmentedOption,
  SegmentedValue,
  SegmentedRawOption,
  SegmentedOptions,
  SegmentedProps,
  SegmentedClassNames,
  SegmentedStyles,
} from './segmented'

export { Table } from './table'
export type { TableColumn, TableProps } from './table'

export { Menu, MenuItem, SubMenu, MenuDivider, MenuItemGroup } from './menu'
export type { MenuProps, MenuTheme, MenuMode, MenuClassNames, MenuStyles } from './menu'

export { Form, FormItem, useForm } from './form'
export type { FormProps, FormItemProps, FormRule, NamePath, ValidateStatus } from './form'

export { Watermark } from './watermark'
export type { WatermarkProps, WatermarkFont } from './watermark'

export { FloatButton, FloatButtonGroup, FloatButtonBackTop } from './float-button'
export type {
  FloatButtonProps,
  FloatButtonGroupProps,
  FloatButtonBackTopProps,
  FloatButtonType,
  FloatButtonShape,
  FloatButtonHTMLType,
  FloatButtonTrigger,
  FloatButtonGroupPlacement,
  FloatButtonBadgeProps,
} from './float-button'

export { QRCode } from './qrcode'
export type { QRCodeProps, QRCodeStatus, QRCodeErrorLevel, QRCodeType, StatusRenderInfo } from './qrcode'

export { Anchor, AnchorLink } from './anchor'
export type { AnchorProps, AnchorLinkItem, AnchorClassNames, AnchorStyles } from './anchor'

export { Tree, DirectoryTree } from './tree'
export type {
  TreeProps,
  TreeDataNode,
  TreeExpandedKeys,
  TreeSelectedKeys,
  TreeCheckedKeys,
  CheckedKeysObject,
  DirectoryTreeProps,
  ExpandAction,
} from './tree'

export { TimePicker } from './time-picker'
export type { TimePickerProps, TimePickerValue, TimePickerClassNames, TimePickerStyles } from './time-picker'

export { DatePicker } from './date-picker'
export type {
  DatePickerProps,
  DatePickerMode,
  DatePickerValue,
  RangePickerValue,
  DatePickerClassNames,
  DatePickerStyles,
} from './date-picker'

export { Upload, UploadDragger } from './upload'
export type {
  UploadProps,
  UploadFile,
  UploadListType,
  UploadType,
  UploadChangeParam,
  ShowUploadListInterface,
  CustomRequestOptions,
  BeforeUploadValue,
  ItemRenderActions,
  UploadClassNames,
  UploadStyles,
} from './upload'

export { Flex } from './flex'
export type { FlexProps, FlexAlign, FlexJustify, FlexWrap, FlexGap, FlexDirection } from './flex'

export { AutoComplete } from './auto-complete'
export type { AutoCompleteProps, AutoCompleteOption, AutoCompleteClassNames, AutoCompleteStyles } from './auto-complete'

export { Cascader } from './cascader'
export type {
  CascaderProps,
  CascaderOption,
  CascaderValue,
  CascaderExpandTrigger,
  CascaderClassNames,
  CascaderStyles,
} from './cascader'

// App
export { App, useApp } from './app'
export type { AppConfig } from './app'

// Image
export { Image, PreviewGroup } from './image'
export type {
  ImageProps,
  PreviewGroupProps,
  PreviewConfig as ImagePreviewConfig,
  ImageContent,
  TransformType as ImageTransformType,
  TransformAction as ImageTransformAction,
  ImgInfo as ImageImgInfo,
  MaskType as ImageMaskType,
  ToolbarRenderInfoType as ImageToolbarRenderInfoType,
  ImageClassNames,
  ImageStyles,
} from './image'

// Carousel
export { Carousel } from './carousel'
export type { CarouselProps, CarouselEffect, CarouselClassNames, CarouselStyles } from './carousel'

// Tour
export { Tour } from './tour'
export type { TourProps, TourStep, TourClassNames, TourStyles } from './tour'

// ColorPicker
export { ColorPicker } from './color-picker'
export type { ColorPickerProps, ColorFormat, ColorPickerClassNames, ColorPickerStyles } from './color-picker'

// Transfer
export { Transfer } from './transfer'
export type {
  TransferProps,
  TransferItem,
  TransferKey,
  TransferDirection,
  RenderResult as TransferRenderResult,
  RenderResultObject as TransferRenderResultObject,
  SelectAllLabel as TransferSelectAllLabel,
  PaginationType as TransferPaginationType,
  TransferSearchOption,
  TransferLocale,
  TransferListContext,
  TransferSemanticClassNames,
  TransferSemanticStyles,
} from './transfer'

// RangePicker
export { RangePicker } from './range-picker'
export type {
  RangePickerProps,
  RangeValue,
  RangePreset,
  RangePickerClassNames,
  RangePickerStyles,
} from './range-picker'

// TreeSelect
export { TreeSelect } from './tree-select'
export type { TreeSelectProps, TreeSelectNode, TreeSelectClassNames, TreeSelectStyles } from './tree-select'

export { Statistic, Countdown } from './statistic'
export type { StatisticProps, CountdownProps, StatisticClassNames, StatisticStyles } from './statistic'

export { Calendar } from './calendar'
export type {
  CalendarMode,
  CellRender as CalendarCellRender,
  HeaderRender as CalendarHeaderRender,
  DateCellRender as CalendarDateCellRender,
  MonthCellRender as CalendarMonthCellRender,
  ValidRange as CalendarValidRange,
  CalendarHeaderConfig,
  CellRenderInfo as CalendarCellRenderInfo,
  DateCellRenderInfo as CalendarDateCellRenderInfo,
  CalendarClassNames,
  CalendarStyles,
} from './calendar'

// Install function for Vue.use()
import { ConfigProvider } from './config-provider'
import { Button } from './button'
import { Space } from './space'
import { Divider } from './divider'
import { Row, Col } from './grid'
import { Text, Title, Paragraph, Link } from './typography'
import { Layout, Header, Footer, Content, Sider } from './layout'
import { Avatar, AvatarGroup } from './avatar'
import { Badge, Ribbon } from './badge'
import { Tag, CheckableTag } from './tag'
import { Empty } from './empty'
import { Card, CardGrid, CardMeta } from './card'
import { Input, InputPassword, TextArea, InputSearch } from './input'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup, RadioButton } from './radio'
import { Switch } from './switch'
import { Spin } from './spin'
import { Progress } from './progress'
import { Breadcrumb } from './breadcrumb'
import { Pagination } from './pagination'
import { Tabs } from './tabs'
import { Modal } from './modal'
import { Mentions } from './mentions'
import { Drawer } from './drawer'
import { App as AppComponent } from './app'
import { Image, PreviewGroup } from './image'
import { Carousel } from './carousel'
import { Tour } from './tour'
import { ColorPicker } from './color-picker'
import { Transfer } from './transfer'
import { RangePicker } from './range-picker'
import { TreeSelect } from './tree-select'
import { Statistic, Countdown } from './statistic'
import { Calendar } from './calendar'
import { Tooltip } from './tooltip'
import { Alert } from './alert'
import { Select } from './select'
import { Popover } from './popover'
import { InputNumber } from './input-number'
import { Collapse, CollapsePanel } from './collapse'
import { Descriptions, DescriptionsItem } from './descriptions'
import { Steps } from './steps'
import { Result } from './result'
import { Skeleton, SkeletonButton, SkeletonInput, SkeletonAvatar, SkeletonImage, SkeletonNode } from './skeleton'
import { Rate } from './rate'
import { Slider } from './slider'
import { Timeline, TimelineItem } from './timeline'
import { List, ListItem, ListItemMeta } from './list'
import { Dropdown } from './dropdown'
import { Popconfirm } from './popconfirm'
import { Segmented } from './segmented'
import { Table } from './table'
import { Menu } from './menu'
import { Form, FormItem } from './form'
import { Watermark } from './watermark'
import { FloatButton, FloatButtonGroup, FloatButtonBackTop } from './float-button'
import { QRCode } from './qrcode'
import { Anchor, AnchorLink } from './anchor'
import { Tree, DirectoryTree } from './tree'
import { TimePicker } from './time-picker'
import { DatePicker } from './date-picker'
import { Upload, UploadDragger } from './upload'
import { Flex } from './flex'
import { AutoComplete } from './auto-complete'
import { Cascader } from './cascader'

const components = [
  ConfigProvider,
  AppComponent,
  Button,
  Space,
  Divider,
  Row,
  Col,
  Text,
  Title,
  Paragraph,
  Link,
  Layout,
  Header,
  Footer,
  Content,
  Sider,
  Avatar,
  AvatarGroup,
  Badge,
  Ribbon,
  Tag,
  CheckableTag,
  Empty,
  Card,
  CardGrid,
  CardMeta,
  Input,
  InputPassword,
  TextArea,
  InputSearch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Switch,
  Spin,
  Progress,
  Breadcrumb,
  Pagination,
  Tabs,
  Modal,
  Mentions,
  Drawer,
  Image,
  PreviewGroup,
  Carousel,
  Tour,
  ColorPicker,
  Transfer,
  RangePicker,
  TreeSelect,
  Statistic,
  Countdown,
  Calendar,
  Tooltip,
  Alert,
  Select,
  Popover,
  InputNumber,
  Collapse,
  CollapsePanel,
  Descriptions,
  DescriptionsItem,
  Steps,
  Result,
  Skeleton,
  SkeletonButton,
  SkeletonInput,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonNode,
  Rate,
  Slider,
  Timeline,
  TimelineItem,
  List,
  ListItem,
  ListItemMeta,
  Dropdown,
  Popconfirm,
  Segmented,
  Table,
  Menu,
  Form,
  FormItem,
  Watermark,
  FloatButton,
  FloatButtonGroup,
  FloatButtonBackTop,
  QRCode,
  Anchor,
  AnchorLink,
  Tree,
  DirectoryTree,
  TimePicker,
  DatePicker,
  Upload,
  UploadDragger,
  Flex,
  AutoComplete,
  Cascader,
]

export function install(app: VueApp): void {
  components.forEach((component) => {
    app.component(component.name!, component)
  })
}

export default { install }
