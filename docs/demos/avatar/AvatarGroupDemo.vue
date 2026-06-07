<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AvatarGroup :max-count="3">
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
    </AvatarGroup>

    <!-- size/shape 在 Group 上设置后自动下发给子 Avatar -->
    <AvatarGroup size="large" shape="square">
      <Avatar style="background: #f56a00"> A </Avatar>
      <Avatar style="background: #1677ff"> B </Avatar>
      <Avatar style="background: #87d068"> C </Avatar>
    </AvatarGroup>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
</script>
