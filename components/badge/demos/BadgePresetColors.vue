<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 状态点模式 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">预设颜色（状态点 + 文本）</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <Badge color="pink" text="pink" />
        <Badge color="red" text="red" />
        <Badge color="volcano" text="volcano" />
        <Badge color="orange" text="orange" />
        <Badge color="gold" text="gold" />
        <Badge color="yellow" text="yellow" />
        <Badge color="lime" text="lime" />
        <Badge color="green" text="green" />
        <Badge color="cyan" text="cyan" />
        <Badge color="blue" text="blue" />
        <Badge color="geekblue" text="geekblue" />
        <Badge color="purple" text="purple" />
        <Badge color="magenta" text="magenta" />
      </div>
    </section>

    <!-- 数字徽标模式 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">预设颜色（数字徽标）</h4>
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <Badge color="pink" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="red" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="volcano" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="orange" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="gold" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="lime" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="green" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="cyan" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="blue" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="geekblue" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="purple" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="magenta" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
      </div>
    </section>

    <!-- 自定义 RGB/HEX 颜色 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">自定义颜色（RGB/HEX）</h4>
      <div style="display: flex; gap: 24px">
        <Badge color="#f50" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="#2db7f5" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="#87d068" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge color="rgb(255, 107, 107)" :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
</script>
