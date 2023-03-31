import React, { useEffect } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Row, Col, Button } from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const { Header} = Layout;

function Navigation() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  const userIdLogin = localStorage.getItem("userId");

  const removeItem = (item) => {
    localStorage.removeItem(item);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("usersdatatoken");
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "token": `Bearer ${token}`
      },
      // body: JSON.stringify(userIdLogin)
    };
    fetch("http://localhost:8002/v1/auth/logout", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // localStorage.clear()
      removeItem("userName")
      removeItem("usersdatatoken");
      removeItem("userId");
      window.location.href = "/login";
      // navigate("/")
    })
  };
    
  return (
    <div>
      <Layout className="site-layout" >
                <Header style={{ padding: 0}}>
                    <Row>
                        <Col span={12}>
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                            })}
                        </Col>
                        {localStorage.getItem("userName") ? (
                            <Col span={11}>
                                <Row justify={"end"}>
                                  <Col><BellOutlined style={{color: "white", fontSize: 18, marginRight: 15}} className="icon-bell"/></Col>
                                  <Col>
                                    <h3 style={{color: "white", margin:0}}>Hi! {localStorage.getItem("userName")}</h3>
                                  </Col>
                                  <Col>
                                    <Button style={{marginLeft: 15}} onClick={handleLogout}>Logout</Button>
                                  </Col>
                                </Row>
                            </Col>
                        ) : (
                            <Col span={11}>
                              <Row justify={"end"}>
                                <Col><Link to={"/login"}><Button style={{marginRight: 10}}>Login</Button></Link></Col>
                                <Col><Link to={"/register"}><Button>Register</Button></Link></Col>
                              </Row>
                            </Col>
                        )}
                    </Row>
                </Header>
              </Layout>
    </div>
  )
}

export default Navigation