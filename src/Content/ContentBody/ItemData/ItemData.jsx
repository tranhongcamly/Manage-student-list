import React from 'react'
import { Layout, theme, Row, Col, Card } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuSider from '../../../Menu/Menu';
import Navigation from '../../../Header/Header';
import "./style.css"
import Sider from 'antd/es/layout/Sider';
import { Footer } from 'antd/es/layout/layout';
 
 const {Content } = Layout;

function ItemData() {
  const [currentUser, setCurrentUser] = useState({});
  const { id } = useParams();
  // get current user
  const handleGetCurrentUser = () => {
    const token = localStorage.getItem("usersdatatoken");
    const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "token": `Bearer ${token}`
        }
      };
        fetch(`http://localhost:8002/v1/user/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCurrentUser(data)
        })
    };

    useEffect(() => {
        handleGetCurrentUser();
    }, [id]);
  const {
    token: { colorBgContainer },
    } = theme.useToken();
  return (
    <div>
      <Layout>
            <Sider theme="light" width={240}>
                <MenuSider />   
            </Sider>
            <Layout className="site-layout">
                <Navigation />
                <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 550,
                    background: colorBgContainer,
                }}
                >
                    <div className='row-itemdt'>
                      <img src="https://demos.wrappixel.com/premium-admin-templates/react/materialpro-react/main/static/media/user4.6ac95ef9.jpg" alt="" className='img2'/>
                      <img src="https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/6331875947b91b001d247521.jpg" alt="" className='img1'/>
                      <div className='cardbody-itemdt'>
                        <h4>Username: {currentUser.username}</h4>
                        <p>Email: {currentUser.email}</p>
                        <p>Role: {currentUser.isAdmin === true ? "Admin" : "User"}</p>
                        <p>Register Date: {currentUser.createdAt}</p>
                        <p>Last Update: {currentUser.updatedAt}</p>
                      </div>
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
  )
}

export default ItemData;