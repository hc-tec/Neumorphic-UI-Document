<template>
  <div>
    <h1>Tooltip 文字提示</h1>
    <h3>浮动着，指引。。。</h3>
    <h2>基本用法</h2>
    <p>很简单，就一个 content 属性</p>
    <source-code :source_code="source_code">
      <neu-tooltip content="这是一个文字提示，它会随着你鼠标的移动而移动">
        <neu-anchor>Hover Me!</neu-anchor>
      </neu-tooltip>
    </source-code>
    <h2>Attributes</h2>
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
export default class Tooltip extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'content',
      '说明': '提示的内容',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private source_code: string = 
`
<div>
  <neu-tooltip content="这是一个文字提示，它会随着你鼠标的移动而移动">
    <neu-anchor>Hover Me!</neu-anchor>
  </neu-tooltip>
</div>
`  

}
</script>
<style scoped>
</style>