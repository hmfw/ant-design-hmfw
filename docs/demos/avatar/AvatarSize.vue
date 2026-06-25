<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar size="small"> S </Avatar>
    <Avatar>M</Avatar>
    <Avatar size="large"> L </Avatar>
    <Avatar :size="64"> 64 </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@hmfw/ant-design'
</script>
