import React from 'react'
import { Layout, theme} from 'antd';
import ContentHP from './ContentHomePage/ContentHP';
import MenuSider from '../Menu/Menu';
import Navigation from '../Header/Header';
import Sider from 'antd/es/layout/Sider';
import { Footer, Content } from 'antd/es/layout/layout';

function HomePage() {
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
                    <ContentHP />
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
  )
}

export default HomePage;