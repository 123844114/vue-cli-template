/**
 * 作者：qiqi
 * 时间：2018.9.16
 * 描述：first api
 */
import apiFactory from './apiFactory'
const module = {
  moduleName: 'first',
  apis: [
    {// 获取列表
      name: 'getList',
      method: 'get',
      url: '/api'},
    {
      // 新增
      name: 'add',
      method: 'post',
      url: '/api'
    }
  ]
}
export default apiFactory(module)
