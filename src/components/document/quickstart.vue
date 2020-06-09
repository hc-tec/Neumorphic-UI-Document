<template>
  <div>
    <h1>Quick Start 快速开始</h1>
    <h3>首先引入 Neumorphic-UI</h3>
    <p>目前仅支持全局引入</p>
    main.js
    <pre v-highlightjs>
      <code>
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import neumorphic from 'neumorphic-ui-vue';
Vue.use(neumorphic);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
      </code>
    </pre>
    <p>引入之后，我们就可以在项目中使用了。</p>
    <p>看个小栗子</p>
    <source-code :source_code="source_code">
      <!-- 样式代码写这 -->
      <neu-tooltip content="点击就可以发送消息提示了喔">
        <neu-neumorphicbtn @click="sendMessage">来个消息提示</neu-neumorphicbtn>
      </neu-tooltip>
    </source-code>
    <p>感觉如何，使用起来是不是非常简单？</p>
    <p>正式开启你的 <b>Neumorphic</b> 之旅吧！</p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import sourceCode from '../source.vue'
import MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';
@Component({
  components: {
    'source-code': sourceCode
  }
})
export default class Quickstart extends Vue {

  private source_code: string = 
    `
<template>
  <neu-tooltip content="点击就可以发送消息提示了喔">
    <!--这儿有个 Bug neu-neumorphicbtn 之后会被改为 neu-button-->
    <neu-neumorphicbtn @click="sendMessage">来个消息提示</neu-neumorphicbtn>
  </neu-tooltip>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import MessageBox from 'neumorphic-ui-vue/packages/messageBox/src/messageBox';
@Component
export default class Quickstart extends Vue {
  private sendMessage() {
    const messageConfig = {
      message: '你好，欢迎使用 Neumorphic-UI',  // 信息内容
      type: 'success',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };
    MessageBox.send(messageConfig);
  }
}
<\/script>`;


  private sendMessage() {
    const messageConfig = {
      message: '你好，欢迎使用 Neumorphic-UI',  // 信息内容
      type: 'success',    // 信息类型
      styleTimeout: 2000, // 样式过渡时间
      removeTimeout: 3000 // 移除时间
    };

    MessageBox.send(messageConfig);
  }

}
</script>
<style lang="scss" scoped>
.neumorphic-collapse-item:not([open]) {
  height: 7%;
}
</style>