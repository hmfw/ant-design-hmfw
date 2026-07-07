<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">自动插入空格（默认开启）</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary">按钮</Button>
        <Button>确认</Button>
        <Button type="dashed">取消</Button>
        <Button type="text">删除</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">
        禁用自动插入空格（<code>:auto-insert-space="false"</code>）
      </h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary" :auto-insert-space="false">按钮</Button>
        <Button :auto-insert-space="false">确认</Button>
        <Button type="dashed" :auto-insert-space="false">取消</Button>
        <Button type="text" :auto-insert-space="false">删除</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">非两个汉字（不插入空格）</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary">确认按钮</Button>
        <Button>一</Button>
        <Button type="dashed">OK</Button>
        <Button type="text">删除操作</Button>
      </div>
    </div>

    <div>
      <h4 style="margin: 0 0 8px 0; font-size: 14px; color: rgba(0, 0, 0, 0.65)">带图标时不插入空格</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <Button type="primary" :icon="SearchOutlined">搜索</Button>
        <Button :icon="CheckOutlined">确认</Button>
        <Button type="dashed" :icon="CloseOutlined">关闭</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchOutlined, CheckOutlined, CloseOutlined } from '@hmfw/icons'
import { Button } from '@hmfw/ant-design'
</script>
