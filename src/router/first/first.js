/**
 * 作者：qiqi
 * 时间：2018.9.16
 * 描述：first路由配置
 */
// const FirstMain = resolve => require(['@/pages/first/main'], resolve)
const FirstMain = r => require.ensure([], () => r(require('@/pages/first/main')), 'FirstMain')
export default[{
  path: '/first',
  name: 'firstMain',
  component: FirstMain
}]
