import React, { useState, useEffect } from 'react';
import "../static/style/component/header.css"
import { Row, Col, Menu } from 'antd'
import serverPath from '../utils/networkURL'
import axios from "axios"
import dynamicIcon from '../utils/dynamicIcon'
// 引入图标 下面根据后端数据进行动态引入图标
import * as allIcons from '@ant-design/icons';
import Router from 'next/router'
import Link from 'next/link'

const Header = () => {
  const [headerList, setHeaderList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(serverPath.getTypeInfo)
      setHeaderList(dynamicIcon(result.data, allIcons, React).sort((prev, next) => {
        return prev.orderNum - next.orderNum
      }))
    }
    fetchData()
  }, [])
  const handleClick = (e) => {
    if (e.key === '0') {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
  return (
    <div className="header">
      <div className="header-center">
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={14} lg={14} xl={13}>
            <span className="header-logo">
              <Link href={{ pathname: 'index' }}>
                <a>小田博客</a>
              </Link>
            </span>
            <span className="header-text">专注前端开发,每天坚持学习</span>
          </Col>
          <Col xs={0} sm={0} md={8} lg={9} xl={10}>
            <Menu mode="horizontal" onClick={handleClick}>
              {
                headerList.map((item) => (
                  <Menu.Item key={item.orderNum}>
                    {item.iconShow}
                    {item.typeName}
                  </Menu.Item>
                ))
              }
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Header