import React from 'react'
import Head from 'next/head'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Header from "../components/Header"
import Advert from "../components/Advert"
import Author from "../components/Author"
import Footer from "../components/Footer"
import "../static/style/pages/detailed.css"
import { CalendarOutlined, FolderOutlined, FireOutlined } from "@ant-design/icons"
import axios from "axios"
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import Tocify from '../utils/tocify.tsx'
import serverPath from '../utils/networkURL'


const Detailed = (detailInfo) => {
  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  const tocify = new Tocify()
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  let html = marked(detailInfo.article_content)
  return (
    <div>
      <Head>
        <title>详情页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Row className="common-main" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>

          <div>
            <div className="detailed-title">
              React实战视频教程-小田Blog开发(更新08集)
        </div>
          </div>

          <div>
            <div className="list-icon center">
              <span><CalendarOutlined /> 2019-06-28</span>
              <span><FolderOutlined /> 视频教程</span>
              <span><FireOutlined /> 5498人</span>
            </div>

            <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}>

            </div>
          </div>
        </Col>
        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(serverPath.getActicleDetail + id).then(
      (res) => {
        resolve(res.data[0])
      }
    )
  })
  return await promise
}

export default Detailed
