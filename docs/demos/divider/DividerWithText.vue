<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider>居中文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left"> 左对齐 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="right"> 右对齐 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left" plain> 朴素文字 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
</script>
