import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import './AccountFields.scss'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: 'Required field!',
  types: {
    email: 'Is not validate email!',
  },
};

const AccountsFields = ({}) => {
  return(
    <div className={'fields'}>
      <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'mail']}
          label="Email"
          rules={[{type: 'email', required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'name']}
          label={'Name'}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'surname']}
          label={'Surname'}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'DOB']}
          label={'Date of birthday'}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AccountsFields