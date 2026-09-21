<template>
  <div>
    <RadioGroup v-model:value="size" :options="sizeOptions" option-type="button" />
    <Divider orientation="left" plain>预览</Divider>
    <Flex gap="small" align="flex-start" vertical>
      <Flex gap="small" wrap>
        <Button type="primary" :size="size">Primary</Button>
        <Button :size="size">Default</Button>
        <Button type="dashed" :size="size">Dashed</Button>
      </Flex>
      <Button type="link" :size="size">Link</Button>
      <Flex gap="small" wrap>
        <Button type="primary" :icon="DownloadOutlined" :size="size" />
        <Button type="primary" shape="circle" :icon="DownloadOutlined" :size="size" />
        <Button type="primary" shape="round" :icon="DownloadOutlined" :size="size" />
        <Button type="primary" shape="round" :icon="DownloadOutlined" :size="size">Download</Button>
        <Button type="primary" :icon="DownloadOutlined" :size="size">Download</Button>
      </Flex>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Divider, Flex, RadioGroup } from '@hmfw/ant-design'
import { DownloadOutlined } from '@hmfw/icons'
import type { ButtonSize } from '@hmfw/ant-design'

const size = ref<ButtonSize>('large')

const sizeOptions = [
  { label: 'Large', value: 'large' },
  { label: 'Middle', value: 'middle' },
  { label: 'Small', value: 'small' },
]
</script>
