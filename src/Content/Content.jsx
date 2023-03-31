import React from 'react'
import "./style.css"
  import { Layout, theme } from 'antd';
 import ListItem from './ContentBody/ListItem';
 import MenuSider from '../Menu/Menu';
 import Navigation from '../Header/Header';
import Sider from 'antd/es/layout/Sider';
import { Footer } from 'antd/es/layout/layout';
  
  const {Content } = Layout;


function AdminPage() {
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
                    <ListItem />
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
  )
}

export default AdminPage