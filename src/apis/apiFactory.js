/**
 * 作者 ：qiqi
 *
 * 日期 ：2018.9.17
 *
 * 描述 ：api接口工厂类
 */
const apiFactory = (module) => {
  let apiObj = {}
  module.apis.forEach((item) => {
    apiObj[item.name] = (params) => {
      console.log(params)
      return new Promise(function (resolve, reject) {
        // 做一些异步操作
        setTimeout(function () {
          console.log('执行完成')
          resolve('随便什么数据')
        }, 2000)
      })
    }
  })
  return apiObj
}
export default apiFactory
