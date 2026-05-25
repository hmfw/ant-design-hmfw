import DefaultTheme from 'vitepress/theme'
import { ConfigProvider } from 'ant-design-hmfw'
import Layout from './components/Layout.vue'
import DemoBlock from './components/DemoBlock.vue'
import '@vitepress-demo-preview/component/dist/style.css'
import '../../../components/src/style.css'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: any }) {
    app.component('ConfigProvider', ConfigProvider)
    app.component('DemoBlock', DemoBlock)
  },
}
