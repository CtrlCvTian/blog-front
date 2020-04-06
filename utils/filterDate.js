// 补0操作,当时间数据小于10的时候，给该数据前面加一个0
function getzf (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}
export default function getMyDate (time) {
  if (typeof time === 'undefined') {
    return ''
  }
  var oDate = new Date(Number(time))
  var oYear = oDate.getFullYear()
  var oMonth = oDate.getMonth() + 1
  var oDay = oDate.getDate()
  var oTime = null
  oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
  return oTime
}