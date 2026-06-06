<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">id 属性自动绑定到原生 input：</p>
      <RadioGroup v-model:value="selectedOption">
        <Radio value="a" id="radio-a">选项 A（id="radio-a"）</Radio>
        <Radio value="b" id="radio-b">选项 B（id="radio-b"）</Radio>
        <Radio value="c" id="radio-c">选项 C（id="radio-c"）</Radio>
      </RadioGroup>
    </div>
    <div>
      <p style="margin-bottom: 8px;">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center;">
        <Radio id="payment-alipay" value="alipay" v-model:checked="paymentMethod" />
        <label for="payment-alipay" style="cursor: pointer; user-select: none;">
          支付宝支付
        </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px;">RadioGroup 中的 id：</p>
      <RadioGroup
        v-model:value="size"
        :options="[
          { label: '大', value: 'large', id: 'size-large' },
          { label: '中', value: 'middle', id: 'size-middle' },
          { label: '小', value: 'small', id: 'size-small' },
        ]"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">RadioButton 中的 id：</p>
      <RadioGroup
        v-model:value="theme"
        option-type="button"
      >
        <RadioButton value="light" id="theme-light">浅色</RadioButton>
        <RadioButton value="dark" id="theme-dark">深色</RadioButton>
        <RadioButton value="auto" id="theme-auto">自动</RadioButton>
      </RadioGroup>
    </div>
    <div>
      <p>状态：{{ { selectedOption, paymentMethod, size, theme } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px;">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px;">
        <li>id 属性自动绑定到原生 &lt;input type="radio"&gt; 元素</li>
        <li>可以配合 &lt;label for="..."&gt; 实现点击文本选中单选框</li>
        <li>在 RadioGroup 的 options 中也可以指定 id</li>
        <li>RadioButton 同样支持 id 属性</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, Radio, RadioButton } from 'ant-design-hmfw'

const selectedOption = ref('a')
const paymentMethod = ref(false)
const size = ref('middle')
const theme = ref('light')
</script>
