<template>
  <div style="display: flex; gap: 32px; flex-direction: column;">
    <div>
      <h4>自定义分隔符</h4>
      <div style="display: flex; gap: 32px;">
        <Statistic
          title="默认千分位"
          :value="1234567.89"
          :precision="2"
        />
        <Statistic
          title="自定义千分位"
          :value="1234567.89"
          :precision="2"
          groupSeparator=" "
          decimalSeparator=","
        />
      </div>
    </div>

    <div>
      <h4>精度控制</h4>
      <div style="display: flex; gap: 32px;">
        <Statistic
          title="无精度"
          :value="98.765"
        />
        <Statistic
          title="保留 1 位"
          :value="98.765"
          :precision="1"
        />
        <Statistic
          title="保留 3 位"
          :value="98.765"
          :precision="3"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Statistic } from '../../../components'
</script>
