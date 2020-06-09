<template>
  <div>
    <h1>Button 按钮</h1>
    <h3>哒！嗯？发生了什么？</h3>
    <h2>基本用法</h2>
    <p>按钮颜色，大小配置</p>
    <source-code :source_code="source_code">
      <neu-button>按钮</neu-button>
      <neu-button
        v-for="color in colorType"
        :key="color"
        :color="color">
        按钮
      </neu-button><br />
      <neu-button
        v-for="size in sizeType"
        :key="size"
        :size="size">
        按钮
      </neu-button><br />
      <neu-button
        v-for="icon in iconType"
        :key="icon"
        :icon="icon"
        circle>
      </neu-button>
    </source-code>
    <h2>禁用状态</h2>
    <source-code :source_code="source_code2">
      <neu-button disabled>禁用按钮</neu-button>
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData"></arrt-table>
    <h2>Events</h2>
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
export default class Button extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'color',
      '说明': '颜色类型',
      '类型': 'string',
      '可选值': 'primary / success / danger / warning / info',
      '默认值': 'info'
    },
    {
      '参数': 'size',
      '说明': '大小类型',
      '类型': 'string',
      '可选值': 'large / normal / small / mini / supermini',
      '默认值': 'normal'
    },
    {
      '参数': 'circle',
      '说明': '是否为圆形按钮',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    },
    {
      '参数': 'icon',
      '说明': 'font-awesome图标',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'disabled',
      '说明': '是否禁用',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    },
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'click',
      '说明': '点击按钮的回调',
      '回调参数': '此点击事件'
    }
  ]

  private colorType: string[] = ['primary', 'success', 'danger', 'warning', 'info'];

  private sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];

  private iconType: string[] = ['fa fa-address-book', 'fa fa-anchor', 'fa fa-archive']

  private source_code: string = 
`
<template>
  <div>
    <neu-button>按钮</neu-button>
    <neu-button
      v-for="color in colorType"
      :key="color"
      :color="color">
      按钮
    </neu-button><br />
    <neu-button
      v-for="size in sizeType"
      :key="size"
      :size="size">
      按钮
    </neu-button><br />
    <neu-button
      v-for="icon in iconType"
      :key="icon"
      :icon="icon"
      circle>
    </neu-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Button extends Vue {

  private colorType: string[] = ['primary', 'success', 'danger', 'warning', 'info'];

  private sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];

  private iconType: string[] = ['fa fa-address-book', 'fa fa-anchor', 'fa fa-archive']
}
<\/script>
`
  private source_code2: string = 
`
<neu-button disabled>禁用按钮</neu-button>
`  

}
</script>
<style scoped>
</style>