<template>
  <div>
    <h1>BackToTop 回到顶部</h1>
    <h3>biu~ 我又回到上面啦</h3>
    <h2>基本用法</h2>
    <source-code :source_code="source_code">
      <neu-backtotop :height="0">
        回到顶部
      </neu-backtotop>
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
export default class Backtotop extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'right',
      '说明': '控制其显示位置, 距离页面右边距',
      '类型': 'number',
      '可选值': '--',
      '默认值': '50'
    },
    {
      '参数': 'top',
      '说明': '控制其显示位置, 距离页面上边距',
      '类型': 'number',
      '可选值': '--',
      '默认值': '50'
    },
    {
      '参数': 'height',
      '说明': '滚动高度达到此参数值才出现',
      '类型': 'number',
      '可选值': '--',
      '默认值': '200'
    }
  ]

  private source_code: string = 
`
<div>
  <neu-backtotop :height="0">
    回到顶部
  </neu-backtotop>
</div>
`

}
</script>
<style scoped>
</style>