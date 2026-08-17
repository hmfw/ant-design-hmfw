<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">默认过滤（模糊匹配 value 和 label）</div>
      <Mentions :options="options" placeholder="输入 @ 后输入姓名搜索（如 ali）" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        默认会对 value 和 label 进行模糊匹配
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">自定义过滤（仅匹配首字母）</div>
      <Mentions :options="options" :filter-option="startsWithFilter" placeholder="输入 @ 后输入首字母（如 a）" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        只匹配 value 的首字母，更严格的过滤规则
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">禁用过滤（显示全部选项）</div>
      <Mentions :options="options" :filter-option="false" placeholder="输入 @ 后始终显示全部选项" />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        设置 :filter-option="false" 禁用过滤，适用于服务端搜索场景
      </div>
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">大小写敏感过滤</div>
      <Mentions
        :options="mixedCaseOptions"
        :filter-option="caseSensitiveFilter"
        placeholder="输入 @ 后区分大小写搜索（如 User 或 user）"
      />
      <div style="margin-top: 8px; color: rgba(0, 0, 0, 0.45); font-size: 14px">
        自定义过滤函数可以实现大小写敏感匹配
      </div>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'
import type { MentionOption } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice Wang' },
  { value: 'bob', label: 'Bob Chen' },
  { value: 'charlie', label: 'Charlie Li' },
  { value: 'dave', label: 'Dave Zhang' },
  { value: 'eve', label: 'Eve Liu' },
]

const mixedCaseOptions = [
  { value: 'UserA', label: 'User A' },
  { value: 'userB', label: 'user B' },
  { value: 'USERC', label: 'USER C' },
  { value: 'UsErD', label: 'UsEr D' },
]

// 自定义过滤：仅匹配首字母
const startsWithFilter = (input: string, option: MentionOption) => {
  return option.value.toLowerCase().startsWith(input.toLowerCase())
}

// 大小写敏感过滤
const caseSensitiveFilter = (input: string, option: MentionOption) => {
  return option.value.includes(input) || (option.label as string)?.includes(input)
}
</script>
