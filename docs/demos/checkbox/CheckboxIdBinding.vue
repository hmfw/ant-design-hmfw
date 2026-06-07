<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">id 属性自动绑定到原生 input：</p>
      <Checkbox id="checkbox-1" v-model:checked="checked1"> 复选框 1（id="checkbox-1"） </Checkbox>
      <Checkbox id="checkbox-2" v-model:checked="checked2"> 复选框 2（id="checkbox-2"） </Checkbox>
    </div>
    <div>
      <p style="margin-bottom: 8px">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center">
        <Checkbox id="agree-terms" v-model:checked="agreeTerms" />
        <label for="agree-terms" style="cursor: pointer; user-select: none">
          我已阅读并同意<a href="#" @click.prevent>《服务条款》</a>
        </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px">CheckboxGroup 中的 id：</p>
      <CheckboxGroup
        v-model:value="groupValue"
        :options="[
          { label: '选项 A', value: 'a', id: 'option-a' },
          { label: '选项 B', value: 'b', id: 'option-b' },
          { label: '选项 C', value: 'c', id: 'option-c' },
        ]"
      />
    </div>
    <div>
      <p>状态：{{ { checked1, checked2, agreeTerms, groupValue } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>id 属性自动绑定到原生 &lt;input&gt; 元素，方便表单验证和无障碍访问</li>
        <li>可以配合 &lt;label for="..."&gt; 实现点击文本选中复选框</li>
        <li>在 CheckboxGroup 的 options 中也可以指定 id</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(true)
const agreeTerms = ref(false)
const groupValue = ref<string[]>(['a'])
</script>
