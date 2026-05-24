import { defineComponent, ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'
import type { CascaderValue } from 'ant-design-hmfw'

const areaOptions = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'haishu', label: '海曙区' },
          { value: 'jiangbei', label: '江北区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武区' },
          { value: 'qinhuai', label: '秦淮区' },
        ],
      },
      {
        value: 'suzhou',
        label: '苏州',
        children: [
          { value: 'gusu', label: '姑苏区' },
        ],
      },
    ],
  },
  {
    value: 'beijing',
    label: '北京',
    children: [
      { value: 'chaoyang', label: '朝阳区' },
      { value: 'haidian', label: '海淀区' },
      { value: 'dongcheng', label: '东城区', disabled: true },
    ],
  },
]

export default defineComponent({
  name: 'CascaderDemo',
  setup() {
    const value1 = ref<CascaderValue>([])
    const value2 = ref<CascaderValue>(['zhejiang', 'hangzhou', 'xihu'])
    const value3 = ref<CascaderValue>([])

    return () => (
      <div>
        <h2>Cascader 级联选择</h2>

        <h3>基础用法</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Cascader
            v-model:value={value1.value}
            options={areaOptions}
            placeholder="请选择地区"
            onChange={(v, labels) => console.log('change:', v, labels)}
          />
          <span style={{ color: '#666' }}>
            值: {value1.value.length ? value1.value.join(' / ') : '未选择'}
          </span>
        </div>

        <h3 style={{ marginTop: '24px' }}>受控模式（默认值）</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Cascader
            value={value2.value}
            options={areaOptions}
            onChange={(v) => (value2.value = v as CascaderValue)}
          />
          <button
            onClick={() => (value2.value = ['jiangsu', 'nanjing', 'xuanwu'])}
            style={{ padding: '4px 12px', cursor: 'pointer' }}
          >
            切换到南京玄武区
          </button>
        </div>

        <h3 style={{ marginTop: '24px' }}>可搜索</h3>
        <Cascader
          v-model:value={value3.value}
          options={areaOptions}
          showSearch
          placeholder="搜索地区"
        />

        <h3 style={{ marginTop: '24px' }}>hover 展开</h3>
        <Cascader
          options={areaOptions}
          expandTrigger="hover"
          placeholder="鼠标悬停展开"
        />

        <h3 style={{ marginTop: '24px' }}>选择即改变（changeOnSelect）</h3>
        <Cascader
          options={areaOptions}
          changeOnSelect
          placeholder="选择任意层级"
        />

        <h3 style={{ marginTop: '24px' }}>自定义显示</h3>
        <Cascader
          options={areaOptions}
          value={['zhejiang', 'hangzhou', 'xihu']}
          displayRender={(labels) => `📍 ${labels.join(' > ')}`}
        />

        <h3 style={{ marginTop: '24px' }}>不同尺寸</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Cascader options={areaOptions} size="small" placeholder="小尺寸" />
          <Cascader options={areaOptions} size="middle" placeholder="中等（默认）" />
          <Cascader options={areaOptions} size="large" placeholder="大尺寸" />
        </div>

        <h3 style={{ marginTop: '24px' }}>状态</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Cascader options={areaOptions} status="error" placeholder="错误状态" />
          <Cascader options={areaOptions} status="warning" placeholder="警告状态" />
          <Cascader options={areaOptions} disabled placeholder="禁用状态" />
        </div>

        <h3 style={{ marginTop: '24px' }}>自定义 fieldNames</h3>
        <Cascader
          options={[
            { id: 'cn', name: '中国', sub: [
              { id: 'bj', name: '北京', sub: [] },
              { id: 'sh', name: '上海', sub: [] },
            ]},
          ] as any}
          fieldNames={{ value: 'id', label: 'name', children: 'sub' }}
          placeholder="自定义字段名"
        />
      </div>
    )
  },
})
