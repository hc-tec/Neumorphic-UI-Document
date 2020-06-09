<template>
  <div>
    <h1>Select 选择器</h1>
    <h3>多而取其一，但又略显优雅。</h3>
    <h2>基本用法</h2>
    <source-code class="source-select" :source_code="source_code">
      <neu-select 
        label="出行方式："
        placeholder="请选择您的出行方式"
        v-model="method">
        <neu-option value="自行车">自行车</neu-option>
        <neu-option value="公交车">公交车</neu-option>
        <neu-option value="小汽车">小汽车</neu-option>
      </neu-select>
      您选择出行的交通工具为：{{ method }}
    </source-code>
    <!-- <h2>禁用状态</h2> -->
    <!-- <source-code class="source-select" :source_code="source_code2">
      <neu-select 
        label="出行方式："
        placeholder="请选择您的出行方式"
        v-model="method2">
        <neu-option value="自行车">自行车</neu-option>
        <neu-option value="公交车">公交车</neu-option>
        <neu-option value="小汽车" disabled>小汽车</neu-option>
      </neu-select>
      您选择出行的交通工具为：{{ method2 }}
    </source-code> -->
    <h2>Select Attributes</h2>
    <arrt-table :tableRowData="tableRowData"></arrt-table>
    <h2>Option Attributes</h2>
    <arrt-table :tableRowData="tableRowData2"></arrt-table>

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
export default class Select extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'v-model',
      '说明': '绑定值',
      '类型': 'string / number / boolean',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'placeholder',
      '说明': '未选择时的占位字符',
      '类型': 'string',
      '可选值': '--',
      '默认值': '请选择'
    }
  ]

  private tableRowData2: Record<string, string>[] = [
    {
      '参数': 'value',
      '说明': '被选择时此值会赋给绑定值',
      '类型': 'string | number | boolean',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private method: string = '';

  private method2: string = '自行车';

  private source_code: string = 
`
<div>
  <neu-select 
    label="出行方式："
    placeholder="请选择您的出行方式"
    v-model="method">
    <neu-option value="自行车">自行车</neu-option>
    <neu-option value="公交车">公交车</neu-option>
    <neu-option value="小汽车">小汽车</neu-option>
  </neu-select>
  您选择出行的交通工具为：{{ method }}
</div>
`  

}
</script>
<style>
.source-select > div {
  height: 150px;
}
</style>