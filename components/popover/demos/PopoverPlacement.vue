<template>
  <div>
    <Flex justify="center" align="center" gap="middle">
      <Popover placement="topLeft" title="标题" content="内容">
        <Button style="width: 100px"> topLeft </Button>
      </Popover>
      <Popover placement="top" title="标题" content="内容">
        <Button style="width: 100px"> top </Button>
      </Popover>
      <Popover placement="topRight" title="标题" content="内容">
        <Button style="width: 100px"> topRight </Button>
      </Popover>
    </Flex>
    <Flex justify="center" align="center">
      <Flex vertical align="center" gap="middle">
        <Popover placement="leftTop" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> leftTop </Button>
        </Popover>
        <Popover placement="left" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> left </Button>
        </Popover>
        <Popover placement="leftBottom" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> leftBottom </Button>
        </Popover>
      </Flex>
      <div style="width: 332px"></div>
      <Flex vertical align="center" gap="middle">
        <Popover placement="rightTop" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> rightTop </Button>
        </Popover>
        <Popover placement="right" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> right </Button>
        </Popover>
        <Popover placement="rightBottom" title="标题" content="内容">
          <Button style="width: 100px; height: 48px"> rightBottom </Button>
        </Popover>
      </Flex>
    </Flex>
    <Flex justify="center" align="center" gap="middle">
      <Popover placement="bottomLeft" title="标题" content="内容">
        <Button style="width: 100px"> bottomLeft </Button>
      </Popover>
      <Popover placement="bottom" title="标题" content="内容">
        <Button style="width: 100px"> bottom </Button>
      </Popover>
      <Popover placement="bottomRight" title="标题" content="内容">
        <Button style="width: 100px"> bottomRight </Button>
      </Popover>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button, Flex } from '@hmfw/ant-design'
</script>
