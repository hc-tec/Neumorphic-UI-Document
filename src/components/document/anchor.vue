<template>
  <div>
    <h1>Anchor 锚点</h1>
    <h3>锚点链接实际上是继承了按钮(Button)类的，两者样式基本一致。链接透明度默认为0.5。</h3>
    <h2>基础用法</h2>
    <source-code :source_code="source_code">
      <neu-anchor>默认链接</neu-anchor>
      <neu-anchor color="primary">主要链接</neu-anchor>
      <neu-anchor color="success">成功链接</neu-anchor>
      <neu-anchor color="danger">危险链接</neu-anchor>
      <neu-anchor color="warning">警告链接</neu-anchor>
      <neu-anchor color="info">信息链接</neu-anchor>
    </source-code>
    <h2>链接大小</h2>
    <p>链接大小一共有五种：'large' | 'normal' | 'small' | 'mini' | 'supermini'</p>
    <source-code :source_code="source_code2">
      <neu-anchor 
        color="primary" 
        v-for="size in sizeType" 
        :key="size"
        :size="size">
        主要链接
      </neu-anchor>
    </source-code>
    <h2>其他用法</h2>
    <p>circle 用于将链接形状修改为圆形，适用于图标型链接；router 表示链接类型，普通链接还是单页面应用类型链接；icon 为font-awesome图标</p>
    <source-code :source_code="source_code3">
      <neu-anchor icon="fa fa-github" circle></neu-anchor>
      <neu-anchor link="/" icon="fa fa-television"> 回到主页</neu-anchor>
      <neu-anchor :router="false" link="https://github.com/hc-tec/">
        <i class="fa fa-github"> 我的Github主页</i>
      </neu-anchor>
    </source-code>
    <h2>Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
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
    'arrt-table': ArrtTable,
  }
})
export default class Anchor extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'color',
      '说明': '颜色类型',
      '类型': 'string',
      '可选值': 'primary / success / danger / warning / info',
      '默认值': 'primary'
    },
    {
      '参数': 'size',
      '说明': '大小',
      '类型': 'string',
      '可选值': 'large / normal / small / mini / supermini',
      '默认值': 'normal'
    },
    {
      '参数': 'icon',
      '说明': 'font-awesome图标类名',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'router',
      '说明': '是否启用单页面应用链接',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'true'
    },
    {
      '参数': 'link',
      '说明': '跳转到的链接地址',
      '类型': 'string',
      '可选值': '--',
      '默认值': '#'
    },
    {
      '参数': 'circle',
      '说明': '是否启用圆边框',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    }
  ]


  private source_code: string = 
`
<div>
  <neu-anchor>默认链接</neu-anchor>
  <neu-anchor color="primary">主要链接</neu-anchor>
  <neu-anchor color="success">成功链接</neu-anchor>
  <neu-anchor color="danger">危险链接</neu-anchor>
  <neu-anchor color="warning">警告链接</neu-anchor>
  <neu-anchor color="info">信息链接</neu-anchor>
</div>
`

  private source_code2: string = 
`
<template>
  <div>
    <neu-anchor 
      color="primary" 
      v-for="size in sizeType" 
      :key="size"
      :size="size">
      主要链接
    </neu-anchor>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Anchor extends Vue {
  sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];
}
<\/script>
`

  private source_code3 = 
`
<div>
  <neu-anchor icon="fa fa-github" circle></neu-anchor>
  <neu-anchor link="/" icon="fa fa-television"> 回到主页</neu-anchor>
  <neu-anchor :router="false" link="https://github.com/hc-tec/">
    <i class="fa fa-github"> 我的Github主页</i>
  </neu-anchor>
</div>
`

  private colorType: string[] = ['primary', 'success', 'danger', 'warning', 'info'];

  private sizeType: string[] = ['large', 'normal', 'small', 'mini', 'supermini'];

}
</script>
<style scoped>
.neumorphic-anchor {
  display: inline-flex;
}
</style>