<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 基础数字徽标 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">基础数字徽标</h4>
      <div style="display: flex; gap: 24px">
        <Badge :count="5">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge :count="0" show-zero>
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge :count="99">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge :count="100">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
      </div>
    </section>

    <!-- 小红点 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">小红点</h4>
      <div style="display: flex; gap: 24px; align-items: center">
        <Badge dot>
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge dot color="#52c41a">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge :dot="showDot">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Button size="small" @click="showDot = !showDot">
          {{ showDot ? '隐藏' : '显示' }}
        </Button>
      </div>
    </section>

    <!-- 尺寸 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">尺寸</h4>
      <div style="display: flex; gap: 24px; align-items: center">
        <Badge :count="5" size="small">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <Badge :count="5" size="middle">
          <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
        </Badge>
        <span style="color: #999; font-size: 12px">（左：small，右：middle）</span>
      </div>
    </section>

    <!-- 位置偏移 -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">位置偏移 offset</h4>
      <div style="display: flex; gap: 48px; align-items: center">
        <div style="text-align: center">
          <Badge :count="5">
            <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
          </Badge>
          <div style="margin-top: 8px; font-size: 12px; color: #999">默认</div>
        </div>
        <div style="text-align: center">
          <Badge :count="5" :offset="[10, 0]">
            <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
          </Badge>
          <div style="margin-top: 8px; font-size: 12px; color: #999">右移 10px</div>
        </div>
        <div style="text-align: center">
          <Badge :count="5" :offset="[0, 10]">
            <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
          </Badge>
          <div style="margin-top: 8px; font-size: 12px; color: #999">下移 10px</div>
        </div>
        <div style="text-align: center">
          <Badge :count="5" :offset="[-5, 5]">
            <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
          </Badge>
          <div style="margin-top: 8px; font-size: 12px; color: #999">左移 5px<br />下移 5px</div>
        </div>
      </div>
    </section>

    <!-- 独立使用（不包裹元素） -->
    <section>
      <h4 style="margin-bottom: 12px; font-size: 14px; color: #666">独立使用（不包裹元素）</h4>
      <div style="display: flex; gap: 16px; align-items: center">
        <Badge :count="5" />
        <Badge :count="99" />
        <Badge dot />
        <Badge count="new" />
        <Badge count="hot" color="#ff4d4f" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Badge, Button } from '@hmfw/ant-design'

const showDot = ref(true)
</script>
