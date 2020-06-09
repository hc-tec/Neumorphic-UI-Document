<template>
  <div>
    <h1>Radio 单选框</h1>
    <h3>多而取其一，主要适用于选项较少情况。</h3>
    <h2>基本用法</h2>
    <p>要达到选择的目的，只需让几个单选框的 v-model 绑定同一个数据即可。</p>
    <p>label 数据会被绑定到原生 radio 的 name 值中。</p>
    <b>注意绑定的数据取的是 label 的值而非标签中内容的值。</b>
    <source-code :source_code="source_code">
      <neu-radio v-model="gender" label="男">
        我是男的
      </neu-radio>
      <neu-radio v-model="gender" label="女">
        我是女的
      </neu-radio>
      gender 取到的值为:{{ gender }}
    </source-code>
    <h2>禁用状态</h2>
    <p>可以是带着默认值的禁用状态。</p>
    <source-code :source_code="source_code2">
      <neu-radio v-model="gender" label="男" disabled>
        我是男的
      </neu-radio>
      <neu-radio v-model="gender" label="女" disabled>
        我是女的
      </neu-radio>
      gender 取到的值为:{{ gender }}
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Radio Events</h2>
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
export default class Radio extends Vue {


  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'label',
      '说明': '绑定的数据值',
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
      '说明': '绑定值变更出发的事件',
      '回调参数': '选中的 label 值'
    }
  ]

  private gender: string = '男';

  private source_code: string = 
`
<template>
  <div>
    <neu-radio v-model="gender" label="男">
      我是男的
    </neu-radio>
    <neu-radio v-model="gender" label="女">
      我是女的
    </neu-radio>
    gender 取到的值为:{{ gender }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Radio extends Vue {
  private gender: string = '男';
}
<\/script>
`
  
  private source_code2: string = 
`
<template>
  <div>
    <neu-radio v-model="gender" label="男" disabled>
      我是男的
    </neu-radio>
    <neu-radio v-model="gender" label="女" disabled>
      我是女的
    </neu-radio>
    gender 取到的值为:{{ gender }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Radio extends Vue {
  private gender: string = '男';
}
<\/script>
`

}
</script>
<style scoped>
</style>