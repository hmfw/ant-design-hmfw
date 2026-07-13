<template>
  <div>
    <Flex justify="center" align="center" gap="middle">
      <Tooltip placement="topLeft" title="提示文字">
        <Button style="width: 100px"> topLeft </Button>
      </Tooltip>
      <Tooltip placement="top" title="提示文字">
        <Button style="width: 100px"> top </Button>
      </Tooltip>
      <Tooltip placement="topRight" title="提示文字">
        <Button style="width: 100px"> topRight </Button>
      </Tooltip>
    </Flex>
    <Flex justify="center" align="center">
      <Flex vertical align="center" gap="middle">
        <Tooltip placement="leftTop" title="提示文字">
          <Button style="width: 100px; height: 48px"> leftTop </Button>
        </Tooltip>
        <Tooltip placement="left" title="提示文字">
          <Button style="width: 100px; height: 48px"> left </Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title="提示文字">
          <Button style="width: 100px; height: 48px"> leftBottom </Button>
        </Tooltip>
      </Flex>
      <div style="width: 332px"></div>
      <Flex vertical align="center" gap="middle">
        <Tooltip placement="rightTop" title="提示文字">
          <Button style="width: 100px; height: 48px"> rightTop </Button>
        </Tooltip>
        <Tooltip placement="right" title="提示文字">
          <Button style="width: 100px; height: 48px"> right </Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title="提示文字">
          <Button style="width: 100px; height: 48px"> rightBottom </Button>
        </Tooltip>
      </Flex>
    </Flex>
    <Flex justify="center" align="center" gap="middle">
      <Tooltip placement="bottomLeft" title="提示文字">
        <Button style="width: 100px"> bottomLeft </Button>
      </Tooltip>
      <Tooltip placement="bottom" title="提示文字">
        <Button style="width: 100px"> bottom </Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title="提示文字">
        <Button style="width: 100px"> bottomRight </Button>
      </Tooltip>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button, Flex } from '@hmfw/ant-design'
</script>
