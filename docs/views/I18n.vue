<template>
  <div v-highlight class="markdown-body">
    <h1>国际化</h1>

    <p>
      @hmfw/ant-design 内置中文（<code>zhCN</code>）和英文（<code>enUS</code>）两种语言包，通过
      <code>ConfigProvider</code> 的 <code>locale</code> 属性切换。
    </p>

    <h2>使用语言包</h2>

    <pre><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :locale="locale"&gt;
    &lt;App /&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from '@hmfw/ant-design'

const locale = ref(zhCN)

const toggleLocale = () => {
  locale.value = locale.value === zhCN ? enUS : zhCN
}
&lt;/script&gt;</code></pre>

    <h2>内置语言包</h2>

    <Table :columns="localeColumns" :data-source="localeData" :pagination="false" bordered size="small" />

    <h2>语言包内容</h2>

    <p>语言包包含以下组件的文案：</p>

    <ul>
      <li><strong>Pagination</strong>：上一页、下一页、跳转等</li>
      <li><strong>DatePicker / TimePicker</strong>：确定、今天、此刻等</li>
      <li><strong>Modal</strong>：确定、取消等</li>
      <li><strong>Popconfirm</strong>：确定、取消等</li>
      <li><strong>Table</strong>：筛选、重置等</li>
      <li><strong>Upload</strong>：上传文件等</li>
      <li><strong>Empty</strong>：暂无数据等</li>
    </ul>

    <h2>自定义语言包</h2>

    <p>可以基于内置语言包扩展或完全自定义：</p>

    <pre><code class="language-ts">import { zhCN } from '@hmfw/ant-design'

const myLocale = {
  ...zhCN,
  Pagination: {
    ...zhCN.Pagination,
    prev_page: '上一页',
    next_page: '下一页',
  },
}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

const code = (v: string) => h('code', v)

const localeColumns: TableColumn[] = [
  { title: '语言包', dataIndex: 'name', key: 'name', render: code },
  { title: '语言', dataIndex: 'language', key: 'language' },
  { title: '导入路径', dataIndex: 'importPath', key: 'importPath', render: code },
]

const localeData = [
  { name: 'zhCN', language: '简体中文', importPath: "import { zhCN } from '@hmfw/ant-design'" },
  { name: 'enUS', language: 'English', importPath: "import { enUS } from '@hmfw/ant-design'" },
]
</script>
