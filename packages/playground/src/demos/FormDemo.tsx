import { defineComponent, ref } from 'vue'
import { Form, FormItem, Input, InputNumber, Select, Button, Space, Switch } from 'ant-design-hmfw'

export default defineComponent({
  name: 'FormDemo',
  setup() {
    const model = ref({
      username: '',
      email: '',
      age: undefined as number | undefined,
      city: undefined as string | undefined,
      agree: false,
    })

    const rules = {
      username: [
        { required: true, message: '请输入用户名' },
        { min: 3, message: '用户名至少 3 个字符' },
      ],
      email: [
        { required: true, message: '请输入邮箱' },
        { type: 'email' as const, message: '请输入有效的邮箱地址' },
      ],
      age: [{ required: true, message: '请输入年龄' }],
    }

    const handleFinish = (values: any) => {
      console.log('Form values:', values)
      alert('提交成功！\n' + JSON.stringify(values, null, 2))
    }

    const handleFinishFailed = (info: any) => {
      console.log('Validation failed:', info)
    }

    return () => (
      <div>
        <h2 style={{ marginBottom: '24px' }}>Form 表单</h2>

        <section style={{ marginBottom: '32px' }}>
          <h3>水平布局（默认）</h3>
          <div style={{ maxWidth: '500px' }}>
            <Form
              model={model.value}
              rules={rules}
              layout="horizontal"
              onFinish={handleFinish}
              onFinishFailed={handleFinishFailed}
            >
              <FormItem name="username" label="用户名">
                <Input
                  value={model.value.username}
                  onInput={(e: any) => (model.value.username = e.target.value)}
                  placeholder="请输入用户名"
                />
              </FormItem>
              <FormItem name="email" label="邮箱">
                <Input
                  value={model.value.email}
                  onInput={(e: any) => (model.value.email = e.target.value)}
                  placeholder="请输入邮箱"
                />
              </FormItem>
              <FormItem name="age" label="年龄">
                <InputNumber
                  value={model.value.age}
                  onChange={(v: any) => (model.value.age = v)}
                  min={1}
                  max={120}
                  placeholder="请输入年龄"
                />
              </FormItem>
              <FormItem name="city" label="城市">
                <Select
                  value={model.value.city}
                  onChange={(v: any) => (model.value.city = v)}
                  options={[
                    { label: '北京', value: 'beijing' },
                    { label: '上海', value: 'shanghai' },
                    { label: '广州', value: 'guangzhou' },
                  ]}
                  placeholder="请选择城市"
                  style={{ width: '100%' }}
                />
              </FormItem>
              <FormItem>
                <Space>
                  <Button type="primary" onClick={() => {}}>提交</Button>
                  <Button onClick={() => { model.value = { username: '', email: '', age: undefined, city: undefined, agree: false } }}>重置</Button>
                </Space>
              </FormItem>
            </Form>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>垂直布局</h3>
          <div style={{ maxWidth: '400px' }}>
            <Form layout="vertical">
              <FormItem label="用户名" required>
                <Input placeholder="请输入用户名" />
              </FormItem>
              <FormItem label="密码" required>
                <Input placeholder="请输入密码" />
              </FormItem>
              <FormItem>
                <Button type="primary">登录</Button>
              </FormItem>
            </Form>
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h3>校验状态</h3>
          <div style={{ maxWidth: '400px' }}>
            <Form layout="vertical">
              <FormItem label="成功" validateStatus="success" help="验证通过">
                <Input defaultValue="正确的值" />
              </FormItem>
              <FormItem label="警告" validateStatus="warning" help="请注意格式">
                <Input defaultValue="可能有问题" />
              </FormItem>
              <FormItem label="错误" validateStatus="error" help="此字段为必填项">
                <Input placeholder="请输入" />
              </FormItem>
            </Form>
          </div>
        </section>
      </div>
    )
  },
})
