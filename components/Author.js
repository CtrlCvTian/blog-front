import { Avatar, Divider } from "antd"
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import "../static/style/component/author.css"

const Author = () => {
  return (
    <div className="author-div common-box">
      <div className="author-img"><Avatar size={150} src="../static/image/gougou.jpg" /></div>
      <div className="author-name">前端小田</div>
      <div className="author-introduction">
        专注于WEB和移动前端开发
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
}
export default Author