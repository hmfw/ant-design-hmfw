<template>
  <Form :model="formState" layout="inline" @finish="handleSearch">
    <FormItem label="姓名" name="name">
      <Input v-model:value="formState.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" placeholder="年龄" style="width: 100px" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit"> 搜索 </Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from '@hmfw/ant-design'

const formState = reactive({
  name: '',
  age: null as number | null,
})

const handleSearch = (values: typeof formState) => {
  console.log('搜索：', values)
}
</script>
