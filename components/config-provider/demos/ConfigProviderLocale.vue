<template>
  <Space direction="vertical" size="large" style="width: 100%">
    <Segmented v-model:value="lang" :options="options" />

    <ConfigProvider :locale="lang === 'zh' ? zhCN : enUS">
      <div :style="panelStyle">
        <!-- 选择器占位符 & 空状态 -->
        <Space wrap>
          <Select :options="[]" style="width: 200px" />
          <DatePicker style="width: 200px" />
          <TimePicker style="width: 200px" />
        </Space>

        <!-- 分页：导航、跳转、页码全部由语言包驱动 -->
        <div style="display: flex; justify-content: center">
          <Pagination :total="85" show-size-changer show-quick-jumper :page-size-options="[10, 20, 50]" />
        </div>

        <!-- 表格：筛选 / 排序 / 空状态文案来自语言包 -->
        <Table
          :columns="columns"
          :data-source="data"
          :pagination="{ pageSize: 3 }"
          bordered
          size="small"
          style="width: 100%"
        />

        <!-- 弹出层按钮 & 空状态 & 可关闭消息 -->
        <Space wrap align="start">
          <Popconfirm title="Delete this item?">
            <Button danger>Popconfirm</Button>
          </Popconfirm>
          <Button @click="showModal">Modal.confirm</Button>
          <Empty />
          <Alert title="This is a closable alert" type="info" closable />
        </Space>

        <!-- 表单校验：所有缺省文案来自语言包 -->
        <Form :model="form" :label-col="{ span: 4 }" style="max-width: 480px">
          <FormItem label="Name" name="name" :rules="[{ required: true }, { min: 2 }, { max: 10 }]">
            <Input v-model:value="form.name" />
          </FormItem>
          <FormItem label="Email" name="email" :rules="[{ required: true, type: 'email' }]">
            <Input v-model:value="form.email" />
          </FormItem>
          <FormItem :wrapper-col="{ offset: 4 }">
            <Button type="primary" html-type="submit">Validate</Button>
          </FormItem>
        </Form>
      </div>
    </ConfigProvider>

    <p :style="hintStyle">
      语言包统一驱动组件内置文案（占位符、空状态、分页、校验提示等）， 无需逐个组件传 <code>placeholder</code> 或
      <code>locale</code> prop。
    </p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CSSProperties } from 'vue'
import {
  ConfigProvider,
  Button,
  Select,
  DatePicker,
  TimePicker,
  Pagination,
  Table,
  Empty,
  Alert,
  Popconfirm,
  Segmented,
  Space,
  Form,
  FormItem,
  Input,
  Modal,
  zhCN,
  enUS,
} from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

const lang = ref<'zh' | 'en'>('zh')
const options = [
  { label: '简体中文', value: 'zh' },
  { label: 'English', value: 'en' },
]

const form = ref({ name: '', email: '' })

const columns: TableColumn[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    filters: [{ text: 'A', value: 'A' }],
    onFilter: () => true,
  },
  { title: 'Age', dataIndex: 'age', key: 'age', sorter: true },
  { title: 'Address', dataIndex: 'address', key: 'address' },
]
const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
]

// 弹出 Modal 展示 OK / Cancel 按钮文案
// Modal.confirm 独立挂载在 ConfigProvider 树之外，需显式传入 locale
const showModal = () => {
  Modal.confirm({
    title: 'Do you want to delete these items?',
    content: 'This action cannot be undone.',
    locale: lang.value === 'zh' ? zhCN : enUS,
  })
}

const panelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
  background: 'var(--hmfw-color-bg-layout)',
  borderRadius: 'var(--hmfw-border-radius)',
}

const hintStyle: CSSProperties = {
  margin: 0,
  fontSize: '12px',
  color: 'var(--hmfw-color-text-tertiary)',
}
</script>
