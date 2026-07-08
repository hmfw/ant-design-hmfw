<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider orientation="left" :orientation-margin="0"> 距左边 0px </Divider>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider orientation="left" :orientation-margin="50"> 距左边 50px </Divider>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    <Divider orientation="right" :orientation-margin="0"> 距右边 0px </Divider>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    <Divider orientation="right" :orientation-margin="80"> 距右边 80px </Divider>
    <p>Excepteur sint occaecat cupidatat non proident.</p>
    <Divider orientation="right" orientation-margin="10%"> 距右边 10% </Divider>
    <p>字符串值也支持，如百分比或 calc 表达式。</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
</script>
