<template>
  <div style="display: flex; flex-direction: column; gap: 20px">
    <!-- 使用 title slot -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 title slot（带图标）：</div>
      <Popover>
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px">
            <InfoCircleOutlined />
            <span>带图标的标题</span>
          </div>
        </template>
        <template #content> 这是通过 slot 传入的内容 </template>
        <Button>Title Slot</Button>
      </Popover>
    </div>

    <!-- 使用 content slot -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 content slot（富内容）：</div>
      <Popover title="提示">
        <template #content>
          <div style="max-width: 300px">
            <p style="margin: 0 0 12px">这是一段富文本内容，可以包含任意元素：</p>
            <ul style="margin: 0 0 12px; padding-left: 20px">
              <li>支持列表</li>
              <li>支持样式</li>
              <li>支持交互</li>
            </ul>
            <a href="https://github.com" target="_blank" style="color: #1677ff">查看更多 →</a>
          </div>
        </template>
        <Button>Content Slot</Button>
      </Popover>
    </div>

    <!-- 同时使用 title 和 content slot -->
    <div>
      <div style="margin-bottom: 8px; color: #666">同时使用 title 和 content slot：</div>
      <Popover>
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px">
            <ExclamationCircleOutlined style="color: #faad14" />
            <span>操作确认</span>
          </div>
        </template>
        <template #content>
          <div style="width: 280px">
            <p style="margin: 0 0 12px">确定要删除这条记录吗？此操作不可撤销。</p>
            <div style="text-align: right">
              <Button size="small" style="margin-right: 8px" @click="handleCancel">取消</Button>
              <Button type="primary" danger size="small" @click="handleConfirm">确定</Button>
            </div>
          </div>
        </template>
        <Button type="primary">操作确认</Button>
      </Popover>
    </div>

    <!-- 混合使用 prop 和 slot -->
    <div>
      <div style="margin-bottom: 8px; color: #666">混合使用（title prop + content slot）：</div>
      <Popover title="通知">
        <template #content>
          <div style="display: flex; align-items: center; gap: 12px">
            <CheckCircleOutlined style="font-size: 24px; color: #52c41a" />
            <div>
              <div style="font-weight: 600; margin-bottom: 4px">操作成功</div>
              <div style="color: #8c8c8c; font-size: 13px">您的更改已保存</div>
            </div>
          </div>
        </template>
        <Button>成功通知</Button>
      </Popover>
    </div>

    <!-- 仅使用 title slot（无 content）-->
    <div>
      <div style="margin-bottom: 8px; color: #666">仅使用 title slot（无内容）：</div>
      <Popover>
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px; color: #1677ff">
            <QuestionCircleOutlined />
            <span>这是一个标题</span>
          </div>
        </template>
        <Button>仅标题</Button>
      </Popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from '@hmfw/ant-design'
import { InfoCircleOutlined, ExclamationCircleOutlined, CheckCircleOutlined, QuestionCircleOutlined } from '@hmfw/icons'

const handleCancel = () => {
  console.log('取消操作')
}

const handleConfirm = () => {
  console.log('确认删除')
}
</script>
