let networkURL = 'http://127.0.0.1:7001/front/'

let serverPath = {
  getActicleList: `${networkURL}getActicleList`, //获取首页列表
  getActicleDetail: `${networkURL}getActicleDetail/`, //获取详情数据
  getTypeInfo: `${networkURL}getTypeInfo` //获取header头部数据
}
export default serverPath