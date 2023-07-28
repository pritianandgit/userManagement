
import React, { useState } from 'react'
import { Col, Layout, Row } from 'antd'
import './mainLayout.css'
import { SideNav } from '../SideNav/sideNav'
import { MainHeader } from '../Header/header'
    import { useDispatch, useSelector } from 'react-redux'

const { Header, Sider, Content } = Layout
const MainLayout = (props: any) => {
  const { children , appUser, setIsLoggedIn} = props;
  // const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout className="mainLayout">
      <Sider
        className="mainSidebar"
        collapsible
        trigger={null}
        collapsedWidth={"5.62%"}
        width={"13.89%"}
      >
        <SideNav/>
      </Sider>
      <Layout>
        <Header className='mainHeader'>
          <Row className="flex-header">
          <Col span={24}>
            <MainHeader setIsLoggedIn={setIsLoggedIn}/>
          </Col>
          </Row>
        </Header>
        <Content className="contentHolder">  
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout