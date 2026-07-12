import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { ConfigProvider } from '@hmfw/ant-design'
import DemoBlock from './views/DemoBlock.vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'
import { highlightVueSFC } from './composables/highlightVueSFC'

import '../components/style.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/markdown.css'
import './styles/demo-block.css'
import 'prismjs/themes/prism.css'

const app = createApp(App)

app.use(router)
app.component('ConfigProvider', ConfigProvider)
app.component('DemoBlock', DemoBlock)

// v-highlight 指令：对元素内所有 <pre><code> 代码块做运行时 Prism 高亮
// language-vue 使用自定义 SFC 高亮（拆分 template/script/style 分别处理）
app.directive('highlight', {
  mounted(el: HTMLElement) {
    el.querySelectorAll('pre code[class*="language-"]').forEach((block) => {
      const code = block as HTMLElement
      if (code.className.includes('language-vue')) {
        code.innerHTML = highlightVueSFC(code.textContent || '')
        code.parentElement?.classList.add('language-vue')
      } else {
        Prism.highlightElement(code)
      }
    })
  },
})

app.mount('#app')
