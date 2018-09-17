/**
 * 作者：qiqi
 * 时间：2018.9.15
 * 功能：第一个功能页
 */
<template>
  <div class="wrap">
      <v-form :model="setting" direction="horizontal">
        <v-form-item label="自动切换" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-switch v-model="setting.autoplay">
                <span slot="checkedChildren">开</span>
                <span slot="unCheckedChildren">关</span>
            </v-switch>
        </v-form-item>
        <v-form-item label="指示器位置" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-radio-group type="button" v-model="setting.dots"
                :data="[{value: 'inside', text: '内部'},{value: 'outside', text: '外部'},{value: 'none', text: '不显示'}]">
            </v-radio-group>
        </v-form-item>
        <v-form-item label="切换箭头" :label-col="labelCol" :wrapper-col="wrapperCol">
             <v-radio-group type="button" v-model="setting.arrow"
                :data="[{value: 'hover', text: '悬停时显示'},{value: 'always', text: '一直显示'},{value: 'never', text: '不显示'}]">
            </v-radio-group>
        </v-form-item>
        <v-form-item label="指示器触发方式" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-radio-group type="button" v-model="setting.trigger"
                :data="[{value: 'click', text: '点击'},{value: 'hover', text: '悬停'}]">
            </v-radio-group>
        </v-form-item>
    </v-form>
    <v-carousel
        v-model="value2"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <v-carousel-item>
            <div class="demo-carousel">1</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">2</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">3</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">4</div>
        </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import firstAPIs from '@/apis/firstAPIs'
export default {
  name: 'first-main',
  data () {
    return {
      value2: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        trigger: 'click',
        arrow: 'hover'
      },
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      }
    }
  },
  mounted () {
    firstAPIs.add({name: 'jim'}).then((data) => {
      console.log(data)
    })
  }
}
</script>
<style lang="less" scoped>
.demo-carousel{
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #364d79
}
</style>
