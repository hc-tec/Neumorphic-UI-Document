<template>
  <div>
    <h1>Message 消息提示</h1>
    <h3>"看，上面弹出了啥鬼东西？""斜入斜出真好玩"</h3>
    <h2>基本用法</h2>
    <p></p>
    <source-code :source_code="source_code">
      <neu-button
        @click="open">
        打开消息提示
      </neu-button>
    </source-code>
    <h2>信息类型配置</h2>
    <p>配置中的 type 有四种类型：success | warning | error | info</p>
    <source-code :source_code="source_code2">
      <neu-button @click="open1" color="success">成功</neu-button>
      <neu-button @click="open2" color="warning">警告</neu-button>
      <neu-button @click="open3" color="info">消息</neu-button>
      <neu-button @click="open4" color="danger">错误</neu-button>
    </source-code>
    <h2>Config</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';
import sourceCode from '../source.vue'
import ArrtTable from '../attribute-table.vue'
@Component({
  components: {
    'source-code': sourceCode,
    'arrt-table': ArrtTable
  }
})
export default class Message extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'message',
      '说明': '信息内容',
      '类型': 'string',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'type',
      '说明': '信息类型',
      '类型': 'string',
      '可选值': 'success / warning / error / info',
      '默认值': 'info'
    },
    {
      '参数': 'styleTimeout',
      '说明': '移出时的过渡时间',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    },
    {
      '参数': 'removeTimeout',
      '说明': 'destory元素的时间',
      '类型': 'number',
      '可选值': '--',
      '默认值': '--'
    }
  ]

  private open() {
    const messageConfig = {
      message: '这是一段消息提示',  // 信息内容
      type: 'info',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open1() {
    const messageConfig = {
      message: '恭喜你，这是一条成功消息',  // 信息内容
      type: 'success',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open2() {
    const messageConfig = {
      message: '警告哦，这是一条警告消息',  // 信息内容
      type: 'warning',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open3() {
    const messageConfig = {
      message: '这是一段消息提示',  // 信息内容
      type: 'info',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open4() {
    const messageConfig = {
      message: '错了哦，这是一条错误消息',  // 信息内容
      type: 'error',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private source_code: string = 
`
<template>
  <div>
    <neu-button
      @click="open">
      打开消息提示
    </neu-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';
@Component
export default class Message extends Vue {

  private open() {
    const messageConfig = {
      message: '这是一段消息提示',  // 信息内容
      type: 'info',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }
}
<\/script>
`

  private source_code2: string = 
`
<template>
  <div>
    <neu-button @click="open1" color="success">成功</neu-button>
    <neu-button @click="open2" color="warning">警告</neu-button>
    <neu-button @click="open3" color="info">消息</neu-button>
    <neu-button @click="open4" color="danger">错误</neu-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';
@Component
export default class Message extends Vue {
  private open1() {
    const messageConfig = {
      message: '恭喜你，这是一条成功消息',  // 信息内容
      type: 'success',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open2() {
    const messageConfig = {
      message: '警告哦，这是一条警告消息',  // 信息内容
      type: 'warning',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open3() {
    const messageConfig = {
      message: '这是一段消息提示',  // 信息内容
      type: 'info',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }

  private open4() {
    const messageConfig = {
      message: '错了哦，这是一条错误消息',  // 信息内容
      type: 'error',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig)
  }  
}
<\/script>
`
}
</script>
<style scoped>
</style>