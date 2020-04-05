import React from 'react';
import "../static/style/component/header.css"
import { Row, Col, Menu } from 'antd'
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined
} from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <div className="header-center">

        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={14} lg={14} xl={13}>
            <span className="header-logo">小田博客</span>
            <span className="header-text">专注前端开发,每天坚持学习</span>
          </Col>
          <Col xs={0} sm={0} md={8} lg={9} xl={10}>
            <Menu mode="horizontal">
              <Menu.Item key='home'>
                <HomeOutlined />
                首页
          </Menu.Item>
              <Menu.Item key='video'>
                <VideoCameraOutlined />
                视频
          </Menu.Item>
              <Menu.Item key='life'>
                <SmileOutlined />
                生活
          </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Header