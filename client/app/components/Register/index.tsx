import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import { useRouter } from 'next/router'

import { AuthLayout } from 'layouts/Auth'
import { AuthService } from 'services/AuthService'
import { ISignUpParams } from 'models/api/auth/ISignUpParams'

export const Register = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = (params: ISignUpParams) => AuthService.signUp(params).then(() => router.push('/'))

  return (
    <AuthLayout dest='register'>
      <Form
        name='register'
        form={form}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 18 }}
        validateTrigger={'onSubmit'}
        onFinish={handleSubmit}
      >
        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            { required: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='login' label='Login' rules={[{ type: 'string', min: 5, max: 20 }, { required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Password' hasFeedback rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Confirm'
          dependencies={['password']}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject('') // TODO Оформить ошибку.
              },
            }),
            { required: true },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}
