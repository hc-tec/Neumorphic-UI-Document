<template>
  <div>
    <h1>Divider 分割线</h1>
    <h3>切割~</h3>
    <h2>基本用法</h2>
    <source-code :source_code="source_code">
      <neu-divider></neu-divider>
      <neu-divider type="linear"></neu-divider>
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
export default class Divider extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'type',
      '说明': '分割线类型',
      '类型': 'string',
      '可选值': 'neumorphic / linear',
      '默认值': 'neumorphic'
    }
  ]
  
  private source_code: string = 
`
<div>
  <neu-divider></neu-divider>
  <neu-divider type="linear"></neu-divider>
</div>
`

}
</script>
<style scoped>
</style>