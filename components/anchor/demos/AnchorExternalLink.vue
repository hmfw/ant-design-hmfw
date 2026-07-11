<template>
  <div>
    <p style="color: #666; margin-bottom: 16px">
      锚点支持外部链接（http/https），点击时可通过 replace 属性控制是否替换当前页面。
    </p>
    <div style="display: flex; flex-direction: column; gap: 16px">
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">支持跳转到外部链接（target="_blank"）</div>
        <Anchor
          :items="externalItems"
          style="width: 200px; border: 1px solid #f0f0f0; border-radius: 4px; padding: 8px"
        />
      </div>
      <div>
        <div style="margin-bottom: 4px; font-size: 12px; color: #999">使用 Anchor.Link 设置 target 和外部链接</div>
        <Anchor style="width: 200px; border: 1px solid #f0f0f0; border-radius: 4px; padding: 8px">
          <AnchorLink href="https://github.com/hmfw/ant-design-hmfw" title="GitHub 仓库" target="_blank" />
          <AnchorLink href="https://www.npmjs.com/package/@hmfw/ant-design" title="npm 包" target="_blank" />
          <AnchorLink href="#internal-demo" title="内部锚点" />
        </Anchor>
      </div>
    </div>
    <div
      id="internal-demo"
      style="height: 120px; background: #e6f4ff; padding: 16px; margin-top: 16px; border-radius: 4px"
    >
      <h3>内部锚点目标</h3>
      <p>这个是内部锚点的目标区域</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'
import type { AnchorLinkItem } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link

const externalItems: AnchorLinkItem[] = [
  { key: 'github', href: 'https://github.com/hmfw/ant-design-hmfw', title: 'GitHub 仓库', target: '_blank' },
  { key: 'npm', href: 'https://www.npmjs.com/package/@hmfw/ant-design', title: 'npm 包', target: '_blank' },
]
</script>
