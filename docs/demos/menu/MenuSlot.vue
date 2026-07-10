<template>
  <div style="width: 256px; border-right: 1px solid #f0f0f0">
    <Menu mode="inline" :selected-keys="selectedKeys" :default-open-keys="['sub1']" @select="onSelect">
      <SubMenu item-key="sub1" label="导航一" :icon="h(MailOutlined)">
        <MenuItem item-key="1" label="选项一" />
        <MenuItem item-key="2" label="选项二" />
      </SubMenu>
      <SubMenu item-key="sub2" label="导航二" :icon="h(SettingOutlined)">
        <MenuItem item-key="3" label="选项三" />
        <MenuItem item-key="4" label="选项四" />
      </SubMenu>
      <MenuItem item-key="5" label="导航三" :icon="h(UserOutlined)" />
      <MenuDivider item-key="d1" />
      <MenuItem item-key="6" label="关于" />
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu, MenuItem, SubMenu, MenuDivider } from '@hmfw/ant-design'
import { MailOutlined, SettingOutlined, UserOutlined } from '@hmfw/icons'

const selectedKeys = ref(['1'])

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
