<template>
  <Space direction="vertical" style="width: 100%" size="large">
    <!-- 场景 1：通过 icon 属性为每个步骤设置自定义图标 -->
    <div>
      <h4 style="margin-top: 0">自定义图标：通过 <code>StepItem.icon</code> 为每步设置自定义图标</h4>
      <Steps :current="1" :items="itemsWithIcon" />
    </div>

    <!-- 场景 2：通过 iconRender 全局自定义图标渲染 -->
    <div>
      <h4 style="margin-top: 0">自定义渲染：通过 <code>iconRender</code> 全局控制步骤图标</h4>
      <Steps :current="1" :items="basicItems" :icon-render="customIconRender" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { h, type VNode } from 'vue'
import { Steps, Space } from '@hmfw/ant-design'
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined, HomeOutlined } from '@hmfw/icons'
import type { IconRenderInfo } from '../types'

const basicItems = [
  { title: '第一步', content: '填写基本信息' },
  { title: '第二步', content: '验证邮箱地址' },
  { title: '第三步', content: '完成注册' },
]

// 场景 1：通过 StepItem.icon 自定义每步图标
const itemsWithIcon = [
  {
    title: '登录',
    content: '输入账号密码',
    icon: h(UserOutlined, { class: 'hmfw-icon' }),
  },
  {
    title: '验证',
    content: '短信验证码',
    icon: h(SolutionOutlined, { class: 'hmfw-icon' }),
  },
  {
    title: '支付',
    content: '确认订单金额',
    icon: h(LoadingOutlined, { class: 'hmfw-icon' }),
  },
  {
    title: '完成',
    content: '购买成功',
    icon: h(SmileOutlined, { class: 'hmfw-icon' }),
  },
]

// 场景 2：通过 iconRender 自定义渲染逻辑
const customIconRender = (oriNode: VNode, info: IconRenderInfo): VNode => {
  // 当前激活步骤使用不同的图标
  if (info.active) {
    return h(HomeOutlined, {
      class: 'hmfw-icon',
      style: { fontSize: '20px' },
    })
  }
  // 已完成步骤保留原图标，其余使用默认
  return oriNode
}
</script>
