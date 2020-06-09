<template>
  <div class="home-collapse">
    <neu-collapse>
      <neu-collapseitem title="组件化 -- Componentable">
        采用 Vue 组件编写，细化功能，一步简单调用。
      </neu-collapseitem>
      <neu-collapseitem title="新拟态 -- Neumorphic">
        新拟态，新风格，新视觉盛宴。
      </neu-collapseitem>

    </neu-collapse>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeCollapse extends Vue {

}
</script>
<style lang="scss" scoped>
.home-collapse {
  .neumorphic-collapse {
    margin: 0 auto;
    height: 120px;
  }
}

</style>