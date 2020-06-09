<template>
  <div>
    <h1>Collapse 折叠面板</h1>
    <h3>想不到吧，我比 Tabs 还能藏，嘻嘻。</h3>
    <h2>基本用法</h2>
    <p>跟标签页(Tabs)属性差不多</p>
    <source-code :source_code="source_code">
      <neu-collapse>
        <neu-collapseitem title="兴趣">
          不喜欢唱、跳、Rap与篮球，，，不过超级热爱写前端，(现在多一门后端)。<br/>
          Python也是我的最爱yo。
        </neu-collapseitem>
        <neu-collapseitem title="个人简介">
          自高考后暑假接触第一本Python电子书时，我对编程的热爱便没有了尽头。<br/>
          之后无意间接触到了Web开发，于是跟着Web部大佬学习Web技术，努力成为一名优秀的Web攻城狮。目前已习得前端三件套，Vue框架与Django框架。
        </neu-collapseitem>
        <neu-collapseitem title="目标">
          成为一名开源者
        </neu-collapseitem>
      </neu-collapse>
    </source-code>
    <h2>CollapseItem Attributes</h2>
    <arrt-table :tableRowData="tableRowData"></arrt-table>
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
export default class Collapse extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'title',
      '说明': '折叠面板标题',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private source_code: string = 
`
<div>
  <neu-collapse>
    <neu-collapseitem title="兴趣">
      不喜欢唱、跳、Rap与篮球，，，不过超级热爱写前端，(现在多一门后端)。<br/>
      Python也是我的最爱yo。
    </neu-collapseitem>
    <neu-collapseitem title="个人简介">
      自高考后暑假接触第一本Python电子书时，我对编程的热爱便没有了尽头。<br/>
      之后无意间接触到了Web开发，于是跟着Web部大佬学习Web技术，努力成为一名优秀的Web攻城狮。目前已习得前端三件套，Vue框架与Django框架。
    </neu-collapseitem>
    <neu-collapseitem title="目标">
      成为一名开源者
    </neu-collapseitem>
  </neu-collapse>
</div>
`

}
</script>
<style scoped>
</style>