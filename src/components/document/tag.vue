<template>
  <div>
    <h1>Tag 标签</h1>
    <h3>猜猜我是谁？哈，就是我，小标签。</h3>
    <h2>基础用法</h2>
    <source-code :source_code="source_code">
      <neu-tag>
        只是个标签而已啦!
      </neu-tag>
      <neu-tag
        prefixIcon="fa fa-bitcoin">
        我有前置的图标喔
      </neu-tag>
      <neu-tag
        prefixIcon="fa fa-bitcoin"
        :closable="true"
        @close="handleClose($event)">
        我是关闭的喔
      </neu-tag>
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Tag Events</h2>
    <event-table :eventTableRowData="eventTableRowData">

    </event-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import sourceCode from '../source.vue'
import ArrtTable from '../attribute-table.vue'
import EventTable from '../event-table.vue'
@Component({
  components: {
    'source-code': sourceCode,
    'arrt-table': ArrtTable,
    'event-table': EventTable
  }
})
export default class Tag extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'prefixIcon',
      '说明': '前置图标',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'closable',
      '说明': '是否可关闭',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'handleClose',
      '说明': '点击关闭按钮触发的事件',
      '回调参数': '此标签对象'
    }
  ]

  private handleClose(tag: any) { 
    console.log(tag)
  }

  private source_code: string = 
`
<template>
  <div>
    <neu-tag>
      只是个标签而已啦!
    </neu-tag>
    <neu-tag
      prefixIcon="fa fa-bitcoin">
      我有前置的图标喔
    </neu-tag>
    <neu-tag
      prefixIcon="fa fa-bitcoin"
      :closable="true"
      @close="handleClose($event)">
      我是关闭的喔
    </neu-tag>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
export default class Tag extends Vue {
  private handleClose(tag: any) {
    console.log(tag)
  }
}
<\/script>
`



}
</script>
<style scoped>
</style>