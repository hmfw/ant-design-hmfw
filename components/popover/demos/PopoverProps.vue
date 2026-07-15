<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- disabled 属性 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">disabled - 禁用 Popover：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="正常" content="可以正常触发">
          <Button>正常状态</Button>
        </Popover>
        <Popover title="禁用" content="无法触发" disabled>
          <Button disabled>禁用状态</Button>
        </Popover>
      </div>
    </div>

    <!-- arrow 属性 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">arrow - 箭头控制：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="默认箭头" content="显示箭头（默认行为）">
          <Button>显示箭头</Button>
        </Popover>
        <Popover title="无箭头" content="不显示箭头" :arrow="false">
          <Button>隐藏箭头</Button>
        </Popover>
        <Popover title="箭头居中" content="箭头指向触发元素中心" :arrow="{ pointAtCenter: true }" placement="topLeft">
          <Button>箭头居中</Button>
        </Popover>
      </div>
    </div>

    <!-- destroyOnHidden 属性 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">destroyOnHidden - 隐藏时销毁 DOM：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover title="保持 DOM" content="隐藏时 DOM 依然存在（display: none）">
          <Button>保持 DOM</Button>
        </Popover>
        <Popover title="销毁 DOM" content="隐藏时完全从 DOM 中移除" destroy-on-hidden>
          <Button>销毁 DOM</Button>
        </Popover>
        <span style="color: #8c8c8c; font-size: 13px">（打开开发者工具查看 DOM 变化）</span>
      </div>
    </div>

    <!-- autoAdjustOverflow 属性 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">autoAdjustOverflow - 自动调整位置：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover title="自动翻转" content="超出视口时自动翻转到合适位置" placement="top">
          <Button>自动翻转</Button>
        </Popover>
        <Popover title="不翻转" content="超出视口也保持原位置" placement="top" :auto-adjust-overflow="false">
          <Button>不翻转</Button>
        </Popover>
        <span style="color: #8c8c8c; font-size: 13px">（在页面边缘测试）</span>
      </div>
    </div>

    <!-- mouseEnterDelay / mouseLeaveDelay -->
    <div>
      <div style="margin-bottom: 8px; color: #666">mouseEnterDelay / mouseLeaveDelay - 延迟触发：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="立即显示" content="鼠标移入立即显示" :mouse-enter-delay="0">
          <Button>无延迟</Button>
        </Popover>
        <Popover title="延迟 1 秒" content="鼠标移入 1 秒后显示" :mouse-enter-delay="1">
          <Button>延迟 1s 显示</Button>
        </Popover>
        <Popover title="快速隐藏" content="鼠标移出立即隐藏" :mouse-leave-delay="0">
          <Button>快速隐藏</Button>
        </Popover>
        <Popover title="延迟隐藏" content="鼠标移出 1 秒后隐藏" :mouse-leave-delay="1">
          <Button>延迟 1s 隐藏</Button>
        </Popover>
      </div>
    </div>

    <!-- trigger 数组形式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">trigger - 多触发方式：</div>
      <div style="display: flex; gap: 8px">
        <Popover title="单一触发" content="仅悬停触发" trigger="hover">
          <Button>悬停触发</Button>
        </Popover>
        <Popover title="多重触发" content="悬停或聚焦都可触发" :trigger="['hover', 'focus']">
          <Button>悬停或聚焦</Button>
        </Popover>
        <Popover title="右键触发" content="鼠标右键触发" trigger="contextMenu">
          <Button>右键菜单</Button>
        </Popover>
      </div>
    </div>

    <!-- zIndex -->
    <div>
      <div style="margin-bottom: 8px; color: #666">zIndex - 自定义层级：</div>
      <div style="display: flex; gap: 8px; align-items: center">
        <Popover title="默认层级" content="z-index: 1070（默认）">
          <Button>默认</Button>
        </Popover>
        <Popover title="更高层级" content="z-index: 9999" :z-index="9999">
          <Button>高层级</Button>
        </Popover>
        <span style="color: #8c8c8c; font-size: 13px">（在复杂层级场景中测试）</span>
      </div>
    </div>

    <!-- 组合示例 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用：</div>
      <Popover
        title="综合配置"
        content="无箭头 + 延迟显示 + 隐藏销毁 DOM"
        :arrow="false"
        :mouse-enter-delay="0.5"
        :mouse-leave-delay="0.3"
        destroy-on-hidden
      >
        <Button type="primary">组合配置</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'
</script>
