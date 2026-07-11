<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <InputPassword v-model:value="password" placeholder="请输入密码" />

    <InputPassword v-model:value="password2" placeholder="不可切换可见性" :visibility-toggle="false" />

    <InputPassword v-model:value="password3" placeholder="鼠标悬停显示密码" action="hover" />

    <InputPassword
      v-model:value="password4"
      placeholder="受控可见性"
      :visibility-toggle="{ visible, onVisibleChange }"
    />

    <InputPassword v-model:value="password5" placeholder="自定义切换图标" :icon-render="iconRender" />

    <p>密码：{{ password }}</p>
    <p>受控可见：{{ visible ? '可见' : '隐藏' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { InputPassword } from '@hmfw/ant-design'
import { LockOutlined, UnlockOutlined } from '@hmfw/icons'

const password = ref('')
const password2 = ref('')
const password3 = ref('')
const password4 = ref('')
const password5 = ref('')
const visible = ref(false)

const onVisibleChange = (v: boolean) => {
  visible.value = v
}

const iconRender = (visible: boolean) => (visible ? h(LockOutlined) : h(UnlockOutlined))
</script>
