<template>
  <div class="demo-table-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Table :data-source="dataSource" :columns="columns" row-key="key" :class-names="{ root: 'custom-root' }" />
    </section>

    <!-- 场景 2: 自定义表头 -->
    <section class="demo-section">
      <h3>2. 自定义表头样式</h3>
      <Table :data-source="dataSource" :columns="columns" row-key="key" :class-names="{ header: 'custom-header' }" />
    </section>

    <!-- 场景 3: 自定义行与单元格 -->
    <section class="demo-section">
      <h3>3. 自定义行与单元格样式</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :class-names="{ row: 'custom-row', cell: 'custom-cell' }"
      />
    </section>

    <!-- 场景 4: 自定义底部与分页 -->
    <section class="demo-section">
      <h3>4. 自定义底部与分页样式</h3>
      <Table
        :data-source="moreData"
        :columns="columns"
        row-key="key"
        :footer="() => '表格底部信息'"
        :pagination="{ pageSize: 3, total: moreData.length, current: 1 }"
        :class-names="{ footer: 'custom-footer', pagination: 'custom-pagination' }"
      />
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :class-names="{
          root: 'combined-root',
          header: 'combined-header',
          row: 'combined-row',
          cell: 'combined-cell',
        }"
      />
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', overflow: 'hidden' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          cell: { fontSize: '14px' },
        }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '李小明', age: 28, address: '上城区西湖大道3号' },
]

const moreData = [
  ...dataSource,
  { key: '4', name: '王大锤', age: 35, address: '滨江区江南大道4号' },
  { key: '5', name: '赵敏', age: 24, address: '余杭区文一西路5号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
</script>

<style scoped>
.demo-table-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 2px dashed #722ed1;
  border-radius: 12px;
  padding: 8px;
  background: #f9f0ff;
}

/* 场景 2: 自定义表头 */
:deep(.custom-header) th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-weight: 600;
}

/* 场景 3: 自定义行与单元格 */
:deep(.custom-row) {
  transition: all 0.3s ease;
}

:deep(.custom-row:hover) {
  background: #e6f7ff;
  transform: scale(1.005);
}

:deep(.custom-cell) {
  border-bottom: 1px solid #91d5ff !important;
}

/* 场景 4: 自定义底部与分页 */
:deep(.custom-footer) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  text-align: center;
}

:deep(.custom-pagination) {
  padding: 12px;
  background: #f6ffed;
  border-radius: 8px;
  margin-top: 8px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  border: 2px solid #13c2c2;
  border-radius: 12px;
  overflow: hidden;
}

:deep(.combined-header) th {
  background: #13c2c2 !important;
  color: white !important;
}

:deep(.combined-row:nth-child(even)) {
  background: #e6fffb;
}

:deep(.combined-cell) {
  color: #006d75;
}
</style>
