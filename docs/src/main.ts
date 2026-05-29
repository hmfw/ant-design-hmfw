import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { ConfigProvider } from 'ant-design-hmfw'
import DemoBlock from './components/DemoBlock.vue'

import '../../components/style.css'
import './styles/vars.css'
import './styles/layout.css'
import './styles/markdown.css'
import './styles/demo-block.css'
import 'prismjs/themes/prism.css'

const app = createApp(App)

app.use(router)
app.component('ConfigProvider', ConfigProvider)
app.component('DemoBlock', DemoBlock)

app.mount('#app')
