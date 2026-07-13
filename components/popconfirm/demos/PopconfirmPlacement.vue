<template>
  <div>
    <Flex justify="center" align="center" gap="middle">
      <Popconfirm placement="topLeft" title="确定要执行此操作吗？">
        <Button style="width: 100px"> topLeft </Button>
      </Popconfirm>
      <Popconfirm placement="top" title="确定要执行此操作吗？">
        <Button style="width: 100px"> top </Button>
      </Popconfirm>
      <Popconfirm placement="topRight" title="确定要执行此操作吗？">
        <Button style="width: 100px"> topRight </Button>
      </Popconfirm>
    </Flex>
    <Flex justify="center" align="center">
      <Flex vertical align="center" gap="middle">
        <Popconfirm placement="leftTop" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> leftTop </Button>
        </Popconfirm>
        <Popconfirm placement="left" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> left </Button>
        </Popconfirm>
        <Popconfirm placement="leftBottom" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> leftBottom </Button>
        </Popconfirm>
      </Flex>
      <div style="width: 332px"></div>
      <Flex vertical align="center" gap="middle">
        <Popconfirm placement="rightTop" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> rightTop </Button>
        </Popconfirm>
        <Popconfirm placement="right" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> right </Button>
        </Popconfirm>
        <Popconfirm placement="rightBottom" title="确定要执行此操作吗？">
          <Button style="width: 100px; height: 48px"> rightBottom </Button>
        </Popconfirm>
      </Flex>
    </Flex>
    <Flex justify="center" align="center" gap="middle">
      <Popconfirm placement="bottomLeft" title="确定要执行此操作吗？">
        <Button style="width: 100px"> bottomLeft </Button>
      </Popconfirm>
      <Popconfirm placement="bottom" title="确定要执行此操作吗？">
        <Button style="width: 100px"> bottom </Button>
      </Popconfirm>
      <Popconfirm placement="bottomRight" title="确定要执行此操作吗？">
        <Button style="width: 100px"> bottomRight </Button>
      </Popconfirm>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button, Flex } from '@hmfw/ant-design'
</script>
