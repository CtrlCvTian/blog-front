// 补0操作,当时间数据小于10的时候，给该数据前面加一个0
function getzf (num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}
export default function getMyDate (time, isTime) {
  if (typeof time === 'undefined') {
    return ''
  }
  var oDate = new Date(Number(time))
  var oYear = oDate.getFullYear()
  var oMonth = oDate.getMonth() + 1
  var oDay = oDate.getDate()
  var oHour = oDate.getHours()
  var oMin = oDate.getMinutes()
  var oSen = oDate.getSeconds()
  var oTime = null
  //   如果不传说明需要时分秒，传不需要时分秒
  if (!isTime) {
    oTime =
      oYear +
      '-' +
      getzf(oMonth) +
      '-' +
      getzf(oDay) +
      ' ' +
      getzf(oHour) +
      ':' +
      getzf(oMin) +
      ':' +
      getzf(oSen) // 最后拼接时间
  } else {
    oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay)
  }
  console.log(oTime)
  return oTime
}
