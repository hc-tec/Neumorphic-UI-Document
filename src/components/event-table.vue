<template>
  <neu-table :tableHead="eventTableHead" class="api-table">
    <neu-tablerow 
      v-for="data in eventTableRowData"
      :key="data['事件名称']"
      :tableRowData="data">
    </neu-tablerow>
  </neu-table>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class EventTable extends Vue {

  private eventTableHead: string[] = ['事件名称', '说明', '回调参数'];

  @Prop()
  private eventTableRowData?: Record<string, string>[];

}
</script>
<style scoped>
</style>