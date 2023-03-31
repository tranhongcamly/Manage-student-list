import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css"
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';

  const {Option} = Select

function Register() {
  const token = localStorage.getItem("usersdatatoken");
  const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = (values) => {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
          body: JSON.stringify(
            {
              username: values.username,
              password: values.password,
              email: values.email
            }
          )
        };
        fetch("http://localhost:8002/v1/auth/register", requestOptions)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          navigate("/login", {replace: true})
        })
    };
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 6,
          },
        },
      };
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 6,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="84">+84</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
  return (
    <div>
        <Form
            className='formRegister'
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{prefix: '84' }}
            style={{ maxWidth: 800 }}
            scrollToFirstError
        >
            <h1 style={{textAlign: "center"}}>Register</h1>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="username"
                label="Username"
                tooltip="What do you want others to call you?"
                rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
            </Form>
    </div>
  )
}

export default Register