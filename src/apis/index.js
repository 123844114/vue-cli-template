/**
 * 作者：qiqi
 * 时间：2018.9.16
 * 描述： api
 */
import axios from 'axios'
export default(model) => {
  return axios(
    {
      method: 'post',
      url: '/api',
      data: {
        city_id: 1,
        weather_date: '2018-07-15',
        key: '9b731a7f572dd607b83d0decb5f0348c'
      }
    }
  )
}
