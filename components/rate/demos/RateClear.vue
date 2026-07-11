<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">允许清除（默认）：</p>
      <Rate v-model:value="value1" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星可清除评分</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">不允许清除：</p>
      <Rate v-model:value="value2" :allow-clear="false" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星不会清除评分</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(3)
</script>
