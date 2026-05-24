import { defineComponent, ref } from 'vue'
import { ConfigProvider } from 'ant-design-hmfw'
import '../../components/src/style.css'
import ButtonDemo from './demos/ButtonDemo'
import SpaceDemo from './demos/SpaceDemo'
import DividerDemo from './demos/DividerDemo'
import GridDemo from './demos/GridDemo'
import TypographyDemo from './demos/TypographyDemo'
import LayoutDemo from './demos/LayoutDemo'
import AvatarDemo from './demos/AvatarDemo'
import BadgeDemo from './demos/BadgeDemo'
import TagDemo from './demos/TagDemo'
import EmptyDemo from './demos/EmptyDemo'
import CardDemo from './demos/CardDemo'
import InputDemo from './demos/InputDemo'
import CheckboxDemo from './demos/CheckboxDemo'
import RadioDemo from './demos/RadioDemo'
import SwitchDemo from './demos/SwitchDemo'
import SpinDemo from './demos/SpinDemo'
import ProgressDemo from './demos/ProgressDemo'
import BreadcrumbDemo from './demos/BreadcrumbDemo'
import PaginationDemo from './demos/PaginationDemo'
import TabsDemo from './demos/TabsDemo'
import ModalDemo from './demos/ModalDemo'
import DrawerDemo from './demos/DrawerDemo'
import MessageDemo from './demos/MessageDemo'
import TooltipDemo from './demos/TooltipDemo'
import AlertDemo from './demos/AlertDemo'
import NotificationDemo from './demos/NotificationDemo'
import SelectDemo from './demos/SelectDemo'
import PopoverDemo from './demos/PopoverDemo'
import InputNumberDemo from './demos/InputNumberDemo'
import CollapseDemo from './demos/CollapseDemo'
import DescriptionsDemo from './demos/DescriptionsDemo'
import StepsDemo from './demos/StepsDemo'
import ResultDemo from './demos/ResultDemo'
import SkeletonDemo from './demos/SkeletonDemo'
import RateDemo from './demos/RateDemo'
import SliderDemo from './demos/SliderDemo'
import TimelineDemo from './demos/TimelineDemo'
import ListDemo from './demos/ListDemo'
import DropdownDemo from './demos/DropdownDemo'
import PopconfirmDemo from './demos/PopconfirmDemo'
import SegmentedDemo from './demos/SegmentedDemo'
import TableDemo from './demos/TableDemo'
import MenuDemo from './demos/MenuDemo'
import FormDemo from './demos/FormDemo'
import WatermarkDemo from './demos/WatermarkDemo'
import FloatButtonDemo from './demos/FloatButtonDemo'
import QRCodeDemo from './demos/QRCodeDemo'
import AnchorDemo from './demos/AnchorDemo'
import TreeDemo from './demos/TreeDemo'
import TimePickerDemo from './demos/TimePickerDemo'
import DatePickerDemo from './demos/DatePickerDemo'
import UploadDemo from './demos/UploadDemo'
import FlexDemo from './demos/FlexDemo'
import AutoCompleteDemo from './demos/AutoCompleteDemo'
import CascaderDemo from './demos/CascaderDemo'

