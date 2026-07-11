<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">基本用法：skipGroup 跳过 CheckboxGroup 控制</p>
      <CheckboxGroup v-model:value="groupValue">
        <Checkbox value="a"> A（受组控制） </Checkbox>
        <Checkbox value="b"> B（受组控制） </Checkbox>
        <Checkbox v-model:checked="independentC" value="c" skip-group> C（独立控制，skipGroup） </Checkbox>
        <Checkbox v-model:checked="independentD" value="d" skip-group> D（独立控制，skipGroup） </Checkbox>
      </CheckboxGroup>
    </div>
    <div>
      <p>组值：{{ groupValue }}</p>
      <p>C 独立值：{{ independentC }}</p>
      <p>D 独立值：{{ independentD }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中</li>
        <li>C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked</li>
        <li>适用场景：表单中有些复选框需要独立验证或特殊处理</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from '@hmfw/ant-design'

const groupValue = ref<string[]>(['a'])
const independentC = ref(false)
const independentD = ref(true)
</script>
