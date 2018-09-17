import Vue from 'vue'
import Router from 'vue-router'
/** 以下是各功能页的模块 */
import first from './first/first'
Vue.use(Router)
// 首页框架组件
// const Layout = resolve => require(['@/pages/layout'], resolve)
const Layout = r => require.ensure([], () => r(require('@/pages/layout')), 'Layout')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        ...first
      ]
    }
  ]
})