const demos = [
  { key: 'button', label: 'Button', component: ButtonDemo },
  { key: 'space', label: 'Space', component: SpaceDemo },
  { key: 'divider', label: 'Divider', component: DividerDemo },
  { key: 'grid', label: 'Grid', component: GridDemo },
  { key: 'typography', label: 'Typography', component: TypographyDemo },
  { key: 'layout', label: 'Layout', component: LayoutDemo },
  { key: 'avatar', label: 'Avatar', component: AvatarDemo },
  { key: 'badge', label: 'Badge', component: BadgeDemo },
  { key: 'tag', label: 'Tag', component: TagDemo },
  { key: 'empty', label: 'Empty', component: EmptyDemo },
  { key: 'card', label: 'Card', component: CardDemo },
  { key: 'input', label: 'Input', component: InputDemo },
  { key: 'checkbox', label: 'Checkbox', component: CheckboxDemo },
  { key: 'radio', label: 'Radio', component: RadioDemo },
  { key: 'switch', label: 'Switch', component: SwitchDemo },
  { key: 'spin', label: 'Spin', component: SpinDemo },
  { key: 'progress', label: 'Progress', component: ProgressDemo },
  { key: 'breadcrumb', label: 'Breadcrumb', component: BreadcrumbDemo },
  { key: 'pagination', label: 'Pagination', component: PaginationDemo },
  { key: 'tabs', label: 'Tabs', component: TabsDemo },
  { key: 'modal', label: 'Modal', component: ModalDemo },
  { key: 'drawer', label: 'Drawer', component: DrawerDemo },
  { key: 'message', label: 'Message', component: MessageDemo },
  { key: 'tooltip', label: 'Tooltip', component: TooltipDemo },
  { key: 'alert', label: 'Alert', component: AlertDemo },
  { key: 'notification', label: 'Notification', component: NotificationDemo },
  { key: 'select', label: 'Select', component: SelectDemo },
  { key: 'popover', label: 'Popover', component: PopoverDemo },
  { key: 'input-number', label: 'InputNumber', component: InputNumberDemo },
  { key: 'collapse', label: 'Collapse', component: CollapseDemo },
  { key: 'descriptions', label: 'Descriptions', component: DescriptionsDemo },
  { key: 'steps', label: 'Steps', component: StepsDemo },
  { key: 'result', label: 'Result', component: ResultDemo },
  { key: 'skeleton', label: 'Skeleton', component: SkeletonDemo },
  { key: 'rate', label: 'Rate', component: RateDemo },
  { key: 'slider', label: 'Slider', component: SliderDemo },
  { key: 'timeline', label: 'Timeline', component: TimelineDemo },
  { key: 'list', label: 'List', component: ListDemo },
  { key: 'dropdown', label: 'Dropdown', component: DropdownDemo },
  { key: 'popconfirm', label: 'Popconfirm', component: PopconfirmDemo },
  { key: 'segmented', label: 'Segmented', component: SegmentedDemo },
  { key: 'table', label: 'Table', component: TableDemo },
  { key: 'menu', label: 'Menu', component: MenuDemo },
  { key: 'form', label: 'Form', component: FormDemo },
  { key: 'watermark', label: 'Watermark', component: WatermarkDemo },
  { key: 'float-button', label: 'FloatButton', component: FloatButtonDemo },
  { key: 'qrcode', label: 'QRCode', component: QRCodeDemo },
  { key: 'anchor', label: 'Anchor', component: AnchorDemo },
  { key: 'tree', label: 'Tree', component: TreeDemo },
  { key: 'time-picker', label: 'TimePicker', component: TimePickerDemo },
  { key: 'date-picker', label: 'DatePicker', component: DatePickerDemo },
  { key: 'upload', label: 'Upload', component: UploadDemo },
  { key: 'flex', label: 'Flex', component: FlexDemo },
  { key: 'auto-complete', label: 'AutoComplete', component: AutoCompleteDemo },
  { key: 'cascader', label: 'Cascader', component: CascaderDemo },
]

export default defineComponent({
  name: 'App',
  setup() {
    const activeKey = ref('button')

    return () => (
      <ConfigProvider>
        <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
          {/* Header + Nav */}
          <div style={{
            background: '#fff',
            padding: '16px 24px 0',
            borderBottom: '1px solid #f0f0f0',
            position: 'sticky',
            top: 0,
            zIndex: 100,
          }}>
            <div style={{ marginBottom: '8px' }}>
              <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 600, display: 'inline' }}>
                ant-design-hmfw Playground
              </h1>
              <span style={{ marginLeft: '12px', color: '#666', fontSize: '14px' }}>
                组件开发调试环境
              </span>
            </div>

            {/* Navigation Tabs — wrappable */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {demos.map((demo) => (
                <button
                  key={demo.key}
                  onClick={() => (activeKey.value = demo.key)}
                  style={{
                    padding: '10px 14px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: activeKey.value === demo.key ? '#1677ff' : '#555',
                    borderBottom: activeKey.value === demo.key ? '2px solid #1677ff' : '2px solid transparent',
                    transition: 'color 0.2s',
                    fontWeight: activeKey.value === demo.key ? 500 : 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {demo.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            <div style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
            }}>
              {demos.map((demo) => (
                <div
                  key={demo.key}
                  style={{ display: activeKey.value === demo.key ? 'block' : 'none' }}
                >
                  <demo.component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ConfigProvider>
    )
  },
})
