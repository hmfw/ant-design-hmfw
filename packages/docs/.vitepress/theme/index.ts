import DefaultTheme from 'vitepress/theme'
import { ConfigProvider } from 'ant-design-hmfw'
import '../../../components/src/style.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('ConfigProvider', ConfigProvider)
  },
}
