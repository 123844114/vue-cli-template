/**
 * 作者 ：qiqi
 *
 * 日期 ：2018.9.17
 *
 * 描述 ：api接口工厂类
 */
import axios from 'axios'
import baseUrl from './config/baseUrl'
import headersConfig from './config/headers'
const apiFactory = (module) => {
  let apiObj = {}
  module.apis.forEach((item) => {
    apiObj[item.name] = (params) => {
      return axios({
        url: `${baseUrl.modules.apis[module.moduleName].baseUrl || baseUrl.modules.defaultBaseUrl}${baseUrl.modules.apis[module.moduleName].url}${item.url}`,
        method: item.method,
        data: params,
        headers: headersConfig
      })
    }
  })
  return apiObj
}
export default apiFactory
