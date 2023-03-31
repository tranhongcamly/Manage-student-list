import React from 'react'
import "./style.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';


function Login() {
    const navigate = useNavigate()
    // function logError(error) {
    //   alert("Error", error)
    // }
    const onFinish = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                username: values.username,
                password: values.password,
              }
            )
          };
          fetch("http://localhost:8002/v1/auth/login", requestOptions)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem("usersdatatoken", data.accessToken);
            localStorage.setItem("userId", data._id);
            localStorage.setItem("userName", data.username);
            localStorage.setItem("isAdmin", data.isAdmin);
            navigate("/admin")
          })
          // // .catch(logError);
          // if(!localStorage.getItem("usersdatatoken"))
          // {
          //   alert("Login failed")
          //   navigate("/login")
          // }
    };

  return (
    <div>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <h1 style={{textAlign: "center"}}>Login</h1>
            {/* <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item> */}
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link className="login-form-forgot" href="">
                Forgot password
                </Link>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <Link to={"/register"}>register now!</Link>
            </Form.Item>
            </Form>
    </div>
  )
}

export default Login