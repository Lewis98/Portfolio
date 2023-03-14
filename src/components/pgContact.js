import React, { Component } from 'react'

import { Form, Input, Button } from 'antd'
const { TextArea } = Input;


// - - - - - - Styling - - - - - - \\
const containerStyle = {
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '5em',      
}

const formStyle = {

    backgroundColor: 'rgb(0,0,0,0.25)',

    textAlign: 'center',
    justifyContent: 'center',
    
    width: '600px',
    maxWidth: '80vw',
    margin: 'auto',
    border: 'solid 2px',
    borderRadius: '25px',
    padding: '1em',     
}

const titleStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '0.5em',
    margin: '0'
}

const fItemStyle = {
    width: '100%',
    margin: 'auto', 
    marginTop: '3em',
}
// - - - - - Styling  End - - - - - \\


// - - - Form Submission Logic - - - \\
const onFinish = (values) => {
    console.log('Form submitted with following data:');
    console.table(values)
};

const onFinishFailed = (errorInfo) => {
    console.log('Sorry, your message could not be sent, please see below info.');
    console.table(errorInfo);
    console.log(errorInfo);
};
// - - Form Submission Logic End - - \\


export default class Contact extends Component {
  render() {
    return (
        <div style={containerStyle}>
        <Form style={formStyle}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <legend><h1 style={titleStyle}>Contact Form</h1></legend>
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
          
            <Form.Item style={fItemStyle}
                name="email"
                rules={[{ required: true, message: 'Please input a valid email address' }]}
            >
                <Input
                    placeholder="Email"
                />
            </Form.Item>

            <Form.Item style={fItemStyle}>
                <Button type="primary" htmlType="submit">
                    Send Email
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
  }
}
