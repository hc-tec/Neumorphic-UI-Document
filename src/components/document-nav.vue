<template>
  <neu-nav 
    class="document-nav" 
    :router="true"
    >
    <template slot="title">
      <h2>目录</h2>
    </template>
    <neu-navitem 
      color="#000"
      v-for="catalog in catalogs" 
      :key="catalog.title"
      :link="catalog.link">
      {{ catalog.title }}
    </neu-navitem>
  </neu-nav>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DocumentNav extends Vue {

  catalogs: Record<string, string>[] = [
    {
      'title': 'Install 安装',
      'link': '/document/install',
    },
    {
      'title': 'QuickStart 快速入门',
      'link': '/document/quick-start',
    },
    {
      'title': 'Icon 图标',
      'link': '/document/icon',
    },
    {
      'title': 'Button 按钮',
      'link': '/document/',
    },
    {
      'title': 'Anchor 锚点',
      'link': '/document/anchor',
    },
    {
      'title': 'Radio 单选框',
      'link': '/document/radio',
    },
    {
      'title': 'Checkbox 多选框',
      'link': '/document/checkbox',
    },
    {
      'title': 'Input 输入框',
      'link': '/document/input',
    },
    {
      'title': 'Select 选择器',
      'link': '/document/select',
    },
    {
      'title': 'Switch 开关',
      'link': '/document/switch',
    },
    {
      'title': 'Slider 滑块',
      'link': '/document/slider',
    },
    {
      'title': 'Table 表格',
      'link': '/document/table',
    },
    {
      'title': 'Tag 标签',
      'link': '/document/tag',
    },
    {
      'title': 'Pagination 分页',
      'link': '/document/pagination',
    },
    {
      'title': 'Avatar 头像',
      'link': '/document/avatar',
    },
    {
      'title': 'Message 消息提示',
      'link': '/document/message',
    },
    {
      'title': 'Nav 导航栏',
      'link': '/document/navMenu',
    },
    {
      'title': 'Tabs 标签页',
      'link': '/document/tabs',
    },
    {
      'title': 'Tooltip 文字提示',
      'link': '/document/tooltip',
    },
    {
      'title': 'Collapse 折叠面板',
      'link': '/document/collapse',
    },
    {
      'title': 'Divider 分割线',
      'link': '/document/divider',
    },
    {
      'title': 'BackToHead 回到顶部',
      'link': '/document/backtotop',
    },
  ]
}
</script>
<style scoped>
.document-nav {
  position: fixed;
  max-height: 560px;
  overflow: auto;
  padding: 10px;
  width: 260px !important;
}
</style>