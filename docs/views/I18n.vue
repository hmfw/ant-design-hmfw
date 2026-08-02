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
      <li><strong>Modal / Popconfirm</strong>：确定、取消等</li>
      <li><strong>Table</strong>：筛选、重置、空状态等</li>
      <li><strong>Upload</strong>：上传文件等</li>
      <li><strong>Empty</strong>：暂无数据等</li>
      <li><strong>Select / TreeSelect / Cascader</strong>：占位符、无匹配结果等</li>
      <li><strong>Form</strong>：必填、格式校验等提示文案</li>
      <li><strong>Alert</strong>：关闭按钮文案</li>
      <li><strong>Slider</strong>：滑块最小值、最大值等</li>
      <li><strong>Carousel</strong>：走马灯导航按钮</li>
      <li><strong>Transfer / Tag / Typography / Tour / Calendar</strong></li>
    </ul>

    <h2>自定义语言包</h2>

    <p>可以基于内置语言包扩展或完全自定义：</p>

    <pre><code class="language-ts">import { zhCN } from '@hmfw/ant-design'

const myLocale = {
  ...zhCN,
  Pagination: {
    ...zhCN.Pagination,
    prevPage: '上一页',
    nextPage: '下一页',
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
