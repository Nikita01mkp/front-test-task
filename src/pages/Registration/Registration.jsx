import React from "react";
import { registerUser } from '../../modules'
import {connect} from "react-redux";
import Header from "../../conponents/Header/Header";
import './Registration.scss'
import { Form, Input, InputNumber, Button } from 'antd';
import {Link} from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Registration = ({...props}) => {
  const onFinish = (values) => {
    registerUser(values.user).then(resp => {
      if(resp.status === 200){
        const {history} = props;
        history.push('/login')
      }
      //Todo add reaction on bad request
    })
  };

  return (
    <div className={'registrationPage'}>
      <Header title={'Registration'} subtitle={''}/>
      <div className={'content'}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={['user', 'login']}
            label="Login"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'password']}
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={['user', 'rePassword']}
            label="Confirm Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={['user', 'mail']}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true
              },
            ]}
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
            name={['user', 'age']}
            label="Age"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className={'signInBox'}>
          <p>Have already account? <Link to={'/login'}>Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = dispatch => {
  return dispatch
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)