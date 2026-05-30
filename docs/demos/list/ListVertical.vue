<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    item-layout="vertical"
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from 'ant-design-hmfw'

const data = [
  {
    title: 'Ant Design Title 1',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    extra: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
  {
    title: 'Ant Design Title 2',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
    extra: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
]

const renderItem = (item: any) =>
  h(
    List.Item,
    {
      extra: h('img', { src: item.extra, style: { width: '272px' } }),
      actions: [
        h('span', '👁 156'),
        h('span', '💬 2'),
        h('span', '⭐ 156'),
      ],
    },
    () => [
      h(List.Item.Meta, {
        avatar: h(Avatar, { src: item.avatar }),
        title: h('a', { href: '#' }, item.title),
        description: item.description,
      }),
      item.content,
    ]
  )
</script>
