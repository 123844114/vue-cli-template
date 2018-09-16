/**
 * 作者：qiqi
 * 时间：2018.9.16
 * 功能：公用部分--左侧菜单
 */
<template>
  <v-sider collapsible v-model="collapsed">
  <div class="logo">logo</div>
  <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData4">
    <template slot-scope="{data}">
      <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
      <span :class="{'nav-text':data.icon}">{{data.name}}</span>
    </template>
    <template slot-scope="{data}" slot="sub">
      <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
      <span class="nav-text">{{data.name}}</span>
    </template>
  </v-menu>
</v-sider>
</template>
<script>
export default {
  name: 'side-menu',
  data () {
    return {
      collapsed: false,
      menuData4: [
        {
          name: 'nav 1',
          icon: 'user',
          selected: true
        },
        {
          name: 'nav 2',
          icon: 'video-camera'
        },
        {
          name: 'nav 3',
          icon: 'upload'
        }
      ]
    }
  },
  methods: {
  },
  watch: {
    collapsed (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  height: 32px;
  background: #333;
  border-radius: 6px;
  margin: 16px;
  img{
    width: 100%;
    height: 32px;
  }
}
.ant-layout-sider-collapsed .anticon {
  font-size: 16px;
  margin-left: 8px;
}
.ant-layout-sider-collapsed .nav-text {
  display: none;
}
.ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
  display: none;
}
</style>
