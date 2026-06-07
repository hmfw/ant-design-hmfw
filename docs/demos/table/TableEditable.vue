<script setup lang="tsx">
import { ref, reactive } from 'vue'
import { Table, Input, Button } from '../../../components'
import type { TableColumn } from '../../../components'

interface DataType {
  key: number
  name: string
  age: number
  address: string
}

const dataSource = ref<DataType[]>([
  {
    key: 1,
    name: '李明',
    age: 28,
    address: '北京市朝阳区',
  },
  {
    key: 2,
    name: '王芳',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: 3,
    name: '张伟',
    age: 25,
    address: '广州市天河区',
  },
])

const editingKey = ref<number | null>(null)
const editForm = reactive<Partial<DataType>>({})

const isEditing = (record: DataType) => record.key === editingKey.value

const edit = (record: DataType) => {
  editingKey.value = record.key
  Object.assign(editForm, { ...record })
}

const save = (key: number) => {
  const index = dataSource.value.findIndex((item) => item.key === key)
  if (index > -1) {
    Object.assign(dataSource.value[index], editForm)
  }
  editingKey.value = null
}

const cancel = () => {
  editingKey.value = null
}

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (text: string, record: DataType) => {
      if (isEditing(record)) {
        return <Input value={editForm.name} onChange={(e) => (editForm.name = (e.target as HTMLInputElement).value)} />
      }
      return text
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    render: (text: number, record: DataType) => {
      if (isEditing(record)) {
        return (
          <Input
            type="number"
            value={editForm.age}
            onChange={(e) => (editForm.age = Number((e.target as HTMLInputElement).value))}
          />
        )
      }
      return text
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    render: (text: string, record: DataType) => {
      if (isEditing(record)) {
        return (
          <Input value={editForm.address} onChange={(e) => (editForm.address = (e.target as HTMLInputElement).value)} />
        )
      }
      return text
    },
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (_: any, record: DataType) => {
      if (isEditing(record)) {
        return (
          <span>
            <Button type="link" onClick={() => save(record.key)} style={{ marginRight: '8px' }}>
              保存
            </Button>
            <Button type="link" onClick={cancel}>
              取消
            </Button>
          </span>
        )
      }
      return (
        <Button type="link" onClick={() => edit(record)} disabled={editingKey.value !== null}>
          编辑
        </Button>
      )
    },
  },
]
</script>

<template>
  <Table :data-source="dataSource" :columns="columns" :pagination="false" bordered />
</template>
