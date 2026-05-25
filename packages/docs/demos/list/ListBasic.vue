<template>
  <List
    :data-source="data"
    bordered
  >
    <template #renderItem="{ item }">
      <ListItem>{{ item }}</ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
]
</script>
