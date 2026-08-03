<template>
  <component :is="ChangelogComponent" v-if="ChangelogComponent" />
  <div v-else-if="errorMessage" style="padding: 24px; color: var(--hmfw-color-error)">
    {{ errorMessage }}
  </div>
  <div v-else style="padding: 24px">加载中...</div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const errorMessage = ref('')
const ChangelogComponent = ref<any>(null)

// 动态导入 changelog markdown
const changelogModules = import.meta.glob('../../changelogs/*.md')

// 根据路由参数计算 loader
const loader = computed(() => {
  const version = route.params.version as string
  // 如果 version 已经包含 .md 后缀，不再添加
  const filename = version.endsWith('.md') ? version : `${version}.md`
  const modulePath = `../../changelogs/${filename}`
  return { loader: changelogModules[modulePath], filename }
})

// 监听 loader 变化，动态加载组件
watch(
  loader,
  async ({ loader: moduleLoader, filename }) => {
    errorMessage.value = ''
    ChangelogComponent.value = null

    if (!moduleLoader) {
      errorMessage.value = `未找到 changelog 文件：${filename}`
      return
    }

    try {
      const module = await moduleLoader()
      ChangelogComponent.value = module.default
    } catch (err: any) {
      errorMessage.value = `加载失败：${err.message}`
    }
  },
  { immediate: true },
)
</script>
