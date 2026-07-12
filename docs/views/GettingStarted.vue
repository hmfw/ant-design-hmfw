<template>
  <div v-highlight>
    <h1>快速上手</h1>

    <h2>安装</h2>

    <pre><code class="language-bash">npm install @hmfw/ant-design
# 或
pnpm add @hmfw/ant-design</code></pre>

    <h2>完整引入</h2>

    <pre><code class="language-ts">import { createApp } from 'vue'
import AntDesignHmfw from '@hmfw/ant-design'
import '@hmfw/ant-design/style.css'
import App from './App.vue'

createApp(App).use(AntDesignHmfw).mount('#app')</code></pre>

    <h2>按需引入</h2>

    <pre><code class="language-ts">import { Button, Input } from '@hmfw/ant-design'
import '@hmfw/ant-design/style.css'</code></pre>

    <h2>使用 ConfigProvider</h2>

    <pre><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :locale="zhCN" :theme="{ colorPrimary: '#1677ff' }"&gt;
    &lt;App /&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ConfigProvider } from '@hmfw/ant-design'
import zhCN from '@hmfw/ant-design/locale/zh-CN'
&lt;/script&gt;</code></pre>
  </div>
</template>
