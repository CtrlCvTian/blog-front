import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Row, Col, List } from 'antd'
import Header from "../components/Header"
import Author from "../components/Author"
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import axios from "axios"
import filterDate from '../utils/filterDate'
import "../static/style/pages/index.css"
import {
  FieldTimeOutlined,
  VideoCameraOutlined,
  UserOutlined
} from '@ant-design/icons';

const Home = (list) => {
  // 此处进行接收getInitialProps中获取的数据
  const [myList, setMyList] = useState(list)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://127.0.0.1:7001/front/getActicleList',
      );
      console.log(result.data);
      setMyList(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {/* <Head>
        <title>个人博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Row className="common-main" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={
              item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><FieldTimeOutlined />2013</span>
                    <span><VideoCameraOutlined />{item.title}</span>
                    <span><UserOutlined />{item.viewCount}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )
            }
          ></List>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer /> */}
    </div>
  )
}

// Home.getInitialProps = async () => {
//   const promise = new Promise((resolve, reject) => {
//     axios('http://127.0.0.1:7001/front/getActicleList').then((response) => {
//       resolve(response.data)
//     })
//   })
//   return await promise
// }

export default Home
