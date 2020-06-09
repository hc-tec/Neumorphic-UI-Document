<template>
  <div>
    <h1>Pagination 分页</h1>
    <h3>太多?太杂?做个分页吧！</h3>
    <h2>基础用法</h2>
    <source-code :source_code="source_code">
      <neu-pagination
        v-model="currentPage"
        :total="total">
      </neu-pagination>
      <p>现在在第{{ currentPage }}页</p>
      <p>取消按下效果，自定义每页数量，页面变化触发的事件</p>
      <neu-pagination
        v-model="currentPage2"
        :total="total"
        :pageSize="15"
        :shadow="false"
        @page-change="pageChange($event)">
      </neu-pagination>
    </source-code>
    <h2>设置按钮大小，同按钮size属性</h2>
    <source-code :source_code="source_code2">
      <neu-pagination
        v-model="currentPage3"
        v-for="size in sizeType"
        :key="size"
        :size="size"
        :total="30">
      </neu-pagination>
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
    <h2>Pagination Events</h2>
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
export default class Pagination extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'v-model',
      '说明': '绑定值，当前的页面索引',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'total',
      '说明': '总数，用于计算分页数量',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'pageSize',
      '说明': '每页条数',
      '类型': 'number',
      '可选值': '--',
      '默认值': '10'
    },
    {
      '参数': 'size',
      '说明': '按钮大小，同Button属性',
      '类型': 'string',
      '可选值': 'large / normal / small / mini / supermini',
      '默认值': 'normal'
    },
    {
      '参数': 'shadowl',
      '说明': '选中时的阴影效果',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'true'
    }
  ]

  private eventTableRowData: Record<string, string>[] = [
    {
      '事件名称': 'page-change',
      '说明': '页面索引变化触发的事件',
      '回调参数': '当前页面索引值'
    }
  ]

  private sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];

  private currentPage3: number = 1;

  private currentPage: number = 3;

  private currentPage2: number = 2;

  private total: number = 71;

  private pageChange(page: number) {
    console.log(page);
  }

  private source_code: string = 
`
<template>
  <div>
    <!--每页数量默认为10-->
    <neu-pagination
      v-model="currentPage"
      :total="total">
    </neu-pagination>
    <p>现在在第{{ currentPage }}页</p>
    <p>取消按下效果，自定义每页数量，页面变化触发的事件</p>
    <neu-pagination
      v-model="currentPage2"
      :total="total"
      :pageSize="15"
      :shadow="false"
      @page-change="pageChange($event)">
    </neu-pagination>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Pagination extends Vue {
  private currentPage: number = 3;
  private currentPage2: number = 2;
  private total: number = 71;
  private pageChange(page: number) {
    console.log(page);
  }
}
<\/script>
`
  private source_code2: string = 
`
<template>
  <div>
    <neu-pagination
      v-model="currentPage3"
      v-for="size in sizeType"
      :key="size"
      :size="size"
      :total="30">
    </neu-pagination>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Pagination extends Vue {
  private currentPage3: number = 1;
  private sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];
}
<\/script>
`

}
</script>
<style scoped>
</style>