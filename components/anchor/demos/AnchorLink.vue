<template>
  <div style="display: flex; gap: 24px">
    <div style="flex: 1">
      <div
        id="components-anchor-demo-basic"
        style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px"
      >
        <h3>Basic demo</h3>
        <p>The simplest usage.</p>
      </div>
      <div
        id="components-anchor-demo-static"
        style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px"
      >
        <h3>Static Anchor</h3>
        <p>Do not change hash when scrolling.</p>
      </div>
      <div id="API" style="background: #fff7e6; padding: 16px; margin-bottom: 16px">
        <h3>API</h3>
        <p>API documentation.</p>
        <div id="Anchor-Props" style="background: #fff2e8; padding: 12px; margin: 8px 0 8px 16px; border-radius: 4px">
          <h4>Anchor Props</h4>
          <p>Anchor 组件的属性配置。</p>
        </div>
        <div id="Link-Props" style="background: #fff2e8; padding: 12px; margin: 8px 0 8px 16px; border-radius: 4px">
          <h4>Link Props</h4>
          <p>Anchor.Link 组件的属性配置。</p>
        </div>
      </div>
    </div>
    <Anchor :offset-top="64" style="width: 200px">
      <AnchorLink href="#components-anchor-demo-basic" title="Basic demo" />
      <AnchorLink href="#components-anchor-demo-static" title="Static demo" />
      <AnchorLink href="#API" title="API">
        <AnchorLink href="#Anchor-Props" title="Anchor Props" />
        <AnchorLink href="#Link-Props" title="Link Props" />
      </AnchorLink>
    </Anchor>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from '@hmfw/ant-design'

const AnchorLink = Anchor.Link
</script>
