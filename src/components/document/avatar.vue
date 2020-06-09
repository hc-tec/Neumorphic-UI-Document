<template>
  <div>
    <h1>Avatar 头像</h1>
    <h3>Avatar?阿~~~~~~凡达？</h3>
    <h2>基本用法</h2>
    <source-code :source_code="source_code">
      <neu-avatar src="/avatar.jpg"></neu-avatar>
      <neu-avatar src="/avatar.jpg" circle></neu-avatar>
      <neu-avatar src="/avatar.jpg" shadow="light"></neu-avatar>
      <neu-avatar 
        src="/avatar.jpg"
        :size="150"
        shadow="light">
      </neu-avatar>
    </source-code>
    <h2>图片适应容器框</h2>
    <p>fit 属性用来让图片适应容器框，同原生object-fit</p>
    <source-code :source_code="source_code2" id="avatar-source">
      <div 
        v-for="fit in fits"
        :key="fit"> 
        <span>{{ fit }}</span>
        <neu-avatar
          src="/avatar.jpg"
          :fit="fit">
        </neu-avatar>
      </div>
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
    'arrt-table': ArrtTable
  }
})
export default class Avatar extends Vue {
  
  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'src',
      '说明': '头像资源地址',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'circle',
      '说明': '是否为圆形头像框',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    },
    {
      '参数': 'shadow',
      '说明': '头像框阴影类型',
      '类型': 'string',
      '可选值': 'normal / light',
      '默认值': 'normal'
    },
    {
      '参数': 'size',
      '说明': '头像框大小',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'fit',
      '说明': '定义头像如何适应容器',
      '类型': 'string',
      '可选值': 'fill / contain / cover / none / scale-down',
      '默认值': 'fill'
    }
  ]

  private fits: string[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];

  private source_code2: string = 
`
<template>
  <div>
    <div 
      v-for="fit in fits"
      :key="fit"> 
      <span>{{ fit }}</span>
      <neu-avatar
        src="/avatar.jpg"
        :fit="fit">
      </neu-avatar>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Avatar extends Vue {
  private fits: string[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];
}
<\/script>
`

  private source_code: string = 
`
<div>
  <neu-avatar src="/avatar.jpg"></neu-avatar>
  <neu-avatar src="/avatar.jpg" circle></neu-avatar>
  <neu-avatar src="/avatar.jpg" shadow="light"></neu-avatar>
  <neu-avatar 
    src="/avatar.jpg"
    :size="150"
    shadow="light">
  </neu-avatar>
</div>
`  

}
</script>
<style lang="scss">
#avatar-source > div > div {
  display: flex;
  & > * {
    text-align: center;
    .neumorphic-avatar {
      margin-top: 10px;
    }
  }
}
</style>