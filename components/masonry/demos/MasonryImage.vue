<template>
  <Masonry :columns="4" :gutter="16" :items="items" fresh>
    <template #default="{ item }">
      <img :src="item" style="width: 100%; display: block; border-radius: 8px" />
    </template>
  </Masonry>
</template>

<script setup lang="ts">
import { Masonry } from '@hmfw/ant-design'
import type { MasonryItemType } from '@hmfw/ant-design'

const imageUrls = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=700',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&h=500',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=650',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=550',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=450',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600',
]

const items: MasonryItemType<string>[] = imageUrls.map((url, index) => ({
  key: `img-${index}`,
  data: url,
}))
</script>
