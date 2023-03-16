import React, { Component } from 'react'
import emailjs from '@emailjs/browser'

import { Form, Input, Button } from 'antd'
const { TextArea } = Input;


/**
 * TODO:
 * Prompt user to inform upon success of email sent
 */

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

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    formRef = React.createRef();

    // - - - Form Submission Logic - - - \\
    onFinish = (values) => {
        console.log('Form submitted with following data:');
        console.table(values)

        emailjs.send(
            process.env.REACT_APP_EJS_SERVICE_ID, 
            process.env.REACT_APP_EJS_TEMPLATE_ID, 
            values, 
            process.env.REACT_APP_EJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        this.formRef.current.resetFields();
    };

    onFinishFailed = (errorInfo) => {
        console.log('Sorry, your message could not be sent, please see below info.');
        console.table(errorInfo);
        console.log(errorInfo);
    };

    render() {
        return (
            <div style={containerStyle}>
            <Form style={formStyle}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                ref={this.formRef}
            >
                <legend><h1 style={titleStyle}>Contact Form</h1></legend>

                <Form.Item style={fItemStyle}
                    name="user_name"
                    rules={[{ required: false }]}
                >
                    <Input
                        placeholder="Name"
                    />
                </Form.Item>

                <Form.Item style={fItemStyle}
                    name="user_email"
                    rules={[{ required: true, message: 'Please input a valid email address' }]}
                >
                    <Input
                        placeholder="Email"
                    />
                </Form.Item>

                <Form.Item style={fItemStyle}
                    name="user_message"
                    rules={[{ required: true, message: 'Please type a message' }]}
                >
                    <TextArea
                    showCount
                    maxLength={100}
                    style={{ height: 120, resize: 'none', width: '100%' }}
                    placeholder="Message"
                    />
                </Form.Item>

                <Form.Item style={fItemStyle}>
                    <Button type="primary" htmlType="submit">
                        Send Message
                    </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}