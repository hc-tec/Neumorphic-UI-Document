<template>
  <div id="home">
    <neu-nav class="neu-nav" />
    <home-text class="home-text" />
    <home-collapse />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

import NeuNav from '../components/nav.vue'
import HomeText from '../components/home-text.vue'
import HomeCollapse from '../components/home-collapse.vue'
@Component({
  components: {
    'neu-nav': NeuNav,
    'home-text': HomeText,
    'home-collapse': HomeCollapse
    
  }
})
export default class Home extends Vue {

}
</script>
<style lang="scss">
#home {
  *:not(.fa) {
    font-family: Constantia, 华文中宋, 宋体, serif !important;
  }
  > * {
    margin-bottom: 120px;
    
  }
  .neu-nav {
    direction: rtl;
    padding-top: 10px;
    margin-right: 50px;
  }
  .home-text {
    text-align: center;
  } 
}

</style>