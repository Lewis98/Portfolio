import React, { Component } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


const containerStyle = {
  textAlign: 'center',
  justifyContent: 'center',
  width: '100%',  
}

const formStyle = {

  textAlign: 'center',
  justifyContent: 'center',

  maxWidth: '600px',
  margin: 'auto',  
}

const fItemStyle = {
  width: '100%',
  margin: 'auto', 
}

export default class pgContact extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Form style={formStyle}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item style={fItemStyle}
            name="message"
            rules={[{ required: true, message: 'Please type a message' }]}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, resize: 'none', width: '100%' }}
              placeholder="Message"
            />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input a valid email address' }]}
          >
            <Input
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}