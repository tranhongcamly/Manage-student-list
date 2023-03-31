import React from 'react'
import { Layout, Menu, theme, Row, Col, Button} from 'antd';
import logo from "../utils/logo2.png"
import {
  PlusCircleOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import "./style.css"
import Navigation from '../Header/Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const {Sider} = Layout;
const {collapsed} = Navigation;

function MenuSider() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClick = () => {
    if(localStorage.getItem("usersdatatoken"))
    {
      navigate("/admin")
    }
    else{
      navigate("/login")
    }
  }

  return (
    <div>
      <Layout>
            <Sider trigger={null} 
            collapsible 
            collapsed={collapsed} 
            // collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            width={241}
            className='sider' theme="light" style={{position: "fixed"}}>
                <div className="logo1" >
                  <img src={logo} alt=""/>
                </div>
                <Menu
                theme="light"
                mode="inline"
                
                >
                  <Row justify={"left"} className="rowMenu">
                    <Link to={"/"}>
                      <Col className='rowMenu-Col1'>
                        <HomeOutlined />
                        <span>Home</span>
                      </Col>
                    </Link>
                    <Col className='rowMenu-Col2'>
                      <Button onClick={handleClick} className="bt-rowMenu-Col2">
                        <UserOutlined />
                        <span>Users List</span>
                      </Button>
                    </Col>
                    <Link to={"/register"}>
                      <Col className='rowMenu-Col3'>
                        <PlusCircleOutlined />
                        <span>Register</span>
                      </Col>
                    </Link>
                  </Row>
                </Menu>
            </Sider>
        </Layout>
    </div>
  )
}

export default MenuSider