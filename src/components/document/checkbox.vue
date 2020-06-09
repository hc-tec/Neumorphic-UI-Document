<template>
  <div>
    <h1>Checkbox 多选框</h1>
    <h3>多不一定好，合适才行。</h3>
    <h2>基本用法</h2>
    <p>不能单独使用，需要结合 neu-checkboxgroup 一同使用</p>
    <p>与单选框类似，name 是绑定值取到的值而非标签的内容</p>
    <source-code :source_code="source_code">
      <!-- 一个小 Bug chechboxgroup 改成 checkboxgroup -->
      <neu-chechboxgroup v-model="checkOutList">
        <neu-checkbox name="苹果">
          苹果
        </neu-checkbox>
        <neu-checkbox name="梨">
          梨
        </neu-checkbox>
        <neu-checkbox name="樱桃">
          樱桃
        </neu-checkbox>
      </neu-chechboxgroup>
      目前选择到的水果有{{ checkOutList }}
    </source-code>
    <h2>禁用状态</h2>
    <source-code  :source_code="source_code2">
      <!-- 一个小 Bug chechboxgroup 改成 checkboxgroup -->
      <neu-chechboxgroup v-model="checkOutList2">
        <neu-checkbox name="苹果" disabled>
          苹果
        </neu-checkbox>
        <neu-checkbox name="梨" disabled>
          梨
        </neu-checkbox>
        <neu-checkbox name="樱桃">
          樱桃
        </neu-checkbox>
      </neu-chechboxgroup>
      目前选择到的水果有{{ checkOutList2 }}
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>ChechboxGroup Events</h2>
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
export default class Checkbox extends Vue {


  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'name',
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
      '回调参数': '更新后的值，列表类型'
    }
  ]

  private checkOutList: string[] = ['苹果',];

  private checkOutList2: string[] = ['樱桃', '梨'];

  private source_code: string = 
`
<template>
  <div>
    <!-- 一个小 Bug chechboxgroup 改成 checkboxgroup -->
    <neu-chechboxgroup v-model="checkOutList">
      <neu-checkbox name="苹果">
        苹果
      </neu-checkbox>
      <neu-checkbox name="梨">
        梨
      </neu-checkbox>
      <neu-checkbox name="樱桃">
        樱桃
      </neu-checkbox>
    </neu-chechboxgroup>
    目前选择到的水果有{{ checkOutList }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Checkbox extends Vue {
  private checkOutList: string[] = ['苹果',];
}
<\/script>
`
  private source_code2: string = 
`
<template>
  <div>
    <!-- 一个小 Bug chechboxgroup 改成 checkboxgroup -->
    <neu-chechboxgroup v-model="checkOutList2">
      <neu-checkbox name="苹果" disabled>
        苹果
      </neu-checkbox>
      <neu-checkbox name="梨" disabled>
        梨
      </neu-checkbox>
      <neu-checkbox name="樱桃">
        樱桃
      </neu-checkbox>
    </neu-chechboxgroup>
    目前选择到的水果有{{ checkOutList2 }}
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Checkbox extends Vue {
  private checkOutList2: string[] = ['梨', '樱桃'];
}
<\/script>
`

}
</script>
<style scoped>
</style>