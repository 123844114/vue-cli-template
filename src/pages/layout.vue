/**
 * 作者：qiqi
 * 时间：2018.9.16
 * 功能：公用部分--首页框架
 */
<template>
    <v-layout class="main">
        <side-menu class="left-main"></side-menu>
        <v-layout class="right-main">
            <header-bar></header-bar>
            <v-content class="content-main">
                <router-view></router-view>
            </v-content>
            <footer-bar></footer-bar>
        </v-layout>
    </v-layout>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import SideMenu from '@/components/SideMenu'
import HeaderBar from '@/components/HeaderBar'
export default {
  components: {HeaderBar, SideMenu, FooterBar}
}
</script>
<style scoped lang='less'>
.main{
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    .left-main{
        width: 200px;
        float: left;
        position: absolute;
        height: 100%;
        left:0;
    }
    .right-main{
        padding-left: 200px;
    }
    .content-main{
        padding: '0 50px';
    }
}
</style>
