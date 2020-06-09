<template>
  <div>
    <h1>Tabs 标签页</h1>
    <h3>看不见我~</h3>
    <h2>基本用法</h2>
    <source-code id="source-tab" :source_code="source_code">
      <neu-tabs :height="300">
        <neu-tabpane title="兴趣" textShadow>
          不喜欢唱、跳、Rap与篮球，，，不过超级热爱写前端，(现在多一门后端)。<br/>
          Python也是我的最爱yo。
        </neu-tabpane>
        <neu-tabpane title="个人简介" textShadow>
          自高考后暑假接触第一本Python电子书时，我对编程的热爱便没有了尽头。<br/>
          之后无意间接触到了Web开发，于是跟着Web部大佬学习Web技术，努力成为一名优秀的Web攻城狮。目前已习得前端三件套，Vue框架与Django框架。
        </neu-tabpane>
        <neu-tabpane title="目标" textShadow>
          成为一名开源者
        </neu-tabpane>
      </neu-tabs>
    </source-code>
    <h2>Tabs Attributes</h2>
    <arrt-table :tableRowData="tableRowData"></arrt-table>
    <h2>TabPane Attributes</h2>
    <arrt-table :tableRowData="tableRowData2"></arrt-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import sourceCode from '../source.vue'
import ArrtTable from '../attribute-table.vue'
@Component({
  components: {
    'source-code': sourceCode,
    'arrt-table': ArrtTable
  }
})
export default class Tabs extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'width',
      '说明': '标签页的宽度',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'height',
      '说明': '标签页的高度',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private tableRowData2: Record<string, string>[] = [
    {
      '参数': 'title',
      '说明': '标签页标题',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'textShadow',
      '说明': '文字阴影',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    }
  ]

  private source_code: string  = 
`
<template>
  <div>
    <neu-tabs :height="300">
      <neu-tabpane title="兴趣" textShadow>
        不喜欢唱、跳、Rap与篮球，，，不过超级热爱写前端，(现在多一门后端)。<br/>Python也是我的最爱yo。
      </neu-tabpane>
      <neu-tabpane title="个人简介" textShadow>
        自高考后暑假接触第一本Python电子书时，我对编程的热爱便没有了尽头。<br/>之后无意间接触到了Web开发，于是跟着Web部大佬学习Web技术，努力成为一名优秀的Web攻城狮。目前已习得前端三件套，Vue框架与Django框架。
      </neu-tabpane>
      <neu-tabpane title="目标" textShadow>
        成为一名开源者
      </neu-tabpane>
    </neu-tabs>
  </div>
<template>
`

}
</script>
<style lang="scss">
#source-tab {
  .neumorphic-tab-pane {
    height: 70%;
  }
}
</style>