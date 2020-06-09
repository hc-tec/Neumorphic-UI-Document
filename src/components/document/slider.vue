<template>
  <div>
    <h1>Slider 滑块</h1>
    <h3>滑呀滑~</h3>
    <h2>基础用法</h2>
    <p>通过点击或拖动可以使滑块值发生变化。并自带一个提示框。</p>
    <source-code :source_code="source_code">
      <neu-slider v-model="process"></neu-slider>
      目前滑块百分比为：{{ process }}%
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Slider Events</h2>
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
export default class Slider extends Vue {
  
  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'v-model',
      '说明': '绑定值',
      '类型': 'numbder',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'change',
      '说明': '值改变时触发',
      '回调参数': '改变后的值'
    }
  ]

  private process: number = 20;

  private source_code: string = 
`
<template>
  <div>
    <neu-slider v-model="process"></neu-slider>
    目前滑块百分比为：{{ process }}%
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Slider extends Vue {
  private process: number = 20;
}
<\/script>
`

}
</script>
<style scoped>
</style>