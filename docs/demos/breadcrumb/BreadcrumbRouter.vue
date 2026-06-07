<template>
  <div class="breadcrumb-router-demo">
    <Breadcrumb :items="breadcrumbItems" />
    <div class="demo-nav">
      <Button @click="navigateTo('/')"> 首页 </Button>
      <Button @click="navigateTo('/products')"> 产品列表 </Button>
      <Button @click="navigateTo('/products/123')"> 产品详情 </Button>
      <Button @click="navigateTo('/products/123/reviews')"> 产品评价 </Button>
    </div>
    <div class="current-path">当前路径：{{ currentPath }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Breadcrumb, Button } from 'ant-design-hmfw'
import type { BreadcrumbItem as BreadcrumbItemType } from 'ant-design-hmfw'

// 模拟路由状态
const currentPath = ref('/')

// 从路径生成面包屑
const breadcrumbItems = computed<BreadcrumbItemType[]>(() => {
  const path = currentPath.value
  const segments = path.split('/').filter(Boolean)

  if (segments.length === 0) {
    return [
      {
        title: '首页',
        onClick: () => navigateTo('/'),
      },
    ]
  }

  const items: BreadcrumbItemType[] = [
    {
      title: '首页',
      onClick: () => navigateTo('/'),
    },
  ]

  let accumulatedPath = ''
  segments.forEach((segment, index) => {
    accumulatedPath += `/${segment}`

    // 检查是否是数字（动态路由参数）
    const isParam = /^\d+$/.test(segment)

    if (index === 0 && segment === 'products') {
      items.push({
        title: '产品列表',
        onClick: () => navigateTo('/products'),
      })
    } else if (index === 1 && isParam && segments[0] === 'products') {
      items.push({
        title: `产品 ${segment}`,
        onClick: () => navigateTo(`/products/${segment}`),
      })
    } else if (index === 2 && segment === 'reviews') {
      items.push({
        title: '产品评价',
        onClick: () => navigateTo(accumulatedPath),
      })
    }
  })

  return items
})

// 模拟路由导航
const navigateTo = (path: string) => {
  currentPath.value = path
}
</script>

<style scoped>
.breadcrumb-router-demo {
  padding: 16px;
}

.demo-nav {
  margin-top: 24px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.current-path {
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
  font-family: monospace;
}
</style>
