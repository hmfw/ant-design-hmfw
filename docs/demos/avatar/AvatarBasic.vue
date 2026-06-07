<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="64" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar :size="64"> U </Avatar>
    <Avatar :size="64" style="background-color: #87d068"> USER </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
</script>
