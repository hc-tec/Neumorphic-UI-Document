<template>
  <div class="demo">
    <div class="source">
      <div>
        <!-- 样式代码写这 -->
        <slot></slot>
      </div>
    </div>
    <!-- 下方的 collapse 是源代码区 -->
    <neu-collapse>
      <neu-collapseitem title="详细代码">
        <pre>
          <code v-text="source_code">
          </code>
        </pre>
      </neu-collapseitem>
    </neu-collapse>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Source extends Vue {

  @Prop({type: String})
  private source_code!: string;

}
</script>
<style scoped>
</style>