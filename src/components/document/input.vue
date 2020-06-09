<template>
  <div>
    <h1>Input 输入框</h1>
    <h3>激活输入框，输入你的人生。</h3>
    <h2>基础用法</h2>
    <source-code :source_code="source_code">
      <neu-input
        label="姓名："
        v-model="name"
        placeholder="请输入您的姓名">
      </neu-input>
      您输入的姓名为：{{ name }}
    </source-code>
    <h2>禁用状态</h2>
    <source-code :source_code="source_code2">
      <neu-input
        label="年龄："
        v-model="age"
        placeholder="请输入您的年龄"
        disabled>
      </neu-input>
      您输入的年龄为：{{ age }}
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Input Events</h2>
    <event-table :eventTableRowData="eventTableRowData"></event-table>
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
export default class Input extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'label',
      '说明': '输入框关联的label文字',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'v-model',
      '说明': '绑定值',
      '类型': 'string / number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'placeholder',
      '说明': '输入框占位文本	',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'disabled',
      '说明': '是否禁用	',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    },
    {
      '参数': 'readonly',
      '说明': '原生属性，是否只读	',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    }
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'input',
      '说明': '输入时触发的事件',
      '回调参数': '输入框的值'
    }
  ]

  private name: string = '';

  private age: string = '18';

  private source_code: string = 
`
<template>
  <neu-input
    label="姓名："
    v-model="name"
    placeholder="请输入您的姓名">
  </neu-input>
  您输入的姓名为：{{ name }}
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Input extends Vue {
  private name: string = '';
}
<\/script>
`
  private source_code2: string = 
`
<template>
  <neu-input
    label="年龄："
    v-model="age"
    placeholder="请输入您的年龄"
    disabled>
  </neu-input>
  您输入的年龄为：{{ age }}
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Input extends Vue {
  private age: string = '18';
}
<\/script>
`

}
</script>
<style scoped>
</style>