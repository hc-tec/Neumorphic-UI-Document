<template>
  <neu-table :tableHead="tableHead" class="api-table">
    <neu-tablerow 
      v-for="data in tableRowData"
      :key="data['参数']"
      :tableRowData="data">
    </neu-tablerow>
  </neu-table>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class AttributeTable extends Vue {

  private tableHead: string[] = ['参数', '说明', '类型', '可选值', '默认值'];

  @Prop()
  private tableRowData?: Record<string, string>[];

}
</script>
<style scoped>
</style>