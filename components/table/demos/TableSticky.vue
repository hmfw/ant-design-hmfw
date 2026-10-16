<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

// 自定义滚动容器：吸顶表头与吸底横向滚动条以此容器为基准
const scrollRef = ref<HTMLElement>()

const sticky = {
  offsetHeader: 0,
  offsetScroll: 0,
  getContainer: () => scrollRef.value as HTMLElement,
}

const dataSource = ref<DataType[]>(
  Array.from({ length: 100 }, (_, i) => ({
    key: i,
    name: `李明 ${i + 1}`,
    age: 20 + (i % 50),
    address: `北京市朝阳区某街道 ${i + 1} 号`,
    tags: i % 2 === 0 ? ['开发者', '设计师'] : ['产品经理'],
  })),
)

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    width: 200,
    render: (tags: string[]) => tags.join(', '),
  },
]
</script>

<template>
  <div ref="scrollRef" style="height: 420px; overflow: auto">
    <div
      style="
        height: 200px;
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      "
    >
      <p>向下滚动查看表头吸顶效果</p>
    </div>
    <!-- 不使用 scroll.y：表头吸顶到容器顶部（配合 getContainer 指定滚动容器），
         横向溢出时容器底部吸附横向滚动条 -->
    <Table
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
      :scroll="{ x: 1000 }"
      :sticky="sticky"
      bordered
    />
    <div
      style="
        height: 300px;
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
      "
    >
      <p>底部内容</p>
    </div>
  </div>
</template>
