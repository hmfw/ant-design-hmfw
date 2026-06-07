<template>
  <div style="display: flex; gap: 16px;">
    <Card :loading="{ avatar: true, paragraph: { rows: 4 } }" style="width: 300px;">
      <Card.Meta
        title="Card title"
        description="This is the description"
      >
        <template #avatar>
          <img src="https://via.placeholder.com/48" alt="avatar" style="border-radius: 50%;" />
        </template>
      </Card.Meta>
    </Card>
    <Card :loading="{ paragraph: { rows: 3 } }" style="width: 300px;">
      <p>Card content</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
</script>
