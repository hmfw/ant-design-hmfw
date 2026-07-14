<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- change 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">change 事件</h4>
      <Checkbox v-model:checked="checked1" @change="handleChange"> 点击触发 change 事件 </Checkbox>
      <div style="margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px">
        <div>事件触发次数：{{ changeCount }}</div>
        <div>最后一次事件：{{ lastChangeEvent }}</div>
      </div>
    </section>

    <!-- click 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">click 事件</h4>
      <Checkbox v-model:checked="checked2" @click="handleClick"> 点击触发 click 事件 </Checkbox>
      <p style="color: #666; font-size: 12px; margin-top: 8px">
        click 触发次数：{{ clickCount }}（在 label 上点击也会触发）
      </p>
    </section>

    <!-- focus 和 blur 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">focus / blur 事件</h4>
      <Checkbox v-model:checked="checked3" @focus="handleFocus" @blur="handleBlur"> Tab 键切换焦点（或点击） </Checkbox>
      <div style="margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px">
        <div>当前状态：{{ focusStatus }}</div>
        <div>focus 次数：{{ focusCount }}，blur 次数：{{ blurCount }}</div>
      </div>
    </section>

    <!-- mouseenter 和 mouseleave 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">mouseenter / mouseleave 事件</h4>
      <Checkbox
        v-model:checked="checked4"
        :styles="{
          root: {
            padding: '8px',
            border: isHover ? '1px solid #1677ff' : '1px solid transparent',
            borderRadius: '4px',
            transition: 'border-color 0.2s',
          },
        }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        鼠标悬停显示边框
      </Checkbox>
      <p style="color: #666; font-size: 12px; margin-top: 8px">悬停状态：{{ isHover ? '是' : '否' }}</p>
    </section>

    <!-- keypress 和 keydown 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">keypress / keydown 事件</h4>
      <Checkbox v-model:checked="checked5" @keypress="handleKeyPress" @keydown="handleKeyDown">
        聚焦后按键（Space 切换状态）
      </Checkbox>
      <div style="margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px">
        <div>keypress 次数：{{ keyPressCount }}</div>
        <div>keydown 次数：{{ keyDownCount }}</div>
        <div>最后按键：{{ lastKey }}</div>
      </div>
    </section>

    <!-- CheckboxGroup 的 change 事件 -->
    <section>
      <h4 style="margin-bottom: 8px">CheckboxGroup 的 change 事件</h4>
      <CheckboxGroup v-model:value="groupValue" :options="groupOptions" @change="handleGroupChange" />
      <div style="margin-top: 8px; padding: 8px; background: #f5f5f5; border-radius: 4px; font-size: 12px">
        <div>当前值：{{ groupValue }}</div>
        <div>change 触发次数：{{ groupChangeCount }}</div>
        <div>最后变更：{{ lastGroupChange }}</div>
      </div>
    </section>

    <!-- 综合示例：表单验证 -->
    <section>
      <h4 style="margin-bottom: 8px">综合示例：表单验证</h4>
      <div style="border: 1px solid #d9d9d9; padding: 16px; border-radius: 4px">
        <Checkbox v-model:checked="agreed" :styles="{ root: { marginBottom: '8px' } }" @change="handleAgreeChange">
          我已阅读并同意
          <a href="#" @click.prevent>《用户协议》</a>
          和
          <a href="#" @click.prevent>《隐私政策》</a>
        </Checkbox>
        <button
          :disabled="!agreed"
          :style="{
            padding: '4px 16px',
            background: agreed ? '#1677ff' : '#d9d9d9',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: agreed ? 'pointer' : 'not-allowed',
          }"
        >
          提交注册
        </button>
      </div>
      <p v-if="showWarning" style="color: #ff4d4f; font-size: 12px; margin-top: 8px">⚠️ 请先同意用户协议和隐私政策</p>
    </section>

    <!-- 说明 -->
    <section style="background: #f5f5f5; padding: 12px; border-radius: 4px">
      <h4 style="margin-bottom: 8px">事件说明</h4>
      <ul style="margin: 0; padding-left: 20px; font-size: 13px; color: #666">
        <li>
          <strong>change</strong>：状态改变时触发，参数为
          <code>CheckboxChangeEvent</code>
        </li>
        <li><strong>click</strong>：点击时触发（包括 label）</li>
        <li><strong>focus / blur</strong>：聚焦/失焦时触发</li>
        <li><strong>mouseenter / mouseleave</strong>：鼠标进入/离开时触发</li>
        <li><strong>keypress / keydown</strong>：按键时触发</li>
        <li><strong>CheckboxGroup change</strong>：组内任意项改变时触发，参数为完整的 <code>value</code> 数组</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@hmfw/ant-design'
import type { CheckboxChangeEvent } from '@hmfw/ant-design'

// change 事件
const checked1 = ref(false)
const changeCount = ref(0)
const lastChangeEvent = ref('')

const handleChange = (e: CheckboxChangeEvent) => {
  changeCount.value++
  lastChangeEvent.value = `checked=${e.target.checked}, value=${e.target.value}`
}

// click 事件
const checked2 = ref(false)
const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
}

// focus / blur 事件
const checked3 = ref(false)
const focusStatus = ref('未聚焦')
const focusCount = ref(0)
const blurCount = ref(0)

const handleFocus = () => {
  focusStatus.value = '已聚焦'
  focusCount.value++
}

const handleBlur = () => {
  focusStatus.value = '未聚焦'
  blurCount.value++
}

// mouseenter / mouseleave 事件
const checked4 = ref(false)
const isHover = ref(false)

const handleMouseEnter = () => {
  isHover.value = true
}

const handleMouseLeave = () => {
  isHover.value = false
}

// keypress / keydown 事件
const checked5 = ref(false)
const keyPressCount = ref(0)
const keyDownCount = ref(0)
const lastKey = ref('')

const handleKeyPress = (e: KeyboardEvent) => {
  keyPressCount.value++
  lastKey.value = e.key
}

const handleKeyDown = (e: KeyboardEvent) => {
  keyDownCount.value++
  lastKey.value = e.key
}

// CheckboxGroup 事件
const groupValue = ref<string[]>([])
const groupOptions = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
]
const groupChangeCount = ref(0)
const lastGroupChange = ref('')

const handleGroupChange = (value: (string | number | boolean)[]) => {
  groupChangeCount.value++
  lastGroupChange.value = JSON.stringify(value)
}

// 表单验证示例
const agreed = ref(false)
const showWarning = ref(false)

const handleAgreeChange = (e: CheckboxChangeEvent) => {
  if (!e.target.checked) {
    showWarning.value = true
    setTimeout(() => {
      showWarning.value = false
    }, 3000)
  } else {
    showWarning.value = false
  }
}
</script>

<style scoped>
code {
  background: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 12px;
}

a {
  color: #1677ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
