<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider>默认标题样式</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider plain>正文样式</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider orientation="left" plain>左对齐正文</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider orientation="right" plain>右对齐正文</Divider>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
</script>
