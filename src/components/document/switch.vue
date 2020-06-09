<template>
  <div>
    <h1>Switch 开关</h1>
    <h3>单选框是我？我是单选框?谁知道呢？</h3>
    <h2>基础用法</h2>
    <source-code :source_code="source_code">
      <neu-switcher v-model="switcher"></neu-switcher>
      <neu-switcher v-model="switcher"></neu-switcher>
      目前状态为：{{ switcher }}
    </source-code>
    <h2>禁用状态</h2>
    <source-code :source_code="source_code2">
      <neu-switcher v-model="switcher2" disabled></neu-switcher>
      <neu-switcher v-model="switcher3"></neu-switcher>
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Switch Events</h2>
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
export default class Switcher extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'v-model',
      '说明': '绑定值',
      '类型': 'string / number / boolean',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'disabled',
      '说明': '是否禁用',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    }
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'change',
      '说明': 'switch 状态发生变化时的回调函数',
      '回调参数': '新状态的值'
    }
  ]


  private switcher: boolean = false;

  private switcher2: boolean = false;

  private switcher3: boolean = false;

  private source_code: string = 
`
<template>
  <div>
    <neu-switcher v-model="switcher"></neu-switcher>
    <neu-switcher v-model="switcher"></neu-switcher>
    目前状态为：{{ switcher }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Switcher extends Vue {
  private switcher: boolean = false;
}
<\/script>
`

  private source_code2: string = 
`
<template>
  <div>
    <neu-switcher v-model="switcher2" disabled></neu-switcher>
    <neu-switcher v-model="switcher3"></neu-switcher>
  </div>
</template>
<script lang='ts'>
@Component
export default class Switcher extends Vue {
  private switcher2: boolean = false;
  private switcher3: boolean = false;
}
<\/script>
`
}
</script>
<style scoped>
</style>