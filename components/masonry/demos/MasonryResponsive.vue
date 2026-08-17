<template>
  <Masonry :columns="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }" :gutter="16" :items="items">
    <template #default="{ item, index }">
      <Card size="small" :style="{ height: item + 'px' }">
        {{ index + 1 }}
      </Card>
    </template>
  </Masonry>
</template>

<script setup lang="ts">
import { Masonry, Card } from '@hmfw/ant-design'
import type { MasonryItemType } from '@hmfw/ant-design'

const heights = [150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80, 120, 70, 90]

const items: MasonryItemType<number>[] = heights.map((height, index) => ({
  key: `item-${index}`,
  data: height,
}))
</script>
