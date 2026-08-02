<template>
  <Space direction="vertical" size="large" style="width: 100%">
    <Space align="center">
      <Switch v-model:checked="disabled" />
      <span>componentDisabled: {{ disabled }}</span>
    </Space>

    <ConfigProvider :component-disabled="disabled">
      <Space direction="vertical" size="middle" style="width: 100%">
        <Space wrap align="center">
          <Button type="primary">主按钮</Button>
          <Input placeholder="输入框" style="width: 140px" />
          <Select
            :options="[
              { value: '1', label: '选项一' },
              { value: '2', label: '选项二' },
            ]"
            placeholder="选择器"
            style="width: 130px"
          />
        </Space>
        <Space wrap align="center">
          <Checkbox>复选框</Checkbox>
          <Radio>单选框</Radio>
          <Switch />
          <Rate :value="3" />
        </Space>
        <Space align="center">
          <span style="color: var(--hmfw-color-text-secondary); font-size: 13px">
            控件自身 disabled={{ false }} 也无法反禁用：
          </span>
          <Button :disabled="false">仍被禁用</Button>
        </Space>
      </Space>
    </ConfigProvider>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, Input, Select, Checkbox, Radio, Switch, Rate, Space } from '@hmfw/ant-design'

const disabled = ref(true)
</script>
