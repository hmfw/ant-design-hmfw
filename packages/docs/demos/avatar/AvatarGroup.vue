<template>
  <AvatarGroup :max-count="3">
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
  </AvatarGroup>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
</script>
