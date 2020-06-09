<template>
  <div>
    <h1>Table 表格</h1>
    <h3>目前表格功能较为单一，只能实现信息展示效果，无信息处理功能。</h3>
    <h2>基础功能</h2>
    <p>需要先向 neu-table 传递表头参数，再把数据传给 neu-table</p>
    <source-code :source_code="source_code">
      <neu-table 
        :tableHead="tableHead" 
        style="width: 100%">
        <neu-tablerow 
          v-for="data in tableRowData" 
          :key="data['学号']"
          :tableRowData="data">
        </neu-tablerow>
      </neu-table>
    </source-code>
    <h2>Table Attributes</h2>
    <arrt-table :tableRowData="tableRowData2">
    </arrt-table>
    <h2>TableRow Attributes</h2>
    <arrt-table :tableRowData="tableRowData3">
    </arrt-table>
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
export default class Table extends Vue {

  private tableHead: string[] = ['班级', '学号', '姓名'];

  private tableRowData: Record<string, string>[] = [
    {
      '班级': '01',
      '学号': '00000001',
      '姓名': '张三'
    },
    {
      '班级': '02',
      '学号': '00000002',
      '姓名': '李四'
    },
    {
      '班级': '03',
      '学号': '00000003',
      '姓名': '王五'
    },
  ]

  private tableRowData2: Record<string, string>[] = [
    {
      '参数': 'tableHead',
      '说明': '表头数据',
      '类型': 'string[]',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private tableRowData3: Record<string, string>[] = [
    {
      '参数': 'tableRowData',
      '说明': '表格数据',
      '类型': 'object[]',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  

  private source_code: string = 
`
<template>
  <div>
    <neu-table 
      :tableHead="tableHead" 
      style="width: 100%">
      <neu-tablerow 
        v-for="data in tableRowData" 
        :key="data['学号']"
        :tableRowData="data">
      </neu-tablerow>
    </neu-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
export default class Table extends Vue {
  private tableHead: string[] = ['班级', '学号', '姓名'];
  private tableRowData: Record<string, string>[] = [
    {
      '班级': '01',
      '学号': '00000001',
      '姓名': '张三'
    },
    {
      '班级': '02',
      '学号': '00000002',
      '姓名': '李四'
    },
    {
      '班级': '03',
      '学号': '00000003',
      '姓名': '王五'
    },
  ]
}
<\/script>
`

}
</script>
<style scoped>
</style>