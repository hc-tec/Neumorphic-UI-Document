<template>
  <div class="start-btn-group">
    <neu-button 
      color="primary"
      @click="toDocument">
      进入教程
    </neu-button>
    <neu-button
      @click="toGithub" 
      icon="fa fa-github"
      circle>
    </neu-button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeStartButton extends Vue {

  private toDocument() {
    this.$router.push('/document')
  }

  private toGithub() {
    window.open('https://github.com/hc-tec/neumorphic-ui');
  }
}
</script>
<style lang="scss">
.start-btn-group {
  > * {
    margin-right: 50px;
    font-size:1.4rem !important;
  }
}
</style>